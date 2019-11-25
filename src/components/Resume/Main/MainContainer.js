import React from "react"
import { connect } from "react-redux"
import Main from "./Main"
import { loaderCreator } from "../../../redux/main-redux"


class MainContainer extends React.Component {
    Loader = this.props.Loader

    constructor(props) {
        super( props );
        this.handleLoad = this.handleLoad.bind( this );
    }

    componentDidMount() {
        console.log("HI")
        this.props.preloader(!0)
        window.addEventListener( 'load', this.handleLoad );
    }

    handleLoad() {
        console.log("BY")
        this.props.preloader(!1)
    }

    componentWillUnmount() {
        window.removeEventListener( 'load', this.handleLoad )
    }

    render() {
        return (
            <>
                {/*{ this.props.isFetching && this.Loader }*/}
                <Main/>
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

export default connect(mapStateProps, mapDispatchToProps)( MainContainer )
