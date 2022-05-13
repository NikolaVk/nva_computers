from django.urls import path
from . import views

urlpatterns = [
    path('', views.wishlist, name='wishlist'),
    path('add/<item_id>', views.add_wishlist, name='add_wishlist'),
    path('remove/<item_id>', views.remove_wishlist, name='remove_wishlist'),

]
