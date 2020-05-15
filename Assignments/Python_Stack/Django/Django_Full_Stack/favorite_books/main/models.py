from django.db import models
import re

class BookManager(models.Manager):
    def book_validator(self, post_data):
        errors= {}
        if len(post_data['title']) < 1:
            errors["title"] = "Please enter a valid title."
        if len(post_data['desc']) < 5:
            errors["desc"] = "Please enter a description longer than 5 characters."
        return errors

class RegManager(models.Manager):
    def validator(self, post_data):  
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(post_data['first_name']) < 2:
            errors["first_name"] = "Please enter at least 2 characters for your first name."
        
        if len(post_data['last_name']) < 2:
            errors["last_name"] = "Please enter at least 2 characters for your last name."
   
        if len(post_data['password']) < 8:
            errors["password"]= "Please enter a password longer than 8 characters."
          
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
    #liked_books=list of books the user liked
    #books_uploaded=list of books uploaded by a given user
    objects=RegManager()


class Book (models.Model):
    title=models.CharField(max_length=255)
    desc=models.TextField(max_length=255)

    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    uploaded_by=models.ForeignKey(User,related_name="books_uploaded", on_delete = models.CASCADE)
    #user who uploads a given book
    user_who_like=models.ManyToManyField(User, related_name="liked_books")
    #list of users who like the given book
    objects=BookManager()
