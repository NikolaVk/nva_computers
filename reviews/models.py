from django.db import models
from django.contrib.auth.models import User
from django.core.validators import (MaxValueValidator, MinValueValidator)
from products.models import Product

# Create your models here.


class Review(models.Model):
    user = models.ForeignKey(User, null=False, blank=False, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, null=False, blank=False, on_delete=models.CASCADE)
    title = models.CharField(max_length=250, blank=True, null=True)
    comment = models.TextField(max_length=250)
    rating = models.IntegerField(default=5, validators=[MaxValueValidator(5),
                                 MinValueValidator(1)])
    created_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product.name
