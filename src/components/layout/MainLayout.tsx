import { FC } from "react"
import { Box, Container } from "@mui/material";


interface ILayoutProps {
  children?: JSX.Element
}

export const MainLayout: FC<ILayoutProps> = ({children}) => {
  return (
    <Container sx={{backgroundColor: "secondary.main", paddingTop: 6}}>
      <Box  sx={{display: 'flex', flexDirection: "column", mx: 'auto',  marginBottom: "20px"}}>
        {children}
      </Box>  
    </Container>
  )
}