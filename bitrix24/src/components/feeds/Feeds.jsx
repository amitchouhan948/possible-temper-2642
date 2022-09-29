import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import { LeftSidebar } from "../LeftBar/LeftSidebar";
import Message from "./Message/Message";
import { SimpleGrid } from "@chakra-ui/react";
import Allfeeds from "./AllFeeds/Allfeeds";
import WelcomeVideo from "./WelcomeVideo";
import BottomPart from "./BottomPart";
import FeedRight from "./FeedRightSide/FeedRight";

const Feeds = () => {
  const [hours, setHours] = useState(Number);
  const [minutes, setMinute] = useState(Number);
  const [seconds, setSeconds] = useState(Number);

  //------------------=- time -=--------------
  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  setTimeout(() => {
    setHours(hrs);
  }, 1000);

  setTimeout(() => {
    setMinute(min);
  }, 1000);

  setTimeout(() => {
    setSeconds(sec);
  }, 1000);

  return (
    <div>
      <SimpleGrid border="1px solid red" w="1518px">
        <TopNavbar minutes={minutes} hours={hours} />
        <LeftSidebar />
        <Message />
        <Allfeeds minutes={minutes} hours={hours} />
        <WelcomeVideo />
        <BottomPart />
        <FeedRight />
      </SimpleGrid>
    </div>
  );
};

export default Feeds;
