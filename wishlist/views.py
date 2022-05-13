from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from products.models import Product

# Create your views here.


def wishlist(request):
    products = Product.objects.all()
    wishlist = []

    context = {
        'wishlist': wishlist,
    }

    return render(request, 'wishlist/wishlist.html', context)


@login_required
def add_wishlist(request, item_id):
    url = request.META.get('HTTP_REFERER')
    product = get_object_or_404(Product, pk=item_id)
    
    messages.success(request, 'Succesfully added to wishlist!')

    return HttpResponseRedirect(url)


@login_required
def remove_wishlist(request, item_id):
    url = request.META.get('HTTP_REFERER')
    product = get_object_or_404(Product, pk=item_id)
    
    messages.success(request, 'Succesfully removed from wishlist!')

    return HttpResponseRedirect(url)
