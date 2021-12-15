import React, { useContext } from 'react';
import './search-form.scss';
import { Context } from '../../contex';

const SearchForm = () => {
    const {getWeather} = useContext(Context)
    return (
        <div className="search">
        <form onSubmit={getWeather} className="search-input">  
            <input type="text" name="city" placeholder="Search city"/>
            <button className="search-btn">Search</button>
        </form>
        </div>

    )
}

export default SearchForm;
