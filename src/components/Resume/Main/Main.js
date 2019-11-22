import React from "react"
import classes from "./Main.module.scss"

import { Header, Contact, Experience, Additionally} from "../../index"


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        console.log("HELLO")
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {
        console.log("BY")
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad)
    }

    render() {
        return (
            <div className={ classes.main }>
                <div className={ classes.paper }>
                    {/*{this.props.Loader}*/}
                    <Header/>
                    <Contact/>
                    <Experience/>
                    <Additionally/>
                </div>
            </div>
        )
    }
}

export default Main