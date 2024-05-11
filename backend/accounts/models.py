from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser

# Create your models here.

class User(AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=255, unique=True)
    
    def __str__(self):
        return self.email