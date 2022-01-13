import React, { useState, useRef, useEffect } from 'react';
import SearchForm from '../searchForm/SearchForm';
import './header.scss';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { useOnClickOutside } from '../../hooks';
import i18next from 'i18next';


const Header = () => {
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    const [open, setOpen] = useState(false);

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        const mainBackgroundColor = `var(--background-color-${theme})`
        const headerBackgroundColor = `var(--header-background-color-${theme})`
        const fontColor = `var(--font-color-${theme})`
        const apexChartText =`var(--apexcharts-text-${theme})`
        const cardBackgroundColor = `var(--container-background-color-${theme})`
        document.body.style.setProperty('--background-color', mainBackgroundColor)
        document.body.style.setProperty('--font-color', fontColor)
        document.body.style.setProperty('--header-background-color', headerBackgroundColor)
        document.body.style.setProperty('--apexcharts-text', apexChartText)
        document.body.style.setProperty('--container-background-color', cardBackgroundColor)

      }, [theme])

      //language
      
      const languages = [
        {
          code: 'ru',
          name: 'Русский',
          country_code: 'ru',
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'gb',
        }
      ]

    return(
        <div className="header-container" ref={node}>
            <div className="controls-container">
                <SearchForm />
                <div className="controls">
                    <button className="change theme" onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</button>
                    {languages.map(({ code, name, country_code }) => (
                  <button className="change language"
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    {name}
                  </button>
              ))}            
                </div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}  setOpen={setOpen} />
            </div>

        </div>
    )
}

export default Header;