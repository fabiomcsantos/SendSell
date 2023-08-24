import React from 'react'
import '../ListControle/ListControle.css';

export default function CellComponets ({celulares}) {
    return (
        <>
        <div className='content'>
          <img src={celulares.image} alt="celular" />
            <div className='informations'>
            <h3>marca</h3>
              <h5>{celulares.marca}</h5>
            <h3>modelo</h3>
              <h5>{celulares.modelo}</h5>
            <h3>sistema</h3>
              <h5>{celulares.sistema}</h5>
            <h3>preço</h3>
              <h5>R$ {celulares.price}</h5>
            </div>
            <div className='button'>
            <a href={celulares.url}><button className='editar'>Editar</button></a>
            <a href={celulares.url}><button className='excluir'>Excluir</button></a>
            </div>
        </div>
    
        </>
    )
}