import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsApple } from "react-icons/bs";
import { AiFillWindows, AiOutlinePlusCircle } from "react-icons/ai";
import RightLogo from "./RightLogo.png";
import AppstorImg from "./appstor.png";
import GooglePlayImg from "./googleplay.png";
import { useEffect } from "react";
import { getMessage2 } from "../Api/Api";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/Firebase";

const FeedRight = () => {
  const [message, setMessage] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    getMessage2()
      .then((res) => {
        setMessage(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <SimpleGrid width="100%" float={"right"} mt="4" mr="11%">
        {/* ----------------- (Logo profile) ------------------- */}

        <Box bg="#ffffff" w="97%" borderRadius={10} h="90" display={"flex"}>
          <Image w={"70px"} h={"60px"} mt="2" src={RightLogo} alt="logo" />
          <Box
            fontSize={"23px"}
            bg={"#7b8691"}
            color={"#ffffff"}
            borderRadius="50px"
            w="40px"
            ml="4"
            mt="5"
            h="10"
          >
            <Image w="45px" borderRadius={"50px"} src={user.photoURL || ""} />
          </Box>
        </Box>

        {/* ------------------ (Company pulse) ----------------*/}
        <Box
          w="97%"
          bg="#2dc2f2"
          display={"flex"}
          fontSize="14"
          mt="5"
          color={"#ffffff"}
          fontWeight={550}
          p="1.5"
          justifyContent={"space-between"}
          borderRadius={5}
          alignItems="center"
        >
          <Text ml="1">COMPANY PULSE</Text>

          <Box
            borderRadius={10}
            color="black"
            p={1}
            pr={2}
            pl={2}
            bg={"#ffffff"}
            display={"flex"}
            justifyContent={"space-between"}
            gap="10"
          >
            <Text color="black" ml="3">
              0
            </Text>
            <Text color={"#2dc2f2"}>0%</Text>
          </Box>
        </Box>

        {/* ------------------- (My task) -------------- */}
        <Box w="97%" mt="5">
          <Box
            bg="#2dc2f2"
            w="100%"
            display={"flex"}
            fontSize="14"
            color={"#ffffff"}
            fontWeight={400}
            p="1.5"
            justifyContent={"space-between"}
            alignItems="center"
            borderTopRadius={10}
          >
            <Text ml="1">MY TASKS</Text>
            <Text fontSize={27}>
              <AiOutlinePlusCircle />
            </Text>
          </Box>

          <Box
            bg="#ffffff"
            borderBottomRadius={10}
            p="2"
            fontWeight={400}
            fontSize="15"
          >
            <Box
              mt="1"
              borderBottom={"1px solid rgba(128, 128, 128, 0.288)"}
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Text color="black">Ongoing</Text>
              <Box display={"flex"} justifyContent="space-between" gap={10}>
                <Text color="rgba(19, 19, 19, 0.826)" fontSize={24}>
                  0
                </Text>
                <Text
                  bg="#f8e7ef"
                  color="#f47fa1"
                  mt="2"
                  w="22px"
                  h="22px"
                  fontSize={16}
                  borderRadius="50px"
                >
                  0
                </Text>
              </Box>
            </Box>
            <Box
              mt="3"
              borderBottom={"1px solid rgba(128, 128, 128, 0.288)"}
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Text color="rgba(19, 19, 19, 0.826)">Assisting</Text>
              <Box display={"flex"} justifyContent="space-between" gap={10}>
                <Text color="rgba(19, 19, 19, 0.826)" fontSize={24}>
                  0
                </Text>
                <Text
                  bg="#f8e7ef"
                  color="#f47fa1"
                  mt="2"
                  w="22px"
                  h="22px"
                  fontSize={16}
                  borderRadius="50px"
                >
                  0
                </Text>
              </Box>
            </Box>
            <Box
              mt="3"
              borderBottom={"1px solid rgba(128, 128, 128, 0.288)"}
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Text color="rgba(19, 19, 19, 0.826)">Set by me</Text>
              <Box display={"flex"} justifyContent="space-between" gap={10}>
                <Text color="rgba(19, 19, 19, 0.826)" fontSize={24}>
                  0
                </Text>
                <Text
                  bg="#f8e7ef"
                  color="#f47fa1"
                  mt="2"
                  w="22px"
                  h="22px"
                  fontSize={16}
                  borderRadius="50px"
                >
                  0
                </Text>
              </Box>
            </Box>
            <Box
              mt="3"
              borderBottom={"1px solid rgba(128, 128, 128, 0.288)"}
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Text color="rgba(19, 19, 19, 0.826)">Following</Text>
              <Box display={"flex"} justifyContent="space-between" gap={10}>
                <Text color="rgba(19, 19, 19, 0.826)" fontSize={24}>
                  0
                </Text>
                <Text
                  bg="#f8e7ef"
                  color="#f47fa1"
                  mt="2"
                  w="22px"
                  h="22px"
                  fontSize={16}
                  borderRadius="50px"
                >
                  0
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* --------------------- (POPULAR POSTS) --------------- */}
        <Box w="97%" mt="5">
          <Box
            bg="#58cbdb"
            w="100%"
            fontSize="14"
            color={"#ffffff"}
            fontWeight={400}
            textAlign="left"
            p="1.5"
            borderTopRadius={10}
          >
            <Text ml="1">POPULAR POSTS</Text>
          </Box>

          <Box
            bg="#ffffff"
            borderBottomRadius={10}
            p="2"
            fontWeight={400}
            fontSize="16"
          >
            {message.map((item) => (
              <Box
                key={item.id}
                borderBottomRadius={10}
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Box
                  overflow="hidden"
                  display={"flex"}
                  justifyContent="space-between"
                  gap={4}
                >
                  <Box
                    fontSize={"22px"}
                    bg={"#7b8691"}
                    color={"#ffffff"}
                    borderRadius="50px"
                    w="38px"
                    ml="0"
                    mt="2"
                    h="38px"
                  >
                    <Image
                      w="40px"
                      borderRadius={"50px"}
                      src={user.photoURL || ""}
                    />
                  </Box>
                  <Box mt="2" textAlign={"left"}>
                    <Text color="black">{item.email}</Text>
                    <Text color={"#246ab1"} fontWeight={500}>
                      {item.message}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* -------------------(DESKTOP CLIENT) ---------------- */}
        <Box w="97%" mt="5">
          <Box
            bg="#4ae2c3"
            w="100%"
            fontSize="14"
            color={"#ffffff"}
            fontWeight={400}
            textAlign="left"
            p="1.5"
            borderTopRadius={10}
          >
            <Text ml="1">DESKTOP CLIENT</Text>
          </Box>

          <Box
            bg="#ffffff"
            borderBottomRadius={10}
            p="2"
            fontWeight={400}
            fontSize="14"
          >
            <Box
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box
                fontWeight={500}
                fontSize={20}
                display={"flex"}
                justifyContent="space-between"
                gap={"48px"}
                color="grey"
                p="3"
              >
                <Box display={"flex"} alignItems="center">
                  <BsApple />
                  <Text color="rgba(19, 19, 19, 0.826)" ml="1" fontSize={14}>
                    MAC OS
                  </Text>
                </Box>

                <Box display={"flex"} alignItems="center">
                  <AiFillWindows />
                  <Text color="rgba(19, 19, 19, 0.826)" ml="1" fontSize={13}>
                    WINDOWS
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ------------------- (MOBILE APPLICATION) -------------- */}
        <Box w="97%" mt="5">
          <Box
            bg="#4ac1f7"
            w="100%"
            fontSize="14"
            color={"#ffffff"}
            fontWeight={400}
            textAlign="left"
            p="1.5"
            borderTopRadius={10}
          >
            <Text ml="1">MOBILE APPLICATION</Text>
          </Box>

          <Box
            bg="#ffffff"
            borderBottomRadius={10}
            p="1"
            fontWeight={400}
            fontSize="13"
          >
            <Box
              borderBottomRadius={10}
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box
                fontWeight={500}
                fontSize={20}
                display={"flex"}
                justifyContent="space-between"
                gap={4}
                color="grey"
                p="3"
              >
                <Box display={"flex"} alignItems="center">
                  <Image w="24px" src={AppstorImg} alt="AppstorImg" />
                  <Text color="rgba(19, 19, 19, 0.826)" ml="0" fontSize={14}>
                    APP STORE
                  </Text>
                </Box>

                <Box display={"flex"} alignItems="center">
                  <Image w="24px" src={GooglePlayImg} alt="GooglePlayImg" />
                  <Text color="rgba(19, 19, 19, 0.826)" ml="0" fontSize={13}>
                    GOOGLE PLAY
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default FeedRight;
