package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.BudgetEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface BudgetPsqlRepository: CrudRepository<BudgetEntity, Long> {
    fun save(budget: BudgetEntity): BudgetEntity
    fun findByUserIdOrderByCreationDateDesc(userId: Long): List<BudgetEntity>
    fun countBudgetEntitiesByUserIdAndIsNewIsTrue(userId: Long): Int
}