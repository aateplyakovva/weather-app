import React, { useState, useRef } from 'react';
import SearchForm from '../searchForm/SearchForm';
import './header.scss';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { useOnClickOutside } from '../../hooks';


const Header = () => {
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    const [open, setOpen] = useState(false);

    return(
        <div className="header-container" ref={node}>
            <div className="controls-container">
                <SearchForm />
                <div className="controls">
                    <button>Like</button>
                    <button className="btn-flex">&deg;C / &deg;F</button>
                </div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}  setOpen={setOpen} />
            </div>

        </div>
    )
}

export default Header;