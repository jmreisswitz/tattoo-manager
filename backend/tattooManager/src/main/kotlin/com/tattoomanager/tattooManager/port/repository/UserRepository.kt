package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.User
import java.util.*

interface UserRepository {
    fun save(user: User): User
    fun findByUserAlias(userAlias: String): Optional<User>
}