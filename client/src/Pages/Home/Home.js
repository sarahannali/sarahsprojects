import React from 'react';
import classes from './Home.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RetroImage from '../../Components/RetroImage/RetroImage';

function Home(props) {
    return (
        <div className={classes.Home}>
            <Row>
                <RetroImage />
                <h1>SARAH'S PROJECTS</h1>
            </Row>
            <Row className={`d-flex justify-content-center ${classes.links}`}>
                <Col xs={12} sm={3} className='d-flex justify-content-center'>
                    <button className={classes.homeButton}>About</button>
                </Col>
                <Col xs={12} sm={3} className='d-flex justify-content-center'>
                    <button className={classes.homeButton}>Projects</button>
                </Col>
                <Col xs={12} sm={3} className='d-flex justify-content-center'>
                    <button className={classes.homeButton}>Cheat Sheets</button>
                </Col>
                <Col xs={12} sm={3} className='d-flex justify-content-center'>
                    <button className={classes.homeButton}>Etc.</button>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
