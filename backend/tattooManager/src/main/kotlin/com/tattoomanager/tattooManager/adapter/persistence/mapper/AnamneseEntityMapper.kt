package com.tattoomanager.tattooManager.adapter.persistence.mapper

import com.tattoomanager.tattooManager.adapter.persistence.entity.AnamneseEntity
import com.tattoomanager.tattooManager.adapter.persistence.entity.ClinicalInformationEntity
import com.tattoomanager.tattooManager.adapter.persistence.entity.ContactInformationEntity
import com.tattoomanager.tattooManager.domain.Anamnese
import com.tattoomanager.tattooManager.domain.ClinicalInfo
import com.tattoomanager.tattooManager.domain.ContactInfo

class AnamneseEntityMapper {
    fun mapToEntity(anamnese: Anamnese): AnamneseEntity {
        return AnamneseEntity(
            null,
            anamnese.userId,
            anamnese.creationDate,
            ContactInformationEntity(
                anamnese.contactInfo.id,
                anamnese.contactInfo.completeName,
                anamnese.contactInfo.cpf,
                anamnese.contactInfo.rg,
                anamnese.contactInfo.birthDate,
                anamnese.contactInfo.cep,
                anamnese.contactInfo.phone,
                anamnese.contactInfo.userAlias,
                anamnese.contactInfo.email
            ),
            ClinicalInformationEntity(
                anamnese.clinicalInfo.id,
                anamnese.clinicalInfo.cardiacProblem,
                anamnese.clinicalInfo.easyBlooding,
                anamnese.clinicalInfo.immunologicSystem,
                anamnese.clinicalInfo.diabetes,
                anamnese.clinicalInfo.dst,
                anamnese.clinicalInfo.pregnant,
                anamnese.clinicalInfo.highPressure,
                anamnese.clinicalInfo.faintFrequently,
                anamnese.clinicalInfo.allergy
            )
        )
    }

    fun mapToDomain(anamneseEntity: AnamneseEntity): Anamnese {
        return Anamnese(
            anamneseEntity.userId,
            anamneseEntity.creationDate,
            ContactInfo(
                anamneseEntity.contactInformationEntity.id,
                anamneseEntity.contactInformationEntity.completeName,
                anamneseEntity.contactInformationEntity.cpf,
                anamneseEntity.contactInformationEntity.rg,
                anamneseEntity.contactInformationEntity.birthDate,
                anamneseEntity.contactInformationEntity.cep,
                anamneseEntity.contactInformationEntity.phone,
                anamneseEntity.contactInformationEntity.userAlias,
                anamneseEntity.contactInformationEntity.email
            ),
            ClinicalInfo(
                anamneseEntity.clinicalInformationEntity.id,
                anamneseEntity.clinicalInformationEntity.cardiacProblem,
                anamneseEntity.clinicalInformationEntity.easyBlooding,
                anamneseEntity.clinicalInformationEntity.immunologicSystem,
                anamneseEntity.clinicalInformationEntity.diabetes,
                anamneseEntity.clinicalInformationEntity.dst,
                anamneseEntity.clinicalInformationEntity.pregnant,
                anamneseEntity.clinicalInformationEntity.highPressure,
                anamneseEntity.clinicalInformationEntity.faintFrequently,
                anamneseEntity.clinicalInformationEntity.allergy

            )
        )
    }
}