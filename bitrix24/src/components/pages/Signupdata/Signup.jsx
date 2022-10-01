import {Box} from "@chakra-ui/react";
import React from "react";
import styles from "./signup.module.css";
import Signupleft from "./Signup_sub_components/Signupleft";
import Signupright from "./Signup_sub_components/Signupright";
const Signup = () => {
  return (
    <>
    <Box className={styles.mainsignup}>
      <Box>
        <Signupleft />
      </Box>


      <Box>
        <Signupright />
      </Box>
    </Box>
    
    </>
  );
};

export default Signup;
