package com.tattoomanager.tattooManager.usecases.financeRelease

import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.port.repository.FinanceReleaseRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class SaveFinanceRelease constructor(
    private val financeReleaseRepository: FinanceReleaseRepository,
    private val findUserByUserAlias: FindUserByUserAlias
) {

    fun execute(financeRelease: FinanceRelease, userAlias: String): FinanceRelease {
        val user = this.findUserByUserAlias.execute(userAlias)
        financeRelease.userId = user.id
        return this.financeReleaseRepository.save(financeRelease)
    }

}