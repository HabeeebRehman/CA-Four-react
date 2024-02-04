import { useState } from 'react';
import React from 'react'
import styles from './QuestionBox.css'
import Result from './Result'

export default function QuestionBox(props) {
  const { questions } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlightText, sethighlightText] = useState(false);

  const handleOption = (option) => {
    setCurrentQuestion(currentQuestion + 1);
    if (questions[currentQuestion].options[option].isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className='main-container'>
      {currentQuestion < questions.length ? (
        <>
          <div className='question-container'>
            <h3 style={{ color: '#008000' }}>Question {currentQuestion + 1} of {questions.length}</h3>
            <h2 style={{ color: highlightText ? "red" : "navy" }}>{questions[currentQuestion].text}</h2>
          </div>

          <div className="optionsContainer">
            {questions[currentQuestion].options.map(option => (
              <div className='options' key={option.id}>
                <button onClick={() => handleOption(option.id)}>{option.text}</button>
              </div>
            ))}
          </div>

          <div className='highLightContainer'>
            <button onClick={() => sethighlightText(true)}>Highlight</button>
            <button onClick={() => sethighlightText(false)}>Removehighlight</button>
          </div>
        </>
      ) : (
        <Result score={score} />
      )}
    </div>
  )
}
