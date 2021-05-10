package com.tattoomanager.tattooManager.usecases.budget

import com.tattoomanager.tattooManager.port.repository.BudgetRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class GetTotalNewBudgetRequestsByUserAlias constructor(
    private val budgetRepository: BudgetRepository,
    private val findUserByUserAlias: FindUserByUserAlias
){

    fun execute(userAlias: String) : Int {
        val user = this.findUserByUserAlias.execute(userAlias)
        return this.budgetRepository.getTotalNewBudgetsByUserId(user.id!!)
    }
}