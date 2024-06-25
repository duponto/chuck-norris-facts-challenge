import axios from 'axios';

export const getRandomJoke = async () => {
    return axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => response.data.value)
        .catch(error => {
        console.error('Error fetching response:', error);
        throw error;
        });
};

export const getJokeByCategory = async (category: string) => {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(response => response.data.value)
        .catch(error => {
        console.error('Error fetching response:', error);
        throw error;
        });
}

