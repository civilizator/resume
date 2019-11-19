import React from "react"
import classes from "./Header.module.scss"

const Header = (props) => {
    const { resume, names } = props.headerInfo
    return (
        <div className={ classes.header }>
            <h3 className={ classes.resume }>{ resume }</h3>
            <h1 className={ classes.names }>{ names }</h1>
        </div>
    )
}

export default Header