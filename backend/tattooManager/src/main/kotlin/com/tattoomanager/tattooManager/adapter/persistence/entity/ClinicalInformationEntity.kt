package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.*

@Entity
@Table(name= "clinical_information")
data class ClinicalInformationEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    val cardiacProblem: Boolean,
    val easyBlooding: Boolean,
    val immunologicSystem: Boolean,
    val diabetes: Boolean,
    val dst: Boolean,
    val pregnant: Boolean,
    val highPressure: Boolean,
    val faintFrequently: Boolean,
    val allergy: Boolean
)