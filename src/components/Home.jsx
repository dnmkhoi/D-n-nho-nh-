import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Chào mừng đến với Trang chủ DVC Cà Mau</h2>
                    <p>Cung cấp các giải pháp cho DVC Cà Mau</p>
                </Jumbotron>

            </Container>
        );
    }
}

export default Home;