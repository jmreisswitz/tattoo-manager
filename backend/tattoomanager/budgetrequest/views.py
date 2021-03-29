from http import HTTPStatus

from django.http import JsonResponse

# Create your views here.
from rest_framework.decorators import api_view

from .models import BudgetRequest


@api_view(["POST"])
def new_budget_request(request):
    try:
        BudgetRequest(
            client_name=request.data["clientName"],
            birth_date=request.data["birth"],
            description=request.data["description"],
            body_part=request.data["bodyPart"],
            size_in_cm=request.data["sizeInCm"],
            phone=request.data["phone"],
            user_alias=request.data["userAlias"],
        ).save()
        return JsonResponse({"message": "ok"})
    except Exception as e:
        print(f"Got exception {e}")
        return JsonResponse(
            {"message": "Something went wrong"}, status=HTTPStatus.BAD_REQUEST
        )


@api_view(["GET"])
def get_all_from_user_alias(request, user_alias):
    try:
        budget_requests = BudgetRequest.objects.filter(user_alias=user_alias).all()
        return JsonResponse(
            {
                "budgetRequests": [
                    budget_request.to_dict() for budget_request in budget_requests
                ]
            }
        )
    except KeyError:
        return JsonResponse(
            {"message": "userAlias missing in body"}, status=HTTPStatus.BAD_REQUEST
        )
