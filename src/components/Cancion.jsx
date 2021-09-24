import React from 'react'

const Cancion = ({letra}) =>{
    if(letra.length === 0) return null
    return (
    <>
    <h1>Letra Canción</h1>
    <p className="letra">{letra}</p>
    </>
)}
      

export default Cancion
