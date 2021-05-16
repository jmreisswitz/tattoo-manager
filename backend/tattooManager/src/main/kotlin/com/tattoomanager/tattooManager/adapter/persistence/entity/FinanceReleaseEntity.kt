package com.tattoomanager.tattooManager.adapter.persistence.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "finance_release")
data class FinanceReleaseEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    val userId: Long,
    val releaseDate: Date,
    val value: Float,
    val description: String,
    val type: String,
    val group: String
)