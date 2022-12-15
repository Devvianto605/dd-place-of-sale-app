from django.db import models

# Create your models here.

class menu(models.Model):
    menu_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=60)
    description = models.TextField(blank=True,null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    img = models.ImageField(upload_to='images/')
    category = models.CharField(max_length=2)
    recommend = models.BooleanField(default=False)
    empty = models.BooleanField(default=False)
    def _str_(self):
        return self.name
