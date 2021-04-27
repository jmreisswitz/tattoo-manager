package com.tattoomanager.tattooManager.adapter.persistence.mapper

import com.tattoomanager.tattooManager.adapter.persistence.entity.BudgetEntity
import com.tattoomanager.tattooManager.domain.Budget

class BudgetEntityMapper {

    fun mapToEntity(budget: Budget): BudgetEntity {
        return BudgetEntity(
            budget.id,
            budget.userId,
            budget.clientName,
            budget.age,
            budget.description,
            budget.bodyPart,
            budget.sizeInCm,
            budget.phone,
            budget.userAlias
        )
    }

    fun mapToDomain(budgetEntity: BudgetEntity): Budget {
        return Budget(
            budgetEntity.id,
            budgetEntity.clientName,
            budgetEntity.age,
            budgetEntity.description,
            budgetEntity.bodyPart,
            budgetEntity.sizeInCm,
            budgetEntity.phone,
            budgetEntity.userAlias,
            budgetEntity.userId
        )
    }
}