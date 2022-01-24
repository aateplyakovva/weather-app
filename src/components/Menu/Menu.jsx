import React, {useContext} from 'react';
import { StyledMenu } from './menu.styled';
import { bool } from 'prop-types';
import { Context } from '../../contex';
import './menu.scss';
import ClearIcon from '@mui/icons-material/Clear';

const Menu = ({ open }) => {
  const {state, removeFavoriteCity, favorites} = useContext(Context)
  const join = favorites.join(', ')


  const item = favorites.map((f, i) => (
    <div className="favorite" key={i}>{f}
      <div className="delete">
          <ClearIcon onClick={() => removeFavoriteCity(state.city)} fontSize="large"/>
      </div>
    </div>
  ))

  return (
    <StyledMenu open={open}>
        <div className="menu-container">
          <h2  className="title">Favorites cities:</h2>
          {join ? 
              <div>{item}</div>
              :
              <div></div>
          }
          
        </div> 
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;