from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from products.models import Product
from .forms import ReviewForm


# Create your views here.

@login_required
def reviews_rating(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    template = 'reviews/review.html'

    if request.method == 'POST':
        review_form = {
            'title': request.POST['title'],
            'rating': request.POST['rating'],
            'comment': request.POST['comment'],
        }

        reviewform = ReviewForm(review_form)
        if reviewform.is_valid():
            review = reviewform.save(commit=False)
            review.user = request.user
            review.product = product

            review.save()
            messages.success(request, 'Succesfully added your review!')
            return redirect('product_detail', product_id)

        else:
            messages.error(request, 'We are sorry review has not been added. Check your form.')
            return redirect('product_detail', product_id)

    else:
        form = ReviewForm()
        template = 'reviews/review.html'

        context = {
            'product': product,
            'form': form,
        }

        return render(request, template, context)
