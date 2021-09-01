from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from rest_framework import viewsets

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

