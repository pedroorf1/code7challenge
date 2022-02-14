import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom"

//
import Users from "../views/modules/users/Users"
import User from "../views/modules/user/User"
import Posts from "../views/modules/posts/Posts"
import Header from "../views/layout/header/Header"

import Home from "../views/home/home"


const AppRotas = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="user/:id" element={<User />} />
                <Route path="posts/:userid/:username" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    )


}

export default AppRotas