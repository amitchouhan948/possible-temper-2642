import { Button, VStack } from "@chakra-ui/react";
import { IoIosNotifications, IoIosHelpCircle } from "react-icons/io";
import { BsFillChatDotsFill, BsSearch } from "react-icons/bs";
import { MakeACall } from "./MakeACall";
import React from "react";
import { DownLoadMobileApp } from "./DownLoadMobileApp";

export function RightSidebar() {
  return (
    <>
      <VStack
        justifyContent="space-between"
        border={"1px solid green"}
        height="100vh"
        p={"20px 0px 20px 0px"}
      >
        <VStack>
          <Button borderRadius={"50%"} h="50px">
            <IoIosHelpCircle size={"1.5em"} />
          </Button>

          <Button borderRadius={"50%"} h="50px">
            <IoIosNotifications size={"1.5em"} />
          </Button>
          <Button borderRadius={"50%"} h="50px">
            <BsFillChatDotsFill size={"1.5em"} />
          </Button>
          <Button borderRadius={"50%"} h="50px">
            <BsSearch size={"1.5em"} />
          </Button>
          <Button borderRadius={"50%"} h="50px" bgColor="rgb(223, 83, 45)">
            AT
          </Button>
        </VStack>
        <VStack>
          <DownLoadMobileApp />
          <MakeACall />
        </VStack>
      </VStack>
    </>
  );
}
