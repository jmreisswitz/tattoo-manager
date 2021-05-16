package com.tattoomanager.tattooManager.adapter.delivery.controllers

import com.tattoomanager.tattooManager.domain.Anamnese
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository
import com.tattoomanager.tattooManager.usecases.anamnese.SaveAnamnese
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("anamnese")
class AnamneseController constructor(
    private val anamneseRepository: AnamneseRepository,
    private val saveAnamnese: SaveAnamnese
){
    @GetMapping
    fun getAll(): Collection<Anamnese> {
        return this.anamneseRepository.getAll()
    }

    @PostMapping
    fun save(
        @RequestBody anamneseEntity: Anamnese,
        @RequestParam userAlias: String): Anamnese {
        return this.saveAnamnese.execute(anamneseEntity, userAlias)
    }
}