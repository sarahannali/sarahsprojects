import React from 'react';
import classes from './CheatSheets.module.css';
import HTTPpdf from '../../Documents/HTTP.pdf';
import JSpdf from '../../Documents/JS.pdf';

function Links(props) {
    return (
        <div className={classes.CheatSheets}>
            <div className={classes.space}></div>
            <div className={classes.bar}>
                <h1>Sarah@linux-computer: /sarahsprojects/cheatsheets                <div className={`${classes.fakeButtons} ${classes.exit}`}></div>
                    <div className={`${classes.fakeButtons} ${classes.fakeButtonOne}`}></div>
                    <div className={`${classes.fakeButtons} ${classes.fakeButtonTwo}`}></div>
                </h1>
                <h4>File Edit View Search Terminal Help</h4>
            </div>
            <div className={classes.window}>
                <div className={classes.firstLine}>
                    <span className={classes.user}>Sarah@linux-desktop</span>
                    <span>:</span>
                    <span className={classes.folder}>/sarahsprojects/cheatsheets</span>
                    <span>$ tree</span>
                </div>
                <div className={classes.bodyText}>
                    <span>
                        ├── <span className={classes.folder}>data structures</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className={classes.txt}>data_structures.pdf</span>
                        <p></p>
                        ├── <span className={classes.folder}>databases</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className={classes.txt}>databases.pdf</span>
                        <p></p>
                        ├── <span className={classes.folder}>HTTP</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.folder}>web_design</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.txt}>backend.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className={classes.txt}>frontend.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <a href={HTTPpdf} target="_blank" rel="noopener noreferrer" className={classes.txt}>http.pdf</a>
                        <p></p>
                        ├── <span className={classes.folder}>low_level</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.txt}>nand2tetris.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.txt}>lisp.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className={classes.txt}>low_level.pdf</span>
                        <p></p>
                        ├── <span className={classes.folder}>languages</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.txt}>python.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── <span className={classes.txt}>cpp.pdf</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <span className={classes.folder}>javascript</span>
                        <p></p>
                        │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── <a href={JSpdf} target="_blank" rel="noopener noreferrer" className={classes.txt}>javascript.pdf</a>
                        <p></p>
                        <p className={classes.finalSpace}></p>
                        <span>8 directories, 12 files</span>


                    </span>
                </div>
            </div>
        </div>
    )
}

export default Links;
