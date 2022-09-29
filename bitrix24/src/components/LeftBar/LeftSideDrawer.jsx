import React from "react";
import styles from "./left.module.css";
import { Box, Drawer, DrawerBody, DrawerContent, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiPlay } from "react-icons/bi";

export function LeftSideDrawer({ isOpen, onClose, btnRef }) {
  const [Collaboration, setCollaboration] = useState(false);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerContent
          bgColor={"#7b869164"}
          marginTop="80px"
          ml={"-50px"}
          p={"0px 0px 0px 50px"}
          overscrollY={"auto"}
          shadow="none"
          className={styles.scroll}
          borderRightRadius="10px"
          color="#ffffff"
        >
          <DrawerBody ml="6">
            <Text
              color={"black"}
              textAlign="center"
              borderRadius="10px"
              fontsize="17px"
              w="180px"
              p={0}
              pl="6"
              bg="#7b8691"
              display={"flex"}
              gap="4"
              onClick={() => setCollaboration(!Collaboration)}
            >
              Collaboration
              <BiPlay
                style={{
                  rotate: ( Collaboration ? "90deg" : "0deg"),
                  marginTop: "5px",
                }}
              />
            </Text>
            <Box
              display={Collaboration ? "grid" : "none"}
              gap="2"
              mt={4}
              fontSize={"17px"}
              pt="3"
              pb="3"
              pl="2"
              borderRadius={10}
              bg="#7b8691"
            >
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Feed</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Chat and Calls</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Calender</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Online documents</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Bitrix24.Drive</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Webmail</Text>
              <Text _hover={{ bg: "white", color:"black" }} pl="4" borderRadius={10} >Workgroup</Text>
            </Box>
            <Box display={"grid"} gap="2" mt={4} fontSize={"17px"}>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Task and Projects</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >CRM</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Marketing</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Sites and stores</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Company</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Automation</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >Application</Text>
              <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10} >More</Text>
            </Box>
            <Text
              _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10}
              fontSize={"13px"}
              mt="30px"
              mb="10px"
            >
              SITEMAP
            </Text>
            <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10}  fontSize={"13px"} mb="10px">
              CONFIGURE MENU
            </Text>
            <Text _hover={{ bg: "#7b8691" }} pl="4" borderRadius={10}  fontSize={"13px"} mb="20px">
              INVITE USERS
            </Text>
            <Text
              color={"black"}
              textAlign="center"
              borderRadius="10px"
              fontsize="17px"
              w="180px"
              p={1}
              pl="2"
              pr="2"
              bg="white"
            >
              UPGRADE YOUR PLAN
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
