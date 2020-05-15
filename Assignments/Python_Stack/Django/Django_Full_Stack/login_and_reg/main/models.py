from django.db import models
import re

class RegManager(models.Manager):
    def validator(self, post_data):  
  # post_data is all of the data coming from forms
        errors = {}
        #creating an errors dictionary
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        #regex to check if the email matches a normal email format
        if len(post_data['first_name']) < 2:
            errors["first_name"] = "Please enter at least 2 characters for your first name."
        
        if len(post_data['last_name']) < 2:
            errors["last_name"] = "Please enter at least 2 characters for your last name."
   
        if len(post_data['password']) < 8:
            errors["password"]= "Please enter a password longer than 8 characters."
          
        if post_data['pw_confirm'] != post_data['password']:
          #this is how you compare what's been input in the password field to the confirmation field
            errors['pw_confirm'] = "Your password and confirmation didn't match."

        if len(post_data['email']) < 1:
            errors["email"]= "Please enter a valid email."

        elif not EMAIL_REGEX.match(post_data['email']):    # test whether a field matches the pattern, post_data is what we established in the validator class at the top          
            errors['email'] = "Please enter a valid email."

        return errors


class User (models.Model):
    first_name=models.CharField(max_length=60)
    last_name=models.CharField(max_length=60)
    email=models.CharField(max_length=60)
    password=models.CharField(max_length=70)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    objects = RegManager() #allows us to say registration.objects.validator 