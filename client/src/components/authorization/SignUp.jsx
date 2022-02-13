import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { registration } from '../actions/user';
import Input from '../input/Input';

import './authorization.scss';

const SignUp = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 charaters')
      .required('Password is required'),
  });

  return (
    <div className="auth-container">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <>
            <h1>{t('welcome')}</h1>
            <Form>
              <Input
                value={formik.values.email}
                name="email"
                setValue={setEmail}
                type="email"
                placeholder={t('username')}
              />
              <Input
                value={formik.values.password}
                name="password"
                setValue={setPassword}
                type="password"
                placeholder={t('password')}
              />
              <button
                type="button"
                onClick={() =>
                  registration(formik.values.email, formik.values.password)
                }
              >
                {t('signUp')}
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
