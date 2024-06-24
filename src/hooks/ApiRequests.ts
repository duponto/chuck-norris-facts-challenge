import axios, { HttpStatusCode } from 'axios';

export const fetchChuckNorrisJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    if(response.status == HttpStatusCode.Ok){
        return response.data.value;
    }
    return 'failed with status of' + response.status;
};