import React from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import Menu from '../../components/menu/menu.component';
import User from '../../components/user/user.component';

import './listado.page.css';

const url = process.env.URL;

class Listado extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            list: []
        }
        this.consultar();
    }

    consultar () {
        axios.get(process.env.REACT_APP_URL+'consult_all').then((response) => {
            let state = this.state;
            state.list = response.data.message;
            this.setState(state);
        }).catch(function(err) {
            alert(" ERROR: unable to 'consultar ();' " + err);
        });
    }

    render () {
        return (
            <>
                <Menu/>
                <div className='container'>
                    {
                        this.state.list.map((it) => 
                            <Row className='UserBox'>
                                {
                                    <Col>
                                        <p className='title'>{it.nombre}</p>
                                        <User recibidos={it.recibidos} enviados={it.enviados} />
                                    </Col>
                                }
                            </Row>
                        )
                    }
                </div>
            </>
        );
    }
}

export default Listado;