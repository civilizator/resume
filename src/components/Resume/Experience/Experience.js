import React from "react"
import classes from "./Experience.module.scss"
import checkbox from "./../../../assets/ionicons/md-checkbox-outline.svg"
import IconHeader from "../subComponents/IconHeader"
import ExperienceLeft from "./ExperienceLeft"
import ExperienceRight from "./ExperienceRight"


const Experience = (props) => {
    const { sectionLeft, sectionRight } = props.experienceInfo

    return (

        <div className={ classes.contentExperience }>

            <IconHeader classNameHeader={ classes.header } classNameImage={ classes.image } icon={ checkbox }/>

            <ExperienceLeft sectionLeft={ sectionLeft }/>

            <ExperienceRight sectionRight={ sectionRight }/>

        </div>
    )
}

export default Experience
