import { SearchIcon, SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import LikeImg from "./Like.png";
import style from './Allfeed.module.css'

const Allfeeds = (props) => {
  const { hours, minutes } = props;
  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);

  return (
    <div>
      <SimpleGrid width="73%" ml="75px" mt={0} pt="3" pb="5" borderRadius="10">
        {/* --------------------- (Feed and input filter) */}
        <Box
          pl="4"
          pr="4"
          display={"flex"}
          alignItems="center"
          mt={2}
          justifyContent="space-between"
        >
          <Text color={"#ffffff"} fontSize="26px">
            Feed
          </Text>
          <Box display={"flex"} justifyContent="space-between">
            <InputGroup w="85%">
              <Input
                borderRadius={"30px"}
                bg={"#ffffff"}
                placeholder="Search and filter.."
              />
              <InputRightElement children={<SearchIcon color="black" />} />
            </InputGroup>
            <SettingsIcon
              _hover={{ color: "#ffffff" }}
              cursor={"pointer"}
              color="grey"
              fontSize={"20px"}
              mt="2"
            />
          </Box>
        </Box>

        {/* ----------------------- (Feeds Div) -------------- */}

        <Grid
          bg={"#ffffff"}
          width="100%"
          mt={4}
          pt="3"
          pb="5"
          borderRadius="10"
        >
          {/* ------------------- (Profile and email) ----------- */}

          <Box display={"flex"} alignItems="center" gap={"5"}>
            <Box
              fontSize={"28px"}
              bg={"#7b8691"}
              color={"#ffffff"}
              borderRadius="50px"
              w="45px"
              p="2"
              pl="8px"
              ml="5"
              mt="5"
            >
              <BsFillPersonFill />
            </Box>
            {/* --------- */}
            <Box mt="6">
              <Text fontSize={16} color="#246ab1" textAlign={"left"}>
                abhisheksolanki1020@gmail.com{" "}
                <span style={{ color: "grey" }}>{">"} To all employees</span>
              </Text>
              <Text fontSize={14} textAlign={"left"}>
                Today, 3:21 pm
              </Text>
            </Box>
          </Box>

          {/* --------- (Feed Text) ----------- */}
          <Text w="80%" ml="80px" mt="4" textAlign={"left"} fontSize="17">
            Hello
          </Text>

          {/* ------------------ (Like, comment, follow) ---------------- */}
          <Box
            w="50%"
            ml="85px"
            mt={like ? "5" : "10"}
            textAlign={"left"}
            fontSize="14"
            color="grey"
            display={"flex"}
            alignItems="center"
            gap="5"
          >
            <Box mt={like ? "6" : "-.5"}>
              <Text
                onClick={() => setLike(!like)}
                color={like ? "#6c9cfc" : "grey"}
                fontWeight={like ? "600" : "400"}
              >
                Like
              </Text>
              <Text display={like ? "flex" : "none"} alignItems="center">
                <Image width={6} src={LikeImg} alt="like" />
                You
              </Text>
            </Box>
            <Text
              color={input ? "blue" : "grey"}
              textDecoration={input ? "underline" : "none"}
              onClick={() => setInput(!input)}
              _hover={{
                color: "blue",
              }}
            >
              Comment
            </Text>
            <Text onClick={() => setFollow(!follow)}>
              {follow ? "Follow" : "Unfollow"}
            </Text>
            <Text>More</Text>
            <Text>
              <ViewIcon /> 1
            </Text>
          </Box>

          <Grid ml="14" display={"flex"} alignItems="center">
            <Box
              fontSize={"23px"}
              bg={"#7b8691"}
              color={"#ffffff"}
              borderRadius="50px"
              w="40px"
              p="2"
              pl="9px"
              ml="5"
              mt="2"
              h="10"
              display={input ? "none" : "block"}
            >
              <BsFillPersonFill />
            </Box>

            {/* -------------------- (Comment Part) --------- */}
            <SimpleGrid
              bg={"#ffffff"}
              width="75%"
              ml="0px"
              mt={4}
              pt="3"
              pb="5"
              borderRadius="10"
            >
              {/* ------------------- (Input) --------------------- */}
              <Input
                onClick={() => setInput(!input)}
                textAlign={"left"}
                ml="6"
                mt="0"
                w={"90%"}
                fontSize={"17"}
                display={input ? "none" : "block"}
                color="#4d545b"
                placeholder="Add Comment ..."
                borderColor={"grey"}
                borderRadius="30"
              />
              <Textarea
                textAlign={"left"}
                ml="6"
                mt="0"
                w={"90%"}
                display={input ? "block" : "none"}
                fontSize={"17"}
                color="#4d545b"
                placeholder="Send message ..."
                borderColor={"transparent"}
                rows={"4"}
              />
              <Box display={input ? "block" : "none"}>
                {/* ---------------------- (Middle row) --------------------- */}
                <Box
                  display={"flex"}
                  gap="10"
                  fontSize={"15px"}
                  color="#7b869190"
                  ml="10"
                  mt={"0"}
                  className={style.MiddleRow}
                >
                  <Input type="file" id="upload" hidden />
                  <label htmlFor="upload">File</label>
                  <Input type="file" id="upload" hidden />
                  <label htmlFor="upload">New document</label>
                  <Text>Mention</Text>
                  <Text _hover={{ color: "#7b8691" }}>Mention</Text>
                  <Text _hover={{ color: "#7b8691" }}>Quote</Text>
                  <Text _hover={{ color: "#7b8691" }}>Add tag</Text>
                  <Text _hover={{ color: "#7b8691" }}>Record Video</Text>
                </Box>

                {/* ----------------------- (Send - Cancel button) ------------------------------- */}
                <Box display={"flex"} gap="10" mt="5" ml="10">
                  <Button
                    bg={"#3bc8f5"}
                    color="white"
                    fontSize={"14"}
                    _hover={{
                      bg: "#0cbef9",
                      color: "white",
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    onClick={() => setInput(false)}
                    fontSize={"14"}
                    color="#373a3d"
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </SimpleGrid>
          </Grid>
        </Grid>
      </SimpleGrid>
    </div>
  );
};

export default Allfeeds;
