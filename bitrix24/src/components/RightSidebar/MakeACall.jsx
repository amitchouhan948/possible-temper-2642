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

const PlanTable = () => {
  return (
    <Table color={"black"} fontSize="12px" colorScheme={"whiteAlpha"}>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Your Plan</Th>
          <Th>Professional</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Built-in telephony</Td>
          <Td>-</Td>
          <Td>✓</Td>
        </Tr>
        <Tr>
          <Td>Call back widget</Td>
          <Td>-</Td>
          <Td>✓</Td>
        </Tr>
        <Tr>
          <Td>SIP connector for third-party integrations</Td>
          <Td>-</Td>
          <Td>✓</Td>
        </Tr>
        <Tr>
          <Td>Client conversation rating</Td>
          <Td>-</Td>
          <Td>✓</Td>
        </Tr>
        <Tr>
          <Td>Call statistcs</Td>
          <Td>-</Td>
          <Td>✓</Td>
        </Tr>
        <Tr>
          <Td>Open channels</Td>
          <Td>1</Td>
          <Td>Unlimited</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

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

          <Box overflowY={"scroll"}>
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
              <Text
                color={"blue.400"}
                textAlign="center"
                mt={"50px"}
                mb="100px"
              >
                Here’s what else you get when you upgrade:
              </Text>
            </Box>
            <Box>
              <PlanTable />
            </Box>
            <Box>
              <Text color={"blue.400"} textAlign="center" mt="30px" mb="30px">Unlock your full business potential with Bitrix24!</Text>
              <HStack justifyContent={"space-around"} w="60%" m="auto">
                <Button bgColor={"green.400"} size="sm" borderRadius="20px">UPGRADE</Button>
                <Button colorScheme={"cyan"} size="sm" borderRadius="20px">TRY 15 DAYS FREE</Button>
              </HStack>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}
