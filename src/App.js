import React, {useState, useEffect} from 'react';
import FlashcardList from './FlashcardList';
import './app.css'
import axios from 'axios';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(()=>{
    axios.get(API_ENDPOINT)
    .then(res=>{
      setFlashcards(res.data.results.map((questionItem,index)=>{
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a))
          , answer]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random()- .5)

        }
      }))
    })
  },[])

  function decodeString(str) {
    const textArea = document.createElement('textArea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
}


const API_ENDPOINT = 'https://opentdb.com/api.php?amount=10';

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
