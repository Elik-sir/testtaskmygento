import styled from 'styled-components';
import BackgroungImage from '../../assets/img/background.png';
export const Backgroung = styled.div`
  background: url(${BackgroungImage}) no-repeat;
  background-position: center;
  background-size: cover;
  width: auto;
  height: ${(props) => (props.matches ? '30vh' : '100vh')};
`;
export const WrapperDoubleArrow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const TextScrollDown = styled.div`
  texttransform: uppercase;
  color: white;
  width: auto;
`;
export const Link = styled.a`
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
export const Wrapper = styled.div`
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
export const Wrapperlinks = styled.div`
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
