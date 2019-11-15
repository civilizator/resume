import React from "react"
import classes from "./Experience.module.scss"
import checkbox from "./../../../assets/ionicons/md-checkbox-outline.svg"

const Experience = (props) => {
    return (
        <div className={ classes.content }>
            <div className={ classes.header }>
                <p className={classes.image}>
                    <img alt="Experience" src={ checkbox }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>EXPERIENCE</h2>
                <p>My name is Stan</p>
                <p>full name Stanislav Kovrigin</p>
                <p>I'm live in Siberia </p>
            </div>
            <div className={ classes.right }>
                <h2>SKILLS</h2>
                <p>My name is Stan</p>
                <p>full name Stanislav Kovrigin</p>
                <p>I'm live in Siberia </p>
            </div>
        </div>
    )
}

export default Experience