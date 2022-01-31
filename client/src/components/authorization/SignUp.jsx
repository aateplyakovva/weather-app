import React, { useState } from 'react';
import './authorization.scss';
import Input from "../input/Input";
import {registration} from "../actions/user";
import { useTranslation } from 'react-i18next';

const SignUp = () => {

  const { t } = useTranslation()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
        <h1>{t("welcome")}</h1>
        <div className="form">
          <Input value={email} setValue={setEmail} type="text" placeholder={t("username")}/>
          <Input value={password} setValue={setPassword} type="password" placeholder={t("password")}/>
          <button onClick={() => registration(email, password)}>{t("signUp")}</button>
		  </div>
    </div>
  )
};

export default SignUp;
