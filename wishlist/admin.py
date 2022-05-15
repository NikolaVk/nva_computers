from django.contrib import admin
from .models import Wishlist


class WishlistAdmin(admin.ModelAdmin):

    # filter_horizontal = ('list',)

    list_display = (
         'user',
         'get_listproducts',
         'created_on',
    )

    def get_listproducts(self, obj):
        return ", ".join([p.name for p in obj.list.all()])


admin.site.register(Wishlist, WishlistAdmin)
