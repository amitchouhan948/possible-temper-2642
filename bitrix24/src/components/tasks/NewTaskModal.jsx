import {
  useDisclosure,
  Button,
  Text,
  Input,
  Flex,
  Box,
  border,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import {auth} from "../../config/Firebase";
  
 

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { TbMinusVertical } from "react-icons/tb";
// import TaskInput from "./TaskInput";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoMention } from "react-icons/go";
import { FaQuoteRight } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";

const postTask = async (initialTask) => {
  try {
    let res = await axios.post(
      "https://bitrix24-render-backend-deploy.onrender.com/tasks",
      initialTask
    );

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

function NewTaskModal({ updateTasks }) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [saveButton, setSaveButton] = useState(true);

  console.log(deadline);

  const handleSubmit = (e) => {
    e.preventDefault();

    postTask({ title: title, deadline: deadline }).then((res) => updateTasks());
    setTitle("");
  };
  const [user] = useAuthState(auth);

  return (
    <>
      <Button
        ref={btnRef}
        bgColor="#b3e728"
        _hover={{ bgColor: "#c9f652eb" }}
        fontSize="18px"
        onClick={onOpen}
        ml="10px"
      >
        <Text fontSize="17px" color={"#4f5c6b"} mr="10px">
          NEW TASK
        </Text>{" "}
        <Text color={"#4f5c6b"} mr="10px">
          <TbMinusVertical />
        </Text>{" "}
        <AiFillCaretDown color={"#4f5c6b"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#eef2f4">
          <form onSubmit={handleSubmit}>
            <DrawerCloseButton
              borderRadius={"20px"}
              borderTopRightRadius={"none"}
              borderBottomRightRadius={"none"}
              width="70px"
              backgroundColor={"#2dbcea"}
              position={"left"}
              ml="-70px"
              mt="20px"
              color="white"
              _hover={"none"}
            >
              <Flex>
                <Box
                  m="auto"
                  borderRadius="20px"
                  border="1.5px solid #2dbcea"
                  p=".4em"
                  _hover={{
                    borderRadius: "20px",
                    border: "1.5px solid rgb(168 224 242)",
                  }}
                >
                  <ImCross size={"12px"} />
                </Box>
                <Text ml="5px">TASK</Text>
              </Flex>
            </DrawerCloseButton>
            {/* Drawer Header */}
            <DrawerHeader>
              <Flex mt="-50px" width="90%" justify={"space-between"}>
                <Text
                  ml="20px"
                  color="#d2f959"
                  fontWeight="100"
                  fontSize="25px"
                  width="150px"
                >
                  New task
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Box ml="12px">
                    <Button
                      mr="12px"
                      bgColor="rgb(233 237 242 / 40%)"
                      border={"1px solid #444850"}
                      variant="outline"
                      _hover={{ backgroundColor: "rgb(233 237 242 / 66%)" }}
                    >
                      <IoMdSettings color="#535c69" size="22px" />
                    </Button>
                  </Box>
                  <Button width="200px" fontSize={"12px"} variant="outline">
                    <Text color="#535c69">TASK TEMPLATES</Text>
                  </Button>
                </Flex>
              </Flex>
            </DrawerHeader>

            <DrawerBody mt="-20px">
              <Box
                width={"90%"}
                bgColor={"white"}
                borderRadius={"20px"}
                height="500px"
              >
                <br />
                {/* Input Box */}
                <Box width="95%" m="auto" >
                  {/* <TaskInput /> */}
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    focusBorderColor="none"
                    border="none"
                    borderRadius="none"
                    borderBottom="1px solid #e9eaec"
                    pb="1em"
                    fontSize="larger"
                    color="#757575"
                    placeholder="Things to do"
                  />
                </Box>
                <Flex width="95%" margin="auto" mt="180px" gap="20px">
                  <Box>
                    <Button variant="unstyled">
                      <Flex gap="5px">
                        <ImAttachment color="rgb(214 218 221)" />
                        <Text
                          mt="-3px"
                          _hover={{ color: "rgb(189 194 198)" }}
                          color="rgb(214 218 221)"
                        >
                          File
                        </Text>
                      </Flex>
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="unstyled">
                      <Flex gap="5px">
                        <HiOutlineDocumentText color="rgb(214 218 221)" />
                        <Text
                          mt="-3px"
                          _hover={{ color: "rgb(189 194 198)" }}
                          color="rgb(214 218 221)"
                        >
                          New document
                        </Text>
                      </Flex>
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="unstyled">
                      <Flex gap="5px">
                        <GoMention color="rgb(214 218 221)" />
                        <Text
                          mt="-3px"
                          _hover={{ color: "rgb(189 194 198)" }}
                          color="rgb(214 218 221)"
                        >
                          Mention
                        </Text>
                      </Flex>
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="unstyled">
                      <Flex gap="5px">
                        <FaQuoteRight color="rgb(214 218 221)" />
                        <Text
                          mt="-3px"
                          _hover={{ color: "rgb(189 194 198)" }}
                          color="rgb(214 218 221)"
                        >
                          Quote
                        </Text>
                      </Flex>
                    </Button>
                  </Box>
                  <Box>
                    <Text
                      _hover={{ color: "rgb(189 194 198)" }}
                      color="rgb(214 218 221)"
                      pt=".6em"
                    >
                      Checklist
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      _hover={{ color: "rgb(189 194 198)" }}
                      color="rgb(214 218 221)"
                      pt=".6em"
                    >
                      Add to checklist
                    </Text>
                  </Box>
                </Flex>

                <Box
                  width="96%"
                  height="200px"
                  margin="auto"
                  bgColor={"#eef2f4"}
                  borderRadius="20px"
                >
                  {/* Flex1 */}
                  <Flex width="90%" m="auto" p="1em">
                    <Text mr="33px" color="#757575">
                      Responsible person
                    </Text>
                    <Input
                      focusBorderColor="none"
                      width="400px"
                      bgColor={"white"}
                      type="text"
                      color="#535c69"
                      value={user?.displayName || "Any Person"}
                    ></Input>
                  </Flex>

                  {/* Flex2 */}

                  <Flex width="90%" m="auto" p="1em">
                    <Text mr="100px" color="#757575">
                      Deadline
                    </Text>
                    {/* Date input Box */}
                    <Input
                      focusBorderColor="none"
                      width="200px"
                      bgColor={"white"}
                      required={true}
                      type="date"
                      color="#535c69"
                      onChange={(e) => setDeadline(e.target.value)}
                    ></Input>
                  </Flex>
                  {/* Flex3 */}
                  <Flex width="90%" m="auto" p="1em">
                    <Text color="#757575">Task status summary</Text>

                    <Checkbox
                      ml="30px"
                      mt="3px"
                      height="16px"
                      bgColor="white"
                    ></Checkbox>
                    <Text color="#757575" ml="15px">
                      Require task status summary
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </DrawerBody>

            <DrawerFooter
              width="100%"
              position="fixed"
              bottom={"0"}
              zIndex={3}
              mt="-72px"
              bgColor={"white"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            >
              <Flex gap="20px" width="98%" margin="auto">
                <Button
                  fontSize={"12px"}
                  type="submit"
                  onClick={() => {
                    toast({
                      title: `Task added successfully`,
                      isClosable: true,
                      position: "top-right",
                    });
                    onClose();
                  }}
                  color="#535c69"
                  bgColor="#bbed21"
                  _hover={{ bgColor: "#d2f95f" }}
                >
                  ADD TASK(CTRL+ENTER)
                </Button>
                <Button
                  fontSize={"12px"}
                  type="submit"
                  color="#535c69"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: `Task added successfully`,
                      isClosable: true,
                      position: "top-right",
                    });
                  }}
                >
                  ADD TASK AND CREATE ANOTHER ONE
                </Button>
                <Button
                  fontSize={"12px"}
                  variant="unstyled"
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </Flex>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewTaskModal;
