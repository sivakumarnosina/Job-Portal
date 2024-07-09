from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from .models import Registration
from .serializer import Regserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK,HTTP_404_NOT_FOUND,HTTP_500_INTERNAL_SERVER_ERROR
from django.contrib.auth import authenticate,login
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from .forms import RegistrationForm
from django.conf import settings
import random
import json
from .forms import RegistrationForm
from django.core.exceptions import MultipleObjectsReturned
            
def generate_otp():
     return random.randint(100000, 999999)
     
def send_confirmation_email(email):
            generate=generate_otp()
            subject = 'Otp verification'
            to_list = [email]
            message = f'Hello..! {email}\nHere is your OTP: {generate}'
            send_mail(subject, message, settings.EMAIL_HOST_USER, to_list)
            
           
# Create your views here.
@api_view(['GET','POST'])
def Register(request,reg_id=None):
    if request.method=='GET':
        Regdata=Registration.objects.all()
        Regserializeddata=Regserializer(Regdata,many=True)
        return Response(Regserializeddata.data)
    if request.method=='POST':
        Regdata=request.data
        print(Regdata)
        Rdata=Regserializer(data=Regdata)
        # for i in Regdata:
        #      email=i['email']
        email=Regdata['email']
        print(email)
        if Rdata.is_valid():
            send_confirmation_email(email)
            Rdata.save()
            return Response(Rdata.data, status=HTTP_201_CREATED)
            
        else:
                
                print(Rdata.errors)
                return Response(Rdata.errors,status=HTTP_400_BAD_REQUEST)
@api_view(['DELETE'])        
def delete_register(request, email):
    if request.method == "DELETE":
        try:
            if email:
                # Use filter instead of get to handle the case where there are multiple results
                reg_data = Registration.objects.filter(email=email)

                if reg_data.exists():
                    # Delete all matching registrations
                    reg_data.delete()
                    return Response({'message': 'Success!'}, status=HTTP_200_OK)
                else:
                    return Response({'error': 'Registration data with the given email does not exist'},
                                    status=HTTP_404_NOT_FOUND)

            else:
                return Response({'error': 'Email parameter is missing in the request'}, status=HTTP_400_BAD_REQUEST)

        except MultipleObjectsReturned:
            # Log the error or handle it according to your application's requirements
            return Response({'error': 'Multiple registrations found for the given email'},
                            status=HTTP_500_INTERNAL_SERVER_ERROR)

        except Exception as e:
            return Response({'error': f'An error occurred: {str(e)}'}, status=HTTP_500_INTERNAL_SERVER_ERROR)

@csrf_exempt
def verify_otp(request):
    try:
        email = request.POST.get('email')
        otp = request.POST.get('enterotp')
        if generate_otp() == otp:
            confirm_register(email)
            return JsonResponse({'status': 'success', 'message': 'OTP verified successfully'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid OTP'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)})
    
def confirm_register(email):
    try:
         subject = 'Registration Confirmation'
         to_list = [email]
         message = f'''Hello {email},

         Thank you for registering with Jobportal! Your registration was successful.

         We're excited to have you on board. Here are some details about your account:

        
         - Email: {email}'''
         
         send_mail(subject, message, settings.EMAIL_HOST_USER,to_list)
         return JsonResponse({'status': 'success', 'message': 'Email sent successfully'}, status=HTTP_201_CREATED)
    except Exception as e:
         print(f'Error in confirm_register: {str(e)}')
         return JsonResponse({'status': 'error', 'message': str(e)})
@csrf_exempt 
@api_view(['POST'])
@permission_classes([AllowAny])
def loginuser(request):
    if request.method=='POST':
        email=request.data.get('email','')
        pwd=request.data.get('password','')
        validUser=authenticate(request,email=email,password=pwd)

        if validUser!=None:
            login(request,validUser)
            return JsonResponse({'status':'success', 'userType':validUser.usertype})
        student=Registration.usertype
        if email==student[email]:
            return JsonResponse({'status':'success'})  
        else:
            messages.error(request,'Invalid credentials')
    return HttpResponse(status=200)

@api_view(['POST', 'GET'])
def Select_usertype(request):
    if request.method == 'POST':
        Regdata = request.data
        print(Regdata)
        usertype = Regdata.get('usertype')
        print(usertype)
        Rdata = Regserializer(data=Regdata)
        return Response(Rdata.data, status=HTTP_201_CREATED)
    else:
        return Response({'message': 'This is a GET request'}, status=200)
      
