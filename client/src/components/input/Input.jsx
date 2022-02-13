import React from 'react';

import { ErrorMessage, useField } from 'formik';

import './input.scss';

const Input = ({ ...props }) => {
  const { value, placeholder, type, setValue } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <input
        htmlFor={field.name}
        className={`input ${meta.touched && meta.error && 'is-invalid'}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
        {...field}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
};

export default Input;
