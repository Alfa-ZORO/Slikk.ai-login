import React from 'react'
import './form.css'
import { useFormik } from 'formik'
import { loginSchema } from '../../schemas'
import axios from 'axios'

const initialValues = {
  email: '',
  password: '',
}

const Form = () => {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema:loginSchema,
    onSubmit: async(values,action) => {
      try {
        const data = await axios.post("https://testing.slikk.ai/auth/login",values)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
      console.log(values)
      action.resetForm()
    }
  })
  console.log(errors,'------')

  return (
    <form className="formContent" onSubmit={handleSubmit}>
      <h1 className='inputHeading'>Login</h1>
      <div className="formInput">
        <div className='input'>
          <label className='inputLabel' htmlFor='email' >Email Address *</label>
          <input className='userInput' name='email' type="text" autoComplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email ?<p className='formError'>{errors.email}</p>:null}
        </div>
        <div className='input'>
          <label className='inputLabel' htmlFor='password'>Password *</label>
          <input className='userInput' name='password' type="password" autoComplete='off' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          {errors.password && touched.password ?<p className='formError'>{errors.password}</p>:null}
        </div>
        <button type='submit' className='btn'>Log In</button>
      </div>
      <p className='forgot'>Forgot Password ?</p>
    </form>
  )
}

export default Form