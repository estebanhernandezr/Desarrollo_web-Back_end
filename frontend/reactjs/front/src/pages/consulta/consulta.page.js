import React from "react";
import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Menu from "../../components/menu/menu.component";
import Mail from "../../components/mail/mail.component";

import './consulta.page.css';

const url = process.env.URL;

class Consultas extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            ord: "ORD00001",
            coincidencias: [],
        };

        this.consultar = this.consultar.bind(this);
        this.onChangeOrden = this.onChangeOrden.bind(this);
    }

    consultar (event) {
        axios.get(process.env.REACT_APP_URL+'consult/code/'+this.state.ord).then((response) => {
            let state = this.state;
            state.coincidencias = response.data.coincidencias;
            this.setState(state);
        }).catch(function(err) {
            alert("----> ERROR: " + err);
        });
        event.preventDefault();
        this.setState( {ord: "ORD00000"} );
    }

    onChangeOrden (event) {
        let state = this.state;
        state.ord =  event.target.value;
        this.setState(state);
    }

    render () {
        return (
            <>
                <Menu />
                <div className="container">
                    <Form onSubmit={this.consultar}>
                        <Form.Group className="mb-3">
                            <Form.Label>Número de orden</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ejemplo: ORD00001"
                                onChange={this.onChangeOrden}
                            />
                        </Form.Group>

                        <Button type="submit">
                            Consultar
                        </Button>
                    </Form>
                    <p className="title">resultados de la busqueda</p>
                    {
                        this.state.coincidencias.map((it) => 
                            <Row className='UserBox'>
                                {
                                    <Col>
                                        <Mail codigo={it.codigo_envio} emisor={it.nombre_emisor} receptor={it.nombre_receptor} origen={it.calle_emisor} destino={it.calle_receptor} estado={it.estado}/>
                                    </Col>
                                }
                            </Row>
                        )
                    }
                </div>
            </>
        );
    };
}

export default Consultas;