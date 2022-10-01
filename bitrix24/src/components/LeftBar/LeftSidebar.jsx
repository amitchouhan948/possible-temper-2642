import { HamburgerIcon } from "@chakra-ui/icons";
import { Heading, Box, Button, HStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import { AiOutlineMenu } from "react-icons/ai";

export function LeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HStack
      border="1px solid red"
      >
        <Box
          border="1px solid blue"
          height={"100vh"}
          position="absolute"
          top={0}
          pt="7"
        >
          <Box display={"flex"} gap="6" alignItems={"center"}>
            <Box ml={3} fontSize={"23px"} color="#ffffff">
              <AiOutlineMenu ref={btnRef} onClick={onOpen} />
            </Box>
            <Heading fontSize={"23px"} color={"#ffffff"} mb="1">
              Bitrix <span style={{ color: "#2fc6f7" }}>24</span>
            </Heading>
          </Box>
          <Box
            //   border={"1px solid green"}
            bgColor={"transparent"}
          >
            <LeftSideDrawer
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              btnRef={btnRef}
            />
          </Box>
        </Box>
      </HStack>
    </>
  );
}
