package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "user")
data class UserEntity(
    @Id @GeneratedValue
    val id: Long=-1,
    val name: String="",
    val userAlias: String=""
)