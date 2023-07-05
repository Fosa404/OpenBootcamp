import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum'

const RegisterFormik = () => {

    // let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string()
                    .min(6, 'Username too short')
                    .max(12, 'Username too long')
                    .required('Username is required'),

            email: Yup.string()
                    .required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                    .required('Role is required'),
            password: Yup.string()
                    .required('Password is required')
                    .min(8, 'Password too short'),
            confirm: Yup.string()
                    .when("password", {
                        is: value => (value && value.lenght > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            'Password must match!'
                        )
                    })
                    .required('You must confirm the password')  
        }

    )

    const submit = (values) => {
        alert(JSON.stringify(values))
    }


    return (
      <div>
        <h4>Register Form</h4>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={submit}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="Your username" />

              {errors.username && touched.username && (
                <ErrorMessage name="username"></ErrorMessage>
              )}

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />

              {errors.email && touched.email && (
                <ErrorMessage name="email"></ErrorMessage>
              )}

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />

              {errors.password && touched.password && (
                <ErrorMessage name="password"></ErrorMessage>
              )}

              <label htmlFor="confirm">Password</label>
              <Field
                id="confirm"
                name="confirm"
                placeholder="confirm password"
                type="password"
              />

              {errors.confirm && touched.confirm && (
                <ErrorMessage name="confirm"></ErrorMessage>
              )}

              <button type="submit">Register Account</button>
              {isSubmitting ? <p>Sending your credentials...</p> : null}
            </Form>
          )}
        </Formik>
      </div>
    );
}

export default RegisterFormik;
