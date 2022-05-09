import React from "react";

import Table from 'react-bootstrap/Table';

import './mail.component.css';

class Mail extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            codigo: this.props.codigo ? this.props.codigo : 'ORD00000',
            emisor: this.props.emisor ? this.props.emisor : 'Emisor',
            receptor: this.props.receptor ? this.props.receptor : 'Receptor',
            origen: this.props.origen ? this.props.origen : 'Origen',
            destino: this.props.destino ? this.props.destino : 'Destino',
            estado: this.props.estado ? this.props.estado : "Estado",
        };
    }

    render () {
        return (
            <>
                <div className="Box">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Código de envío</th>
                                <th>Nombre de emisor</th>
                                <th>Nombre de receptor</th>
                                <th>Lugar de origen</th>
                                <th>Lugar de destino</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.codigo}</td>
                                <td>{this.state.emisor}</td>
                                <td>{this.state.receptor}</td>
                                <td>{this.state.origen}</td>
                                <td>{this.state.destino}</td>
                            </tr>
                            <tr>
                                {this.state.estado}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}

export default Mail;