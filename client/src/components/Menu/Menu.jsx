import React, { useContext } from 'react';
import { bool } from 'prop-types';
import ClearIcon from '@mui/icons-material/Clear';

import { Context } from '../../context';
import { StyledMenu } from './menu.styled';

import './menu.scss';

const Menu = ({ open }) => {
  const { state, removeFavoriteCity, favorites } = useContext(Context);

  const item = favorites.map((f, i) => (
    <div className="favorite" key={i}>
      {f.join(', ')}
      <div className="delete">
        <ClearIcon
          onClick={() => removeFavoriteCity(state.city)}
          fontSize="large"
        />
      </div>
    </div>
  ));

  return (
    <StyledMenu open={open}>
      <div className="menu-container">
        <h2 className="title">Favorites cities:</h2>
        {item && <div>{item}</div>}
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
