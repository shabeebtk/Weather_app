from django.urls import path
from accounts.views import GoogleLogin

urlpatterns = [
    path('google/login/', GoogleLogin.as_view(), name='google_login')
]
