import React from "react"
import classes from "./Additionally.module.scss"
import laptop from "../../../assets/ionicons/md-laptop.svg"
import IconHeader from "../subComponents/IconHeader"
import AdditionallyLeft from "./AdditionallyLeft"
import AdditionallyRight from "./AdditionallyRight"

const Additionally = (props) => {
    const { sectionLeft, sectionRight } = props.additionallyInfo

    return (
        <div className={ classes.contentAdditionally }>

            <IconHeader classNameHeader={ classes.header }
                        classNameImage={ classes.image }
                        icon={ laptop }/>

            <AdditionallyLeft sectionLeft={ sectionLeft }/>


            <AdditionallyRight sectionRight={ sectionRight }/>

        </div>
    )
}

export default Additionally