package com.tattoomanager.tattooManager.domain

import com.tattoomanager.tattooManager.domain.enum.ExpenseType
import com.tattoomanager.tattooManager.domain.enum.ProfitType
import java.util.*

interface FinanceRelease {
    val userId: Long?
    val releaseDate: Date
    val value: Double
}

data class ProfitRelease (
    val type: ProfitType,
    override val userId: Long?,
    override val releaseDate: Date,
    override val value: Double
): FinanceRelease

data class ExpenseRelease(
    val type: ExpenseType,
    override val userId: Long?,
    override val releaseDate: Date,
    override val value: Double
): FinanceRelease