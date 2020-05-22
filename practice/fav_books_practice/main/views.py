from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import *
import bcrypt

def index(request):
    return render(request, "index.html")

def register(request):
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
    return redirect('/books')

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
    return redirect("/books")

def books(request):
    context ={
        "user": User.objects.get(id=request.session['user_id']),
        "books":Book.objects.all()
    }
    return render(request, "books.html", context)

def add(request):
    errors=Book.objects.book_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err)
        return redirect (request.META.get('HTTP_REFERER'))
    uploaded_by = User.objects.get(id = request.session['user_id'])
    favorite_book=Book.objects.create(
        title=request.POST['title'],
        description=request.POST['description'],
        uploaded_by=uploaded_by
    )
    favorite_book.users_who_like.add(uploaded_by)
    return redirect ("/books")

def update(request,book_id):
    book=Book.objects.get(id=book_id)
    context ={
        "user": User.objects.get(id=request.session['user_id']),
        "books": book
    }
    return render(request, "update.html", context)


def update_book(request,book_id):
    errors=Book.objects.book_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err) 
        return redirect (request.META.get('HTTP_REFERER'))
    book=Book.objects.get(id=book_id)
    book.title=request.POST['title']
    book.description=request.POST['description']
    book.save()
        
    return redirect ('/books')

def view(request, book_id):
    book=Book.objects.get(id=book_id)
    context ={
        "user": User.objects.get(id=request.session['user_id']),
        "books":book
    }
    return render(request, "view.html", context)

def logout(request):
    request.session.clear()
    return redirect ("/")
