from django.urls import path

from . import views

urlpatterns = [
    path("", views.new_budget_request, name="new_budget_request"),
    path(
        "<str:user_alias>",
        views.get_all_from_user_alias,
        name="get_all_from_user_alias",
    ),
]
