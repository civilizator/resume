import React from "react"
import { connect } from "react-redux"
import Experience from "./Experience"

class ExperienceComponent extends React.Component {
    render() {
        return (
            <Experience experienceInfo={this.props.experienceInfo}/>
        )
    }
}

const mapStateProps = (state) => {
    return {
        experienceInfo: state.experience.experienceInfo
    }
}

export default connect(mapStateProps)( ExperienceComponent )