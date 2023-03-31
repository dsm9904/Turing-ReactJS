import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Navibar from './componentes/Navibar';
import Carrusel from './componentes/carousel';
import Cards from './componentes/Cards';
import Entrada from './componentes/primerentrada'
import SegundaCategoria from './componentes/SegundaCategoria';
import Footer from './componentes/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Router>
        <div>
       <Navibar/>
       </div>
            <Switch>
                <Route exact path='/'><Cards/></Route>
                <Route path='/segundacategoria' component={SegundaCategoria}/>
            </Switch>
        <Footer/>
        </Router>
);


