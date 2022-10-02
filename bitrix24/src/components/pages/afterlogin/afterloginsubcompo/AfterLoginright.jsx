import { Text} from "@chakra-ui/react";
import React from "react";
import Useridlogin from "./Useridlogin";
import Userinforight from "./Userinfo.right";
import styles from "../userlogin.module.css";
const AfterLoginright = () => {

  return (
    <div className={styles.wrapbox}>

      <h1 className={styles.title}>Welcome To Bitrix24</h1>
      <hr className={styles.horizontalline} />
      <Text>You are logged on as: </Text>
      <Userinforight />

      <Text>YOUR BITRIX24 ACCOUNTS:</Text>
      <hr className={styles.horizontalline2} />
      <Useridlogin />
    </div>
  );
};

export default AfterLoginright;
