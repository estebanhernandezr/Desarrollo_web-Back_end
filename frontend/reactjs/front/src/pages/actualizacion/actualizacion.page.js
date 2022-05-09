import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Menu from '../../components/menu/menu.component'

import './actualizacion.page.css';

import axios from "axios";

const url = process.env.URL;

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ord: "ORD00001",
            estado: "Recibido",
        };
    };

    actualizar () {
        alert("Actualizando: " + this.state.ord + ", al estado: " + this.state.estado);
        axios.put(process.env.REACT_APP_URL+'set_estado/'+this.state.ord+'/'+this.state.estado).then(res => {
            alert(res);
            alert("aaaaaaaaaaaaaaaaaaaaa");
        }).catch(function(err) {
            alert("----> ERROR: " + err);
        });
    };

    onChangeEstado (input) {
        let state = this.state;
        state.estado =  input;
        this.setState(state);
    }

    onChangeOrden (input) {
        let state = this.state;
        state.ord =  input;
        this.setState(state);
    }

    render() {
        return (
            <>
                <Menu />
                <div className="container">
                    <Form onSubmit={e => {this.actualizar();}}>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de orden</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ejemplo: ORD00002"
                                onChange={e => {this.onChangeOrden(e.target.value);}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ejemplo: En camino"
                                onChange={e => {this.onChangeEstado(e.target.value);}}
                            />
                        </Form.Group>

                        <Button type="submit">
                            Actualizar
                        </Button>
                    </Form>
                </div>
            </>
        );
    };
}

export default Update;