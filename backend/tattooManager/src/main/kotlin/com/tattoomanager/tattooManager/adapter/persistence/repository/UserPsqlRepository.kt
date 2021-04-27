package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.UserEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserPsqlRepository: CrudRepository<UserEntity, Long> {
    fun save(user: UserEntity): UserEntity
    fun findByUserAlias(userAlias: String): Optional<UserEntity>
}