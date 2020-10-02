import React from 'react';
import classes from './Navigation.module.css';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {
    return (
        <div>
            <Navbar expand="md">
                <Navbar.Brand href="#home">
                    <img src={'assets/tag.png'} className={classes.tag} role="presentation" alt={"Retro computer icon"}></img>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Navigation;