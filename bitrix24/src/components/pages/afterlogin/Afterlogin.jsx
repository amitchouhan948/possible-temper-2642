import { Box } from '@chakra-ui/react'
import React from 'react'
import Afterloginleft from '../login/login_subcompo/Loginleft'
import AfterLoginright from './afterloginsubcompo/AfterLoginright'
import styles from "./userlogin.module.css"
const Afterlogin = () => {
  return (
    <div>
        
        <Box className={styles.userlogin}>
      <Box>
        <Afterloginleft/>
      </Box>


      <Box>
        <AfterLoginright />
      </Box>
    </Box>
    </div>
  )
}

export default Afterlogin