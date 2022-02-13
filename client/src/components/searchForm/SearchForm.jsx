import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Context } from '../../context';

import './search-form.scss';

const SearchForm = () => {
  const { t } = useTranslation();
  const { getWeather } = useContext(Context);

  return (
    <div className="search">
      <form onSubmit={getWeather} className="search-input">
        <input type="text" name="city" placeholder={t('search')} />
        <button className="search-btn">{t('search')}</button>
      </form>
    </div>
  );
};

export default SearchForm;
