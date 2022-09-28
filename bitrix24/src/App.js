import "./App.css";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box height="100%">
        <LeftSidebar />
      </Box>
    </div>
  );
}

export default App;
