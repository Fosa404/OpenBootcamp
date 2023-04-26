from django.shortcuts import render
from .models import Movies, Directors

def movies(request):
    
    movies = Movies.objects.all()
    return render(request,'movies.html', {'movies': movies})

    