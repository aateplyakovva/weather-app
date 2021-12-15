import React from 'react';
import SearchForm from '../searchForm/SearchForm';
import './header.scss';


const Header = () => {


    return(
        <div className="header-container">
            <div className="controls-container">
                <SearchForm />
                <div className="controls">
                    <button>Like</button>
                    <button className="btn-flex">&deg;C / &deg;F</button>
                </div>

            </div>


        </div>
    )
}

export default Header;