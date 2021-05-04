package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.Budget

interface BudgetRepository {
    fun save(budget: Budget): Budget
    fun findByUserIdOrderedByCreationDate(userId: Long): List<Budget>
    fun setAsNotNew(budgetId: Long): Budget
}