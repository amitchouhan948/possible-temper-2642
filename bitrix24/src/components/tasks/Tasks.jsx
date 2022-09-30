import { Box, Button, Flex, Hide, Input, Show, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import NavToggle from './NavToggle'
import styles from "./tasks.module.css"
import { MdOutlineNavigateNext } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import NewTaskModal from './NewTaskModal';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineFlashOn } from 'react-icons/md';
import { BiMessageCheck } from 'react-icons/bi';
import { AiFillLock } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';



const Tasks = () => {

const [show,setShow]=useState(true)

console.log(show)

  
  return (
    <div className={styles.background}>
      <Flex height={"100%"} justifyContent="space-between" pt="5%" >

    {/* <LEFT NAV BAR></LEFT> */}
      <Box width="17.2%" border={"1px solid red"} height="100%"></Box>

      {/* Task Box Start */}
      <Box width="76%" border={"1px solid green"} height="100%">

       {/* Box1 */}

       <Flex width="98%"  height="12%" margin={"auto"} backgroundColor="rgb(245 246 249)" borderRadius=".5em" >
          <Box margin={"auto"}><Text  color="rgb(16 88 208)" fontSize={"15px"} fontWeight="500" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >Tasks</Text></Box>

          <Button onClick={()=>setShow(!show)} height="100%" pl="0px" pr="0"><MdOutlineNavigateNext /></Button>  {/* Toggle Button */}

            {show && <NavToggle />}

          <Box margin={"auto"}><Text  color="rgb(84 92 106)" fontSize={"15px"} fontWeight="500" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >Projects</Text></Box>
          <Box margin={"auto"}><Text  color="rgb(84 92 106)" fontSize={"15px"} fontWeight="500" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >Scrum</Text></Box>
          <Box margin={"auto"}><Text  color="rgb(84 92 106)" fontSize={"15px"} fontWeight="500" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >Effiiciency</Text></Box>
          <Box margin={"auto"}><Text  color="rgb(84 92 106)" fontSize={"15px"} fontWeight="500" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >More</Text></Box>
       </Flex>

      {/* Box 2 */}

       <Flex width="98%" m="auto" /*border={"1px solid red"}*/ height="12%" mt="1%" p="1em" >
          <Text width="auto" fontSize={"26px"} fontWeight="200" fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`} >My tasks</Text>
          <Box  ml="6px"><AiFillStar color="a7b0ba"  size="28px" opacity={1} /></Box>
          <Box mt="-8px"><NewTaskModal/></Box>
          <Box width="53%" mt="-8px" ml="12px"  >
            <Input bgColor={"white"}  placeholder='Filter and search' />
          </Box>
           <Box  mt="-8px" ml="12px" ><Button bgColor="rgb(233 237 242 / 40%)" border={".5px solid white"} _hover={{backgroundColor:"rgb(233 237 242 / 66%)"}}><IoMdSettings color="white" size="22px" /></Button></Box>
           <Box mt="-8px" ml="12px" ><Button bgColor="rgb(233 237 242 / 40%)" border={".5px solid white"} _hover={{backgroundColor:"rgb(233 237 242 / 66%)"}}><MdOutlineFlashOn color="white" size="22px" /></Button></Box>
       </Flex>

       {/* Box 3 */}  

       <Flex width="98%" /*border={"1px solid yellow"}*/ height="8%" margin={"auto"}mt="1%">

        <Flex bgColor="rgb(233 237 242 / 40%)" p="1em" borderRadius={"20px"} gap="20px" >
          <Text fontSize={"14px"}>List</Text>
          <Text fontSize={"14px"}>Deadline</Text>
          <Text fontSize={"14px"}>Planner</Text>
          <Text fontSize={"14px"}>Calendar</Text>
          <Text fontSize={"14px"}>Gantt</Text>
        </Flex>

          <Flex gap="160px" >
        <Flex bgColor="rgb(233 237 242 / 40%)" p="1em" borderRadius={"20px"} gap="25px" ml="12px">
          <Text fontSize={"14px"}>My items:</Text>
          <Text fontSize={"14px"}>Overdue</Text>
          <Text fontSize={"14px"}>Comments</Text>
          <Text>|</Text>
          <Text fontSize={"14px"}><BiMessageCheck size="20px" /></Text>
        </Flex>

        <Flex gap="12px">
        <Box   ><Button bgColor="rgb(233 237 242 / 40%)" borderRadius={"20px"} color="white" _hover={{backgroundColor:"rgb(233 237 242 / 66%)"}}><AiFillLock size="22px" /></Button></Box>
          <Box   ><Button bgColor="rgb(233 237 242 / 40%)" borderRadius={"20px"} color="white" _hover={{backgroundColor:"rgb(233 237 242 / 66%)"}}><BsThreeDots size="22px" /></Button></Box>
         
        </Flex>
        </Flex>

       </Flex>

      {/* Box 4 */}

       <Box width="98%" /*border={"1px solid pink"}*/ bgColor="white" borderRadius="20px" height="45%" margin={"auto"}mt="1%">

       </Box>

      {/* Footer */}
      <Flex width="98%" /*border={"1px solid red"}*/ height="12%" margin={"auto"}mt="1%" pb="1em" gap={"10px"} pt=".5em">
      
      <Text fontSize={"18px"} fontWeight="600" borderRadius="5px" p=".2em 1em .2em 1em" bgColor="rgb(233 237 242 / 40%)" border={".5px solid white"}>Bitrix24</Text>
      <Text borderRadius="5px" p=".4em .8em .3em .8em" bgColor="rgb(233 237 242 / 40%)" border={".5px solid white"}>English</Text>
      <p>© 2022 Bitrix24</p>
      <p>|</p>
      <p>Implementation request</p>
      <p>|</p>
      <p>Themes</p>
      <p>|</p>
      <p>Print</p>

      </Flex>



      </Box>
      {/* Task Box Ends*/}

      {/* <RIGHT NAV BAR> */}
      <Box width="5%" border={"1px solid red"} height="100%"></Box>

      </Flex>
     </div>
  )
}

export default Tasks