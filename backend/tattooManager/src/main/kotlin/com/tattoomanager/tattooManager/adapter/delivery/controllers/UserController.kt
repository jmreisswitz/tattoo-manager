package com.tattoomanager.tattooManager.adapter.delivery.controllers

import com.tattoomanager.tattooManager.adapter.delivery.payload.UserPayload
import com.tattoomanager.tattooManager.adapter.delivery.restmappers.UserRestMapper
import com.tattoomanager.tattooManager.usecases.user.SaveUser
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("user")
class UserController constructor(
    private val saveUser: SaveUser
) {
    val modelMapper = UserRestMapper()

    @PostMapping
    fun save(@RequestBody userFromPayload: UserPayload): UserPayload {
        val createdUser = saveUser.execute(modelMapper.mapToDomain(userFromPayload))
        return modelMapper.mapToPayload(createdUser)
    }
}