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
    @Column(name="release_group")  // group is kind of a reserved word on psql
    val group: String
)