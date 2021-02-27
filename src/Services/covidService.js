import axios from 'axios';

const apiEndPoint = "https://covid-19-data.p.rapidapi.com/totals"

export function  getRecords() {
	return  axios.get(apiEndPoint, { 
        headers: {
            'x-rapidapi-key': '5cb6937e56mshc78c1e3ea0cafa4p14c4a6jsn5b56cad1b0dc',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'useQueryString': true,
        }
    })
   .catch(err => window.alert('error while getting users List'))}