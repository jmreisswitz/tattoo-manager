package com.tattoomanager.tattooManager.domain

data class Budget(
    val id: Long?,
    val clientName: String,
    val age: Int,
    val description: String,
    val bodyPart: String,
    val sizeInCm: Float,
    val phone: String,
    val userAlias: String,
    var userId: Long?
)
