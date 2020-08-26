from django.urls import path

from . import views
from .views import ItemListView

urlpatterns = [
    path('', views.index, name='index'),
    path('product-list/', ItemListView.as_view(), name='product-list')
]