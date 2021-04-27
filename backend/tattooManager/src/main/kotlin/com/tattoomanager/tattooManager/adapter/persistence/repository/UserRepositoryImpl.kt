package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.UserEntity
import com.tattoomanager.tattooManager.domain.User
import com.tattoomanager.tattooManager.port.repository.UserRepository
import org.modelmapper.ModelMapper
import java.util.*

class UserRepositoryImpl constructor(
    private val userPsqlRepository: UserPsqlRepository
    ): UserRepository {
    private val modelMapper = ModelMapper()

    override fun save(user: User): User {
        val userEntity = userPsqlRepository.save(modelMapper.map(user, UserEntity::class.java))
        return modelMapper.map(userEntity, User::class.java)
    }

    override fun findByUserAlias(userAlias: String): Optional<User> {
        val userEntity = userPsqlRepository.findByUserAlias(userAlias).orElse(null)
        if (userEntity != null){
            Optional.of(modelMapper.map(userEntity, User::class.java))
        }
        return Optional.empty()
    }
}