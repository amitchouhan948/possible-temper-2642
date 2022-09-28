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
  import styles from "./login.module.css";
  import bitrixlogo from "../StaticFiles/logobitrix24.svg";
  import cloud1 from "../StaticFiles/clouds1.svg";
  import cloud2 from "../StaticFiles/clouds2.svg";
  import clouds3 from "../StaticFiles/clouds3.svg";
  
  const Login = () => {
    return (
      <>
        <Box className={styles.main_page}>
          <Box className={styles.left_box}>
            <Image src={cloud1} alt="bitrix24" className={styles.img1} />
            <Image src={cloud2} alt="bitrix24" className={styles.img2} />
            <Image src={clouds3} alt="bitrix24" className={styles.img3} />
  
            <Box className={styles.f_box}>
              <Image src={bitrixlogo} alt="bitrix24" />
              <Text>Back to Site</Text>
            </Box>
  
            <Box className={styles.middle_box}>
              <Text>
                Your company.<span>United.</span>
              </Text>
              <Text>Free. Unlimited. Online.</Text>
            </Box>
          </Box>
  
          {/* ...................... */}
  
          <Box className={styles.right_box}>
            <Text>Bitrix24 Login</Text>
            <hr />
            <Text>Use your social account to register</Text>
            <Button>Google</Button>
            <hr />
            <Text>Enter email</Text>
            <Input className={styles.inpux_box} />
  
            <Text className={styles.text}>
              By registering you confirm that you accept the Terms of Services and
              Privacy Policy
            </Text>
  
            <Box className={styles.check_box}>
              <Checkbox colorScheme="green" defaultChecked>
                I want to receive product updates info and special offers
              </Checkbox>
  
              <Checkbox colorScheme="green" defaultChecked>
                I want to receive training materials
              </Checkbox>
            </Box>
            <hr />
  
            <Box className={styles.btn_box}>
  
              <Button>REGISTER FRO FREE</Button>
              <Button>I HAVE A COUPON</Button>
            </Box>
            
          <Text>	This site is protected by reCAPTCHA and the Google Terms of Services and Privacy Policy</Text>
          </Box>
  
        </Box>
      </>
    );
  };
  
  export default Login;
  