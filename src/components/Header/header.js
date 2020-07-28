import React, { useEffect, useState, useRef } from 'react';
import BackgroungImage from '../../assets/img/background.png';
import Menu from './menu';
import styled from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import { ReactComponent as DoubleArrow } from '../../assets/img/DoubleArrow.svg';
import { ReactComponent as MobileMenu } from '../../assets/img/MENU.svg';
const Backgroung = styled.div`
  background: url(${BackgroungImage}) no-repeat;
  background-position: center;
  background-size: cover;
  width: auto;
  height: ${(props) => (props.size ? '30vh' : '100vh')};
`;

const Header = () => {
  const ref = useRef(null);
  const [inHeader, setInHeader] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > ref.current.clientHeight) {
        setInHeader(false);
      } else {
        setInHeader(true);
      }
    });
  }, []);
  const matches = useMediaQuery('only screen and (max-width: 500px)');
  return (
    <Backgroung ref={ref} size={matches}>
      {matches ? (
        <div style={{ width: '92px' }}>
          <MobileMenu
            width='92px'
            style={{ marginLeft: '24px', marginTop: '24px' }}
          />
        </div>
      ) : (
        <>
          <Menu color={'#f1f1f1'} header={inHeader} />
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: ' 50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <p
              style={{
                textTransform: 'uppercase',
                color: 'white',
                width: 'auto',
              }}
            >
              scroll down to see more
            </p>
            <DoubleArrow />
          </div>
        </>
      )}
    </Backgroung>
  );
};

export default Header;
