import React, { useState, useEffect, useLayoutEffect } from 'react';
import Icon from './black-logo.js';
import styled from 'styled-components';
import WhiteLogoText from './white-logo-text.js';
import Burger from './Burger';
import Menu from './Menu';

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    function handleResize() {
      console.log('resized');
      if (size !== window.innerWidth) {
        setSize(window.innerWidth);
      }
      // Update the state or perform any other actions when the
      // browser is resized
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [size]);

  // useEffect(() => {}, [size]);

  return (
    <>
      <ScreenContainer>
        <NavContainer>
          <NavTextContainer>
            <NavLeft>
              <Icon />
            </NavLeft>
            <NavRight>
              <NavOptionsContainer>
                {window.innerWidth > 1000 ? (
                  <>
                    <NavOption>HOME</NavOption>
                    <NavOption>SHOP</NavOption>
                    <NavOption>CONTACT</NavOption>
                  </>
                ) : (
                  <>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                  </>
                )}
              </NavOptionsContainer>
            </NavRight>
          </NavTextContainer>
        </NavContainer>
        <TransparentBackground>
          <HeaderContainer>
            <LeftHeader>
              <WhiteLogoText />
            </LeftHeader>
            <RightHeader>
              {/* <TitleText>HOW IT STARTED</TitleText> */}
              <Text>
                Geezers of Harley started as a bit of fun at one of our local
                H.O.G. branch monthly meetings. It is a little banter towards
                the Ladies of Harley group which is for ladies only!
                <br />
                <br />
                Geezers of Harley proved popular within our chapter and we had
                some merchandise made; demand soon grew beyond our chapter.
                <br />
                <br />
                Have a look in our shop section and if you want to know more
                then just get in touch and have a chat. Ride Safe, Michael
                Pierce.
              </Text>
            </RightHeader>
          </HeaderContainer>
        </TransparentBackground>
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div``;

const NavContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #e0e0e0;
  z-index: 2;
  @media (max-width: 1000px) {
    height: 70px;
  }
`;

const NavTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 100px;
  @media (max-width: 1000px) {
    padding-left: 1rem;
  }
`;

const NavRight = styled.div`
  width: 25%;
  height: 100%;
  padding-right: 100px;
`;

const NavOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const NavOption = styled.p`
  padding: 20px;
  font-size: 20px;
  letter-spacing: 1px;
  color: #101010;
  font-family: 'Oswald', sans-serif;
  &:hover {
    color: orange;
    border-bottom: solid 2px orange;
  }
`;

const TransparentBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  // top: 120px;
  background-color: rgba(16, 16, 16, 0.75);
  @media (max-width: 1000px) {
    background-color: #101010;
    height: auto;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: #101010:
  z-index: 1;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
  }
`;

const LeftHeader = styled.div`
  flex: 1;
  height: 60%;
  border-right: 2px solid #e0e0e0;
  z-index: 1;
  @media (max-width: 1000px) {
    border-right: 0px solid #e0e0e0;
    // background-color: pink;
    // width: auto;
  }
`;

const RightHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const TitleText = styled.p`
  width: 220px;
  font-size: 30px;
  color: #e0e0e0;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  border-bottom: solid 2px #e0e0e0;
  margin-top: -10px;
`;

const Text = styled.p`
  margin: 0px 80px 0px 80px;
  font-size: 24px;
  color: #e0e0e0;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  @media (max-width: 1000px) {
    margin: 0px 5% 10% 5%;
    font-size: 1.2rem;
  }
`;

export default App;
