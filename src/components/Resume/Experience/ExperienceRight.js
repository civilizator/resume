import React from "react"
import classes from "./Experience.module.scss"

const ExperienceRight = (props) => {
    const { title, termWork, whereWorked, titleProfession, whatDid } = props.sectionRight

    const eachWhatDid = whatDid.map( (what, i) => {
        return (
            <p key={ i }>{ what }</p>
        )
    } )

    return (
        <div className={ classes.right }>
            <div className={ classes.experience }>
                <h2>{ title }</h2>
                <p>{ termWork }</p>
                <p>{ whereWorked }</p>
            </div>

            <div className={ classes.tester }>
                <h5>{ titleProfession }</h5>
                { eachWhatDid }
            </div>
        </div>
    )
}

export default ExperienceRight
