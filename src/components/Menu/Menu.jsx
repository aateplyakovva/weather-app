import React from 'react';
import { StyledMenu } from './menu.styled';
import { bool } from 'prop-types';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <div className="buttons-container">

        </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;