package com.tattoomanager.tattooManager.adapter.delivery.restmappers

import com.tattoomanager.tattooManager.adapter.delivery.payload.BudgetPayload
import com.tattoomanager.tattooManager.domain.Budget

class BudgetRestMapper {
    fun mapToDomain(budgetPayload: BudgetPayload): Budget {
        return Budget(
            budgetPayload.id,
            budgetPayload.clientName,
            budgetPayload.age,
            budgetPayload.description,
            budgetPayload.bodyPart,
            budgetPayload.sizeInCm,
            budgetPayload.phone,
            budgetPayload.userAlias,
            budgetPayload.userId
        )
    }

    fun mapToPayload(budget: Budget): BudgetPayload {
        return BudgetPayload(
            budget.id,
            budget.clientName,
            budget.age,
            budget.description,
            budget.bodyPart,
            budget.sizeInCm,
            budget.phone,
            budget.userAlias,
            budget.userId
        )
    }
}