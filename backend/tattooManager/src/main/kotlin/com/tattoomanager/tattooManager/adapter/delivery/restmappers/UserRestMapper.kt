package com.tattoomanager.tattooManager.adapter.delivery.restmappers

import com.tattoomanager.tattooManager.adapter.delivery.payload.UserPayload
import com.tattoomanager.tattooManager.domain.User

class UserRestMapper {
    fun mapToDomain(userEntity: UserPayload): User {
        return User(
            userEntity.id,
            userEntity.name,
            userEntity.userAlias
        )
    }

    fun mapToPayload(user: User): UserPayload {
        return UserPayload(
            user.id,
            user.name,
            user.userAlias
        )
    }
}