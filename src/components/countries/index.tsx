import { SearchOutlined } from "@material-ui/icons"
import { Box, Container, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import { CountryCard } from "./CountryCard"
import useAxios  from "../../Hooks/useAxios";
import debounce from "lodash.debounce";



export const Countires = () => {
  const axios = useAxios()
  const [countryName, setConutryName] = useState("")
  const [countries, setCountries] = useState([])
  const handleFilterCountries = (e: any) => {
    e.preventDefault()
    getFilteredCountries(e.target.value.toLowerCase())
  }

  const handleSearchCountry = debounce((e: any) => {
    e.preventDefault();
    getSearchedCountry(e.target.value.toLowerCase())

  },500)

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
 
  console.log("data",countries)
    return (
			<MainLayout>
        <Container>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
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
            <FormControl sx={{ m: 1, minWidth: 170 }}>
              <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countryName}
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
            <Box sx={{display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "space-between"}}>
              
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
            </Box>
        </Container>
      </MainLayout>
		)
}