package com.tattoomanager.tattooManager.adapter.delivery.controllers

import com.tattoomanager.tattooManager.adapter.persistence.entity.AnamneseEntity
import com.tattoomanager.tattooManager.domain.Anamnese
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("anamnese")
class AnamneseController constructor(
    private val anamneseRepository: AnamneseRepository
){
    @GetMapping
    fun getAll(): Collection<Anamnese> {
        return this.anamneseRepository.getAll()
    }

    @PostMapping
    fun save(@RequestBody anamneseEntity: Anamnese): Anamnese {
        return this.anamneseRepository.save(anamneseEntity)
    }
}