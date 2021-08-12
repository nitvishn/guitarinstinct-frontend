import React, { Component, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import LoginComponent from './LoginComponent';

function HomeComponent() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {/* <div className="bg-light p-5 rounded-lg m-3"> */}
                    <h1 className="text-center">GuitarInstinct</h1>
                    {/* </div> */}
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-12 col-sm-3 text-center">
                        <LoginComponent></LoginComponent>
                        <Button className="col-12">Register</Button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent;