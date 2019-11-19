import React from "react"
import { connect } from "react-redux"
import Header from "./Header"

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header headerInfo={ this.props.headerInfo }/>
        )
    }
}


const mapStateProps = (state) => {
    return {
        headerInfo: state.header.headerInfo
    }
}

export default connect( mapStateProps )( HeaderComponent )
