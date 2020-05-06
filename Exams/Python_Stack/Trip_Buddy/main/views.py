from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import *
import bcrypt

def index(request):
    return render(request, "index.html")

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

def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else: 
        logged_user = User.objects.get(id = request.session['user_id'])
        context ={
            "user" : logged_user,
            "trips" : Trip.objects.all()
    }
        return render(request, "dashboard.html",context)

def new(request):
    if 'user_id' not in request.session:
        return redirect('/')
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user
    }
    return render(request, "trips/new.html",context)

def add_new(request):
    errors=Trip.objects.trip_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect ('/trips/new')
    uploaded_by = User.objects.get(id = request.session['user_id'])
    new_trip = Trip.objects.create(
        destination = request.POST['destination'],
        start_date= request.POST['start_date'],
        end_date= request.POST['end_date'],
        plan= request.POST['plan'],
        creator=uploaded_by
    )
    new_trip.attendees.add(uploaded_by)
    return redirect ('/dashboard')

def trips(request, trip_id):
    context ={
        "user" : User.objects.get(id=request.session['user_id']),
        "trip" : Trip.objects.get(id=trip_id)
    }
    return render (request, "trips.html", context)

def edit(request, trip_id):
    context ={
        "user" : User.objects.get(id=request.session['user_id']),
        "trip" : Trip.objects.get(id=trip_id)
    }
    return render (request, "trips/edit.html", context)

def edit_trip(request, trip_id):
    errors=Trip.objects.trip_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err) 
        return redirect (request.META.get('HTTP_REFERER'))
    trip=Trip.objects.get(id=trip_id)
    trip.destination=request.POST['destination']
    trip.start_date=request.POST['start_date']
    trip.end_date=request.POST['end_date']
    trip.plan=request.POST['plan']
    trip.save()
        
    return redirect ('/dashboard')

def remove (request, trip_id):
    trip= Trip.objects.get(id=trip_id)
    trip.delete()
    return redirect('/dashboard')

def logout(request):
    request.session.clear()
    return redirect ('/')