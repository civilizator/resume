import React from "react"
import Avatar from "@material-ui/core/Avatar"
import LiveHelp from "@material-ui/icons/LiveHelp"
import Typography from "@material-ui/core/Typography"
// import { useStyles } from "../theme/themeForm"

export const ResetPasswordHeader = (props) => {
    const { isErrorAvatar, useStyles } = props
    const classes = useStyles()

    return (
        <>
            <Avatar className={ !!isErrorAvatar ? classes.avatarError : classes.avatar }>
                <LiveHelp/>
            </Avatar>
            <Typography component="h1" variant="h5">Reset password</Typography>
        </>
    )
}