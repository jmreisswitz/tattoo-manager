package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.User

interface UserRepository {
    fun save(user: User): User
    fun findByUserAlias(userAlias: String): User
}