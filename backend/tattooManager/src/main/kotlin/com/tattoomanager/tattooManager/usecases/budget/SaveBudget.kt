package com.tattoomanager.tattooManager.usecases.budget

import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.port.repository.BudgetRepository

class SaveBudget constructor(private val budgetRepository: BudgetRepository) {
    fun execute(budget: Budget): Budget {
        return this.budgetRepository.save(budget)
    }
}