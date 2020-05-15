from django.db import models

class Shows(models.Model):
    show_title = models.CharField(max_length=45)
    show_network = models.CharField(max_length=45)
    show_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)