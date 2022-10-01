import React, { useState } from "react";
import styles from "./left.module.css";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const initItems = [
  { id: 1, title: "Subsciption", status: false },
  { id: 3, title: "CRM", status: false },
  { id: 5, title: "Sites and stores", status: false },
  { id: 14, title: "Tasks and Projects", status: false },
  { id: 2, title: "Setting", status: true },
  { id: 4, title: "Marketing", status: true },
  { id: 6, title: "Company", status: true },
  { id: 7, title: "Automation", status: true },
  { id: 8, title: "Market", status: true },
  { id: 9, title: "Feed", status: false, path:"feed" },
  { id: 10, title: "Calender", status: false },
  { id: 11, title: "Online documents", status: true },
  { id: 12, title: "Bitrix24.Drive", status: true },
  { id: 13, title: "Webmail", status: true },
  { id: 15, title: "Chat and Calls", status: true },
];

export function LeftSideDrawer({ isOpen, onOpen, onClose, btnRef }) {
  const [data, setData] = useState(initItems);
  const [show, setShow] = useState(false);
  const showAndHide = () => {
    setShow(!show);
  };
  const handleToggle = (id) => {
    const updateData = data.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setData(updateData);
  };
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent
          //   border="1px solid yellow"
          bgColor={"transparent"}
          marginTop="100px"
          ml={"-50px"}
          p={"0px 0px 0px 50px"}
          overscrollY={"auto"}
          shadow="none"
          className={styles.scroll}
        >
          {/* <DrawerCloseButton /> */}

          <DrawerBody className={styles.drower} color="#ffffff">
            {/* ------------------showing Element------------------ */}

            <Box bg="rgba(169, 167, 167, 0.584)" p="3" borderRadius={10} mb="4">
              {data.map((el, i) => {
                return (
                  !el.status && (
                    <Link to={el.path}><Box
                      display={"flex"}
                      fontWeight={500}
                      w="94%"
                      alignItems={"center"}
                      pr="3"
                      pl="3"
                      justifyContent="space-between"
                      _hover={{
                        bg: "rgba(169, 167, 167, 0.84)",
                        borderRadius: "10",
                      }}
                    >
                      <Text key={i} mb="10px">
                        {el.title}
                      </Text>
                      <Button
                        color={"black"}
                        onClick={() => handleToggle(el.id)}
                        size={"xs"}
                      >
                        <BiHide />
                      </Button>
                    </Box>
                    </Link>
                  )
                );
              })}
            </Box>
            {/* -------------------show or not More Button------------------ */}

            {!show ? (
              <Button color={"black"} mb={"40px"} onClick={showAndHide}>
                More... <ChevronDownIcon />
              </Button>
            ) : (
              <Text
                textAlign={"center"}
                border="1px solid white"
                borderRadius="2xl"
                mb={"40px"}
                mt="40px"
                color={"black"}
              >
                Hidden
              </Text>
            )}

            {/* ---------------Hidden Element -------------------- */}

            {show &&
              data.map((el, i) => {
                return (
                  el.status && (
                    <Box
                      display={"flex"}
                      w="94%"
                      fontWeight={500}
                      alignItems={"center"}
                      pr="3"
                      pl="3"
                      _hover={{
                        bg: "rgba(169, 167, 167, 0.84)",
                        borderRadius: "10",
                      }}
                      justifyContent="space-between"
                    >
                      <Text key={i} mb="10px">
                        {el.title}
                      </Text>
                      <Button
                        color={"black"}
                        onClick={() => handleToggle(el.id)}
                        size={"xs"}
                      >
                        <BiShow />
                      </Button>
                    </Box>
                  )
                );
              })}

            {/* ------------------show or not hide Button ----------------- */}

            {show && (
              <Button color="black" mb="20px" onClick={showAndHide}>
                Hide <ChevronUpIcon />
              </Button>
            )}
            <Text fontSize={"12px"} fontWeight={550} color="#ffffff" mb="20px">
              SITEMAP
            </Text>
            <Text fontSize={"12px"} fontWeight={550} color="#ffffff" mb="20px">
              CONFIGURE MENU
            </Text>
            <Text fontSize={"12px"} fontWeight={550} color="#ffffff" mb="20px">
              INVITE USERS
            </Text>
            <Button color={"black"}>UPGRADE YOUR PLAN</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}