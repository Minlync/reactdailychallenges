import Sidebar from "./components/Sidebar";
import Feed from "./components/Post";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";


function App() {

     const [mode, setMode] = useState("light");
     const darkTheme = createTheme ({
     palette:{
      mode: mode,
    },

  });

  return (
    <ThemeProvider theme={darkTheme}>
     <Box bgcolor={"background.default"} color={"text.primary"} >
      {/* navbar */}
      {/* <Container  sx ={{backgroundColor:"red"}}>> */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed />
    
     <Rightbar />
      
      {/* </Container> */}
     </Stack>
     <Add />
     </Box>
     </ThemeProvider>

  
  );
}

export default App;
