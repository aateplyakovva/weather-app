import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { login } from '../actions/user';
import Input from '../input/Input';

import './authorization.scss';

const SignIn = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
          <div>
            <h1>{t('welcome')}</h1>
            <Form>
              <Input
                value={formik.values.email}
                name="email"
                type="email"
                setValue={setEmail}
                placeholder={t('username')}
              />
              <Input
                value={formik.values.password}
                name="password"
                type="password"
                setValue={setPassword}
                placeholder={t('password')}
              />
              <button
                type="button"
                onClick={() =>
                  dispatch(login(formik.values.email, formik.values.password))
                }
              >
                {t('signIn')}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
