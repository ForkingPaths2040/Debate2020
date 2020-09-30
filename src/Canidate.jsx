import React, { useState } from 'react'

function Canidate(props) {
  const [quote, setQuote] = useState('')




  function toggleQuote() {
    setQuote(props.who[(Math.floor(Math.random() * props.who.length))])
  }
  return (
    <div className="card">
      <h2>{quote}</h2>
      <img src={props.imageUrl} alt='' />
      <h3>
        {props.name}
      </h3>
      <h5>
        {props.title}
      </h5>
      <h6>
        {props.party}
      </h6>
      <div>
        <p>
          <button onClick={toggleQuote}>Next</button>
        </p>
      </div>
    </div>
  )
}

export default Canidate