import React from "react"
import classes from "./Contact.module.scss"

const ContactLeft = (props) => {
    const {
        title, myName, lookingJob, iLive,
        region, googleMapsLink, titleLink, city
    } = props.sectionLeft

    return (
        <div className={ classes.left }>
            <div className={ classes.hello }>
                <h2>{ title }</h2>
                <p>{ myName }</p>
                <p>{ lookingJob }</p>
            </div>

            <div>
                <p>{ iLive }</p>
                <p>{ region } <a className={ classes.city }
                                 target="_blank" rel="noopener noreferrer"
                                 href={ googleMapsLink }
                                 title={ titleLink }>
                    { city }</a>
                </p>
            </div>
        </div>
    )
}

export default ContactLeft

