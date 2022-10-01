import {Box} from "@chakra-ui/react";
import React from "react";
import Loginleft from "./login_subcompo/Loginleft";
import Loginright from "./login_subcompo/Loginright";
// import styles from "./login.module.css"
import styles from "./login.module.css";
const Login = () => {
  return (
    <Box className={styles.mainlogin}>
      <Box>
        <Loginleft />
      </Box>


      <Box>
        <Loginright />
      </Box>
    </Box>
  );
};

export default Login;
