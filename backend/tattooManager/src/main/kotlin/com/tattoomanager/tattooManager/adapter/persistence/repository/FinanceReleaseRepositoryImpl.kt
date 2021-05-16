package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.FinanceReleaseEntity
import com.tattoomanager.tattooManager.adapter.persistence.mapper.FinanceReleaseMapper
import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.port.repository.FinanceReleaseRepository

class FinanceReleaseRepositoryImpl constructor(
    private val financeReleasePsqlRepository: FinanceReleasePsqlRepository
): FinanceReleaseRepository {
    private val modelMapper = FinanceReleaseMapper()

    private fun mapEntityCollectionToDomain(financeReleaseEntityList: Collection<FinanceReleaseEntity>): Collection<FinanceRelease>{
        return financeReleaseEntityList.map{modelMapper.mapToDomain(it)}
    }

    override fun save(financeRelease: FinanceRelease): FinanceRelease {
        val financeReleaseEntity = this.modelMapper.mapToEntity(financeRelease)
        return modelMapper.mapToDomain(this.financeReleasePsqlRepository.save(financeReleaseEntity))
    }

    override fun getAllByUserId(userId: Long): Collection<FinanceRelease> {
        val entityList = this.financeReleasePsqlRepository.getAllByUserId(userId)
        return mapEntityCollectionToDomain(entityList)
    }
}