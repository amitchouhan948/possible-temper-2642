import { Box, Text,Image } from '@chakra-ui/react';
import React from 'react'
import personImg from "../../personImg.jpg"


const CommentPart = (props) => {
  const { day, time, email, message, id, handleDelete2 } = props;

  return (
    <div>
      
      <Box display={"flex"} gap="3" alignItems={"center"}>
            <Box
              fontSize={"23px"}
              borderRadius="50px"
              w="37px"
              ml="0"
              mt="4"
              h="36px"
            >
             <Image w="45px" borderRadius={"50px"} src={personImg} />

            </Box>

            <Box
              mt="6"
              p="1px"
              pl="5"
              pr="10"
              borderRadius={"20"}
              bg={"rgba(159, 157, 157, 0.219)"}
            >
              <Text
                fontWeight={500}
                fontSize={16}
                color="#246ab1"
                textAlign={"left"}
                cursor="pointer"
              >
                {email}{" "}
                <span style={{ color: "grey", fontSize: "10px" }}>
                  {" "}
                  {day} {time}
                </span>
              </Text>

               {/* ------------- (Remove button) ------------- */}
               <Text fontSize={"15px"} fontWeight={500} onClick={()=> handleDelete2(id)} p="0" float="right" mt="-28px" mr="-30px" color={"grey"} _hover={{color:"black",cursor:"pointer"}}>x</Text>
          
              <Text
                color={"grey"}
                fontSize={16}
                fontWeight="500"
                textAlign={"left"}
              >
                {message}
              </Text>
            </Box>
          </Box>
    </div>
  )
}

export default CommentPart;