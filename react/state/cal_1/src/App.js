import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    let [val1,setval1] = useState();
    let [val2,setval2] = useState();
    let [disp,setdisp] = useState();


    let cal1 = () => {
      setdisp(parseInt(val1) + parseInt(val2));
    }
    let cal2 = () => {
      setdisp(parseInt(val1) - parseInt(val2));
    }
    let cal3 = () => {
      setdisp(parseInt(val1) * parseInt(val2));
    }
    let cal4 = () => {
      setdisp(parseInt(val1) / parseInt(val2));
    }

  return (
    <>
      Value 1:- <input type='text' onChange={(e) => {setval1(e.target.value)}}></input><br/> <br/> 
      Value 2:- <input type='text' onChange={(e) => {setval2(e.target.value)}}></input> <br/><br/> 
      Answer:- <input type='text' value={disp}></input> <br/><br/> 


      <button onClick={cal1}>sum</button> 
      <button onClick={cal2}>Sub</button> 
      <button onClick={cal3}>Mul</button> 
      <button onClick={cal4}>Div</button> 

    
    </>
  );
}

export default App;
