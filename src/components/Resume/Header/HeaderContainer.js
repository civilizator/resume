import React from "react"
import { connect } from "react-redux"

import Header from "./Header"

import { headerLanguageCreator, dataHeader } from "../../../redusers/header-reducer"
import { contactLanguageCreator, dataContact } from "../../../redusers/contact-reducer"
import { experienceLanguageCreator, dataExperience } from "../../../redusers/experience-reducer"
import { additionallyLanguageCreator, dataAdditionally } from "../../../redusers/additionally-reducer"

class HeaderComponent extends React.Component {

    toggleLanguage = (value) => {

        switch (value) {
            case "ENGLISH": {
                this.props.headerLanguage( dataHeader.headerRussian )
                this.props.contactLanguage( dataContact.contactRussian )
                this.props.experienceLanguage( dataExperience.experienceRussian )
                this.props.additionallyLanguage( dataAdditionally.additionallyRussian )
                break
            }
            default:
                this.props.headerLanguage( dataHeader.headerEnglish )
                this.props.contactLanguage( dataContact.contactEnglish )
                this.props.experienceLanguage( dataExperience.experienceEnglish )
                this.props.additionallyLanguage( dataAdditionally.additionallyEnglish )
        }
    }

    render() {

        return (
            <Header headerInfo={ this.props.headerInfo } toggleLanguage={ this.toggleLanguage }/>
        )
    }
}


const mapStateProps = (state) => {
    return {
        headerInfo: state.header,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        headerLanguage: (languages) => {
            dispatch( headerLanguageCreator( languages ) )
        },
        contactLanguage: (languages) => {
            dispatch( contactLanguageCreator( languages ) )
        },
        experienceLanguage: (languages) => {
            dispatch( experienceLanguageCreator( languages ) )
        },
        additionallyLanguage: (languages) => {
            dispatch( additionallyLanguageCreator( languages ) )
        }
    }
}

export default connect( mapStateProps, mapDispatchToProps )( HeaderComponent )
