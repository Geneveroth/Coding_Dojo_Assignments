from django.shortcuts import render, redirect
from time import localtime, strftime
    
def index(request):
    context = {
        "date": strftime("%a, %b %d, %Y", localtime()),
        "time": strftime("%I:%M %p", localtime()),
    }
    return render(request,'index.html', context)

def time_display(request):
    return redirect('/')