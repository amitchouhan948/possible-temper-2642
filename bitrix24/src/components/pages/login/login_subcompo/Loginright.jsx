import { Box, Button, Checkbox, Input, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./subcompo.module.css"

const Loginright = () => {
  return (
    <Box className={styles.right_box}>
    <Text>Bitrix24 Registration</Text>
    <hr />
    <Text>Use your social account to register</Text>
    <Button className={styles.btn_google}>Google</Button>
    <hr />
    <Text>Enter email</Text>


    <Input className={styles.inpux1_box} />

    <Text className={styles.text}>
      By registering you confirm that you accept the Terms of Services and
      Privacy Policy
    </Text>
    <Box className={styles.check_box}>
      <Checkbox className={styles.checkbox} colorScheme="green" defaultChecked>
        I want to receive product updates info and special offers
      </Checkbox>

      <Checkbox className={styles.checkbox} colorScheme="green" defaultChecked>
        I want to receive training materials
      </Checkbox>
    </Box>
    <hr />

    <Box className={styles.btn_box}>

      <Button>REGISTER FRO FREE</Button>
      <Button>I HAVE A COUPON</Button>
    </Box>
    
  <Text className={styles.bottom_text}>This site is protected by reCAPTCHA and the Google Terms of Services and Privacy Policy</Text>
  </Box>
  )
}

export default Loginright