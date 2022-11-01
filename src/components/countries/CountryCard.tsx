import { Box, Card, Grid, CardContent, CardMedia, Typography, styled } from "@mui/material"
import { FC } from "react"
import { Link, NavLink } from "react-router-dom"
import { ICountry } from "../utils/types"


interface ICountryProps {
  data?: ICountry
}
 
export const CountryCard: FC<ICountryProps> = ({data}) => {
  return (
    <Grid item xs={2} sm={4} md={4} sx={{height:1}}>
      <NavLink to={`/country/${data?.name.common.toLowerCase().replaceAll(" ", '-')}`} style={{textDecoration: 'none'}} >
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={`${data?.flags.png}`}
          />
          <CardContent sx={{backgroundColor:"primary.main"}}>
            <Typography gutterBottom variant="h5">
              {data?.name.common}
            </Typography>
            <Typography color="text.main" sx={{display: "flex"}}>
              Population:  <Typography variant="body2" color="text.secondary"> {data?.population}</Typography>
            </Typography>
            <Typography  color="text.main" sx={{display: "flex"}}>
              Region:  <Typography variant="body2" color="text.secondary"> {data?.region}</Typography>
            </Typography>    
            <Typography  color="text.main" sx={{display: "flex"}}>
              Capital:<Typography color="text.secondary"> {data?.capital}</Typography>
            </Typography>   
          </CardContent>
        </Card>
      </NavLink>
    </Grid>
    
  )
}