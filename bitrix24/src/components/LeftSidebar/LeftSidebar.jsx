import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";

export function LeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HStack border="1px solid red">
        <Box 
        // border="1px solid blue"
        height={"100vh"} 
        >
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
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
