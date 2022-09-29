import {
  Box,
  Button,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import style from "./message.module.css";

const Message = () => {
  const [input, setInput] = useState(false);

  return (
    <div>
      <SimpleGrid
        bg={"#ffffff"}
        width="73%"
        ml="75px"
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
          <Text>TASK</Text>
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
            <label for="upload">File</label>
            <Input type="file" id="upload" hidden />
            <label for="upload">New document</label>
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
    </div>
  );
};

export default Message;
