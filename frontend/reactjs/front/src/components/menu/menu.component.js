import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavCustom from '../nav/nav.component'

import logo from './../../logoweb.png';

import './menu.css'; 

class Menu extends React.Component{

    render(){
        return(

    <Row>

        <Col sm={10}>  
            <NavCustom/>
        </Col>

        <Col sm={2}>
            <img src={logo} className="logo" alt="Icono de la app"/>
        </Col>
    </Row>
            
        );
    }
}

export default Menu;

