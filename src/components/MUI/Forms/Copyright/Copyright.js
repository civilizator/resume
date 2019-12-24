import Typography from "@material-ui/core/Typography"
import { Link } from "react-router-dom"
import React from "react"

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" to="/">
                resume for Stan
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    )
}
