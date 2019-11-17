import React from "react"
import classes from "./Main.module.scss"

import { Header, Contact, Experience, Additionally} from "../../index"


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