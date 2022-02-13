import React from 'react';
import { useTranslation } from 'react-i18next';

import ItemsForecast from './ItemsForecast';

import './forecast.scss';

const Forecast = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="forecast">
        <h3 className="forecast__title">{t('hourly_foreacst')}</h3>
        <div className="items">
          <ItemsForecast />
        </div>
      </div>
    </div>
  );
};
export default Forecast;
