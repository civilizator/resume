import React from "react"
import classes from "./Experience.module.scss"
import checkbox from "./../../../assets/ionicons/md-checkbox-outline.svg"

const Experience = (props) => {
    return (
        <div className={ classes.contentExperience }>
            <div className={ classes.header }>
                <p className={classes.image}>
                    <img alt="Experience" src={ checkbox }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>SKILLS</h2>
                <p>Functional testing •</p>
                <p>Regression testing •</p>
                <p>Exploratory testing •</p>
                <p>Usability testing •</p>
                <p>User interface testing •</p>
                <p>Performance Testing •</p>
                <p>Test Case Writing •</p>
                <p>Test Case Execution •</p>
            </div>
            <div className={ classes.right }>
                <div className={classes.experience}>
                    <h2>EXPERIENCE</h2>
                    <p>May 2014 - present</p>
                    <p>uTest www.utest.com</p>
                </div>

                <div className={classes.tester}>
                    <h5>TESTER</h5>
                    <p>Manual testing web and mobile app</p>
                    <p>Performing or writing test cases</p>
                    <p>Create bug reports or reproduction of created reports</p>
                </div>
            </div>
        </div>
    )
}

export default Experience