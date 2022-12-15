from rest_framework import serializers
from .models import menu

class menuSerializer(serializers.ModelSerializer):
    class Meta:
        model = menu
        fields = ('menu_id', 'name', 'description', 'price','img','category','recommend' ,'empty')
