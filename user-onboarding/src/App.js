import React, { useState, useEffect } from 'react'
import './App.css';
import UserForm from './UserForm';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Schema';

const initialFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  terms: ''
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  terms: ''
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password,
      terms: !!formValues.terms
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>Users</h1>
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
