import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../config/Firebase'
import styles from "../userlogin.module.css"

const Userinforight = () => {

    const [user]=useAuthState(auth)
console.log(user.displayName)
  return (
    <div>
 <Box className={styles.info_box}  >
<Image src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/3293/3293466.png'} />
<Box>
    <Text>{user?.displayName || "Hellow "}</Text>
    <Text>{user?.email}</Text> 
    </Box>
        </Box>

    </div>
  )
}

export default Userinforight