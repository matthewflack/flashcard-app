import React, {useState} from 'react';
import FlashcardList from './FlashcardList';
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <FlashcardList flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question:'What is 2 + 2',
    answer: 'The answer is 4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:2,
    question:'What is 3 x 3?',
    answer: 'The answer is 9',
    options:[
      '6',
      '12',
      '9',
      '5'
    ]
  }

]

export default App;
