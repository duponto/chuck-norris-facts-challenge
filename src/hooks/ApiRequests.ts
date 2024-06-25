import axios, { HttpStatusCode } from 'axios';

export const useGetChuckNorrisJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    if(response.status == HttpStatusCode.Ok){
        return response.data.value;
    }
    return 'failed with status of' + response.status;
};

export const useGetJokesCategories = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories');
    if(response.status == HttpStatusCode.Ok){
        return response.data;
    }
    return 'failed with status of' + response.status;
}