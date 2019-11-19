import React from "react"
import classes from "./Additionally.module.scss"

const AdditionallyRight = (props) => {
    const {
        titleOther, timezoneText, timezoneLink, timezoneTitleLink, timezone,
        citizenship,
        titleLanguages, languages
    } = props.sectionRight

    const eachLanguages = languages.map( (language, i) => {

        return (
            <p key={ i }>{ language }</p>
        )
    } )

    return (
        <div className={ classes.right }>
            <div className={ classes.other }>
                <h2>{ titleOther }</h2>
                <p>{ timezoneText } <a className={ classes.foLinks }
                                       target="_blank" rel="noopener noreferrer"
                                       href={ timezoneLink }
                                       title={ timezoneTitleLink }>
                    { timezone }</a>
                </p>
                <p>{ citizenship }</p>
            </div>

            <div className={ classes.other }>
                <h2>{ titleLanguages }</h2>
                { eachLanguages }
            </div>
        </div>

    )
}

export default AdditionallyRight