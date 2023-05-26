import * as Yup from 'yup'

export const loginSchema= Yup.object({

    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(3).required('Enter Your Password')
})