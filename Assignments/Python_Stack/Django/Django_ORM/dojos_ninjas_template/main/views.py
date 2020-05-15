from django.shortcuts import render,redirect
from main.models import *

def index(request):
    context={
        'dojos': Dojo.objects.all(),
        'ninjas': Ninja.objects.all()
    }
    return render(request, 'index.html', context)

def add_dojo(request):
    Dojo.objects.create(name=request.POST['name'], city=request.POST['city'], state=request.POST['state'])
    return redirect ('/') 

def add_ninja(request):
    dojo_id_number=request.POST['dojo_list']
    Ninja.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], dojo_id=Dojo.objects.get(id=dojo_id_number))
    return redirect ('/')

def delete_dojo (request, dojo_id):
    dojo = Dojo.objects.get(id=dojo_id)
    dojo.delete()
    return redirect('/')