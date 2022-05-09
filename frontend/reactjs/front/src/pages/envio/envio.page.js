import React, { useState } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Menu from '../../components/menu/menu.component'

import './envio.page.css';

import axios from "axios";

class Send extends React.Component {
    constructor(props) {
        super(props);
    };

    enviar () {
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("image", imagefile.files[0]);
        axios.post('upload_file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {alert(res)});
    };

    render() {
        return (
            <>
                <Menu/>
                <h1>PAGINA DE ENVIO MASIVO</h1>
                <div className="container">
                    <h1>REACTJS CSV IMPORT EXAMPLE </h1>
                    <Form onSubmit={e => {this.actualizar();}}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                required
                                type={"file"}
                                accept={".csv"}
                            />
                        </Form.Group>

                        <Button type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </>
        );
    };
}

export default Send;