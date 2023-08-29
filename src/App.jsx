import { useState } from 'react';
import './App.css'
import BtnQuote from './components/BtnQuote';
import Quote from './components/Quote';
import phrases from './utils/phrases.json'
import getRandomPosArray from './utils/getRandomPosArray';

function App() {
  
  const phraseRandom = getRandomPosArray(phrases)
  const numberRandom = getRandomPosArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBG, setNumberBG] = useState(numberRandom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBG}.png)`
  }

  return (
    <div className='container' style={bgStyle}>
      <h1 className='container_title'>Galleta de la Fortuna</h1>
      <Quote phrase={quote}/>
      <BtnQuote  
        setQuote={setQuote}
        phrases={phrases}
        setNumberBG={setNumberBG}/>
    </div>
  )
}

export default App
