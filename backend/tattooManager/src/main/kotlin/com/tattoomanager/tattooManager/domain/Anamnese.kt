package com.tattoomanager.tattooManager.domain

data class Anamnese(
    var userId: Long,
    val creationDate: String,
    val contactInfo: ContactInfo,
    val clinicalInfo: ClinicalInfo
)
