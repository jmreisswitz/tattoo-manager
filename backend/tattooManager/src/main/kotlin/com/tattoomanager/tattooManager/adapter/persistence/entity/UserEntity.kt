package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.*

@Entity
@Table(name = "user_entity")
data class UserEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?=null,
    val name: String="",
    val userAlias: String=""
)