from django.db import models
class Dojo(models.Model):
    name=models.CharField(max_length=60)
    city=models.CharField(max_length=60)
    desc=models.TextField(default="old dojo")
    state=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)


class Ninja(models.Model):
    dojo_id=models.ForeignKey(Dojo, related_name="ninjas", on_delete=models.CASCADE)
    first_name=models.CharField(max_length=60)
    last_name=models.CharField(max_length=60)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)    
