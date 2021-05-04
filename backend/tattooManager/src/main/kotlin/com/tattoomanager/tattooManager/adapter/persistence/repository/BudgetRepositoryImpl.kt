package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.BudgetEntity
import com.tattoomanager.tattooManager.adapter.persistence.mapper.BudgetEntityMapper
import com.tattoomanager.tattooManager.domain.Budget
import com.tattoomanager.tattooManager.domain.exceptions.BudgetNotFoundException
import com.tattoomanager.tattooManager.port.repository.BudgetRepository

class BudgetRepositoryImpl constructor(
    private val budgetPsqlRepository: BudgetPsqlRepository
    ): BudgetRepository  {
    private val modelMapper = BudgetEntityMapper()

    private fun mapEntityListToDomain(budgetEntityList: List<BudgetEntity> ): List<Budget> {
        return budgetEntityList.map{modelMapper.mapToDomain(it)}
    }

    override fun save(budget: Budget): Budget {
        val budgetEntity = this.budgetPsqlRepository.save(modelMapper.mapToEntity(budget))
        return modelMapper.mapToDomain(budgetEntity)
    }

    override fun findByUserIdOrderedByCreationDate(userId: Long): List<Budget> {
        return mapEntityListToDomain(budgetPsqlRepository.findByUserIdOrderByCreationDateDesc(userId))
    }

    override fun setAsNotNew(budgetId: Long): Budget {
        val budgetEntity = this.budgetPsqlRepository.findById(budgetId).orElseThrow{ BudgetNotFoundException() }
        budgetEntity.isNew = false
        return modelMapper.mapToDomain(this.budgetPsqlRepository.save(budgetEntity))
    }
}
