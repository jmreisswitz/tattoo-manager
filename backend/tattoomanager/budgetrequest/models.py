from django.db import models


class BudgetRequest(models.Model):
    client_name = models.TextField()
    birth_date = models.TextField()  # TODO change to datetime
    description = models.TextField()
    body_part = models.TextField()
    size_in_cm = models.FloatField()
    phone = models.TextField()
    user_alias = models.TextField()
