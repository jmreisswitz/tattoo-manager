package com.tattoomanager.tattooManager.adapter.persistence.entity

import java.sql.Timestamp
import javax.persistence.*

@Entity
@Table(name = "budget")
data class BudgetEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id:Long?=null,
    val userId: Long? =-1,
    val clientName: String="",
    val age: Int=0,
    val description: String="",
    val bodyPart: String="",
    val sizeInCm: Float= 0.0F,
    val phone: String="",
    var isNew: Boolean,
    val userAlias: String="",
    val creationDate: Timestamp
)