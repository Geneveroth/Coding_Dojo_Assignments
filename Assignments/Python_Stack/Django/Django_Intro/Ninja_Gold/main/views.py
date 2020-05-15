from django.shortcuts import render, HttpResponse, redirect

import random

import datetime

def index(request):
    if "gold_count" not in request.session:
        request.session['gold_count'] = 0
        request.session['activities']=[]

    context = {
        'gold_count': request.session['gold_count'],
        'activities': request.session['activities'],
    }

    return render(request, "index.html", context)

def process_money(request):
    amountFarm = random.randint(10, 20)
    amountCave = random.randint(5, 10)
    amountHouse = random.randint(2, 5)
    amountCasino = random.randint(-50, 50)

    activities=request.session['activities']

    if request.POST['name'] == "farm":
        request.session['gold_count'] += amountFarm
        activities.append({
            "amount": amountFarm,
            "timestamp": datetime.datetime.now().strftime("%c"),
            "location": "Farm",
        })
    
    elif request.POST['name']=="cave":
        request.session['gold_count'] += amountCave
        activities.append({
            "amount": amountCave,
            "timestamp": datetime.datetime.now().strftime("%c"),
            "location": "Cave",
        })

    elif request.POST['name']=="house":
        request.session['gold_count'] += amountHouse
        activities.append({
            "amount": amountHouse,
            "timestamp": datetime.datetime.now().strftime("%c"),
            "location": "House",
        })

    elif request.POST['name']=="casino":
        request.session['gold_count'] += amountCasino
        activities.append({
            "amount": amountCasino,
            "timestamp": datetime.datetime.now().strftime("%c"),
            "location": "Casino",
            "amount_abs": amountCasino * -1
        })

    request.session["activities"] = activities
    
    return redirect('/')