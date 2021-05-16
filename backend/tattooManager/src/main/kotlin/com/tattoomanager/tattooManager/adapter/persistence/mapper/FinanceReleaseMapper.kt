package com.tattoomanager.tattooManager.adapter.persistence.mapper

import com.tattoomanager.tattooManager.adapter.persistence.entity.FinanceReleaseEntity
import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.domain.enum.FinanceReleaseGroup
import com.tattoomanager.tattooManager.domain.enum.FinanceReleaseType

class FinanceReleaseMapper {
    fun mapToDomain(financeReleaseEntity: FinanceReleaseEntity): FinanceRelease{
        return FinanceRelease(
            financeReleaseEntity.id,
            financeReleaseEntity.userId,
            financeReleaseEntity.releaseDate,
            financeReleaseEntity.value,
            financeReleaseEntity.description,
            FinanceReleaseType.valueOf(financeReleaseEntity.type),
            FinanceReleaseGroup.valueOf(financeReleaseEntity.group)
        )
    }

    fun mapToEntity(financeRelease: FinanceRelease): FinanceReleaseEntity {
        return FinanceReleaseEntity(
            id = financeRelease.id,
            userId = financeRelease.userId!!,
            releaseDate = financeRelease.releaseDate,
            value = financeRelease.value,
            group = financeRelease.group.toString(),
            type = financeRelease.type.toString(),
            description = financeRelease.description
        )
    }
}