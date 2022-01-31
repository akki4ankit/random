
import { Button } from "@material-ui/core";
import "./App.css";
import { Slider } from '@material-ui/core';
import { FaHeadphones } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react'
import dateFormat, { masks } from "dateformat";
const now = new Date();

function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1); // important else timer value will always be 0, since its a closure
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='App-header'>
      <h1>Welcome  CB ! </h1>

      <h2> {
        new Date().toLocaleTimeString()
      }<br></br>
        {dateFormat(now, "ddd, dS mmm")}
      </h2>
      <div>
        <header >
          <Button variant="contained" color="primary" disableRipple className="button1" >Waiting</Button>
          <h3> The  host will let you in soon </h3>
          <h3>Please test your microphone & headset<br></br>in the side panel.</h3>
          <div >
            <FaHeadphones size={40} />
            <Slider defaultValue={80} aria-label="Default" valueLabelDisplay="auto" />
          </div>
          <label for="cars">Choose a car : </label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </header>

      </div>
    </div>
  );
}

export default App;
