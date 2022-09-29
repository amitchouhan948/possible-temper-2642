import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaMobileAlt } from "react-icons/fa";

export function DownLoadMobileApp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        borderRadius={"50%"}
        h="50px"
        bgColor={"#55cfdff0"}
      >
        <FaMobileAlt size={"1.5em"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            m="0px"
            p="0px"
            bgColor={"rgba(47,198,246,0.95)"}
            width={"60px"}
            height="40px"
            borderLeftRadius="50px"
            mr="98%"
          />

          <DrawerHeader>Mobile App</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
