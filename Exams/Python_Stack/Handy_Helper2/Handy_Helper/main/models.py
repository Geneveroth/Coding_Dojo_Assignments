from django.db import models
import re

class JobManager(models.Manager):
    def job_validator(self, post_data):
        errors= {}
        if len(post_data['job']) < 3:
            errors["job"] = "Please enter a job name of more than 3 characters."
        if len(post_data['location']) < 3:
            errors['location'] = "Please enter a location name of more than 3 characters."
        if len(post_data['description']) < 3:
            errors["description"] = "Please enter a job description longer than 3 characters."
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

class Job(models.Model):
    job=models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    job_performer=models.ManyToManyField(User, related_name="performer")
    job_uploader=models.ForeignKey(User, related_name="creator", on_delete=models.CASCADE)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    objects=JobManager()
