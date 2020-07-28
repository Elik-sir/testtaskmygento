import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
  margin-left: 32px;
  word-wrap: normal;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  width: calc(100% - 64px);
  border-bottom: 1px solid ${(props) => (props.header ? 'white' : '#cecece')};
  position: ${(props) => (props.header ? 'static' : 'fixed')};
  top: 0;
  right: 32px;
  background-color: ${(props) => (props.header ? 'none' : 'white')};
  z-index: 100;
  @media (max-width: 768px) {
    width: 100%;
    right: 0;
  }
`;
const Wrapperlinks = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  padding: 24px 0;
  color: ${(props) => (props.header ? 'white' : '#cecece')};
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;
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
