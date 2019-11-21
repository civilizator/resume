import React from "react"
import { connect } from "react-redux"
import Contact from "./Contact"

class ContactComponent extends React.Component {
    render() {
        return (
            <Contact contactInfo={this.props.contactInfo}/>
        )
    }
}

const mapStateProps = (state) => {
    return {
        contactInfo: state.contact
    }
}

export default connect(mapStateProps)( ContactComponent )
