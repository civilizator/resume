import React from "react"
import classes from "./Additionally.module.scss"
import laptop from "../../../assets/ionicons/md-laptop.svg"

const Additionally = (props) => {
    return (
        <div className={ classes.content }>
            <div className={ classes.header }>
                <p className={classes.image}>
                    <img alt="Experience" src={ laptop }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>ADDITIONALLY</h2>
                <p>My name is Stan</p>
                <p>full name Stanislav Kovrigin</p>
                <p>I'm live in Siberia </p>
            </div>
            <div className={ classes.right }>
                <h2>LANGUAGES</h2>
                <p>My name is Stan</p>
                <p>full name Stanislav Kovrigin</p>
                <p>I'm live in Siberia </p>
            </div>
        </div>
    )
}

export default Additionally