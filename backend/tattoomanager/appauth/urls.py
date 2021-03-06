from django.urls import path

from . import views

urlpatterns = [
    path('login', views.login_user, name='login_user'),
    path('create', views.create_user, name='create_user'),
]
