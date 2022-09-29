import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

import bitrixlogo from "../../StaticFiles/logobitrix24.svg";
import cloud1 from "../../StaticFiles/clouds1.svg";
import cloud2 from "../../StaticFiles/clouds2.svg";
import clouds3 from "../../StaticFiles/clouds3.svg";
import styles from "./subcompo.module.css"
const Loginleft = () => {
  return (

        
     
        <Box className={styles.left_box1}>
          <Image src={cloud1} alt="bitrix24" className={styles.img11} />
          <Image src={cloud2} alt="bitrix24" className={styles.img21} />
          <Image src={clouds3} alt="bitrix24" className={styles.img31} />

          <Box className={styles.f_box1}>
            <Image src={bitrixlogo} alt="bitrix24" className={styles.logo_img1}/>
            <Text >Back to Site</Text>
          </Box>

          <Box className={styles.middle_box1}>
            <Text>
              Your company.<br/><span >United.</span>
            </Text>
            <Text>Free. Unlimited. Online.</Text>
          </Box>
        </Box>


  )
}

export default Loginleft