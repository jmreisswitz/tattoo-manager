package com.tattoomanager.tattooManager.domain

data class Anamnese(
    val userId: Long,
    val creationDate: String,
    val contactInfo: ContactInfo,
    val clinicalInfo: ClinicalInfo
)
