import React from "react"
import classes from "./Additionally.module.scss"
import laptop from "../../../assets/ionicons/md-laptop.svg"

const Additionally = (props) => {
    return (
        <div className={ classes.content }>
            <div className={ classes.header }>
                <p className={ classes.image }>
                    <img alt="Experience" src={ laptop }/>
                </p>
            </div>
            <div className={ classes.left }>
                <h2>ADDITIONALLY SKILLS</h2>

                <div className={ classes.additionallySkills }>
                    <div><span>Automated testing (Selenium WebDriver)</span></div>
                    <div><span>JavaScript</span></div>
                    <div><span>Node.js</span></div>
                    <div><span>ReactJS</span></div>
                    <div><span>Redux</span></div>
                    <div><span>JSON API</span></div>
                    <div><span>KoaJS</span></div>
                    <div><span>ExpressJS</span></div>
                    <div><span>Axios</span></div>
                    <div><span>Gulp</span></div>
                    <div><span>AJAX</span></div>
                    <div><span>MongoDB</span></div>
                    <div><span>MySQL</span></div>
                    <div><span>HTML</span></div>
                    <div><span>SASS</span></div>
                    <div><span>CSS</span></div>
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