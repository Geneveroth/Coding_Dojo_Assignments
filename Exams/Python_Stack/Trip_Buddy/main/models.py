from django.db import models
import re

class TripManager(models.Manager):
    def trip_validator(self, post_data):
        errors= {}
        if len(post_data['destination']) < 3:
            errors["destination"] = "Please enter a destination name of at least 3 characters."
        if len(post_data['plan']) < 3:
            errors['plan'] = "Please enter a plan of at least 3 characters."
        if len(post_data['start_date']) < 1:
            errors["start_date"] = "Please enter a start date."
        if len(post_data['end_date']) < 1:
            errors["end_date"] = "Please enter an end date."
        return errors

class RegManager(models.Manager):
    def validator(self, post_data):  
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['first_name']) < 2:
            errors["first_name"] = "Please enter at least 2 characters for your first name."
        
        if len(post_data['last_name']) < 2:
            errors["last_name"] = "Please enter at least 2 characters for your last name."
   
        if len(post_data['password']) < 6:
            errors["password"]= "Please enter a password longer than 6 characters."
          
        if post_data['pw_confirm'] != post_data['password']:
    
            errors['pw_confirm'] = "Your password and confirmation didn't match."

        if len(post_data['email']) < 1:
            errors["email"]= "Please enter a valid email."

        elif not EMAIL_REGEX.match(post_data['email']):
            errors['email'] = "Please enter a valid email."

        return errors

class User (models.Model):
    first_name=models.CharField(max_length=45)
    last_name=models.CharField(max_length=45)
    email=models.CharField(max_length=45)
    password=models.CharField(max_length=45)

        
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    objects=RegManager()

class Trip(models.Model):
    destination=models.CharField(max_length=100)
    start_date=models.DateTimeField(max_length=100)
    end_date=models.DateTimeField(max_length=100)
    plan=models.TextField()
    attendees=models.ManyToManyField(User, related_name="trips_registered_for")
    creator=models.ForeignKey(User, related_name="trips", on_delete=models.CASCADE)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    objects=TripManager()
