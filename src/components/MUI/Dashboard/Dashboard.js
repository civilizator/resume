import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const ButtonAppBar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Signed</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const Dashboard = () => {

    return (
        <div>

            <ButtonAppBar/>

            <h1>Dashboard</h1>
            <ul>
                <li>
                    {/*<Button variant="contained" color="primary" to="/sign_up" component={ Link }>Go to for Sign up</Button>*/}
                    <Link to="/sign_up">Go to for Sign up</Link>
                </li>
                <li>
                    <Link to="/sign_in">Go to for Sign in</Link>
                </li>
                <li>
                    <Link to="/reset_password">Go to for Reset password</Link>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard
