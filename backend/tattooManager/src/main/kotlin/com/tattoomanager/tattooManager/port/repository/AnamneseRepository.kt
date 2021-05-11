package com.tattoomanager.tattooManager.port.repository

import com.tattoomanager.tattooManager.domain.Anamnese

interface AnamneseRepository {
    fun save(anamnese: Anamnese): Anamnese
    fun getAll(): Collection<Anamnese>
}