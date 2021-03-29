from django.urls import path

from . import views

urlpatterns = [
    path("", views.new_budget_request, name="new_budget_request"),
]
