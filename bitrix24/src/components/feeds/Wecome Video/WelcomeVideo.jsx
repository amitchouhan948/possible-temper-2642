import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import LikeImg from "./Like.png";
import { deleteComments2, getComments2, sendComments2 } from "../Api/Api";
import CommentPart from "./CommentPart";

const WelcomeVideo = (props) => {
  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState("");
  const [comments2, setComments2] = useState([]);

  useEffect(() => {
    ShowData();
  }, []);

  const ShowData = () => {
    getComments2()
      .then((res) => {
        setComments2(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    sendComments2(value, props)
      .then((res) => {
        ShowData();
      })
      .then((err) => {
        console.log(err);
      });
    setInput("");
  };

  const handleDelete2 = (id) =>{
    deleteComments2(id)
      .then((res) => {
        ShowData();
      })
      .then((err) => {
        console.log(err);
      });
    setInput("");
  }

  return (
    <div>
      {" "}
      <SimpleGrid width="100%" mt={0} pt="3" pb="5" borderRadius="10">
        {/* ----------------------- (Feeds Div) -------------- */}

        <Grid
          bg={"#ffffff"}
          width="100%"
          mt={-2}
          pt="3"
          pb="5"
          borderRadius="10"
        >
          {/* ------------------- (Profile and email) ----------- */}

          <Box display={"flex"} alignItems="center" w="100%" gap={"5"}>
            <Box
              fontSize={"28px"}
              bg={"#7b8691"}
              color={"#ffffff"}
              borderRadius="50px"
              w="45px"
              p="2"
              pl="8px"
              ml="5"
              mt="0"
            >
              <BsFillPersonFill />
            </Box>
            {/* --------- */}
            <Box mt="6">
              <Text
                fontSize={16}
                color="#246ab1"
                fontWeight={500}
                textAlign={"left"}
                cursor="pointer"
              >
                abhisheksolanki1020@gmail.com{" "}
                <span style={{ color: "grey" }}>{">"} To all employees</span>
              </Text>
              <Text fontSize={14} textAlign={"left"} color="grey">
                27 September 3:10 pm
              </Text>
              <Text fontSize={14} textAlign={"left"}>
                Welcome to Bitrix24!
              </Text>
            </Box>
          </Box>

          {/* --------- (Video) ----------- */}
          <Box ml={20} mt="5">
            <iframe
              width="70%"
              height="415"
              src="https://www.youtube.com/embed/tAMiCw-5MJE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>

          <Box
            w="50%"
            ml="85px"
            mt={like ? "0" : "5"}
            textAlign={"left"}
            fontSize="15"
            color="grey"
          >
            <Box display={hide ? "block" : "none"}>
              <Text>
                Hurray! You are about to get 1000% more productive with
                Bitrix24. Please watch this 1-minute video to learn what
                Bitrix24 is about, how to invite your colleagues and where to
                find help, if you need it.
              </Text>
              Tags:
              <Text>Advice, Tips</Text>
            </Box>
            <Text
              onClick={() => setHide(!hide)}
              w="10"
              cursor={"pointer"}
              color="blue"
              textDecoration={"underline"}
            >
              {hide ? "Hide" : "Show"}
            </Text>
          </Box>

          {/* ------------------ (Like, comment, follow) ---------------- */}
          <Box
            w="50%"
            ml="85px"
            mt={like ? "0" : "5"}
            textAlign={"left"}
            fontSize="14"
            color="grey"
            display={"flex"}
            alignItems="center"
            gap="5"
            cursor="pointer"
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

          {/* ------------------ (Comment Component) --------------- */}
          {comments2.map((item) => (
            <Grid key={item.id} mt="-2" w="50%" ml={"8%"}>
              <CommentPart {...item} handleDelete2={handleDelete2}/>
            </Grid>
          ))}



          {/* -------------------- (Input Part) ----------------- */}

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
                onChange={(e) => setValue(e.target.value)}
                value={value}
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
                    onClick={handleAdd}
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

export default WelcomeVideo;
