import React, {useContext} from 'react';
import { StyledMenu } from './menu.styled';
import { bool } from 'prop-types';
import { Context } from '../../contex';
import './menu.scss';
import ClearIcon from '@mui/icons-material/Clear';

const Menu = ({ open }) => {

  const {favorites} = useContext(Context)
  const {state, removeFavoriteCity} = useContext(Context)
  const join = favorites.join(', ')

  return (
    <StyledMenu open={open}>
        <div className="container">
          <h2  className="title">Favorites cities:</h2>
          {join ? 
              <div className="favotite">{join}
                  <div className="delete">
                      <ClearIcon onClick={() => removeFavoriteCity(state.city)} fontSize="large"/>
                  </div>
              </div>
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