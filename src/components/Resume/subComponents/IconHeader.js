import React from "react"

const IconHeader = (props) => {
    const { classNameHeader, classNameImage, icon } = props
    return (
        <div className={ classNameHeader }>
            <p className={ classNameImage }>
                <img alt="" src={ icon }/>
            </p>
        </div>
    )
}

export default IconHeader
