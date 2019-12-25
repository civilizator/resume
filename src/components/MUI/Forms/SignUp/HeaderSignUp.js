import React from "react"
import Avatar from "@material-ui/core/Avatar"
import InsertEmoticon from "@material-ui/icons/InsertEmoticon"
import Typography from "@material-ui/core/Typography"

export const HeaderSignUp = (props) => {
    const { isErrorAvatar, useStyles } = props
    const classes = useStyles()
    return (
        <>
            <Avatar className={ !!isErrorAvatar ? classes.avatarError : classes.avatar }>
                <InsertEmoticon/>
            </Avatar>
            <Typography component="h1" variant="h5">Sign up</Typography>
        </>
    )
}
