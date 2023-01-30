import { Box, Button, Flex, Hide, Input, Show, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavToggle from "./NavToggle";
import styles from "./tasks.module.css";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import NewTaskModal from "./NewTaskModal";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineFlashOn } from "react-icons/md";
import { BiMessageCheck } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
 import { FaLessThan } from "react-icons/fa";
import TaskTable from "./TaskTable";
import axios from "axios";
import { Skeleton, Stack} from '@chakra-ui/react'

const getTask = async () => {
  let res = await axios.get("https://bitrix24-render-backend-deploy.onrender.com/tasks");

  return res;
};

const Tasks = () => {
  const [show, setShow] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [loading,setLoading]=useState(false)

  console.log(show);

  useEffect(() => {
    updateTasks();
  }, []);

  // console.log(tasks)
  const updateTasks = () => {
    setLoading(true)
    getTask().then((res) => {
      setTasks(res.data);
      setLoading(false)
    });
  };

  return (
    <div className={styles.background}>
      <Flex height={"100%"} gap="20px">
        {/* <LEFT NAV BAR></LEFT> */}
        {/* <Box width="17.2%" border={"1px solid red"} height="100%"></Box> */}

        {/* Task Box Start */}
        <Box width="100%" height="100%">
          {/* Box1 */}

          <Flex
            width="98%"
            height="60px"
            margin={"auto"}
            backgroundColor="rgb(245 246 249)"
            borderRadius=".5em"
          >
            <Box margin={"auto"}>
              <Text
                color="rgb(16 88 208)"
                fontSize={"15px"}
                fontWeight="500"
                fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
              >
                Tasks
              </Text>
            </Box>
            <Button
              onClick={() => setShow(!show)}
              height="100%"
              pl="0px"
              pr="0"
            >
              {show ? <FaLessThan size="13px" color="grey" /> : <FaGreaterThan size="13px" color="grey"/>}
            </Button>{" "}
            {/* Toggle Button */}
            {show && <NavToggle />}
            <Box margin={"auto"}>
              <Text
                color="rgb(84 92 106)"
                fontSize={"15px"}
                fontWeight="500"
                fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
              >
                Projects
              </Text>
            </Box>
            <Box margin={"auto"}>
              <Text
                color="rgb(84 92 106)"
                fontSize={"15px"}
                fontWeight="500"
                fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
              >
                Scrum
              </Text>
            </Box>
            <Box margin={"auto"}>
              <Text
                color="rgb(84 92 106)"
                fontSize={"15px"}
                fontWeight="500"
                fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
              >
                Effiiciency
              </Text>
            </Box>
            <Box margin={"auto"}>
              <Text
                color="rgb(84 92 106)"
                fontSize={"15px"}
                fontWeight="500"
                fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
              >
                More
              </Text>
            </Box>
          </Flex>

          {/* Box 2 */}

          <Flex
            width="98%"
            m="auto"
            /*border={"1px solid red"}*/ height="60px"
            justifyContent={"flex-start"}
            alignItems="center"
            mt="1%"
            p="1em"
          >
            <Text
              width="auto"
              fontSize={"26px"}
              fontWeight="200"
              fontFamily={`system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'`}
            >
              My tasks
            </Text>
            <Box ml="6px">
              <AiFillStar color="a7b0ba" size="28px" opacity={1} />
            </Box>

            <Box mt="-10px">
              <NewTaskModal updateTasks={updateTasks} />{" "}
              {/* Task adding Modal components */}
            </Box>
            <Box width="52%" mt="-16px" ml="12px">
              <Input
                bgColor={"rgb(233 237 242 / 40%)"}
                placeholder="Filter and search"
              />
            </Box>
            <Box mt="-8px" ml="100px">
              <Button
                bgColor="rgb(233 237 242 / 40%)"
                border={".5px solid white"}
                _hover={{ backgroundColor: "rgb(233 237 242 / 66%)" }}
              >
                <IoMdSettings color="white" size="22px" />
              </Button>
            </Box>
            <Box mt="-8px" ml="40px">
              <Button
                bgColor="rgb(233 237 242 / 40%)"
                border={".5px solid white"}
                _hover={{ backgroundColor: "rgb(233 237 242 / 66%)" }}
              >
                <MdOutlineFlashOn color="white" size="22px" />
              </Button>
            </Box>
          </Flex>

          {/* Box 3 */}
          <Box
            width="98%"
            borderTop="1.5px solid rgb(233 237 242 / 40%)"
            margin="auto"
          ></Box>

          <Flex
            width="98%"
            // /*border={"1px solid yellow"}*/
            height="35px"
            justifyContent={"flex-start"}
            alignItems="center"
            margin={"auto"}
            mt="2%"
            mb={"2%"}
          >
            <Flex
              bgColor="rgb(233 237 242 / 40%)"
              p="0.32em"
              borderRadius={"20px"}
              gap="20px"
            >
              <Text fontSize={"14px"}>List</Text>
              <Text fontSize={"14px"}>Deadline</Text>
              <Text fontSize={"14px"}>Planner</Text>
              <Text fontSize={"14px"}>Calendar</Text>
              <Text fontSize={"14px"}>Gantt</Text>
            </Flex>

            <Flex
              bgColor="rgb(233 237 242 / 40%)"
              // border={"1px solid green"}
              p="0.32em"
              borderRadius={"20px"}
              gap="25px"
              ml="12px"
            >
              <Text fontSize={"14px"}>My items:</Text>
              <Text fontSize={"14px"}>Overdue</Text>
              <Text fontSize={"14px"}>Comments</Text>
              <Text>|</Text>
              <Text fontSize={"14px"}>
                <BiMessageCheck size="20px" />
              </Text>
            </Flex>

            <Flex mb="10px"  width={"150px"} ml={"460px"} >
              <Box p=".5em">
                <Button
                  
                  bgColor="rgb(233 237 242 / 40%)"
                  borderRadius={"20px"}
                  color="white"
                  _hover={{ backgroundColor: "rgb(233 237 242 / 66%)" }}
                >
                  <AiFillLock size="22px" />
                </Button>
              </Box>
              <Box p=".5em">
                <Button
                  bgColor="rgb(233 237 242 / 40%)"
                  borderRadius={"20px"}
                  color="white"
                  _hover={{ backgroundColor: "rgb(233 237 242 / 66%)" }}
                >
                  <BsThreeDots size="22px" />
                </Button>
              </Box>
            </Flex>
          </Flex>

          {/* Box 4 */}

          <Box
            width="98%"
            /*border={"1px solid pink"}*/ bgColor="white"
            borderRadius="20px"
            margin={"auto"}
            mt="1%"
          >
            {/* <Table> */}
            {loading && <Stack gap="10px" pb=".3em" >
            <Skeleton bgColor="rgb(233 237 242 / 40%)" mt=".3em" borderRadius={"20px"} height='60px' />
            <Skeleton bgColor="rgb(233 237 242 / 40%)" borderRadius={"20px"} height='60px' />
            <Skeleton bgColor="rgb(233 237 242 / 40%)"   borderRadius={"20px"} height='60px' />
            </Stack>}
            {!loading && <TaskTable tasks={tasks} updateTasks={updateTasks} />}
          </Box>

          {/* Footer */}
        </Box>
        {/* Task Box Ends*/}

        {/* <RIGHT NAV BAR> */}
        {/* <Box width="5%" border={"1px solid red"} height="100%"></Box> */}
      </Flex>
    </div>
  );
};

export default Tasks;
