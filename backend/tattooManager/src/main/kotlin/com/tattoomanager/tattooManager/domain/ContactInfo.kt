package com.tattoomanager.tattooManager.domain

data class ContactInfo (
    val id: Long?,
    val userId: Long?,
    val completeName: String,
    val cpf: String,
    val rg: String,
    val birthDate: String,
    val cep: String,
    val phone: String,
    val userAlias: String,
    val email: String,
    val creationDate: String
)