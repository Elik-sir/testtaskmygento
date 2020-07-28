import React from 'react';
import JasonWood from '../../assets/img/JasonWood.png';
import styled from 'styled-components';
import { ReactComponent as DoubleArrow } from '../../assets/img/DoubleArrow.svg';
import { useMediaQuery } from '@react-hook/media-query';
const WrapperAboutMe = styled.div`
  display: flex;
  padding: 0 130px;
  margin-top: ${(props) => (props.matches ? '0' : '80px')};
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0;
  }
`;
const ContainerText = styled.div`
  width: 50%;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
  }
`;
const Text = styled.div`
  font-size: ${(props) => (props.matches ? '1em' : '1.5em')};
  color: #202020;
  opacity: 0.8;
  line-height: 30px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5em;
  }
`;
const WrapperImage = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.p`
  font-weight: 370;
  text-transform: uppercase;
  margin: 40px 0;
  font-size: ${(props) => (props.matches ? '30px' : '60px')};
  letter-spacing: 4px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
const AboutMe = () => {
  const matches = useMediaQuery('only screen and (max-width: 500px)');
  return (
    <WrapperAboutMe matches={matches}>
      <WrapperImage>
        <Image src={JasonWood} alt='Jason' />
      </WrapperImage>

      <ContainerText>
        <Title matches={matches}>About me</Title>
        <Text style={{ marginBottom: '20px' }} matches={matches}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        {!matches && (
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        )}
        <p style={{ fontSize: matches ? '18px' : '36px' }}>Jason Wood </p>
      </ContainerText>
      {!matches && (
        <div style={{ width: '100%', margin: '40px 0' }}>
          <p style={{ textTransform: 'uppercase' }}>
            keep scrolling, there is still more to come
          </p>
          <DoubleArrow />
        </div>
      )}
    </WrapperAboutMe>
  );
};
export default AboutMe;
