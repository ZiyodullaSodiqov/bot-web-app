import React from 'react';
import './App.css';
import { useEffect } from 'react'

const tele = window.Telegram.WebApp;

function App() {

  useEffect(()=>{
    tele.ready();
  })

  return (
      <React.Fragment>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-sXFuYKNQ9opDkYv1gtxSSIx94VDSZxtEs2LmlF_5c1rUFg/viewform?embedded=true" style={{width:"100%", height:"8025px"}} frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
      </React.Fragment>
  );
}

export default App;
