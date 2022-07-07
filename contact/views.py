from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from products.models import Product
from .models import Contact
from .forms import ContactForm
from django.core.mail import send_mail


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

            contact.save()
            _send_confirmation_email(contact)
            messages.success(request, 'Succesfully submitted your message!')
            return redirect('/')

        else:
            messages.error(request,
                           'We are sorry your message was not submitted.',
                           'Check your form.')
            return redirect('/')

    else:
        form = ContactForm()
        template = 'contact/contact.html'

        context = {
            'form': form,
        }

        return render(request, template, context)


def _send_confirmation_email(contact):
    """Send the user a confirmation email"""
    contus_email = contact.mail
    subject = render_to_string(
        'contact/confirmation_emails/contactus_email_subject.txt',
        {'contact': contact})
    body = render_to_string(
        'contact/confirmation_emails/contactus_email_body.txt',
        {'contact': contact, 'contactus_email': settings.DEFAULT_FROM_EMAIL})

    send_mail(
        subject,
        body,
        settings.DEFAULT_FROM_EMAIL,
        [contus_email]
    )

    return HttpResponse()
