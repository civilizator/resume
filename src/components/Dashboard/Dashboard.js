import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li>
                    <Link to="/registration">Go to for Registration</Link>
                </li>
                <li>
                    <Link to="/signin">Go to for Sign in</Link>
                </li>
                <li>
                    <Link to="/signup">Go to for Sign up</Link>
                </li>
            </ul>
        </div>
    )
}

export default Dashboard
