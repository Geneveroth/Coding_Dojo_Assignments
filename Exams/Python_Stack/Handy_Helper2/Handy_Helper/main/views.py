from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import *
import bcrypt

def index(request):
    return render(request, "index.html")

def dashboard(request):
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
        "jobs" : Job.objects.all()
    }
    return render(request, "dashboard.html",context) 

def registration(request):
    errors=User.objects.validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err) 
        return redirect ('/') 
    password=request.POST['password']
    hashed_pw=bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    created_user = User.objects.create(
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        email=request.POST['email'],
        password=hashed_pw
    )
    request.session['user_id'] = created_user.id
    return redirect('/dashboard')

def login(request):
    potential_users = User.objects.filter(email=request.POST["email"])
    if len(potential_users) == 0:
        messages.error(request, "Please check your email and password.")
        return redirect ("/")
    user = potential_users[0]
    if not bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):
        messages.error(request, "Please check your email and password.")
        return redirect ("/")
    request.session["user_id"] = user.id
    return redirect("/dashboard")

def view(request, job_id):
    job= Job.objects.get(id=job_id)
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
        "job" : job
    }
    return render (request, "view.html", context)

def add(request):
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
    }
    return render (request, "add.html", context)

def add_job(request):
    errors=Job.objects.job_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect (request.META.get('HTTP_REFERER'))
    uploaded_by = User.objects.get(id = request.session['user_id'])
    new_job = Job.objects.create(
        job = request.POST['job'],
        location= request.POST['location'],
        job_uploader=uploaded_by
    )
    new_job.job_performer.add(uploaded_by)
    return redirect ('/dashboard') 

def update(request, job_id):
    job= Job.objects.get(id=job_id)
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
        "job" : job
    }
    return render (request, "update.html", context)

def update_job(request, job_id):
    errors=Job.objects.job_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err) 
        return redirect (request.META.get('HTTP_REFERER'))
    job=Job.objects.get(id=job_id)
    job.job=request.POST['job']
    job.description=request.POST['description']
    job.location=request.POST['location']
    job.save()
        
    return redirect ('/dashboard')

def remove(request, job_id):
    job= Job.objects.get(id=job_id)
    job.delete()
    return redirect('/dashboard')

def logout(request):
    request.session.clear()
    return redirect ('/')