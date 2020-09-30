import React from 'react';
import './App.css';
import Canidate from './Canidate'

function App() {
  const trump = ["There's nothing smart about you, Joe", "Proud Boys, stand back and stand by,", "I did more in 47 months as President than Joe Biden did in 47 years!"]
  const biden = ["It's hard to get any words in with this clown.", "Show us your tax returns.", "Will you shut up, man?"]


  return (
    <div className="App">
      <Canidate
        who={trump}
        name="Donald Trump"
        title="U.S. President"
        party="Republican"
        imageUrl="https://media.vanityfair.com/photos/5f73ffc51974fdefdd159e75/master/w_2560%2Cc_limit/donaldtrumpjoebidendebate.jpg"
      />
      <Canidate
        who={biden}
        name="Joe Biden"
        title="Former Vice President"
        party="Democratic"
        imageUrl="https://static01.nyt.com/images/2020/09/29/us/politics/-29vid-debate-biden-2/-29vid-debate-biden-2--videoSixteenByNine3000-v2.jpg"
      />
    </div>
  );
}

export default App;
