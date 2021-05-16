package com.tattoomanager.tattooManager.usecases.anamnese

import com.tattoomanager.tattooManager.domain.Anamnese
import com.tattoomanager.tattooManager.port.repository.AnamneseRepository
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias

class SaveAnamnese constructor(
    private val findUserByUserAlias: FindUserByUserAlias,
    private val anamneseRepository: AnamneseRepository
    ){

    fun execute(anamnese: Anamnese, userAlias: String): Anamnese {
        val user = this.findUserByUserAlias.execute(userAlias)
        anamnese.userId = user.id!!
        this.anamneseRepository.save(anamnese)
        return anamnese
    }
}