from django.urls import path
from . import views

urlpatterns=[
    path('',views.loginuser,name='loginurl'),
    path('login/',views.Register),
    path('email/',views.send_confirmation_email),
    path('otp/',views.verify_otp),
    path('mail/', views.confirm_register, name='confirm-register'),
    path('delete/<str:email>/',views.delete_register),
    path('radio/',views.Select_usertype),
]