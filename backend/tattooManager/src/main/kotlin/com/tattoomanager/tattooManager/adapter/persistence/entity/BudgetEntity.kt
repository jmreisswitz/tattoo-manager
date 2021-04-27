package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "budget")
data class BudgetEntity(
    @Id @GeneratedValue
    val id:Long=-1,
    val userId: Long=-1,
    val clientName: String="",
    val age: Int=0,
    val description: String="",
    val bodyPart: String="",
    val sizeInCm: Float= 0.0F,
    val phone: String="",
    val userAlias: String=""
)