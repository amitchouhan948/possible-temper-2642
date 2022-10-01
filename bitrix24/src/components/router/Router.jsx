import React from 'react'
import {Routes, Route} from "react-router-dom"
import Feeds from '../feeds/Feeds'
import Signup from '../pages/signup/Signup'

const Router = () => {
  return (
    <Routes>
        <Route path="feed" element={<Feeds/>}/>
        <Route path="signup" element={<Signup/>}/>
    </Routes>
  )
}

export default Router