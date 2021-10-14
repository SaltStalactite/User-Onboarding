import { func } from 'prop-types'
import React from 'react'

function User({ info }) {
    if (!info) {
        return <h4>Fetching user information</h4>
    }

    return (
        <div>
            <h3>{info.firstname}{info.lastname}</h3>
            <pre>{JSON.stringify(info)}</pre>
        </div>
    )
}

export default User