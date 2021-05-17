package com.tattoomanager.tattooManager.adapter.delivery.controllers

import com.tattoomanager.tattooManager.domain.FinanceRelease
import com.tattoomanager.tattooManager.usecases.financeRelease.GetFinanceReleasesFromUserAlias
import com.tattoomanager.tattooManager.usecases.financeRelease.SaveFinanceRelease
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("financeRelease")
class FinanceReleaseController constructor(
    private val saveFinanceRelease: SaveFinanceRelease,
    private val getFinanceReleasesFromUserAlias: GetFinanceReleasesFromUserAlias
){

    @PostMapping
    fun save(@RequestBody financeReleasePayload: FinanceRelease, @RequestParam userAlias: String): FinanceRelease {
        return this.saveFinanceRelease.execute(financeReleasePayload, userAlias)
    }

    @GetMapping("getByUserAlias")
    fun getByUserAlias(@RequestParam userAlias: String): Collection<FinanceRelease> {
        return getFinanceReleasesFromUserAlias.execute(userAlias)
    }
}