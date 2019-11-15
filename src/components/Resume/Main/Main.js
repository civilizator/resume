import React from "react"
import classes from "./Main.module.scss"
import Header from "../Header/Header"
import Contact from "../Contact/Contact"
import Experience from "../Experience/Experience"
import Additionally from "../Additionally/Additionally"
import mouse from "../../../assets/images/computer-mouse-1242648.jpg"

const Main = (props) => {
    return (
        <div className={ classes.main }>
            <div className={ classes.paper }>
                <Header/>
                <Contact/>
                <Experience/>
                <Additionally/>
            </div>
        </div>
    )
}

export default Main