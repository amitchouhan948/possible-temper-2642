import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";

const FeedRight = () => {
  return (
    <div>
      <SimpleGrid
        border="2px solid red"
        width="18%"
        float={"right"}
        mt="-1397px"
        mr="14"
      >
        <Box bg="#ffffff" borderRadius={10} h="90">
        <Box
              fontSize={"23px"}
              bg={"#7b8691"}
              color={"#ffffff"}
              borderRadius="50px"
              w="40px"
              p="2"
              pl="9px"
              ml="20"
              mt="5"
              h="10"
            >
              <BsFillPersonFill />
            </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default FeedRight;
