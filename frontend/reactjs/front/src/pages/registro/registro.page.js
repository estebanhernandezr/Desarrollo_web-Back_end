import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Menu from '../../components/menu/menu.component'

import './registro.page.css';

const url = process.env.URL;

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre_emisor: "Esteban",
            email_emisor: "esteban.hernandezr@urosario.edu.co",
            direc_emisor: "Barrio el Topacio",
            nombre_receptor: "Nicolás",
            email_receptor: "nicolashernandezc@urosario.edu.co",
            direc_receptor: "Barrio Tolima grande",
        };
    };

    enviar () {
        let body = {
            nombre_emisor: this.state.nombre_emisor,
            email_emisor: this.state.email_emisor,
            calle_emisor: this.state.direc_emisor,
            ciudad_emisor: "ciudad",
            provincia_emisor: "provincia",
            pais_emisor: "pais",
    
            nombre_receptor: this.state.nombre_receptor,
            email_receptor: this.state.email_receptor,
            calle_receptor: this.state.direc_receptor,
            ciudad_receptor: "ciudad",
            provincia_receptor: "provincia",
            pais_receptor: "pais",
        };
        axios.post(process.env.REACT_APP_URL+'send', body).then((response) => {
            alert("Nuevo servicio creado con código: " + response.data.nuevo_codigo);
        }).catch(function(err) {
            alert("----> ERROR: " + err);
        });
    };

    onChangeNombreEmisor (input) {
        let state = this.state;
        state.nombre_emisor =  input;
        this.setState(state);
    }

    onChangeEmailEmisor (input) {
        let state = this.state;
        state.email_emisor =  input;
        this.setState(state);
    }

    onChangeDirecEmisor (input) {
        let state = this.state;
        state.direc_emisor =  input;
        this.setState(state);
    }

    onChangeNombreReceptor (input) {
        let state = this.state;
        state.nombre_receptor =  input;
        this.setState(state);
    }

    onChangeEmailReceptor (input) {
        let state = this.state;
        state.email_receptor =  input;
        this.setState(state);
    }

    onChangeDirecReceptor (input) {
        let state = this.state;
        state.direc_receptor =  input;
        this.setState(state);
    }

    render() {
        return (
            <>
                <Menu/>

                <div className="container">
                    <Form onSubmit={e => {this.enviar();}}>
                        <Row>
                            <Col>
                                <p className="title">emisor</p>
                                <Form.Group className="mb-3">
                                    <Form.Label>Número de emisor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ejemplo: Esteban Hernández Ramírez"
                                        onChange={e => {this.onChangeNombreEmisor(e.target.value);}}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Label>Email del emisor</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Ejemplo: esteban.hernandezr@urosario.edu.co"
                                        onChange={e => {this.onChangeEmailEmisor(e.target.value);}}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Dirección del emisor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ejemplo: Avenida las américas"
                                        onChange={e => {this.onChangeDirecEmisor(e.target.value);}}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <p className="title">receptor</p>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre de receptor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ejemplo: Santiago Roa"
                                        onChange={e => {this.onChangeNombreReceptor(e.target.value);}}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Label>Email del receptor</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Ejemplo: ehernandezquim@gmail.com"
                                        onChange={e => {this.onChangeEmailReceptor(e.target.value);}}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Dirección del receptor</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ejemplo: Avenida las américas"
                                        onChange={e => {this.onChangeDirecReceptor(e.target.value);}}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button type="submit">
                            Registrar
                        </Button>
                    </Form>
                </div>
            </>
        );
    };
}

export default Register;