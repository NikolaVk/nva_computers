from django.db import models
from django.contrib.auth.models import User
from products.models import Product


class Wishlist(models.Model):
    user = models.ForeignKey(User, null=True, blank=False, on_delete=models.CASCADE)
    list = models.ManyToManyField(Product, related_name='list')
    created_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.list
