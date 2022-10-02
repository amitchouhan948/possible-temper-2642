import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import BottomPart from "../feeds/BottomPart";
import Message from "../feeds/Message/Message";
import TopNavbar from "../feeds/TopNavbar";
import { LeftSidebar } from "../LeftSidebar/LeftSidebar";
import { RightSidebar } from "../RightSidebar/RightSidebar";
import Tasks from './Tasks';

export function MainTaskPage() {
  const [hours, setHours] = useState(Number);
  const [minutes, setMinute] = useState(Number);
  const [seconds, setSeconds] = useState(Number);
  const [month, setMonth] = useState(Number);
  const [date, setDate] = useState(Number);

  //------------------=- time -=--------------
  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const mnth = time.getMonth();
  const dt = time.getDate();

  setTimeout(() => {
    setDate(dt);
    setMonth(mnth);
    setHours(hrs);
    setMinute(min);
    setSeconds(sec);
  }, 1000);
  return (
    <div>
      <SimpleGrid w="100%">
        <TopNavbar minutes={minutes} hours={hours} />
        {/* <LeftSidebar /> */}

        <Box
          display={"flex"}
          w="88%"
          m="auto"
          mt="20px"
          justifyContent={"space-between"}
          // border="1px solid red"
        >
         <Tasks/>
        </Box>
        <BottomPart />

        <Box color={"white"} position={"fixed"}>
          <LeftSidebar />
        </Box>
        <Box
          border={"1px solid rgba(198, 186, 186, 0.274)"}
          bg="rgba(206, 201, 201, 0.16)"
          mr="-4"
          pl="1"
          position={"fixed"}
          right="0"
          _hover={{
            bg: "rgba(198, 186, 186, 0.274)",
          }}
        >
          <RightSidebar />
        </Box>
      </SimpleGrid>
    </div>
  );
}

