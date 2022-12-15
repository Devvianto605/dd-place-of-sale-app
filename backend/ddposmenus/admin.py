from django.contrib import admin
from .models import menu
class menuAdmin(admin.ModelAdmin):
    model = menu
    list_display = ('menu_id', 'name', 'description', 'price', 'img','category','recommend','empty')

# Register your models here.

admin.site.register(menu, menuAdmin)