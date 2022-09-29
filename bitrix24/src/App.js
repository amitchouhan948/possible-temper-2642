<<<<<<< HEAD
import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Box, HStack } from "@chakra-ui/react";
import Login from "./components/pages/login/Login";
import { RightSidebar } from "./components/RightSidebar/RightSidebar";
=======
<<<<<<< HEAD
import './App.css';
import Feeds from './components/feeds/Feeds';

=======
<<<<<<< HEAD
import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Box } from "@chakra-ui/react";
=======

import './App.css';
import Signup from './components/pages/signup/Signup';


>>>>>>> 288ebea1ee3004e20584dc24282ede1034693c07
>>>>>>> 4c24ab75626a22a045d5d927e0e967c33b392ab1
>>>>>>> e7db65939c70774eba559a6b5cd257026b4fe988

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <HStack
        justifyContent={"space-between"}
        p="0px 10px 0px 10px"
        alignItems={"flex-start"}
      >
        <Box>
          <LeftSidebar />
        </Box>
        <Box>
          <RightSidebar />
        </Box>
      </HStack>
=======
<<<<<<< HEAD
      <Feeds />
      
=======
<<<<<<< HEAD
      <Box height="100%">
        <LeftSidebar />
      </Box>
=======
     <Signup/>
     {/* <Login/> */}
>>>>>>> 288ebea1ee3004e20584dc24282ede1034693c07
>>>>>>> 4c24ab75626a22a045d5d927e0e967c33b392ab1
>>>>>>> e7db65939c70774eba559a6b5cd257026b4fe988
    </div>
  );
}

export default App;
