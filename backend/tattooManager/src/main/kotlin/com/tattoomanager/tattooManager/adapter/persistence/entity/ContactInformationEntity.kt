package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.*

@Entity
@Table(name = "contact_information")
data class ContactInformationEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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