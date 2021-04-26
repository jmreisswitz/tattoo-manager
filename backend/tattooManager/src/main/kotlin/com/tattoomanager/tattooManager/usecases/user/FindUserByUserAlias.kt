package com.tattoomanager.tattooManager.usecases.user

import com.tattoomanager.tattooManager.domain.User
import com.tattoomanager.tattooManager.port.repository.UserRepository

class FindUserByUserAlias constructor(private val userRepository: UserRepository) {
    fun execute(userAlias: String): User {
        return this.userRepository.findByUserAlias(userAlias)
    }
}