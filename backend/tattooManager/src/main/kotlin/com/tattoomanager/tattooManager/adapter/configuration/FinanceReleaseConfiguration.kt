package com.tattoomanager.tattooManager.adapter.configuration

import com.tattoomanager.tattooManager.adapter.persistence.repository.FinanceReleasePsqlRepository
import com.tattoomanager.tattooManager.adapter.persistence.repository.FinanceReleaseRepositoryImpl
import com.tattoomanager.tattooManager.port.repository.FinanceReleaseRepository
import com.tattoomanager.tattooManager.usecases.financeRelease.GetFinanceReleasesFromUserAlias
import com.tattoomanager.tattooManager.usecases.financeRelease.SaveFinanceRelease
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class FinanceReleaseConfiguration constructor(
    private val financeReleasePsqlRepository: FinanceReleasePsqlRepository,
    private val findUserByUserAlias: FindUserByUserAlias
) {

    @Bean
    fun createFinanceReleaseRepository(): FinanceReleaseRepository {
        return FinanceReleaseRepositoryImpl(financeReleasePsqlRepository)
    }

    @Bean
    fun saveFinanceReleaseUseCase(): SaveFinanceRelease {
        return SaveFinanceRelease(createFinanceReleaseRepository())
    }

    @Bean
    fun getFinanceReleaseByUserAlias(): GetFinanceReleasesFromUserAlias {
        return GetFinanceReleasesFromUserAlias(createFinanceReleaseRepository(), findUserByUserAlias)
    }
}