from django.shortcuts import render, redirect, HttpResponse
from .models import *

def index(request):
    context={
        'books':Book.objects.all(),
        'authors':Author.objects.all()
    }
    return render(request,"index.html",context)

def create_book(request):
    Book.objects.create(title=request.POST['title'], description=request.POST['description'])
    
    return redirect('/')

def show_book(request,book_id):
    context={
        'books':Book.objects.get(id=book_id),
        'authors':Author.objects.all()
    }
    return render (request, "show_book.html",context)

def add_author(request):
    author=Author.objects.get(Book_id_number=request.POST['author_id'])
    first_name=Book.objects.get(id=Book_id_number.id)
    return redirect ('show_book.html')

    