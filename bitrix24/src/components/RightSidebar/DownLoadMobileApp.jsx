import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
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
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="whiteAlpha.900">
          <DrawerCloseButton
            m="0px"
            p="0px"
            bgColor={"rgba(47,198,246,0.95)"}
            width={"45px"}
            height="35px"
            borderLeftRadius="50px"
            mr="98%"
          />
          <Box overflowY={"scroll"}>
          <VStack
            justifyContent={"center"}
            alignItems="center"
            opacity={"0.9"}
            bgImage="url('https://www.bitrix24.ua/upload/landing/6c3/6c3359b73d20625cd0ab493f70f9b6b4.jpg')"
            bgRepeat={"no-repeat"}
            bgSize="cover"
            bgPosition={"left"}
            h={"380px"}
          >
            <Heading color={"black"}>BITRIX24 FREE MOBILE APP</Heading>
            <Button colorScheme={"red"}>DOWNLOAD FREE</Button>
          </VStack>
          <Box textAlign={"center"}>
            <Text color={"black"} m="20px 30px 20px 30px" fontSize={"xl"}>Stay in touch and set tasks quickly and easily. Keep track of deadlines and manage projects, even on the go!</Text>
          </Box>
          <VStack
            justifyContent={"center"}
            alignItems="center"
            opacity={"0.9"}
            bgImage="url('https://www.bitrix24.com/images/content_en/sliders/mobile_app/chat.jpeg')"
            bgRepeat={"no-repeat"}
            bgSize="cover"
            h={"550px"}
          >
          </VStack>
          <VStack
            justifyContent={"center"}
            alignItems="center"
            opacity={"0.9"}
            bgImage="url('https://www.bitrix24.com/upload/landing/4f7/4f76fe03732c8e6cc89b9fdddb298600.jpeg')"
            bgRepeat={"no-repeat"}
            bgSize="cover"
            h={"300px"}
          >
          </VStack>
          <Box textAlign={"center"} >
            <Text color={"black"} m="20px 30px 20px 30px" fontSize={"xl"}>Install the Bitrix24 mobile app today. Scan the QR code above to download the app right now.</Text>
          </Box>
          <HStack justifyContent={"center"} w="60%" m="auto" mb={"50px"}>
          <img src="https://www.bitrix24.com/images/content_common/icons/appstore/google-play-badge-en.svg" height="40"/>
          <img src="https://www.bitrix24.com/images/content_common/icons/appstore/app-store-badge-en.svg" height="40"/>
          </HStack>
          </Box>
          
        </DrawerContent>
      </Drawer>
    </>
  );
}
