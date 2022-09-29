import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "./subcompo.module.css"
const All_Inputs = () => {
  return (
    <Box className={styles.input_div}>
        
        <input />
        <Input type="password" />

    </Box>
  )
}

export default All_Inputs