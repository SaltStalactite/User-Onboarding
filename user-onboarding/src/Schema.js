import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstname: yup
        .string()
        .trim()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters long'),
    lastname: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    terms: yup
        .boolean()
        .required('Must agree to Terms of  Service')

})

export default formSchema