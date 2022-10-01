import {
  Box,
  Button,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Allfeeds from "../AllFeeds/Allfeeds";
import { deleteMessage, getMessage, sendMessage } from "../Api/Api";
import style from "./message.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../config/Firebase";
import { Link } from "react-router-dom";

const Message = (props) => {
  const { hours, minutes, month, date } = props;

  const [input, setInput] = useState(false);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [filter, setFilter] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    ShowData();
  }, [filter]);

  const ShowData = () => {
    getMessage(filter)
      .then((res) => {
        setMessage(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const handleAdd = () => {
    sendMessage(value, props, user)
      .then((res) => {
        ShowData();
      })
      .then((err) => {
        console.log(err);
      });
    setInput("");
  };

  const handleDelete = (id) => {
    deleteMessage(id)
      .then((res) => {
        ShowData();
      })
      .then((err) => {
        console.log(err);
      });
    setInput("");
  };

  return (
    <div>
      <SimpleGrid
        bg={"#ffffff"}
        width="100%"
        mt={4}
        pt="3"
        pb="5"
        borderRadius="10"
      >
        {/* ----------- (Top text row) -------------------- */}

        <Box
          borderBottom={"1px solid #7b8691c1"}
          fontSize="14px"
          display={"flex"}
          gap="25px"
          ml="5"
          mt={3}
          pb={4}
          className={style.msgRow}
        >
          <Text color={"blue"} textDecoration="underline">
            MESSAGE
          </Text>
          <Link to="/task">
            <Text>TASK</Text>
          </Link>
          <Text>EVENT</Text>
          <Text>POLL</Text>
          <Text>MORE</Text>
        </Box>

        {/* ------------------- (Input) --------------------- */}
        <Input
          onClick={() => setInput(!input)}
          textAlign={"left"}
          ml="6"
          mt="5"
          w={"90%"}
          fontSize={"24"}
          display={input ? "none" : "block"}
          color="#4d545b"
          placeholder="Send message ..."
          borderColor={"transparent"}
        />
        <Textarea
          textAlign={"left"}
          ml="6"
          mt="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          w={"90%"}
          display={input ? "block" : "none"}
          fontSize={"20"}
          color="#4d545b"
          placeholder="Send message ..."
          borderColor={"transparent"}
          rows={"7"}
        />
        <Box display={input ? "block" : "none"}>
          {/* ---------------------- (Middle row) --------------------- */}
          <Box
            display={"flex"}
            gap="8"
            fontSize={"15px"}
            ml="74px"
            mt={"5"}
            className={style.MiddleRow}
          >
            <Input type="file" id="upload" hidden />
            <label htmlFor="upload">File</label>
            <Input type="file" id="upload" hidden />
            <label htmlFor="upload">New document</label>
            <Text>Mention</Text>
            <Text>Quote</Text>
            <Text>Add tag</Text>
            <Text>Record Video</Text>
          </Box>

          {/* -----------------------(To: add more) =------------------- */}
          <Box
            display={"flex"}
            gap="10"
            ml="10"
            fontSize={20}
            mt="5"
            alignItems="center"
          >
            To:
            <Box
              border={"1px solid #7b869190"}
              display="flex"
              gap="2"
              fontSize={"16"}
              alignItems="center"
              p="1"
              pr="67%"
              borderRadius={10}
            >
              <Text
                color={"grey"}
                bg="#dbf087"
                textAlign={"center"}
                p="1"
                pr="4"
                pl="4"
                ml="1"
                borderRadius={8}
              >
                To all employees
              </Text>
              <Text color={"blue"}>+ Add more</Text>
            </Box>
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
      <Allfeeds
        message={message}
        minutes={minutes}
        hours={hours}
        month={month}
        date={date}
        setFilter={setFilter}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Message;
