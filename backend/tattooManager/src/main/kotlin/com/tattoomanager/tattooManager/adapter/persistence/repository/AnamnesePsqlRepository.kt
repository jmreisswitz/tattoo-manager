package com.tattoomanager.tattooManager.adapter.persistence.repository

import com.tattoomanager.tattooManager.adapter.persistence.entity.AnamneseEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface AnamnesePsqlRepository: CrudRepository<AnamneseEntity, Long> {
    fun save(anamneseEntity: AnamneseEntity): AnamneseEntity
    override fun findAll(): Collection<AnamneseEntity>
}
