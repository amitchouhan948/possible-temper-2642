import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

import FeedsDiv from "./FeedsDiv";

const Allfeeds = (props) => {
  const { hours, minutes, month, date, message } = props;

  return (
    <div>
      <SimpleGrid width="100%" mt={0} pt="3" pb="5" borderRadius="10">
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

        {/* ----------------------- (Feeds Div - 1) -------------- */}

        {message.map((item) => (
          <Grid
            key={item.id}
            bg={"#ffffff"}
            width="100%"
            mt={4}
            pt="3"
            pb="5"
            borderRadius="10"
          >
            <FeedsDiv
              {...item}
              minutes={minutes}
              hours={hours}
              month={month}
              date={date}
            />
          </Grid>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Allfeeds;
