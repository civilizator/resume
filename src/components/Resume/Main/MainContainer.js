import React from "react"
import { connect } from "react-redux"
import Main from "./Main"
import { loaderCreator } from "../../../redux/main-redux"


class MainContainer extends React.Component {

    constructor(props) {
        super( props )
        this.handleLoad = this.handleLoad.bind( this )
    }

    componentDidMount() {
        // document.body.classList.add('custom-loader');
        console.log( "HI" )
        this.props.preloader( !0 )
        window.addEventListener( 'load', this.handleLoad )
    }

    handleLoad() {
        // document.body.classList.remove('custom-loader');
        setTimeout( () => {
            console.log( "BY" )
            this.props.preloader( !1 )
        }, 1000 )
    }

    componentWillUnmount() {
        window.removeEventListener( 'load', this.handleLoad )
    }

    render() {
        // console.log( this.props.loader )
        return (
            <>
                <Main/>
                {/*{ this.props.isFetching && this.props.PreloaderContainer }*/ }

                {/*{this.props.PreloaderContainer}*/ }
            </>
        )
    }
}


const mapStateProps = (state) => {
    return {
        isFetching: state.main.isFetching,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        preloader: (event) => {
            dispatch( loaderCreator( event ) )
        }
    }
}

export default connect( mapStateProps, mapDispatchToProps )( MainContainer )
