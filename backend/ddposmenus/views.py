from django.shortcuts import render
from rest_framework import viewsets
from .serializers import menuSerializer
from .models import menu

# Create your views here.

class menuView(viewsets.ModelViewSet):
    serializer_class = menuSerializer
    queryset = menu.objects.all()
