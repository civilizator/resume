import React from "react"
import Avatar from "@material-ui/core/Avatar"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"


export const HeaderSignIn = (props) => {
    const { isErrorAvatar, useStyles } = props
    const classes = useStyles()
    return (
        <>
            <Avatar className={ !!isErrorAvatar ? classes.avatarError : classes.avatar }>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
        </>
    )
}
