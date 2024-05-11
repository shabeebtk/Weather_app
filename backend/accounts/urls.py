from django.urls import path
from .views import RegisterNewUser, GetAllUsers
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path("register", RegisterNewUser.as_view(),name="register"),
    path("login", obtain_auth_token,name="create_token"),
    path("get_all_users", GetAllUsers.as_view(), name='get_all_users')
]