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
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdCall } from "react-icons/io";

export function MakeACall() {
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
        bgColor={"green"}
      >
        <IoMdCall size={"1.5em"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent p={"20px"} bgColor="whiteAlpha.900">
          <DrawerCloseButton
            m="0px"
            p="0px"
            bgColor={"rgba(47,198,246,0.95)"}
            width={"45px"}
            height="35px"
            borderLeftRadius="50px"
            mr="98%"
          />

          <Box bgColor={"#409eef"} p="20px" borderRadius={"2xl"}>
            <HStack>
              <VStack alignItems={"flex-start"}>
                <Heading>Bitrix24 Telephony</Heading>
                <Text>
                  Call your clients using nothing more than a headset. No
                  additional equipment required, no additional software to
                  install. To unlock Telephony, please upgrade to the Standard
                  or Professional plan.
                </Text>
                <Button colorScheme={"green"}>UPGRADE</Button>
              </VStack>
              <Image
                src="https://www.bitrix24.com/images/content_en/sliders/limit_contact_center_telephony/limit_contact_center_telephony.png"
                width={"250px"}
              />
            </HStack>
          </Box>
          <Box>
            <Text color={"blue.400"}>
              Here’s what else you get when you upgrade:
            </Text>
          </Box>
          <Box>
            <Table color={"black"} fontSize="10px">
              {/* <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead> */}
              <Tbody>
                <Tr>
                  <Td>Built-in telephony</Td>
                </Tr>
                <Tr>
                  <Td>Call back widget</Td>
                </Tr>
                <Tr>
                  <Td>SIP connector for third-party integrations</Td>
                </Tr>
                <Tr>
                  <Td>Client conversation rating</Td>
                </Tr>
                <Tr>
                  <Td>Call statistcs</Td>
                </Tr>
                <Tr>
                  <Td>Open channels</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}
