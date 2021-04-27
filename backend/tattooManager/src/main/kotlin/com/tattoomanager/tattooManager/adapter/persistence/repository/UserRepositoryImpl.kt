package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.mapper.UserEntityMapper
import com.tattoomanager.tattooManager.domain.User
import com.tattoomanager.tattooManager.port.repository.UserRepository
import java.util.*

class UserRepositoryImpl constructor(
    private val userPsqlRepository: UserPsqlRepository
    ): UserRepository {
    private val modelMapper = UserEntityMapper()

    override fun save(user: User): User {
        val userEntity = userPsqlRepository.save(modelMapper.mapToEntity(user))
        return modelMapper.mapToDomain(userEntity)
    }

    override fun findByUserAlias(userAlias: String): Optional<User> {
        val userEntity = userPsqlRepository.findByUserAlias(userAlias).orElse(null)
        if (userEntity != null){
            Optional.of(modelMapper.mapToDomain(userEntity))
        }
        return Optional.empty()
    }
}