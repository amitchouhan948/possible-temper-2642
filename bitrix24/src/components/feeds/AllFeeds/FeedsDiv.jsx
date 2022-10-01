import React, { useEffect, useState } from "react";
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
import { BsFillPersonFill } from "react-icons/bs";
import LikeImg from "./Like.png";
import style from "./Allfeed.module.css";
import Comments from "./Comments";
import { deleteComments1, getComments1, sendComments1 } from "../Api/Api";

const FeedsDiv = (props) => {
  const { day, time, email,id, message, handleDelete } = props;

  const [input, setInput] = useState(false);
  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    ShowData();
  }, []);

  const ShowData = () => {
    getComments1()
      .then((res) => {
        setComments(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    sendComments1(value, props)
      .then((res) => {
        ShowData();
      })
      .then((err) => {
        console.log(err);
      });
    setInput("");
  };

const handleDelete1 = (id) =>{
  deleteComments1(id)
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
      <Grid>
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
          <Box w="100%" mt="6">
            <Text
              fontWeight={500}
              fontSize={16}
              color="#246ab1"
              textAlign={"left"}
              cursor="pointer"              
            >
              {email}{" "}
              <span style={{ color: "grey" }}>{">"} To all employees</span>
            </Text>
            <Text color={"grey"} fontSize={13} textAlign={"left"}>
              {day} {time}
            </Text>
          
          
           {/* ------------- (Remove button) ------------- */}
          <Text fontSize={"20px"} fontWeight={500} onClick={()=> handleDelete(id)} p="0" float="right" mt="-80px" mr="3" color={"grey"} _hover={{color:"black",cursor:"pointer"}}>x</Text>
          
          
          </Box>
        </Box>

        {/* --------- (Feed Text) ----------- */}
        <Text w="80%" ml="80px" mt="4" textAlign={"left"} fontSize="17">
          {message}
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
          cursor={"pointer"}
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
        {comments.map((item) => (
          <Grid key={item.id} mt="-2" w="50%" ml={"8%"}>
            <Comments {...item} handleDelete1={handleDelete1} />
          </Grid>
        ))}

        {/* --------------------- (Input) -----------------  */}
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
    </div>
  );
};

export default FeedsDiv;
