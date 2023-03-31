import React from "react";
import './App.css';
import Table from 'react-bootstrap/Table';
import {Col, Card, Row, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
let PrimerCategoria=()=> {
return(
    <div>
<div className="fondo" align="center">
<div className="entradad" align="center">
        
            <h1>¡Te doy la bienvenida futuro programador!</h1>
            <br></br>
            <p>
               Asi que estas interesado en iniciar a programar, 
               en esta seccion encontraras informacion de los mejores sitios donde poder adquirir 
               cursos para darte una ayudadita.
            </p>
</div>
</div>
<br></br>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Pagina</th>
          <th>Descripcion</th>
          <th>Pagina</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Udemy</td>
          <td>Udemy es un portal de educación en línea que ofrece miles de cursos. Hay muchos cursos pagos en la plataforma, pero también encontrarás muchos gratuitos. Además, siempre hay cupones y ofertas especiales donde puedes encontrar descuentos e incluso versiones gratuitas de cursos pagos.</td>
           <td><Button class="btn btn-info" href="https://www.udemy.com/">Ir</Button></td> 
        </tr>
        <tr>
          <td>BitDegree</td>
          <td>BitDegree ofrece un montón de cursos gratuitos que van desde la programación hasta el desarrollo de juegos, ofrecen cursos en línea estándar y cursos gamificados. Estos últimos incorporan el alcance de metas y la interacción en el proceso de aprendizaje. Todo lo que tienes que hacer es elegir tu idioma y comenzar a aprender.</td>
           <td><Button class="btn btn-info" href="https://www.bitdegree.org/learn/">Ir</Button></td> 
        </tr>
        <tr>
          <td>Coursera</td>
          <td>Coursera ofrece cursos, tutoriales y recursos de programación, impartidos por profesores de las principales universidades. Encontrarás cientos de diferentes cursos relacionados con la programación para elegir.</td>
           <td><Button class="btn btn-info" href="https://mx.coursera.org/">Ir</Button></td> 
        </tr>
        <tr>
          <td>Code Academy</td>
          <td>Code Academy es uno de los sitios más populares para aprender a programar gratis. Más de 24 millones de personas han aprendido a programar utilizando esta plataforma, ofrecen cursos que van desde la programación introductoria hasta lenguajes más avanzados. El enfoque de aprendizaje interactivo te permite aplicar de inmediato lo que has aprendido. Hay más de 300 millones de horas de contenido de programación gratis disponibles para que puedas pasar de ser un principiante absoluto a un programador experimentado.</td>
           <td><Button class="btn btn-info" href="https://www.codecademy.com/">Ir</Button></td> 
        </tr>
      </tbody>
    </Table>
    </div>
);
}

export default PrimerCategoria;