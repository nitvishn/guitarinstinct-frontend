import React, { Component } from 'react'
import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap';
import AuthService from '../services/auth.service';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShowing: true,
            email: "",
            password: "",
            validated: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            modalShowing: !this.state.modalShowing
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
        });
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        event.stopPropagation();
        this.setState({validated: true});
        AuthService.login(this.state.email, this.state.password).then(() => {
            console.log("Logged in.");
        }, (error) => {
            const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            console.log("Error:", resMessage);
        })
    }

    render() {
        return (
            <>
                <Modal show={this.state.modalShowing} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login to GuitarInstinct</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Button className="col-12 mb-2" onClick={this.toggleModal}>Login</Button>
            </>
        )
    }
}

export default LoginComponent;