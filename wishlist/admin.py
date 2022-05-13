from django.contrib import admin
from .models import wishlist


class WishlistAdmin(admin.ModelAdmin):

    filter_horizontal = ('wishlist',)

    admin.site.register(wishlist)
