package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.*

@Entity
@Table(name = "user_entity")
data class UserEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long=-1,
    val name: String="",
    val userAlias: String=""
)