from http import HTTPStatus

from django.contrib.auth import logout, authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.decorators import api_view


@api_view(["POST"])
def login_user(request):
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(username=username, password=password)
    if user is None:
        return JsonResponse({
            "message": "User does not exist or wrong password"
            },
            status=HTTPStatus.BAD_REQUEST
        )
    return JsonResponse({"message": "ok"})


@api_view(["POST"])
def create_user(request):
    username = request.data["username"]
    password = request.data["password"]
    email = request.data["email"]

    if len(User.objects.filter(username=username)) >= 1:
        return JsonResponse({
                "message": "User already exists",
            },
            status=HTTPStatus.BAD_REQUEST
        )

    new_user = User.objects.create_user(username, email=email, password=password)
    new_user.save()
    return JsonResponse({}, status=HTTPStatus.CREATED)


@api_view(["POST"])
def logout_user(request):
    logout(request)
