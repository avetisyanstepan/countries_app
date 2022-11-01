import { SearchOutlined } from "@material-ui/icons"
import { Box, Container, FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import { CountryCard } from "./CountryCard"
import useAxios  from "../../Hooks/useAxios";
import debounce from "lodash.debounce";



export const Countires = () => {
  const axios = useAxios();
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);

  const handleFilterCountries = (e: any) => {
    e.preventDefault()
    getFilteredCountries(e.target.value.toLowerCase())
    setRegion(e.target.value)
  }

  const handleSearchCountry = debounce((e: any) => {
    e.preventDefault();
    if(e.target.value.length !== 0 ) {
      getSearchedCountry(e.target.value)
    } else {
      getCountries()
    }
  },200)

  const getFilteredCountries = async (region: string) => {
    const countriesData  = await  axios.get(`/region/${region}`)
     if(countriesData.data) {
      setCountries(countriesData.data)
     }
  }
  const getCountries = async () => {
    const countriesData  = await  axios.get("/all")
     if(countriesData.data) {
      setCountries(countriesData.data)
     }
  }
  const getSearchedCountry = async (name: string) => {
    const countriesData  = await  axios.get(`/name/${name}`)
     if(countriesData.data) {
      setCountries(countriesData.data)
     }
  }
  
  useEffect(() => {
    getCountries()
  }, [])
  console.log("sss", countries)
 
    return (
			<MainLayout>
        <Container>
          <Box sx={{display: "flex", marginBottom: "30px", flexDirection: {xs: "column", sm: "column", md: "row"}, gap: {xs: 2, sm: 2, md: 0}, justifyContent: "space-between"}}>
            <TextField
              id="standard-bare"
              variant="outlined"
              placeholder="Seaarch for a country"
              onChange={handleSearchCountry}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
            <FormControl sx={{ width: {xs: "50%", sm: "50%", md: 170} }}>
              <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="Filter by Region"
                onChange={handleFilterCountries}
              >
                <MenuItem value={"Africa"}>Africa</MenuItem>
                <MenuItem value={"America"}>America</MenuItem>
                <MenuItem value={"Asia"}>Asia</MenuItem>
                <MenuItem value={"Europe"}>Europe</MenuItem>
                <MenuItem value={"Ocenainc"}>Oceania</MenuItem>
              </Select>
            </FormControl>
          </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 8, lg:12 }}>
              
              {
                countries.length > 0 
                ?
                  countries?.map((a, index) => (
                    <CountryCard 
                      key={`${index}`}
                      data={a}
                    />
                  ))
                :
                 <Box>Loading....</Box>
              }
            </Grid>
        </Container>
      </MainLayout>
		)
}