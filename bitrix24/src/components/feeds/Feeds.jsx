import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { LeftSidebar } from "../LeftBar/LeftSidebar";
import Message from "./Message/Message";
import { Box, SimpleGrid } from "@chakra-ui/react";
import WelcomeVideo from "./Wecome Video/WelcomeVideo";
import BottomPart from "./BottomPart";
import FeedRight from "./FeedRightSide/FeedRight";

const Feeds = () => {
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
        <LeftSidebar />

        <Box display={"flex"} w="100%" justifyContent={"space-between"}>
          <Box ml="4%" w="71%">
            <Message
              minutes={minutes}
              hours={hours}
              month={month}
              date={date}
            />
            <WelcomeVideo
              minutes={minutes}
              hours={hours}
              month={month}
              date={date}
            />
            <BottomPart />
          </Box>
          <Box w="18%" mr="4%">
            <FeedRight />
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Feeds;
