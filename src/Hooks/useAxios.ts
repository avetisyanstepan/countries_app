import axios from 'axios';

const instance = axios.create({
  baseURL:'https://restcountries.com/v3.1/' ,

  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  }
  
});


const useAxios = () => instance;

export default useAxios;
