from django.contrib import admin

from .models import Question, Item

admin.site.register(Question)
admin.site.register(Item)