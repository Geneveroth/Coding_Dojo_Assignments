from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import *
import bcrypt


def index(request):
    return render (request,'index.html')

def books(request):
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
        "books" : Book.objects.all()
    }
    return render(request, "books.html", context)

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

    return redirect('/books')

def add_book(request):
    errors=Book.objects.book_validator(request.POST) 
    if len(errors)>0:
        for key, err in errors.items():
            messages.error(request, err) 
        return redirect ('/books') 
    uploaded_by = User.objects.get(id = request.session['user_id'])
    uploaded_book = Book.objects.create(
        title = request.POST['title'],
        desc= request.POST['desc'],
        uploaded_by = uploaded_by,
    )
    uploaded_by.liked_books.add(uploaded_book)
        #grabs the logged in user, adds the books attached to their id to the list of books they've uploaded
    return redirect ('/books')

def update_book_page(request, book_id):
    book= Book.objects.get(id=book_id)
    logged_user = User.objects.get(id = request.session['user_id'])
    print(book.user_who_like.all())
    context ={
        "user" : logged_user,
        "book" : Book.objects.get(id=book_id),
    }
    if logged_user.id == book.uploaded_by.id:
        return render (request, "update_book.html", context)
    else:
        return redirect (f'/view_book/{book_id}')
        # need / in beginning so it doesnt append to the current html


def view_book_page(request, book_id):
    book= Book.objects.get(id=book_id)
    logged_user = User.objects.get(id = request.session['user_id'])
    context ={
        "user" : logged_user,
        "book" : Book.objects.get(id=book_id)
    }
    return render (request, "view_book.html", context)
 
def update_book(request, book_id):
    logged_user = User.objects.get(id = request.session['user_id'])
    updated_book = Book.objects.get(id = book_id)
    updated_book.title = request.POST['title']
    updated_book.desc = request.POST['desc']
    updated_book.uploaded_by = logged_user
    updated_book.save()
    return redirect ('/books')



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
    #if i get the invalid salt error, i need to clear my database and make new users on the actual browser page to get properly hashed passwords

def logout(request):
    request.session.clear()
    return redirect ('/')
