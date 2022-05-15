from django.db import models
from products.models import Product


class Contact(models.Model):
    name = models.TextField(null=False, blank=False)
    mail = models.TextField(blank=False)
    product = models.ForeignKey(Product, null=False, blank=True, on_delete=models.CASCADE)
    title = models.TextField(max_length=250, blank=True, null=True)
    description = models.TextField(blank=False)
    created_on = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.title
