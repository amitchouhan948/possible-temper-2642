import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import { SiCivicrm, SiMarketo, SiBandrautomation } from "react-icons/si";
import {
  MdTask,
  MdFeed,
  MdOutlineDeveloperMode,
  MdSubscriptions,
} from "react-icons/md";
import { AiFillSetting, AiFillMail } from "react-icons/ai";
import {
  BsFillCalendarDayFill,
  BsFillChatSquareTextFill,
  BsFillCartDashFill,
} from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { GrWorkshop } from "react-icons/gr";
import { Link } from "react-router-dom";

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
          width="120%"
          height={"100%"}
          border={"1px solid rgba(198, 186, 186, 0.274)"}
          bg="rgba(206, 201, 201, 0.16)"
          ml="-2"
          
        >
          <Button
            bg={"transparent"}
            _hover={{ color: "black", bg: "white" }}
            fontSize="20px"
            p={"0px"}
            color={"white"}
            ref={btnRef}
            onClick={onOpen}
            border="1px"
            borderColor={"whiteAlpha.200"}
          >
            <HamburgerIcon />
          </Button>
          <Box display={isOpen ? "none" : "inline-block"}>
            <Button _hover={{ color: "black", bg: "white" }} mt="0px" bg="none">
              <Link to="/feed">
                <BsFillChatSquareTextFill size={"25px"} />
              </Link>
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-30px"
              bg="none"
            >
              <Link to="/task">
                <MdTask size={"25px"} />
              </Link>
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-60px"
              bg="none"
            >
              <Link to="/calender">
                <BsFillCalendarDayFill size={"25px"} />
              </Link>
            </Button>
            <Button _hover={{ color: "black", bg: "white" }} mt="-90" bg="none">
              <AiFillSetting size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-120px"
              bg="none"
            >
              <SiBandrautomation size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-150px"
              bg="none"
            >
              <HiDocumentText size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-180px"
              bg="none"
            >
              <SiCivicrm size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-210px"
              bg="none"
            >
              <SiMarketo size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-240px"
              bg="none"
            >
              <MdFeed size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-270px"
              bg="none"
            >
              <GrWorkshop size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-300px"
              bg="none"
            >
              <MdOutlineDeveloperMode size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-330px"
              bg="none"
            >
              <AiFillMail size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-360px"
              bg="none"
            >
              <BsFillCartDashFill size={"25px"} />
            </Button>
            <Button
              _hover={{ color: "black", bg: "white" }}
              mt="-390px"
              bg="none"
            >
              <MdSubscriptions size={"25px"} />
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
