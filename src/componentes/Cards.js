import React from 'react';
import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css';
import axios from 'axios';
import placeholder from './pla.jpg'

let Cards=()=> {
  const [datos, setDatos]=useState() 
  const fetchApi = async ()=>{
    const response = await fetch('http://192.168.1.9:3001/lenguajes/getLenguajes')
    console.log(response.status)
    const responseJson = await response.json()
    setDatos(responseJson)
    console.log(responseJson)
  };
  useEffect(()=>{
    fetchApi();
  },[])
  return (
    <div className='margins'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
{
  
  !datos ? 'mostrar datos' :
  datos.map((datos,index)=>{
 return<div class="col">
    <div class="card h-100">
    <img src={placeholder} class="card-img-top img-responsive"/>
    <div class="card-body">
      <h5 class="card-title">{datos.nombre}</h5>
      <p class="card-text">
       {datos.descripcion}
       <br></br>
       Año de creacion: {datos.anocreacion}
      </p>
    </div>
  </div>
  </div>
  })
}
</div>
</div>
  );
  }



export default Cards;