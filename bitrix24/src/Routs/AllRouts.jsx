import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feeds from '../components/feeds/Feeds'
import Afterlogin from '../components/pages/afterlogin/Afterlogin'
import HomePage from "../components/HomePages/homepage/HomePage"
import Login from '../components/pages/login/Login'
// import Signup from '../components/pages/Signupdata/Signup'
import Signup from  "../components/pages/Signupdata/Signup"
const AllRouts = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/User" element={<Afterlogin/>}/>
            <Route path="/feed" element={<Feeds/>}/>
        </Routes>
    </div>
  )
}
//axios ,

export default AllRouts