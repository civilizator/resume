import React from "react"
import classes from "./Header.module.scss"

const Header = (props) => {
    const { resume, names, title, language, checkLanguage } = props.headerInfo

    return (
        <div className={ classes.header }>
            <h3 className={ classes.resume }>{ resume }</h3>
            <h1 className={ classes.names }>{ names }</h1>
            <div className={ classes.containerButtonsLanguage }>

                <input
                    className={ classes.buttonLanguage }
                    type="submit"
                    name="submit"
                    title={ title }
                    value={ language }
                    onClick={ () => props.toggleLanguage( checkLanguage ) }
                />
            </div>
        </div>
    )
}

export default Header