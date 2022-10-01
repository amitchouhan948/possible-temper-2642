import React, { useContext } from 'react'

import { UserAuthContaxt } from '../../../../Context/UserAuthContextprovider';
import styles from "./subcompo.module.css";

import {useNavigate} from "react-router-dom"
import { Box, Image } from '@chakra-ui/react';
import googlebtn from "../../StaticFiles/logos/google.png"
import apple from "../../StaticFiles/logos/apple.png"
import facebook from "../../StaticFiles/logos/facebook.png"
import twitter from "../../StaticFiles/logos/twitter.png"
import github from "../../StaticFiles/logos/github.png"

const SignupRightButtons = () => {
    const {Googlesignin,Githubregister}=useContext(UserAuthContaxt)
const navigate=useNavigate()


    const signinwithgoogle = async () => {

        try{
          await Googlesignin()
          navigate("/User")

        }catch(error){
console.log(Error)
        }
  
    };
        
    const signupwithgithub = async () => {

        try{
          await Githubregister()
          navigate("/User")

        }catch(error){
console.log(Error)
        }
       
  
    };
       
  
  return (
    <div>
        <Box className={styles.ion_box}>
        <Image className={styles.imgicon} src={facebook} />
        <Box onClick={signinwithgoogle} className={styles.googlebox}><Image src={googlebtn}/>Google</Box>
        
       
        <Image className={styles.imgicon} src={apple} />
        <Image className={styles.imgicon} src={twitter} />
        <Image onClick={signupwithgithub} className={styles.imgicon} src={github} />

        </Box>
       
      

    </div>
  )
}

export default SignupRightButtons