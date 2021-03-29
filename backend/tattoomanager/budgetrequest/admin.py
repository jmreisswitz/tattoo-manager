from django.contrib import admin

# Register your models here.
from .models import BudgetRequest

admin.site.register(BudgetRequest)
