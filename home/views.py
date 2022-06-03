from django.shortcuts import render
from products.models import Product

# Create your views here.


def index(request):
    """ A view to return the index page """
    x = Product.objects.all()
    products = x.filter(category__name='deals')[:3]
    context = {
        'products': products,
    }
    return render(request, 'home/index.html', context)
