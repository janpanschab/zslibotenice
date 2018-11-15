// @flow

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const HeaderStyled = styled.header`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.blue};

  ${({ theme }) => theme.mq.md.min`
    // background-image: url('https://satyr.io/1980x570');
    background-image: url('/static/header.jpg');
    background-size: cover;
    background-position: center center;
  `};
`;

const Top = styled.div`
  ${({ theme }) => theme.mq.md.max`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `};

  ${({ theme }) => theme.mq.md.min`
    text-align: center;
  `};
`;

const TitleMobile = styled.h1`
  margin-bottom: 0;
  font-size: 18px;
  font-weight: bold;

  ${({ theme }) => theme.mq.md.min`
    display: none;
  `};
`;

const A = styled.a`
  ${({ theme }) => theme.mq.md.max`
    &,
    :hover,
    :focus {
      color: ${theme.color.white};
    }
  `};
`;

const Hamburger = styled.svg`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 10px;
  stroke: ${({ theme }) => theme.color.white};
  stroke-width: 4px;
  cursor: pointer;

  ${({ theme }) => theme.mq.md.max`
    margin -10px -10px -10px 10px;
  `};

  ${({ theme }) => theme.mq.md.min`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    background: #fffa;
    stroke: ${({ theme }) => theme.color.blue};
  `};

  ${({ theme }) => theme.mq.lg.min`
    display: none;
  `};
`;

const Title = styled.h1`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background: #fffa;
  text-align: center;
  /* text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff, -2px 2px 6px #000; */

  ${({ theme }) => theme.mq.md.max`
    display: none;
  `};
`;

const Strong = styled.strong`
  font-size: 30px;
`;

const Address = styled.address`
  display: inline-block;
  margin-bottom: 0;
  padding: 5px 10px;
  border-radius: 5px;
  background: #fffa;
  font-style: italic;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.blue};

  ${({ theme }) => theme.mq.md.max`
    display: none;
  `};
`;

class Header extends React.Component {
  state = {
    navOpen: false,
  };

  handleHamburgerClick = () => {
    this.setState(state => ({ navOpen: !state.navOpen }));
  };

  render() {
    const { path } = this.props;
    const { navOpen } = this.state;
    return (
      <>
        <HeaderStyled>
          <Top>
            <TitleMobile>
              <Link href="/" passHref>
                <A>ZŠ a MŠ Libotenice</A>
              </Link>
            </TitleMobile>
            <Title>
              <Link href="/">
                <a>
                  <Strong>Základní škola a Mateřská škola Libotenice</Strong>
                  <br />
                  příspěvková organizace
                </a>
              </Link>
            </Title>
            <Hamburger viewBox="0 0 24 24" onClick={this.handleHamburgerClick}>
              <line x1="0" y1="4" x2="24" y2="4" />
              <line x1="0" y1="12" x2="24" y2="12" />
              <line x1="0" y1="20" x2="24" y2="20" />
            </Hamburger>
          </Top>
          <Address>
            Základní škola <br />a Mateřská škola Libotenice, <br />
            příspěvková organizace <br />
            Libotenice 58 <br />
            412 01 Litoměřice
          </Address>
        </HeaderStyled>
        <Nav path={path} open={navOpen} />
      </>
    );
  }
}

export default Header;
