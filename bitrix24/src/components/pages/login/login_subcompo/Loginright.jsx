import { Box, Button, Checkbox, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./subcompo.module.css"
import GoogleButton from 'react-google-button'
const Loginright = () => {














  return (
    <Box className={styles.right_box}>
    <Text>Bitrix24 Login</Text>
    <hr />
    <Text>Use your social account to register</Text>

    <GoogleButton className={styles.btn_google}
  onClick={() => { console.log('Google button clicked') }}
/>
    <hr />


    <FormControl className={styles.form_controls} >
  <FormLabel>Email address</FormLabel>
  <Input className={styles.input_filed} type='email' />
  <FormLabel>Pasword </FormLabel>
  <Input  className={styles.input_filed} type='password' />



    <Text className={styles.text}>
      By registering you confirm that you accept the Terms of Services and
      Privacy Policy
    </Text>
    <Box className={styles.check_box}>
      <Checkbox className={styles.checkbox} colorScheme="green" defaultChecked>
       <p className={styles.check_text}>I want to receive product updates info and special offers</p> 
      </Checkbox>

      <Checkbox className={styles.checkbox} colorScheme="green" defaultChecked>
       <p className={styles.check_text}> I want to receive training materials</p>
      </Checkbox>
    </Box>
    <hr />

    <Box className={styles.btn_box}>

      <Button>Login</Button>
      <Button>Forgot Password</Button>
    </Box>
    </FormControl>
  <Text className={styles.bottom_text}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</Text>
  </Box>
  )
}

export default Loginright