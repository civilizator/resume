import React from "react"
import classes from "./Experience.module.scss"

const ExperienceLeft = (props) => {
    const { title, skills } = props.sectionLeft

    const eachSkill = skills.map( (skill, i) => {
            return (
                <li key={ i }>{ skill }</li>
            )
        }
    )

    return (
        <div className={ classes.left }>
            <h2>{ title }</h2>
            <ul>
                { eachSkill }
            </ul>
        </div>
    )
}

export default ExperienceLeft
