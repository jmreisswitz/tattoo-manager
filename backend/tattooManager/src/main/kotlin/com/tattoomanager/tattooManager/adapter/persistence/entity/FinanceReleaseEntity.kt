package com.tattoomanager.tattooManager.adapter.persistence.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "finance_release")
data class FinanceReleaseEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    val releaseDate: Date,
    val value: Double,
    val type: String
)