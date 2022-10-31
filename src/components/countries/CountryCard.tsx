import { Box, Card, CardContent, CardMedia, Typography, styled } from "@mui/material"
import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { ICountry } from "../utils/types"


interface ICountryProps {
  data?: ICountry
}
 
export const CountryCard: FC<ICountryProps> = ({data}) => {
  return (
    <Box>
      <NavLink to="/country/sss" >
        <Card sx={{ maxWidth: 320, height: 350}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={`${data?.flags.png}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.name.common}
            </Typography>
            <Typography variant="body2" color="text.main" sx={{display: "flex"}}>
              Population:  <Typography variant="body2" color="text.secondary"> {data?.population}</Typography>
            </Typography>
            <Typography variant="body2" color="text.main" sx={{display: "flex"}}>
              Region:  <Typography variant="body2" color="text.secondary"> {data?.region}</Typography>
            </Typography>    
            <Typography variant="body2" color="text.main" sx={{display: "flex"}}>
              Capital:<Typography variant="body2" color="text.secondary"> {data?.capital}</Typography>
            </Typography>   
          </CardContent>
        </Card>
      </NavLink>
    </Box>
    
  )
}