import { func } from 'prop-types'
import React from 'react'

function User({ info }) {
    if (!info) {
        return <h4>Fetching user information</h4>
    }

    return (
        <div className='user'>
            <h3>{info.firstname} {info.lastname}</h3>
            <h3>{info.first_name} {info.last_name}</h3>
            <p>Email: {info.email}</p>
            <p>Password: {info.password}</p>
            <p>ID: {info.id}</p>
        </div>
    )
}

export default User