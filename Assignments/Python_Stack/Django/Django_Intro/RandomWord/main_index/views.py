from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
# def index(request):
#     return  HttpResponse("TESTING THIS WORKS")

# def draegg_view(request):
#     return render(request,"index.html")
def index(request):
    count = 0
    if 'my_random_string' not in request.session:
        request.session['my_random_string'] = ''
        request.session['activities']=[]
        request.session['count'] = 0
    context ={
        'my_random_string': request.session['my_random_string'],
       
        'activities': request.session['activities'],

        'count': request.session['count']
    }
    return render(request,"index.html", context)


def process_random_word(request):
    activities = request.session['activities']
    request.session['count'] = request.session['count']+1
    request.session['activities'] = activities
    random_string = request.session['my_random_string']
    new_random_string = (get_random_string(length = 10))
    random_string = random_string + new_random_string
    request.session['my_random_string'] = random_string
    activities.append({
        'random_string': new_random_string,
    })
    return(redirect('/'))

def random_word_reset(request):
    request.session['count'] = 0
    return(redirect('/process_random_word'))
     # print("CLICKED ONCE", request.POST)
    #'random', {'random_string': my_random_string}
    # count = 0
    # size = 1 + count
    
    # if request.method == 'POST':
    #     my_random_string = request.POST.get('random_string')
    # else:
    #     my_random_string = get_random_string(size)
    
    # return redirect("/random")