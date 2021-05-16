package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.FinanceRelease

interface FinanceReleaseRepository {
    fun save(financeRelease: FinanceRelease): FinanceRelease
    fun getAllByUserId(userId: Long): Collection<FinanceRelease>
}