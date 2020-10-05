import React from 'react';
import classes from './RetroImage.module.css';

function RetroImage(props) {
    return (
        <div>
            <img src={'assets/PET.png'} className={classes.bgrImg} role="presentation" alt={"Retro computer icon"}></img>
            <img src={'assets/stars/STAR1.png'} className={`${classes.bgrImg} ${classes.star1}`} role="presentation" alt={"Blinking star icon"}></img>
            <img src={'assets/stars/STAR2.png'} className={`${classes.bgrImg} ${classes.star2}`} role="presentation" alt={"Blinking star icon"}></img>
            <img src={'assets/stars/STAR3.png'} className={`${classes.bgrImg} ${classes.star3}`} role="presentation" alt={"Blinking star icon"}></img>
            <img src={'assets/stars/STAR4.png'} className={`${classes.bgrImg} ${classes.star4}`} role="presentation" alt={"Blinking star icon"}></img>
            <img src={'assets/stars/STAR5.png'} className={`${classes.bgrImg} ${classes.star5}`} role="presentation" alt={"Blinking star icon"}></img>
            <img src={'assets/stars/STAR6.png'} className={`${classes.bgrImg} ${classes.star6}`} role="presentation" alt={"Blinking star icon"}></img>
        </div>
    );
}

export default RetroImage;
