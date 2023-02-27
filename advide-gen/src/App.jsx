// import React, { useState } from 'react';
// import './index.css'

// //console.log('adv' + advice);
// function App() {
//   //consdt [count, setCount] = useState(0)

//   let id = Math.floor(Math.random() * 100);
//   let api = `https://api.adviceslip.com/advice/${1}`;

//   const [adviceId, setAdviceId] = useState('');
//   const [adviceAdvice, setAdviceAdvice] = useState('');

//   let ad ='';
//   const advice =  fetch(api)
//     .then((response) => response.json())
//     //.then((data) => console.log(data.slip.advice))
//     .then(data => setAdviceId(data))
//     .then(data => setAdviceAdvice(data));

//     console.log(adviceId);
//   return (
//     <section className="card">
//       <h1 className="card__advice">Advice #</h1>
//       <p className="card__text"></p>
//       <div className="card__image"> </div>
//       <div className='card__dice'>
//       <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
//       </div>

//     </section>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [adviceId, setAdviceId] = useState('');
  const [adviceAdvice, setAdviceAdvice] = useState('');

  useEffect(() => {
    const fetchAdvice = async () => {
      const response = await fetch('https://api.adviceslip.com/advice/1');
      const data = await response.json();
      setAdviceId(data.slip.id);
      setAdviceAdvice(data.slip.advice);
    };
    fetchAdvice();
  }, []);

  return (
    <section className="card">
      <h1 className="card__advice">Advice #{adviceId}</h1>
      <p className="card__text">{adviceAdvice}</p>
      <div className="card__image"> </div>
      <div className='card__dice'>
        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </div>
    </section>
  );
}

export default App;