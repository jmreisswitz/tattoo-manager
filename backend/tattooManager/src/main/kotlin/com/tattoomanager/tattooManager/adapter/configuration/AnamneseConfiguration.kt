package com.tattoomanager.tattooManager.adapter.configuration

import com.tattoomanager.tattooManager.adapter.persistence.repository.AnamnesePsqlRepository
import com.tattoomanager.tattooManager.adapter.persistence.repository.AnamneseRepositoryImpl
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository
import com.tattoomanager.tattooManager.usecases.anamnese.SaveAnamnese
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AnamneseConfiguration constructor(
    private val anamnesePsqlRepository: AnamnesePsqlRepository,
    private val findUserByUserAlias: FindUserByUserAlias
){
    @Bean
    fun createAnamneseRepository(): AnamneseRepository {
        return AnamneseRepositoryImpl(anamnesePsqlRepository)
    }

    @Bean
    fun createSaveAnamneseUserCase(): SaveAnamnese {
        return SaveAnamnese(findUserByUserAlias, createAnamneseRepository())
    }
}
