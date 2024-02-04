import React from 'react'
import './Result.css'

export default function Result(props) {
  const { score } = props;
  let percentage = `${score * 20}%`;

  return (
    <div className='results'>
      <h1>Final Results</h1>
      <h3>{score} out of 5 questions are correct - ({percentage})</h3>
      <button onClick={() => { window.location.reload() }}>Restart</button>
    </div>
  )
}
