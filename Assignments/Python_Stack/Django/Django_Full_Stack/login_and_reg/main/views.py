from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import *
import bcrypt
import re
def index (request):
    #renders the login/reg page
    return render (request, 'index.html')

def success_page(request): 
    if 'user_id' not in request.session:
        return redirect ('/')
    #this is the page to protect from a user maliciously getting in, protect by seeing if the user id matches the id in session 
    context ={
    'user' : User.objects.get(id=request.session['user_id']) 
    }
    # getting the user that just logged in or registered and setting it equal to the id value at the key user_id in session dictionary 
    return render (request, "success.html",context)

def register(request):
    errors=User.objects.validator(request.POST) 
    #validates the input before adding to database
    #request.POST is the post_data from forms
    if len(errors)>0:
    #if true, there are errors (error dictionary isn't empty)
        for key, err in errors.items():
        #add errors to messages,gives us key and val for each error
            messages.error(request, err) 
        #key is the name of error, val (err) is the error message
        return redirect ('/') 
        #redirect if validations not met
    hashed_pw=bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    #hashes the password, brings in the password from the form
    created_user=User.objects.create(
        #setting this to a variable allows us to get the id from the reg from for use in session
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hashed_pw
        #this is the hashed pw from the hasher
    )
    request.session["user_id"] = created_user.id
    return redirect ('success')

def login(request):
    potential_login = User.objects.filter(email=request.POST['email'])
    #creating a variable that creates a list of all emails matching the email entered
    if len(potential_login) == 0:
        messages.error(request, "Please check email and password")
        return redirect("/")
        #if list is empty, no match

    if not bcrypt.checkpw(request.POST['password'].encode(), potential_login[0].password.encode()):
        messages.error(request, "Please check email and password")
        return redirect('/')
        #if it matches, you check the hashed password against the hashed password in the db,then its creating a check password function that takes in the hashed pw entered and the hashed pw the password of the 1st person in the list (there should only be 1 user in list) y

    request.session['user_id'] = potential_login[0].id
        # if both tests pass, it puts the id of the potential_login into request.session as the user id

    return redirect("/success") 

def log_out(request):
    request.session.clear()
    return redirect('/')