package com.tattoomanager.tattooManager.adapter.persistence.entity

import javax.persistence.*

@Entity
@Table(name = "anamnese")
data class AnamneseEntity (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn
    val contactInformationEntity: ContactInformationEntity,
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn
    val clinicalInformationEntity: ClinicalInformationEntity
)