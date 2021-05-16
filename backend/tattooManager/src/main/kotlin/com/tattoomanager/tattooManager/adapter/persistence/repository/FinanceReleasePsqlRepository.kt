package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.FinanceReleaseEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface FinanceReleasePsqlRepository: CrudRepository<FinanceReleaseEntity, Long> {
    fun save(financeReleaseEntity: FinanceReleaseEntity): FinanceReleaseEntity
    fun getAllByUserId(userId: Long): Collection<FinanceReleaseEntity>
}