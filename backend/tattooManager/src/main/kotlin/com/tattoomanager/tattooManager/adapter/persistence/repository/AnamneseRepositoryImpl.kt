package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.mapper.AnamneseEntityMapper
import com.tattoomanager.tattooManager.domain.Anamnese
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository

class AnamneseRepositoryImpl constructor(
    private val anamnesePsqlRepository: AnamnesePsqlRepository
) : AnamneseRepository {

    private val modelMapper = AnamneseEntityMapper()

    override fun save(anamnese: Anamnese): Anamnese {
        val anamneseEntity = this.anamnesePsqlRepository.save(modelMapper.mapToEntity(anamnese))
        return modelMapper.mapToDomain(anamneseEntity)
    }

    override fun getAll(): Collection<Anamnese> {
        val anamneseEntityCollection = this.anamnesePsqlRepository.findAll()
        return anamneseEntityCollection.map{
            modelMapper.mapToDomain(it)
        }
    }
}