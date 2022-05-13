from django.db import models
from django.contrib.auth.models import User
from products.models import Product


class wishlist(models.Model):
    wishlist = models.ManyToManyField(User, related_name='list', default=None, blank=True)

    def __str__(self):
        return self.wishlist
