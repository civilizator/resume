import React from "react"
import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import { useStyles } from "../theme/themeForm"

export const Copyright = () => {
    const classes = useStyles()
    return (
        <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link to="/">resume for Stan</Link>
            { ` ${ new Date().getFullYear() }.` }
        </Typography>
    )
}
