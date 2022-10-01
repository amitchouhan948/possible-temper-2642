import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import styles from "../../leftTemplate.module.css"
import bitrixlogo from "../../StaticFiles/logobitrix24.svg";
import cloud1 from "../../StaticFiles/clouds1.svg";
import cloud2 from "../../StaticFiles/clouds2.svg";
import clouds3 from "../../StaticFiles/clouds3.svg";
import { useNavigate } from 'react-router-dom';
const Loginleft = () => {

  const navigate=useNavigate()
  const gobackhomepage=()=>{
navigate("/Homepage")
  }
  return (
        <Box className={styles.left_box1}>
          <Image src={cloud1} alt="bitrix24" className={styles.img11} />
          <Image src={cloud2} alt="bitrix24" className={styles.img21} />
          <Image src={clouds3} alt="bitrix24" className={styles.img31} />

          <Box className={styles.f_box1}>
            <Image src={bitrixlogo} alt="bitrix24" className={styles.logo_img1}/>
            <Box><BsArrowLeft className={styles.back_arrow1} /> 
          <Text onClick={gobackhomepage} className={styles.back_text1} >Back to Site</Text>
          </Box>
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