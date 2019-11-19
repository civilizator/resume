import React from "react"
import classes from "./Additionally.module.scss"

const AdditionallyLeft = (props) => {
    const { title, skills } = props.sectionLeft

    const eachSkills = skills.map( (skill, i) => {
        return (
            <div key={ i } className={ classes.skills }><span>{ skill }</span></div>
        )
    } )

    return (
        <div className={ classes.left }>
            <h2>{ title }</h2>

            <div className={ classes.additionallySkills }>
                { eachSkills }
            </div>
        </div>
    )
}

export default AdditionallyLeft
