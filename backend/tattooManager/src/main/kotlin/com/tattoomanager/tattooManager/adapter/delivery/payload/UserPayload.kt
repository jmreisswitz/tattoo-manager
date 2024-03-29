package com.tattoomanager.tattooManager.adapter.delivery.payload

import kotlinx.serialization.Serializable


@Serializable
data class UserPayload(
    val id: Long? = null,
    val name: String = "",
    val userAlias: String = ""
)
