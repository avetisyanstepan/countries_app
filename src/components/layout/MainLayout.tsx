import { FC } from "react"
import { Box, Container } from "@mui/material";


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