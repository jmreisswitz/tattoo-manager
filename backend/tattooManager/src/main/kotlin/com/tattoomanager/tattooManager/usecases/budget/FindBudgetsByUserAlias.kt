package com.tattoomanager.tattooManager.usecases.budget

import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.port.repository.BudgetRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class FindBudgetsByUserAlias constructor(
        private val budgetRepository: BudgetRepository,
        private val findUserByUserAlias: FindUserByUserAlias
    ) {
    fun execute(userAlias: String): List<Budget> {
        val user = this.findUserByUserAlias.execute(userAlias)
        return this.budgetRepository.findByUserId(user.id)
    }
}