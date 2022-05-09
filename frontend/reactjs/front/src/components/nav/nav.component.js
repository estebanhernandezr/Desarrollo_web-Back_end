import React from 'react';

import Nav from 'react-bootstrap/Nav';

import './nav.component.css';

class NavCustom extends React.Component{
    render (){
        return (
        <Nav>
            <Nav.Item className='nav_item'>
              <Nav.Link href="/consult_all">Listado completo de envíos</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item'>
              <Nav.Link href="/consult/code">Consultar envío</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item'>
              <Nav.Link href="/send">Registrar envío</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item'>
              <Nav.Link href="/set_estado/ORD00002">Actualización de estado de envío</Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item'>
              <Nav.Link href="/upload_csv">Envío masivo</Nav.Link>
            </Nav.Item>
        </Nav>);
    }
}

export default NavCustom;