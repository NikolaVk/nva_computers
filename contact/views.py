from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from products.models import Product
from .models import Contact
from .forms import ContactForm


def contact(request):
    template = 'contact/contact.html'

    if request.method == 'POST':
        contact_form = {
            'name': request.POST['name'],
            'mail': request.POST['mail'],
            'product': request.POST['product'],
            'title': request.POST['title'],
            'description': request.POST['description'],

        }

        contactform = ContactForm(contact_form)
        if contactform.is_valid():
            contact = contactform.save(commit=False)
            #contact.product = product

            contact.save()
            messages.success(request, 'Succesfully submitted your message!')
            return redirect('/')

        else:
            messages.error(request, 'We are sorry your message was not submitted. Check your form.')
            return redirect('/')

    else:
        form = ContactForm()
        template = 'contact/contact.html'

        context = {
            'form': form,
        }

        return render(request, template, context)