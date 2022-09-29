import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./signup.module.css";
import bitrixlogo from "../StaticFiles/logobitrix24.svg";
import cloud1 from "../StaticFiles/clouds1.svg";
import cloud2 from "../StaticFiles/clouds2.svg";
import clouds3 from "../StaticFiles/clouds3.svg";
import google from "../StaticFiles/logos/google.png"
import All_Inputs from "./signup_subcompo/Allnputs_signup";

const Signup = () => {





  return (
    <>
      <Box className={styles.main_page}>
        <Box className={styles.left_box}>
          <Image src={cloud1} alt="bitrix24" className={styles.img1} />
          <Image src={cloud2} alt="bitrix24" className={styles.img2} />
          <Image src={clouds3} alt="bitrix24" className={styles.img3} />

          <Box className={styles.f_box}>
            <Image src={bitrixlogo} alt="bitrix24" className={styles.logo_img}/>
            <Text>Back to Site</Text>
          </Box>

          <Box className={styles.middle_box}>
            <Text>
              Your company.<br/><span >United.</span>
            </Text>
            <Text>Free. Unlimited. Online.</Text>
          </Box>
        </Box>

        {/* ...........Right side ........... */}

        <Box className={styles.right_box}>
          <Text>Bitrix24 Registration</Text>
          <hr />
          <Text>Use your social account to register</Text>
          <Button className={styles.btn_google}><Image src={google}/>Google</Button>
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

      </Box>
    </>
  );
};

export default Signup;
