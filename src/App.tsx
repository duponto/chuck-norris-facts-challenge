import { useState } from 'react';
import { useGetChuckNorrisJoke } from './hooks/ApiRequests'
import Button from './components/Button';
import TextArea from './components/TextArea';

function App() {
  
  const [piada, setPiada] = useState('');

  const generateChuckNorrisJoke = async () => {
    const response = await useGetChuckNorrisJoke();
    setPiada(response);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <label className="mb-4">Output</label>
      <TextArea 
        value={piada} 
        isReadOnly
      />
      <Button 
        onClick={generateChuckNorrisJoke} 
        text="Gerar Piadoca" 
      />
    </div>
  )
}

export default App
