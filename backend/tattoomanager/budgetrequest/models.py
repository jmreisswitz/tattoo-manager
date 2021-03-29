from django.db import models


class BudgetRequest(models.Model):
    client_name = models.TextField()
    birth_date = models.TextField()  # TODO change to datetime
    description = models.TextField()
    body_part = models.TextField()
    size_in_cm = models.FloatField()
    phone = models.TextField()
    user_alias = models.TextField()

    def to_dict(self):
        return {
            "client_name": self.client_name,
            "birth_date": self.birth_date,
            "description": self.description,
            "body_part": self.body_part,
            "size_in_cm": self.size_in_cm,
            "phone": self.phone,
            "user_alias": self.user_alias,
        }
