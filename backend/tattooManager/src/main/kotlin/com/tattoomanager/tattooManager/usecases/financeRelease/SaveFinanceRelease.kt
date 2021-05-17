package com.tattoomanager.tattooManager.usecases.financeRelease

import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.port.repository.FinanceReleaseRepository

class SaveFinanceRelease constructor(
    private val financeReleaseRepository: FinanceReleaseRepository
) {

    fun execute(financeRelease: FinanceRelease): FinanceRelease {
        return this.financeReleaseRepository.save(financeRelease)
    }

}