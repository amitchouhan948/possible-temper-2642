import {
  useDisclosure,
  Button,
  Text,
  Input,
  Flex,
  Box,
  border,
} from "@chakra-ui/react";

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

import axios from 'axios'
import { useState } from 'react'


const postTask= async(initialTask)=>{

  try{
      
     let res= await axios.post("http://localhost:8000/task/",initialTask)

     return res.data

  } catch(e){
  
         console.log(e)

  }
}




function NewTaskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [title,setTitle]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()

  postTask({title:title})
    setTitle("");
  

}


  return (
    <>
      <Button
        ref={btnRef}
        bgColor="#b3e728"
        _hover={{ bgColor: "#c9f652eb" }}
        fontSize="12px"
        onClick={onOpen}
        ml="10px"
      >
        <Text color={"#4f5c6b"} mr="10px" >
          NEW TASK
        </Text>{" "}
        <Text color={"#4f5c6b"} mr="10px"  >
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
              <Box m="auto" borderRadius="20px" border="1.5px solid #2dbcea" p=".4em" _hover={{borderRadius:"20px", border:"1.5px solid rgb(168 224 242)"}}>
                <ImCross size={"12px"}  />
              </Box>
              <Text ml="5px">TASK</Text>
            </Flex>
          </DrawerCloseButton>
          <DrawerHeader><Text mt="-50px" ml="20px" color="#d2f959" fontWeight="100" fontSize="25px">New task</Text></DrawerHeader>
           
          <DrawerBody mt='-20px' >
            <Box width={"90%"} bgColor={"white"}  borderRadius={"20px"} height="600px">
                <br/>
                {/* Input Box */}
              
                <Box width="95%" m="auto">
               {/* <TaskInput /> */}
               <Input  value={title} onChange={(e)=>setTitle(e.target.value)} focusBorderColor="none" border="none" borderRadius="none" borderBottom="1px solid #e9eaec" pb="1em" fontSize="larger" color="#757575" placeholder="Things to do" />
                </Box>
            
            </Box>
          </DrawerBody>

          <DrawerFooter    bgColor={"white"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit" >Save</Button>
          </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NewTaskModal;
