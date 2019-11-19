import React from "react"
import classes from "./Contact.module.scss"

import paper from "../../../assets/ionicons/md-paper.svg"

import IconHeader from "../subComponents/IconHeader"
import ContactLeft from "./ContactLeft"
import ContactRight from "./ContactRight"


const Contact = (props) => {
    const { sectionLeft, sectionRight } = props.contactInfo

    return (
        <div className={ classes.contentContact }>

            <IconHeader classNameHeader={ classes.header }
                        classNameImage={ classes.image }
                        icon={ paper }/>

            <ContactLeft sectionLeft={ sectionLeft }/>

            <ContactRight sectionRight={ sectionRight }/>

        </div>
    )
}

export default Contact
