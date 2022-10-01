import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import { SiCivicrm,SiMarketo,SiBandrautomation } from 'react-icons/si';
import { MdTask,MdFeed,MdOutlineDeveloperMode,MdSubscriptions } from 'react-icons/md';
import { AiFillSetting,AiFillMail } from 'react-icons/ai';
import { BsFillCalendarDayFill,BsFillChatSquareTextFill,BsFillCartDashFill} from 'react-icons/bs';
import { HiDocumentText,} from 'react-icons/hi';
import {GrWorkshop} from 'react-icons/gr';

export function LeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <HStack 
      // border="1px solid red"
      ml="10px"
      width={"50px"}
      >
        <Box
          // border="1px solid blue"
          width="100%"
          height={"100%"}
        >
          <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon />
          </Button>
          <Box display={isOpen?"none":"inline-block"}>
            <Button mt="0px" bg="none">
              <SiCivicrm size={"25px"}/>
            </Button>
            <Button mt="-30px" bg="none">
              <MdTask size={"25px"}/>
            </Button>
            <Button mt="-60px" bg="none">
              <AiFillSetting size={"25px"}/>
            </Button>
            <Button mt="-90" bg="none">
              <SiMarketo size={"25px"}/>
            </Button>
            <Button mt="-120px" bg="none">
              <SiBandrautomation size={"25px"}/>
            </Button>
            <Button mt="-150px" bg="none">
              <HiDocumentText size={"25px"}/>
            </Button>
            <Button mt="-180px" bg="none">
              <BsFillChatSquareTextFill size={"25px"}/>
            </Button>
            <Button mt="-210px" bg="none">
              <BsFillCalendarDayFill size={"25px"}/>
            </Button>
            <Button mt="-240px" bg="none">
              <MdFeed size={"25px"}/>
            </Button>
            <Button mt="-270px" bg="none">
              <GrWorkshop size={"25px"}/>
            </Button>
            <Button mt="-300px" bg="none">
              <MdOutlineDeveloperMode size={"25px"}/>
            </Button>
            <Button mt="-330px" bg="none">
              <AiFillMail size={"25px"}/>
            </Button>
            <Button mt="-360px" bg="none">
              <BsFillCartDashFill size={"25px"}/>
            </Button>
            <Button mt="-390px" bg="none">
              <MdSubscriptions size={"25px"}/>
            </Button>
          </Box>

          <Box
            //   border={"1px solid green"}
            bgColor={"transparent"}
          >
            <LeftSideDrawer
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              btnRef={btnRef}
            />
          </Box>
        </Box>
      </HStack>
    </>
  );
}