import { Box, Button, } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../../config/Firebase'
import styles from "../userlogin.module.css"
const Useridlogin = () => {
    const [user]=useAuthState(auth)
const navigate=useNavigate()
    const openfeed=()=>{
navigate("/feed")
    }
  return (
    <div>
        <Box onClick={openfeed} className={styles.idbox}>
            <p>{user?.uid || "?"}</p>
            <Button onClick={openfeed}>Open</Button>
        </Box>

    </div>
  )
}

export default Useridlogin