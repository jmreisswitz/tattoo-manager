package com.tattoomanager.tattooManager.usecases.financeRelease

import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.port.repository.FinanceReleaseRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class GetFinanceReleasesFromUserAlias constructor(
    private val financeReleaseRepository: FinanceReleaseRepository,
    private val findUserByUserAlias: FindUserByUserAlias
) {
    fun execute(userAlias: String): Collection<FinanceRelease> {
        val user = this.findUserByUserAlias.execute(userAlias)
        return financeReleaseRepository.getAllByUserId(user.id!!)
    }
}