import React from 'react';
import './clouds.scss';
import { useTranslation } from 'react-i18next';

const Clouds = () => {
    const { t } = useTranslation()

    return (
        <div className="clouds">
            <h3>{t("title")}</h3>
            <div className="cloud x1"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
            <div className="cloud x6"></div>
            <div className="cloud x7"></div>
      </div>
    )
}

export default Clouds;
