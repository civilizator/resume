import React from "react"
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes.header}>
            <h3 className={classes.resume}>Resume</h3>
            <h1 className={classes.names}>STANISLAV KOVRIGIN</h1>
        </div>
    )
}

export default Header