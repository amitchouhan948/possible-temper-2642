import { Box, Button, Checkbox, FormLabel, Input, Text, Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'
import styles from "./subcompo.module.css"
import {  Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import {UserAuthContaxt} from "../../../../Context/UserAuthContextprovider"



const Loginright = () => {
const [email,setemail]=useState("")
const [password,setPassword]=useState("")
const [error,seterror]=useState("")
const {LoginwithEmPa}=useContext(UserAuthContaxt)
const navigate=useNavigate()


const handeldsubmite=async(e)=>{

  
  e.preventDefault()
  seterror("")
try{
await LoginwithEmPa(email,password)
navigate("/User")

}catch (error) {
  console.log(error.code)
  let emassage=error.code.split("auth/")[1]
  seterror(emassage)
}


}
console.log(error)
  return (
    <Box className={styles.right_box1}>
    <Text>Bitrix24 Login</Text>
    <hr className={styles.hline} />
    <Box className={styles.errormassage} >  {error &&  <Alert status='error'>
    <AlertIcon />
    {error}
  </Alert>}</Box>

{/* ................Google Login Button................. */}
   {/* <SocialAuthentication/> */}


 


{/* ..............Form Starts.................... */}

    <form onSubmit={handeldsubmite} className={styles.form_controls1} >

  <FormLabel >Email address</FormLabel>
  <Input  htmlSize={55} onChange={(e)=>setemail(e.target.value)} width="530px" className={styles.input_filed11} type='email' />

  <FormLabel >Pasword </FormLabel>
  <Input  htmlSize={55} width="530px" onChange={(e)=>setPassword(e.target.value)} className={styles.input_filed11} type='password' />



    <Text className={styles.text1}>
      By registering you confirm that you accept the <span>Terms of Services</span> and
      <span> Privacy Policy</span> 
    </Text>

    {/* ..........Ckeckboxes........... */}

    <Box className={styles.check_box1}>
      <Checkbox className={styles.checkbox1}  defaultChecked>
       <p className={styles.check_text1}>I want to receive product updates info and special offers</p> 
      </Checkbox>

      <Checkbox className={styles.checkbox1}  defaultChecked>
       <p className={styles.check_text1}> I want to receive training materials</p>
      </Checkbox>
    </Box>
    <hr className={styles.hline}  />


{/* ............Register Buttons.................. */}
    <Box className={styles.btn_box1}>
      <Button type='submite'>LOGIN</Button>
      <Button>FORGOT PASSWORD </Button>
    </Box>
    </form>


<Text className={styles.haveaccounttext1}>New Here {<Link  to={"/Signup"}> Signup Free !</Link>}</Text>
 {/* ..............End Form.............. */}

 <Text className={styles.bottom_text1}>
      This site is protected by reCAPTCHA and the Google  <span>Privacy Policy</span> and <span>Terms of Service</span> apply
      </Text>
  
  
  </Box>
  )
}

export default Loginright