package com.tattoomanager.tattooManager.adapter.delivery.controllers

import com.tattoomanager.tattooManager.adapter.delivery.payload.UserPayload
import com.tattoomanager.tattooManager.domain.User
import com.tattoomanager.tattooManager.usecases.user.SaveUser
import org.modelmapper.ModelMapper
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("user")
class UserController constructor(
    private val saveUser: SaveUser
) {
    val modelMapper = ModelMapper()

    @PostMapping
    fun save(@RequestBody userFromPayload: UserPayload): UserPayload {
        val createdUser = saveUser.execute(modelMapper.map(userFromPayload, User::class.java))
        return modelMapper.map(createdUser, UserPayload::class.java)
    }
}