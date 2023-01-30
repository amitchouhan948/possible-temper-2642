import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Input,
  Checkbox,
  Select,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { auth } from "../../config/Firebase";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsPlusSquareDotted } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { Image } from "antd";
import personImg from "../personImg.jpg"


const deleteTask = async (id, action) => {
  if (action === "delete") {
    let res = await axios.delete(
      `https://bitrix24-render-backend-deploy.onrender.com/tasks/${id}`
    );

    console.log(res.data);
  } else if (action === "patch1") {
    let res = await axios.patch(
      `https://bitrix24-render-backend-deploy.onrender.com/tasks/${id}`,
      { isActive: false }
    );

    console.log(res.data);
  } else if (action === "patch0") {
    let res = await axios.patch(
      `https://bitrix24-render-backend-deploy.onrender.com/tasks/${id}`,
      { isActive: true }
    );

    console.log(res.data);
  } else {
    console.log("Choose a action type");
  }
};

const TaskTable = ({ tasks, updateTasks }) => {
  const [id, setId] = useState("");
  const [delButton, setDelButton] = useState(true);
  const [action, setAction] = useState("");
  const [count, setCount] = useState(0);
  const [user] = useAuthState(auth);

  // console.log("id for performating operations :",id);

  return (
    <TableContainer>
      <Table variant="simple" scrollMarginX="0">
        {/* TAble Caption Box */}
        <TableCaption boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Box mt="10px">
            <Flex
              width="98%"
              pb="1em"
              justifyContent={"space-between"}
              m="auto"
              mb="14px"
              borderBottom="3px solid #f1f4f8"
            >
              <Text fontSize="11px" color="grey">
                SELECTED: {count}/{tasks.length}
              </Text>
              <Flex gap="4px">
                <Text fontSize="11px" color="grey">
                  TOTAL:{" "}
                </Text>
                <Text fontSize="11px" color="#2067b0">
                  SHOW QUANTITY
                </Text>
              </Flex>
              <Text fontSize="11px" color="grey">
                PAGES: 1
              </Text>
              <Flex>
                <Text fontSize="11px" color="grey">
                  RECORDS
                </Text>
                <Input
                  focusBorderColor="none"
                  variant="outline"
                  width="50px"
                  ml="5px"
                  fontSize="11px"
                  fontWeight={"600"}
                  placeholder="50"
                ></Input>
              </Flex>
            </Flex>

            <Flex gap="30px" mb="6px">
              <Box width="160px">
                <Select
                  height="36px"
                  focusBorderColor="none"
                  color={"grey"}
                  fontSize="14px"
                  fontWeight={600}
                  placeholder="SELECT ACTION"
                  onClick={(e) => {
                    setAction(e.target.value);
                    setDelButton(false);
                  }}
                >
                  <option borderRadius={"20px"} value="patch1">
                    Mark Completed
                  </option>
                  <option borderRadius={"20px"} value="patch0">
                    Mark In progress
                  </option>
                  <option borderRadius={"20px"} value="delete">
                    Delete
                  </option>
                </Select>
              </Box>
              <Button
                height="36px"
                disabled={delButton}
                bgColor="#3bc8f5"
                width="80px"
                fontSize="14px"
                color={"white"}
                onClick={() => {
                  deleteTask(id, action).then((res) => updateTasks());
                }}
              >
                APPLY
              </Button>
            </Flex>
          </Box>
        </TableCaption>{" "}
        {/* TAble Caption Box */}
        {/* <Thead> */}
        <Tr>
          <Td width="20px">
            {" "}
            <Checkbox colorScheme="green"></Checkbox>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px">
              Name
            </Text>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px">
              Active
            </Text>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px" ml="45px">
              Deadline
            </Text>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px" ml="8px">
              Created by
            </Text>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px">
              Responsible person
            </Text>
          </Td>
          <Td>
            <Text color="grey" fontWeight={400} fontSize="14px">
              {" "}
              Project
            </Text>
          </Td>
          {/* <Td ><Text color="grey" fontWeight={400} fontSize="14px">Tags</Text></Td> */}
        </Tr>
        {/* </Thead> */}
        <Tbody>
          {tasks &&
            tasks.map((el, i) => (
              <Tr key={i} backgroundColor={id === el._id ? "#f1f9de" : "white"}>
                <Td width="20px">
                  {" "}
                  <Checkbox
                    width="20px"
                    colorScheme="green"
                    value={el._id}
                    onChange={(e) => {
                      setId(e.target.value);
                      setCount(1);
                    }}
                    isChecked={id === el._id ? true : false}
                  ></Checkbox>
                </Td>
                <Td
                  fontWeight={400}
                  bgColor="#f1fbfe / 44%"
                  fontSize="14px"
                  textDecor={el.isActive ? "no" : "line-through"}
                >
                  <Text color="grey">{el.title}</Text>
                </Td>
                <Td
                  color={el.isActive ? "#9ac42b" : "grey"}
                  fontWeight={400}
                  fontSize="14px"
                >
                  {el.isActive ? "In progress" : "Completed"}
                </Td>
                <Td>
                  <Input
                    fontSize="14px"
                    color="grey"
                    fontWeight={400}
                    textAlign={"center"}
                    width="150px"
                    value={el.deadline}
                  ></Input>
                </Td>
                <Td>
                  <Flex
                    p=".4em"
                    _hover={{ bgColor: "#C0EDFD", borderRadius: "20px" }}
                  >
                   <Image src={user?.photoURL || personImg} style={{borderRadius:"50px"}} color="grey" width={"25px"}  />
                    <Text color="grey" ml="5px" mt="-4px">
                      {user?.displayName || "A"}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex
                    p=".4em"
                    _hover={{ bgColor: "#C0EDFD", borderRadius: "20px" }}
                  >
                    
                    <Image src={user?.photoURL || personImg} style={{borderRadius:"50px"}} color="grey" width={"25px"}  />
                    <Text color="grey" ml="5px" mt="-4px">
                     {user?.displayName || "A"}
                    </Text>
                  </Flex>
                </Td>
                <Td>
                  <Flex>
                    <BsPlusSquareDotted color="grey" size={"20px"} />
                  </Flex>
                </Td>
                {/* <Td><Flex><BsPlusSquareDotted color="grey" size={"20px"} /></Flex></Td> */}
              </Tr>
            ))}
        </Tbody>
        {/* Table Footer */}
        {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
