from django.db import models

# Create your models here.
class Registration(models.Model):
   
    username=models.CharField(max_length=40)
    email=models.EmailField()
    password=models.CharField(max_length=128)
    confirm=models.CharField(max_length=128)
    usertype=models.CharField(max_length=20, choices=[('candidate', 'Candidate'), ('employee', 'Employee')])
    
    