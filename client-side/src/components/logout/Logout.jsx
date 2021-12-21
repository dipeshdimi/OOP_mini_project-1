import axios from 'axios'
import React from 'react'
import Login from '../../pages/login/Login'
import { useEffect } from "react";

export default function Logout() {

    useEffect(() => {
        const logout = (async()=>{
         const res = await axios.get('/auth/logout');
        })
    }, [])
   
    return (
        <></>
    )
}
