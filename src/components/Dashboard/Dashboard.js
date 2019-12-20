import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li>
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
