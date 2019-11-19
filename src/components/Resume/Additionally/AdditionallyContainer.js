import React from "react"
import { connect } from "react-redux"
import Additionally from "./Additionally"

class AdditionallyComponent extends React.Component {
    render() {
        return (
            <Additionally additionallyInfo={ this.props.additionallyInfo }/>
        )
    }
}

const mapStateProps = (state) => {
    return {
        additionallyInfo: state.additionally.additionallyInfo
    }
}

export default connect( mapStateProps )( AdditionallyComponent )
