import React from "react"
import classes from "./Experience.module.scss"
import checkbox from "./../../../assets/ionicons/md-checkbox-outline.svg"
import IconHeader from "../subComponents/IconHeader"

const Experience = (props) => {
    return (

        <div className={ classes.contentExperience }>

            <IconHeader classNameHeader={ classes.header } classNameImage={ classes.image } icon={checkbox}/>


            <div className={ classes.left }>
                <h2>SKILLS</h2>
                <ul>
                    <li>Functional testing</li>
                    <li>Regression testing</li>
                    <li>Exploratory testing</li>
                    <li>Usability testing</li>
                    <li>User interface testing</li>
                    <li>Performance Testing</li>
                    <li>Test Case Writing</li>
                    <li>Test Case Execution</li>
                </ul>
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