import React from "react";
import axios from "axios";

import Table from "react-bootstrap/esm/Table";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Mail from '../mail/mail.component';

import './user.component.css';

class User extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            recibidos: this.props.recibidos ? this.props.recibidos : [],
            enviados: this.props.enviados ? this.props.enviados : [],
        };
    }

    render () {
        return (
            <>
                <div className="Box">
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Enviados</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.enviados.map((it) =>
                                            <tr>
                                                <th><Mail codigo={it.codigo_envio} emisor={it.nombre_emisor} receptor={it.nombre_receptor} origen={it.calle_emisor} destino={it.calle_receptor} estado={it.estado}/></th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Recibidos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.recibidos.map((it) =>
                                            <tr>
                                                <th><Mail codigo={it.codigo_envio} emisor={it.nombre_emisor} receptor={it.nombre_receptor} origen={it.calle_emisor} destino={it.calle_receptor} estado={it.estado}/></th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default User;