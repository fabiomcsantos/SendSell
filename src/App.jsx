import React, { useState, useEffect } from 'react';
import ListCell from './components/ListCell'
import './App.css'
import api from './services/api'


function App() {
  const [celulares, setCelulares]=useState([]);

  useEffect(() => {
    const url='/celulares';
    api.get(url)
      .then((response) => {
        // console.log(response.data)
        setCelulares(response.data)
      })
  },[])

  return (
    <>
    <div className='principal'>
        <h2 className='title'>Celulares</h2>
        {
          celulares.map(celular => {
            return (<ListCell
              key={celular.url}
              celulares={celular}
              />)
          })
        }
    </div>
    </>
  )
}

export default App
