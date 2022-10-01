import {  VStack } from "@chakra-ui/react";
import { MakeACall } from "./MakeACall";
import React from "react";
import { DownLoadMobileApp } from "./DownLoadMobileApp";
import { UsersDrawer } from "./UsersDrawer";
import { SearchDrawer } from "./SearchDrawer";
import { ChatDrawer } from "./ChatDrawer";
import { NotificationDrawer } from "./NotificationDrawer";
import { HelpDrawer } from "./HelpDrawer";

export function RightSidebar() {
  return (
    <>
      <VStack
        justifyContent="space-between"
        //  border={"1px solid green"}
        bgColor="transparent"
        height="100vh"
        p={"20px 0px 20px 0px"}
        mr="20px"
      >
        <VStack>
         <HelpDrawer/>

          <NotificationDrawer/>
          <ChatDrawer/>
         <SearchDrawer/>
          <UsersDrawer/>
        </VStack>
        <VStack>
          <DownLoadMobileApp />
          <MakeACall />
        </VStack>
      </VStack>
    </>
  );
}
