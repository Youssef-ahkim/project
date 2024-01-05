import './App-dice-roller.css';
import { useState, useEffect } from 'react';
import { diceImages } from './data';

function App() 
{
  const [image1, setNewImage] = useState(diceImages[0])
  const [image2, setNewImage2] = useState(diceImages[1])
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (rolling) {
      const timeout = setTimeout(() => {
        setRolling(false);
      }, 500); // Wait for 0.5 seconds (duration of the shake animation)

      return () => clearTimeout(timeout); // Clear timeout if component unmounts
    }
  }, [rolling]);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);

      setTimeout(() => {
        var randomNum1 = Math.floor(Math.random() * 6);
        var randomNum2 = Math.floor(Math.random() * 6);
        setNewImage(diceImages[randomNum1]);
        setNewImage2(diceImages[randomNum2]);
      }, 500); // Wait for 0.5 seconds (duration of the shake animation)
    }
  }

  return (
    <div className="App">
      <center>
        <h1>Welcome to MY DICE ROLLER</h1>
        <div className='container'>
          <img className={`dice ${rolling ? 'shake' : ''}`} src={image1} alt='dice'></img>
          <div className='spacer'></div>
          <img className={`dice ${rolling ? 'shake' : ''}`} src={image2} alt='dice'></img>
        </div>
        <button type="button" className="roll-button" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  );
}

export default App;
