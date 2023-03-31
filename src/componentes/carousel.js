import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import stack from './stack.png'
import sitepoint from './sitepoint.png'
import CodeProject from './CodeProject.jpeg'
let Carrusel=()=> {
  return (
    <div><h1 align="center">Algunos Foros para Programadores</h1>
    <br></br>
    <Carousel variant='dark'>
      <Carousel.Item interval={5000}>
        <a href='https://stackoverflow.com/'><img
          className="d-block w-100 "
          src={stack}
          alt="First slide"
        /></a>
        
        <Carousel.Caption>
            <div className='p-3 mb-2 bg-secondary text-white'>
          <h3>Stack Overflow</h3>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <a href='https://www.sitepoint.com/community/'>
        <img
          className="d-block w-100"
          src={sitepoint}
          alt="Second slide"
        /></a>
        <Carousel.Caption>
        <div className='p-3 mb-2 bg-secondary text-white'>
          <h3>SitePoint</h3>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://www.codeproject.com/Lounge.aspx'>
        <img
          className="d-block w-100"
          src={CodeProject}
          alt="Third slide"
        /></a>
        <Carousel.Caption>
        <div className='p-3 mb-2 bg-secondary text-white'>
          <h3>CodeProject</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br></br>
    </div>
    
  );
}

export default Carrusel;