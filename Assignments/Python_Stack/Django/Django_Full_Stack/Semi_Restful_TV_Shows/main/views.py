from django.shortcuts import render, redirect, HttpResponse
from main.models import *

def shows(request):
    context={
        'shows': Shows.objects.all()
    }
    return render (request,'shows.html', context)

def newshow_page(request):
    return render(request, 'new.html')

def create_show (request):
    created_show = Shows.objects.create(
        show_title = request.POST['show_title'],
        show_network = request.POST['show_network'],
        show_date = request.POST['show_date'],
        description = request.POST['show_description'],
    ) 
    forurl = created_show.id
    # going to redirect to page for the specific show
    return redirect(f'/shows/{forurl}')

def display_show (request, forurl):
    # print(forurl)
    context = {
        'displayed_show': Shows.objects.get(id = forurl)
    }
    #going to render the page for the specific show, tied to the "show" button on root and create button on new 
    return render(request, 'info.html', context)

def edit_show (request, forurl):
    # print(forurl)
    context = {
        'displayed_show': Shows.objects.get(id = forurl)
    }
    return render(request, 'edit_show.html', context)

def update_show (request, forurl):
    showtoupdate = Shows.objects.get(id = forurl)
    showtoupdate.show_title = request.POST['edit_title']
    showtoupdate.show_network = request.POST['edit_network']
    showtoupdate.show_date = request.POST['edit_date']
    showtoupdate.description = request.POST['edit_description']
    showtoupdate.save()
    return redirect(f'/shows/{forurl}')

def delete_show (request, forurl):
    showtoupdate = Shows.objects.get(id = forurl)
    showtoupdate.delete()
    return redirect('/')