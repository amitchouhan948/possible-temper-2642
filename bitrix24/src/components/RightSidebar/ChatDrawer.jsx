import {
    Box,
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Heading,
    HStack,
    Input,
    Text,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { BiMessageDetail, BiMessageRoundedDetail } from "react-icons/bi";
  import { IoIosNotifications, IoIosCall, IoIosSettings } from "react-icons/io";
  import { RiFeedbackFill } from "react-icons/ri";
  import { BsFillChatDotsFill,} from "react-icons/bs";
  
  
  export function ChatDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button
          ref={btnRef}
          onClick={onOpen}
          borderRadius={"50%"} h="50px"
        >
          <BsFillChatDotsFill/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="2xl"
        >
          <DrawerOverlay />
          <DrawerContent bgColor="white" mr="-100px">
            <DrawerCloseButton
              m="0px"
              p="0px"
              bgColor={"rgba(47,198,246,0.95)"}
              width={"45px"}
              height="35px"
              borderLeftRadius="50px"
              mr="99%"
            />
            <HStack height={"100%"} alignItems="flex-start">
              <Box>
                <VStack gap={"20px"} _hover={{ cursor: "pointer" }} m="10px">
                  <BiMessageDetail color="gray" size={"20px"} />
                  <BiMessageRoundedDetail color="gray" size={"20px"} />
                  <IoIosNotifications color="gray" size={"20px"} />
                  <IoIosCall color="gray" size={"20px"} />
                  <IoIosSettings color="gray" size={"20px"} />
                  <RiFeedbackFill color="gray" size={"20px"} />
                </VStack>
              </Box>
              <Box border={"1px solid gray"} height="100%"></Box>
              <Box width={"250px"}>
                <VStack  gap={"20px"} m="10px">
                  <Box>
                    <Input
                      color="black"
                      placeholder="Search"
                      borderColor={"blackAlpha.700"}
                      borderRadius="10px"
                      width={"100%"}
                    />
                  </Box>
                  <hr style={{ background: "gray", width: "100%" }} />
                  <Box>
                    <HStack color={"black"} borderColor="black" border={"1px solid"} borderRadius="20px" p={"10px"}>
                      <Button
                        borderRadius={"50%"}
                        h="50px"
                        bgColor="rgb(223, 83, 45)"
                      >
                        AT
                      </Button>
                      <VStack>
                        <Heading fontSize={"md"}>Aman Trivedi</Heading>
                        <Text fontSize={"xs"}>
                          Only you can see message in this chat. Post here message
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <Box border={"1px solid gray"} height="100%"></Box>
              <Box  height="100%"  w="100%">
                  <VStack justifyContent={"space-between"} height="100%" w="100%">
                      <Box height={"10%"} width="100%">
                      <HStack color={"black"} p={"10px"} >
                      <Button
                        borderRadius={"50%"}
                        h="50px"
                        bgColor="rgb(223, 83, 45)"
                      >
                        AT
                      </Button>
                      <VStack alignItems="flex-start">
                        <Heading fontSize={"md"}>Aman Trivedi (it's you)</Heading>
                        <Text fontSize={"xs"}>
                          User
                        </Text>
                      </VStack>
                    </HStack>
                      </Box>
                      <Box height={"80%"} width="100%" bgColor={"gray.200"}></Box>
                      <Box height={"20%"} width="100%" ></Box>
                  </VStack>
              </Box>
            </HStack>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  