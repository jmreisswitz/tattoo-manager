package com.tattoomanager.tattooManager.adapter.delivery.payload

import kotlinx.serialization.Serializable

@Serializable
data class BudgetPayload (
    val id: Long?=null,
    val clientName: String,
    val age: Int,
    val description: String,
    val bodyPart: String,
    val sizeInCm: Float,
    val phone: String,
    val userAlias: String,
    val isNew: Boolean,
    var userId: Long?=null,
    val creationDate: String
)