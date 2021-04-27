package com.tattoomanager.tattooManager.adapter.persistence.mapper

import com.tattoomanager.tattooManager.adapter.persistence.entity.UserEntity
import com.tattoomanager.tattooManager.domain.User

class UserEntityMapper {
    fun mapToDomain(userEntity: UserEntity): User {
        return User(
            userEntity.id,
            userEntity.name,
            userEntity.userAlias
        )
    }

    fun mapToEntity(user: User): UserEntity {
        return UserEntity(
            user.id,
            user.name,
            user.userAlias
        )
    }

}