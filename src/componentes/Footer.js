import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer=()=>{
    return(
<div><MDBFooter bgColor='dark' color='white' className='text-center text-lg-start text-muted'>
      <br></br>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               Footer
              </h6>
              <p>
                Prueba Tecnica Turing IA
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>¿Quieres Instalar algun Framework?</h6>
              <p>
                <a href='https://www.freecodecamp.org/espanol/news/como-instalar-angular-en-windows/' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='https://codea.app/blog/instalar-react-js' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='https://es.vuejs.org/v2/guide/installation.html' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='https://laravel.com/docs/4.2' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Indice</h6>
              <p>
                <a href="/" className='text-reset'  >
                  Home
                </a>
              </p>
              <p>
                <a href='/segundacategoria' className='text-reset'>
                  Aprendizaje
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Ixtapaluca, Edo de Mexico, Cuatro Vientos
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dasamo141@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 52 56 1090 12 84
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter></div>
    
)}
export default Footer;