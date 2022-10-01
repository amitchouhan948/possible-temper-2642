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
  } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';





const deleteTask=async(id,action)=>{

    if(action==="delete"){

        let res= await axios.delete(`http://localhost:8000/task/${id}`)

        console.log(res.data)
    }
    else if(action==="patch1"){
        let res= await axios.patch(`http://localhost:8000/task/${id}`,{"isActive":false})

        console.log(res.data)
    }
    else if(action==="patch0"){
        let res= await axios.patch(`http://localhost:8000/task/${id}`,{"isActive":true})

        console.log(res.data)
    }
    else{
        console.log("Choose a action type")
    }

    }
   


 const TaskTable=({tasks, updateTasks})=>{


    const [id,setId]=useState("")
    const [delButton,setDelButton]=useState(true)
    const [action,setAction]=useState("");


    // console.log("id for performating operations :",id);


    return ( 
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>
        <Flex gap="20px">
        <Box width="150px">
        <Select size='sm' placeholder='SELECT ACTION'  onClick={(e)=>{
            setAction(e.target.value)
            setDelButton(false)
        }}>
        
            
            <option borderRadius={"20px"} value='patch1'>Mark Completed</option>
            <option borderRadius={"20px"} value='patch0'>Mark In process</option>
            <option borderRadius={"20px"} value='delete' >Delete</option>
        
        </Select>
        </Box>
        <Button disabled={delButton} bgColor="#3bc8f5" color={"white"} 
        onClick={()=>{deleteTask(id,action).then(res=>updateTasks())}}>APPLY
        </Button>
        </Flex>
    </TableCaption>
    {/* <Thead> */}
      <Tr>
        <Td > <Checkbox colorScheme='green' ></Checkbox></Td>
        <Td color="grey" fontWeight={400} fontSize="14px">Name</Td>
        <Td color="grey" fontWeight={400} fontSize="14px">Active</Td>
        <Td color="grey" fontWeight={400} fontSize="14px">Deadline</Td>
        <Td color="grey" fontWeight={400} fontSize="14px">Created by</Td>
        <Td color="grey" fontWeight={400} fontSize="14px">Responsible person</Td>
      </Tr>
    {/* </Thead> */}
    <Tbody>
        {tasks && tasks.map((el)=>(<Tr backgroundColor={id===el._id ? "#f1f9de" : "white"}>
        <Td > <Checkbox colorScheme='green' value={el._id} 
        onChange={(e)=>{
            setId(e.target.value)
            // setDelButton(id===el._id ? true : false)
        }} isChecked={id===el._id ? true : false}></Checkbox></Td>
        <Td color="grey" fontWeight={400} fontSize="14px">{el.title}</Td>
        <Td color="grey" fontWeight={400} fontSize="14px">{el.isActive ? "In progress" : "Completed" }</Td>
        <Td color="grey" fontWeight={400} fontSize="14px"><Input type="date"></Input></Td>
        <Td><Flex><IoPersonCircleSharp color="grey" size={"20px"} /><Text color="grey" ml="5px" mt="-4px">Amit Singh</Text></Flex></Td>
        <Td><Flex><IoPersonCircleSharp color="grey" size={"20px"} /><Text color="grey" ml="5px" mt="-4px">Amit Singh</Text></Flex></Td>
      </Tr>))}

    </Tbody>


    {/* Table Footer */}
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    )

}


export default TaskTable;