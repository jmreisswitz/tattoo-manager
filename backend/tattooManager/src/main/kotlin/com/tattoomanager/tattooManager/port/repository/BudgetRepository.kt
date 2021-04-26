package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.Budget

interface BudgetRepository {
    fun save(budget: Budget): Budget
    fun findByUserId(userId: Int): List<Budget>
}