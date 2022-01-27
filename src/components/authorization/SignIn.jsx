import React, { useState } from 'react';
import './authorization.scss';
import Input from "../input/Input";
import { useDispatch } from 'react-redux';
import { login } from '../actions/user';
import { useTranslation } from 'react-i18next';

const SignIn = () => {

    const { t } = useTranslation()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

  return (
    <div className="auth-container">
        <h1>{t("welcome")}</h1>
        <div className="form">
            <Input value={email} setValue={setEmail} type="text" placeholder={t("username")}/>
            <Input value={password} setValue={setPassword} type="password" placeholder={t("password")}/>
            <button onClick={() => dispatch(login(email, password))}>{t("signIn")}</button>
		    </div>
    </div>
  )
};

export default SignIn;
