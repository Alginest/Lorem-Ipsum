import React, { useState } from 'react'
import data from './data'
function App() {
  const [value, setValue] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let count = parseInt(value)
    if (count > 8) {
      count = 8
    }
    if (count < 1) {
      count = 1
    }
    setText(data.slice(0, count))
  }
  return (
    <section className='section-center'>
      <h3> Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='lorem'>Paragraphs: </label>
        <input
          type='number'
          name='lorem'
          id='lorem'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
