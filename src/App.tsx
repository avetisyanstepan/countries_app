import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countires } from "./components/countries";
import { CountryDetail } from "./components/countryDetail";
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
        main: "#2d3743",
        light: "#ffffff",
        contrastText: "#ffffff"
      },
      secondary: {
        main:"#222c36",
        contrastText: "#ffffff"
      },
      text: {
        primary: "#ffffff",
        secondary: "#fafafa"
      },
    },
   
    
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#ffffff",
        contrastText: "#000000"
      },
      text: {
        primary: "#000000",
        secondary: "#1f1d1d"
      },
      secondary: {
        main: "#fafafa",
        contrastText: "#ffffff"
      }
    },
  });
    console.log("palete", darkTheme.palette)
  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
      <Box sx={{backgroundColor: "primary.main", borderBottom: 1, borderColor: "gray", paddingY: "8px", boxShadow: 1}}>
        <Container 
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
        > 
          <Typography sx={{color: 'text.primary'}}>
            Where in the world?
          </Typography>
          <Button 
            sx={{ color: 'primary.contrastText', borderColor: 'green' }}
            onClick={() => setDarkMode(!darkMode) } 
            disableRipple disableElevation
            style={{background: "transparent"}}
          >
          {darkMode ? <DarkModeOutlinedIcon /> : <DarkModeIcon /> }
            DarkMode
          </Button>
        </Container>
      </Box>
      <Box>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countires />} />
          <Route path="country/:name" element={<CountryDetail />} />
        </Routes>
        </BrowserRouter>
      </Box>
     
  </ThemeProvider>
    
   
  );
}

export default App;
