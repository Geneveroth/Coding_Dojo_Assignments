from django.db import models

class User(models.Model):
    name=models.CharField(max_length=64)
    email=models.EmailField(max_length=64)
    age=models.CharField(max_length=10)
    
