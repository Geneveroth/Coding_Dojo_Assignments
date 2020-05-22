from django.shortcuts import render
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    price_from_form = float(request.POST["price"])
    total_charge = quantity_from_form * price_from_form
    print("Charging credit card...")
    request.session['quantity_ordered'] = quantity_from_form 
    request.session['total_price'] = price_from_form
    print(price_from_form)
    context = {
    'order' : Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge),
    'quantity_ordered': quantity_from_form,
    'total_price' : price_from_form
    }
    return render(request, "store/checkout.html", context)
# add session for shopping cart
#def some_function(request):
#    request.session['name'] = request.POST['name']
#    request.session['counter'] = 100
#We can also access session directly in our Django templates. Remember, though, that Django templates do not process square brackets, so we'll use dot notation instead:
#<p>Name in session is: {{request.session.name}}</p>