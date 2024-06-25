import { useEffect, useState } from 'react';
import { getJokeByCategory, getRandomJoke } from './hooks/ApiRequests'
import Button from './components/Button';
import TextArea from './components/TextArea';
import ChuckImage from './components/ChuckImage';
import JokeCategoriesRow from './components/JokeCategoriesRow';

function App() {
  
  const [joke, setJoke] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const generateChuckNorrisJoke = async () => {
    const joke = await getRandomJoke();
    setJoke(joke);
    setImageIndex(Math.floor(Math.random() * 7));
  }

  const generateChuckNorrisJokeByCategory = async (category:string) => {
    const joke = await getJokeByCategory(category);
    setJoke(joke);
    setImageIndex(Math.floor(Math.random() * 7));
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className='text-4xl font-bold text-center my-8'>Chuck Norris Jokes</h1>
      <ChuckImage imageIndex={imageIndex}/>
      <JokeCategoriesRow onClickEvent={generateChuckNorrisJokeByCategory}/>
      <TextArea 
        value={joke} 
        isReadOnly
      />
      <Button 
        onClick={generateChuckNorrisJoke} 
        text="Generate Random Joke" 
      />
    </div>
  )
}

export default App
