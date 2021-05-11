package com.tattoomanager.tattooManager.adapter.configuration

import com.tattoomanager.tattooManager.adapter.persistence.repository.AnamnesePsqlRepository
import com.tattoomanager.tattooManager.adapter.persistence.repository.AnamneseRepositoryImpl
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AnamneseConfiguration constructor(
    private val anamnesePsqlRepository: AnamnesePsqlRepository
){
    @Bean
    fun createAnamneseRepository(): AnamneseRepository {
        return AnamneseRepositoryImpl(anamnesePsqlRepository)
    }
}
