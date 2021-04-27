package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.BudgetEntity
import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.port.repository.BudgetRepository
import org.modelmapper.ModelMapper

class BudgetRepositoryImpl constructor(
    private val budgetPsqlRepository: BudgetPsqlRepository
    ): BudgetRepository  {
    private val modelMapper = ModelMapper()

    private fun mapEntityListToDomain(budgetEntityList: List<BudgetEntity> ): List<Budget> {
        return budgetEntityList.map{modelMapper.map(it, Budget::class.java)}
    }

    override fun save(budget: Budget): Budget {
        val budgetEntity = this.budgetPsqlRepository.save(
            this.modelMapper.map(budget, BudgetEntity::class.java))
        return modelMapper.map(budgetEntity, Budget::class.java)
    }

    override fun findByUserId(userId: Long): List<Budget> {
        return mapEntityListToDomain(budgetPsqlRepository.findByUserId(userId))
    }
}


