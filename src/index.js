import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Navibar from './componentes/Navibar';
import Carrusel from './componentes/carousel';
import Cards from './componentes/Cards';
import SegundaCategoria from './componentes/SegundaCategoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Router>
       <Navibar/>
            <Switch>
                <Route exact path='/'><Cards/></Route>
                <Route path='/segundacategoria' component={SegundaCategoria}/>
            </Switch>
        </Router>
);


