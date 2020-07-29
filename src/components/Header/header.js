import React, { useEffect, useState, useRef } from 'react';
import Menu from './menu';
import { useMediaQuery } from '@react-hook/media-query';
import { ReactComponent as DoubleArrow } from '../../assets/img/DoubleArrow.svg';
import { ReactComponent as MobileMenu } from '../../assets/img/MENU.svg';
import { Backgroung, WrapperDoubleArrow, TextScrollDown } from './styles';
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
    <Backgroung ref={ref} matches={matches}>
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
          <WrapperDoubleArrow>
            <TextScrollDown>scroll down to see more</TextScrollDown>
            <DoubleArrow />
          </WrapperDoubleArrow>
        </>
      )}
    </Backgroung>
  );
};

export default Header;
