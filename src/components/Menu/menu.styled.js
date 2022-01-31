import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 19%;
  z-index: 1001;
  @media only screen and (max-width: 1110px){
    width: 40%;
}
  @media only screen and (max-width: 660px){
    width: 100%;
  }
  padding: 0.5rem;
  position: absolute;
  background-color: var(--background-color);
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};

`;