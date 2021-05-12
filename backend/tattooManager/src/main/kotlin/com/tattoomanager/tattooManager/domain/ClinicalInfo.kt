package com.tattoomanager.tattooManager.domain

data class ClinicalInfo(
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
