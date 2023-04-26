from django.db import models

class Directors(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name
    

class Movies(models.Model):
    title = models.CharField(max_length=40)
    description = models.TextField(max_length=1000)
    director = models.ForeignKey('Directors', on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return self.title
    

