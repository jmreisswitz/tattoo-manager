package com.tattoomanager.tattooManager.adapter.configuration

import com.tattoomanager.tattooManager.adapter.persistence.repository.UserPsqlRepository
import com.tattoomanager.tattooManager.adapter.persistence.repository.UserRepositoryImpl
import com.tattoomanager.tattooManager.port.repository.UserRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias
import com.tattoomanager.tattooManager.usecases.user.SaveUser
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class UserConfiguration constructor(private val userPsqlRepository: UserPsqlRepository) {

    @Bean
    fun createUserRepository(): UserRepository{
        return UserRepositoryImpl(userPsqlRepository)
    }

    @Bean
    fun createFindUserByUserAlias(): FindUserByUserAlias {
        return FindUserByUserAlias(createUserRepository())
    }

    @Bean
    fun createSaveUser(): SaveUser {
        return SaveUser(createUserRepository())
    }
}