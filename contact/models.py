from django.db import models
from products.models import Product


class Contact(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    mail = models.CharField(max_length=100, blank=False)
    product = models.ForeignKey(Product, null=True, blank=True,
                                on_delete=models.CASCADE)
    title = models.CharField(max_length=250, blank=True, null=True)
    description = models.TextField(blank=False)
    created_on = models.DateTimeField(auto_now=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.title
