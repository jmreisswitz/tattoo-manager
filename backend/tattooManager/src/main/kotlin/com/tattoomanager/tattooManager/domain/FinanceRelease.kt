package com.tattoomanager.tattooManager.domain

import com.tattoomanager.tattooManager.domain.enum.FinanceReleaseGroup
import com.tattoomanager.tattooManager.domain.enum.FinanceReleaseType
import java.util.*

data class FinanceRelease (
    val id: Long?,
    var userId: Long?,
    val releaseDate: Date,
    val value: Float,
    val description: String,
    val type: FinanceReleaseType,
    val group: FinanceReleaseGroup
)
