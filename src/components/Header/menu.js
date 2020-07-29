import React from 'react';
import { Wrapperlinks, Link, Wrapper } from './styles';
const Menu = ({ header }) => (
  <Wrapper header={header}>
    <Wrapperlinks header={header}>
      <Link>Home</Link>
      <Link>About me</Link>
      <Link>Portfolio</Link>
      <Link>Contact</Link>
    </Wrapperlinks>
  </Wrapper>
);

export default Menu;
