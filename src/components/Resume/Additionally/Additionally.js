import React from "react"
import classes from "./Additionally.module.scss"
import laptop from "../../../assets/ionicons/md-laptop.svg"

const Additionally = (props) => {
    return (
        <div className={ classes.contentAdditionally }>
            <div className={ classes.header }>
                <p className={ classes.image }>
                    <img alt="Experience" src={ laptop }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>ADDITIONALLY SKILLS</h2>

                <div className={ classes.additionallySkills }>
                    <div className={classes.skills}><span>Automation ( JS + WebDriver)</span></div>
                    <div className={classes.skills}><span>JavaScript</span></div>
                    <div className={classes.skills}><span>Node.js</span></div>
                    <div className={classes.skills}><span>ReactJS</span></div>
                    <div className={classes.skills}><span>Redux</span></div>
                    <div className={classes.skills}><span>KoaJS</span></div>
                    <div className={classes.skills}><span>ExpressJS</span></div>
                    <div className={classes.skills}><span>Axios</span></div>
                    <div className={classes.skills}><span>Gulp</span></div>
                    <div className={classes.skills}><span>AJAX</span></div>
                    <div className={classes.skills}><span>JSON API</span></div>
                    <div className={classes.skills}><span>MongoDB</span></div>
                    <div className={classes.skills}><span>MySQL</span></div>
                    <div className={classes.skills}><span>HTML</span></div>
                    <div className={classes.skills}><span>SASS</span></div>
                    <div className={classes.skills}><span>CSS</span></div>
                </div>

            </div>
            <div className={ classes.right }>

                <div className={ classes.other }>
                    <h2>OTHER</h2>
                    <p>
                        Timezone: <a className={ classes.foLinks }
                                     target="_blank" rel="noopener noreferrer"
                                     href="https://greenwichmeantime.com/time-zone/gmt-plus-8/"
                                     title="Open to compare time">
                        GMT+8
                    </a>
                    </p>
                    <p>
                        Citizenship: Russia
                    </p>

                </div>

                <div className={ classes.other }>
                    <h2>LANGUAGES</h2>
                    <p>Russian: Native</p>
                    <p>English: Written only</p>
                </div>
            </div>

        </div>
    )
}

export default Additionally