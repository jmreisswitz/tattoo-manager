package com.tattoomanager.tattooManager.usecases.budget

import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.port.repository.BudgetRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class SaveBudget constructor(
    private val budgetRepository: BudgetRepository,
    private val findUserByUserAlias: FindUserByUserAlias
) {
    fun execute(budget: Budget): Budget {
        checkForUserId(budget)
        return this.budgetRepository.save(budget)
    }

    private fun checkForUserId(budget: Budget) {
        if (budget.userId == null) {
            val user = this.findUserByUserAlias.execute(budget.userAlias)
            budget.userId = user.id
        }
    }
}