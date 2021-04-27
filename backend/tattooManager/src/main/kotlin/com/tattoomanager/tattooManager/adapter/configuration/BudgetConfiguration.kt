package com.tattoomanager.tattooManager.adapter.configuration

import com.tattoomanager.tattooManager.adapter.persistence.repository.BudgetPsqlRepository
import com.tattoomanager.tattooManager.adapter.persistence.repository.BudgetRepositoryImpl
import com.tattoomanager.tattooManager.port.repository.BudgetRepository
import com.tattoomanager.tattooManager.usecases.budget.FindBudgetsByUserAlias
import com.tattoomanager.tattooManager.usecases.budget.SaveBudget
import com.tattoomanager.tattooManager.usecases.user.FindUserByUserAlias
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class BudgetConfiguration constructor(
    private val budgetPsqlRepository: BudgetPsqlRepository,
    private val findUserByUserAlias: FindUserByUserAlias
    ){

    @Bean
    fun createBudgetRepository(): BudgetRepository {
        return BudgetRepositoryImpl(budgetPsqlRepository)
    }

    @Bean
    fun createFindBudgetsByUserAlias(): FindBudgetsByUserAlias {
        return FindBudgetsByUserAlias(createBudgetRepository(), findUserByUserAlias)
    }

    @Bean
    fun createSaveBudget(): SaveBudget {
        return SaveBudget(createBudgetRepository(), findUserByUserAlias)
    }
}
