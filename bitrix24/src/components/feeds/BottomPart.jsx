import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const BottomPart = () => {
  return (
    <div>
      <SimpleGrid
        display={"flex"}
        gap="4"
        color={"#ffffff"}
        fontSize="16px"
        ml="80px"
        mt={10}
        alignItems="center"
        cursor={"pointer"}
        mb="10"
      >
        <Text bg="#abb3ba78" border="1px solid white" p="1" pr="4" pl="4" borderRadius={9}>Bitrix24©</Text>
        <Text bg="#abb3ba78" p="1" pr="4" border="1px solid white" pl="4" borderRadius={9}>English</Text>
        <Text>© 2022 Bitrix24</Text> |<Text>Implementation request</Text> |
        <Text>Themes</Text> |<Text>Print</Text>
      </SimpleGrid>
    </div>
  );
};

export default BottomPart;
