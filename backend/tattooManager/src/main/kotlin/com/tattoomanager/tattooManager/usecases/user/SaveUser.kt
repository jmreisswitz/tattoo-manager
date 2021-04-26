package com.tattoomanager.tattooManager.usecases.user

import com.tattoomanager.tattooManager.domain.User
import com.tattoomanager.tattooManager.port.repository.UserRepository

class SaveUser constructor(private val userRepository: UserRepository) {
    fun execute(user: User): User {
        return this.userRepository.save(user)
    }
}