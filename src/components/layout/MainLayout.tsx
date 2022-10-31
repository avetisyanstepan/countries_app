import { FC, useState } from "react"
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Box, Container, CssBaseline, Switch } from "@material-ui/core";
import { Paper } from "@mui/material";


interface ILayoutProps {
  children?: JSX.Element
}



export const MainLayout: FC<ILayoutProps> = ({children}) => {
  return (
    <Container>
      <Box  sx={{display: 'flex', flexDirection: "column", mx: 'auto',  color: "#fffff", marginBottom: "20px"}}>
        {children}
      </Box>  
    </Container>
  )
}