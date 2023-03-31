import React from "react";
import {Col, Card, Row, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';
import placeholder from './git.png'

var Entrada=()=>{
return(
<div className="fondo" align="center">
<div className="entradap" align="center">
        
            <h1>¡Bienvenido!</h1>
            <br></br>
            <p>
               Este es un blog para aquellos que gustan de programar o quieren aprender a hacerlo
            </p>
            <Button class="btn btn-info" as={Link} to="/segundacategoria">¿Quieres Aprender?</Button>
</div>

<div className='margins'>
<Row className="row row-cols-1 row-cols-md-3 g-4">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>¿Quieres guardar tus proyectos?</Card.Title>
              <Card.Text>
              Github es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, 
              la plataforma está creada para que los desarrolladores suban el código de sus aplicaciones y herramientas, 
              y que como usuario no sólo puedas descargarte la aplicación, sino también entrar a su perfil para leer
               sobre ella o colaborar con su desarrollo.
               <br></br>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button class="btn btn-info" href="https://github.com/">¡Vamos!</Button>
        </Card.Footer>
          </Card>
        </Col>
        
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>¿Tienes dudas sobre como iniciar?</Card.Title>
              <Card.Text>
              1. Encuentra tu motivación.
              <br></br>
              2. Comienza desde la base y usa la lógica.
              <br></br>
              3. Familiarízate con los programas y sistemas.
              <br></br>
              4. ¡A practicar!, elige algun lenguaje y empieza a practicar
              <br></br>
              5. La practica hace al maestro, por lo cual no te sientas mal si no lo entiendes todo de un inicio :)
              <br></br>
              6. No intentes correr sin antes andar, asegurate de comprender totalmente algo antes de cambiar de tema
              <br></br>
              7. Aprende a lidiar con la frustración
              <br></br>
              8.El mejor lenguaje para programar es… ¿Java?, ¿Phyton?, ¿C?, todo dependera de los requisitos de lo que 
              tengas que hacer, por lo cual dependiendo de lo que nesecites uno u otro sera mas adecuado
              <br></br>
              9. Nunca tienes que darte por vencido. La satisfacción de haber logrado el objetivo compensará con creces esos malos momentos
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>¿Quieres que los demas puedan usar tus trabajos?</Card.Title>
              <Card.Text>
              ¿Qué es un hosting y cómo funciona?
            Un hosting es un servicio online que hace que se pueda acceder a tu sitio web en Internet. 
            Cuando obtienes un hosting, básicamente alquilas un espacio en un servidor que almacena todos los
             archivos y datos de tu sitio web para que funcione correctamente.
             Los proveedores de hosting web proporcionan la tecnología y los recursos necesarios 
             para que tu sitio web funcione de forma eficaz y segura. Éstos se encargan de mantener el s
             ervidor en funcionamiento, aplicar medidas de seguridad y garantizar que datos como textos, 
             fotos y otros archivos se transfieran correctamente a los navegadores de los visitantes.
              </Card.Text>
            </Card.Body><Card.Footer>
            <Button class="btn btn-info">¡Vamos!</Button>
        </Card.Footer>
          </Card>
        </Col>
    </Row>
  </div>
  </div>
);

}

export default Entrada;