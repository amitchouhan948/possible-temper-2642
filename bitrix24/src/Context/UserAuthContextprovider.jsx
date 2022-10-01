import React, { createContext, useState } from 'react'


import {auth,provider,provider1} from "../../src/config/Firebase"
import {createUserWithEmailAndPassword,signInWithPopup,
signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth"
import { useEffect } from 'react'


export const UserAuthContaxt=createContext()

const UserAuthContextprovider = ({children}) => {


console.log(auth)
    const [user,setuser]=useState(false)


 const SignupwithEmPa=(email,password)=>{
    console.log(email,password)
return createUserWithEmailAndPassword(auth,email,password)
 }
 const LoginwithEmPa=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
 }

const Googlesignin= async()=>{
   await signInWithPopup(auth,provider);
}
const  Githubregister= async()=>{
   await signInWithPopup(auth,provider1);
}

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
        setuser(currentuser)
    })

    return()=>{
        unsubscribe()
    }
},[])


return( 

<UserAuthContaxt.Provider value={{Googlesignin,SignupwithEmPa,user,LoginwithEmPa,Githubregister}} >
    {children}
 </UserAuthContaxt.Provider>)
}

export default UserAuthContextprovider
