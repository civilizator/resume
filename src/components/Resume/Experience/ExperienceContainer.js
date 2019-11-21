import React from "react"
import { connect } from "react-redux"
import Experience from "./Experience"

class ExperienceComponent extends React.Component {
    render() {
        return (
            <Experience experienceInfo={this.props.experience}/>
        )
    }
}

const mapStateProps = (state) => {
    return {
        experience: state.experience
    }
}

export default connect(mapStateProps)( ExperienceComponent )