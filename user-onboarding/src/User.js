import { func } from 'prop-types'
import React from 'react'

function User({ info }) {
    if (!info) {
        return <h4>Fetching user information</h4>
    }

    return (
        <div>
            <h3>{info.firstname}{info.lastname}</h3>
            <p>{info.first_name}{info.last_name}</p>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
            <p>ID: {info.id}</p>
        </div>
    )
}

export default User