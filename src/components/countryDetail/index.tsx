import { ArrowBack } from "@material-ui/icons";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { ICountry } from "../utils/types";

export const CountryDetail = () => {
  const axios = useAxios();
  const params = useParams();
  const [country, setCountry] = useState<ICountry>()
  const getSearchedCountry = async () => {
    const countriesData  = await  axios.get(`/name/${params?.name}`)
    if(countriesData.data.length > 0) {
      setCountry(countriesData.data[0])
    }
  }
  useEffect(() => {
    getSearchedCountry()
  }, [])
  console.log("country", country )

  const s = "https://restcountries.com/v2/name/{name}?fullText=true"
    return (
      <Container sx={{backgroundColor: "secondary.main", paddingTop: "10px", height:"calc(100vh - 53.5px)"}}>
        <NavLink to="/">
          <Button variant="outlined" sx={{backgroundColor: "primary.main", boxShadow: 3 , color: "primary.contrastText"}} startIcon={<ArrowBack />}>
            Back
          </Button>
        </NavLink>
        <Box sx={{display: "flex", gap: {xs: 1, sm: 1, md: 10}, marginTop: "10px", flexDirection: {xs: "column", sm: "column", md: "row"}}}>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{
                width: 1,
              }}
              alt="The house from the offer."
              src={`${country?.flags?.png}`}
            />
          </Box>
          <Box sx={{width: {xs: "100%", sm: "100%", md: "35%"}, marginTop: {xs: "10px", sm: "10px", md:'48px'}}}>
            <Typography variant="h3" color="text.main" sx={{ fontWeight: 'bold' }}>
                {country?.name?.common}
            </Typography>
            <Box sx={{display: "flex", flexDirection: "column", gap: 1, marginTop: "10px"}}>
            <Box sx={{display: "flex", gap: "4px"}}>
                <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500 }}>
                    Native Name:
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '16px' }}>
                    {country?.name?.nativeName?.eng?.official}
                </Typography>
            </Box>
            <Box sx={{display: "flex", gap: "4px"}}>
                <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500 }}>
                    Population:
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '16px' }}>
                    {country?.population}
                </Typography>
            </Box>
            <Box sx={{display: "flex", gap: "4px"}}>
                <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500 }}>
                    Region:
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '16px' }}>
                    {country?.region}
                </Typography>
            </Box>
            <Box sx={{display: "flex", gap: "4px"}}>
                <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500 }}>
                    Sub Region:
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '16px' }}>
                    {country?.subregion}
                </Typography>
            </Box>
            <Box sx={{display: "flex", gap: "4px"}}>
                <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500 }}>
                    Capital:
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: '16px' }}>
                    {country?.capital}
                </Typography>
            </Box>
            </Box>
            {
              country?.borders  && (
                <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row"}, gap: "4px", marginTop: "60px", alignItems: {xs: "start", sm: "start", md:" center"}}}>
                  <Typography  color="text.main" sx={{ fontSize: '16px', fontWeight: 500, whiteSpace: "nowrap" }}>
                      Border  Countries:
                  </Typography>
                  <Box sx={{display: "flex", flexWrap: "wrap", gap:2}}>
                    {
                      country.borders.map((border, index) => (
                        <Paper  key={index} color="text.secondary" sx={{ fontSize: '16px', px: "24px", py: "4px", backgroundColor: "primary.main" }}>
                            {border}
                        </Paper>
                      ) )
                    }
                  </Box>  
                </Box>
              )
            }
          </Box>
        </Box>
      </Container>
    )
}