import React, {useState} from 'react'
import data from '../../data.json';
// import './App.css' ???
import User from '../js/user';
import Card from './card';
function App() {

  const [time, setTime] = useState('daily');

  const handleClick = (data) => {

    setTime(current => current = data);

    //console.log('argument from Child: ', current);
  };

  //const [state, setState] = useState('daily');


  return (
    <>
      <User handleClick={handleClick} />
      <Card data={data} time = {time} title={'Work'}/>
      {/* <Card data={data} time = {time} title={'Play'}/>
      <Card data={data} time = {time} title={'Study'}/>
      <Card data={data} time = {time} title={'Exercise'}/>
      <Card data={data} time = {time} title={'Social'}/> */}

      <h2>Count: {time}</h2>

    </>

  )
}

export default App
