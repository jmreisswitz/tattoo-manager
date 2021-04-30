package com.tattoomanager.tattooManager.adapter.delivery.controllers

import org.slf4j.LoggerFactory
import com.tattoomanager.tattooManager.adapter.delivery.payload.BudgetPayload
import com.tattoomanager.tattooManager.adapter.delivery.restmappers.BudgetRestMapper
import com.tattoomanager.tattooManager.domain.exceptions.UserNotFoundException
import com.tattoomanager.tattooManager.usecases.budget.SaveBudget
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("budget")
class BudgetController constructor(val saveBudget: SaveBudget) {
    private val modelMapper = BudgetRestMapper()
    private val logger = LoggerFactory.getLogger(javaClass)

    @PostMapping
    fun save(@RequestBody budgetPayload: BudgetPayload): BudgetPayload? {
        return try{
            val savedBudget = saveBudget.execute(modelMapper.mapToDomain(budgetPayload))
            modelMapper.mapToPayload(savedBudget)
        } catch (e: UserNotFoundException){
            logger.warn("User %s Not Found".format(budgetPayload.userAlias))
            null
        }
    }
}