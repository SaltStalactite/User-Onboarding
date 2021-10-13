import React from 'react'

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>User Information</h3>
            <div>
                <div>{errors.firstname}</div>
                <div>{errors.lastname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <label>First Name
                <input
                    type='text'
                    name='firstname'
                    onChange={onChange}
                    value={values.firstname}
                />
            </label>
            <label>Last Name
                <input
                    type='text'
                    name='lastname'
                    onChange={onChange}
                    value={values.lastname}
                />
            </label>
            <label>Email
                <input
                    type='text'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                />
            </label>
            <label>Password
                <input
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                />
            </label>
            <label>Agree to Terms of Service
                <input
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    checked={values.terms}
                />
            </label>
            <button disabled={disabled}>submit</button>
        </form>
    )
}