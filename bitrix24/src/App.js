import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Box, HStack } from "@chakra-ui/react";
import Login from "./components/pages/login/Login";
import { RightSidebar } from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
