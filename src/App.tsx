import { useState } from 'react';
import './App.css'
import { fetchChuckNorrisJoke } from './hooks/ApiRequests'

function App() {
  
  const [joke, setJoke] = useState('');

  const generateChuckNorrisJoke = async () => {
    const response = await fetchChuckNorrisJoke();
    setJoke(response);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <textarea
        className="w-1/2 h-1/4 p-4 mb-4 border border-gray-300 rounded"
        id='outputText'
        value={joke}
        readOnly
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out"
        onClick={generateChuckNorrisJoke}
      >
        Click Me
      </button>
    </div>
  )
}

export default App
