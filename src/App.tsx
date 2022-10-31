import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countires } from "./components/countries";
import { Country } from "./components/country";
import { useState } from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box, Button, Container, Typography } from "@mui/material";
import { green, purple } from '@mui/material/colors';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    
    palette: {
      mode: 'dark',
      primary: {
        main: "#ffffff" ,
      },
    },
   
    
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#000000",
      },
    },
  });

  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
      <Box sx={{borderBottom: 1, borderColor: "gray", paddingY: "8px", boxShadow: 1}}>
        <Container 
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
        > 
          <Typography>
            Where in the world?
          </Typography>
          <Button 
            color="primary"
            onClick={() => setDarkMode(!darkMode) } 
            disableRipple disableElevation
            style={{background: "transparent"}}
          >
          {darkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon /> }
            DarkMode
          </Button>
        </Container>
      </Box>
      <Box sx={{marginTop: 4}}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countires />}>
            <Route path="country/:id" element={<Country />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </Box>
     
  </ThemeProvider>
    
   
  );
}

export default App;
