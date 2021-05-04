package com.tattoomanager.tattooManager.usecases.budget

import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.port.repository.BudgetRepository

class SetAsNotNew constructor(
    private val budgetRepository: BudgetRepository
    )
{
    fun execute(budgetId: Long): Budget {
        return budgetRepository.setAsNotNew(budgetId)
    }
}