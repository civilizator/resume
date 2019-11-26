import React, { useState, useEffect } from 'react'
import { Main } from "./components"
import "./App.scss"
import Loader from 'react-loaders'

// import { PreLoader } from "./components/PreLoader/PreLoader"

const PreloaderContainer = (props) => {
    const { isLoader } = props
    const containerClass = [ "container-loader" ]
    !isLoader && containerClass.push( "fade" )

    return (
        <div className={ containerClass.join( " " ) }>
            <Loader type="pacman" active/>
        </div>
    )
}
/*
class AddFade extends React.Component {

    constructor(props) {
        super( props );
        this.state = { addClass: false }
    }

    toggle() {
        this.setState( { addClass: !this.state.addClass } );
    }

    render() {
        let boxClass = [ "box" ]
        if (this.state.addClass) {
            boxClass.push( 'green' )
        }
        console.log( this.state.addClass )
        return (
            <div className={ boxClass.join( ' ' ) }
                 onClick={ this.toggle.bind( this ) }>
                { this.state.addClass ? "Remove a class" : "Add a class (click the box)" }
            </div>
        )
    }
}
*/

const App = () => {
    const [ loader, setLoader ] = useState( !0 )
    const [ remove, setRemove ] = useState( !0 )

    useEffect( () => {
        setTimeout( () => {
            setLoader( !1 )
            setTimeout(()=> {setRemove(!1)}, 300)
        }, 1000 )
    }, [] )

    // console.log( loader )
    return (
        <>
            {/*<AddFade/>*/ }
            <Main PreloaderContainer={ <PreloaderContainer/> } loader={ loader } />
            { remove && <PreloaderContainer isLoader={ loader }/> }
            {/*!loader ? <Main Loader={ <PreLoader/> }/> : <PreLoader/>*/ }
            {/*{!loader ? <Main Loader={ <PreLoader/> }/> : <PreloaderContainer />}*/ }
        </>
    )
}

export default App
