import React, {useState} from 'react';

function App() {
  const [flashcards, setFlashcards = useState(SAMPLE_FLASHCARDS))]
  return (
    <div>
      <h1>Hello World</h1>
      {flashcards}
    </div>  
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question:'What is 2 + 2',
    answer: '4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id:2,
    question:'Question 2',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      '5'
    ]
  }

]

export default App;
