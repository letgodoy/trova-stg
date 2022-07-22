import { Image } from "../../components"
import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { menuLinks } from "../../utils/menulinks"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from "../../images/_logos/logo_white.png"

const Container = styled.header<{ isOpen: boolean }>`
  background-color: #4c6f9c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (max-width: 768px){
    ${({ isOpen }) => isOpen && `
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      width: 85vw;
      max-width: 380px;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: stretch;
  `}
  }
`

const LogoContainer = styled.div`
  height: 50px;

  @media screen and (max-width: 768px){
    text-align: left;
    justify-content: left;
    width: 100%;
  }
`

const LinksContainer = styled.div<{ isOpen: boolean }>`
  margin: 1rem 2rem;

  @media screen and (max-width: 768px){
    display: none;

    ${({ isOpen }) => isOpen && `
        width: 100%;
        height: 100%;
        flex: 1;
        justify-content: left;
        flex-direction: column;
        flex-wrap: nowrap;
        display: flex;
        line-height: 2.5rem;
  `}

  }
`

const LinksText = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.5s;

  &:visited {
    color: white;
  }

  &:hover {
    text-decoration: underline;
    transform: scale(1.06);
  }
`

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <LogoContainer>
        <Image src={Logo} alt={"Trova logo"} style={{ width: "132px", position: "absolute" }} />
      </LogoContainer>
      <LinksContainer isOpen={isOpen}>
        {menuLinks.map(link => {
          return <LinksText onClick={() => scrollTo(link.link)} href={"https://trovabrasil.com/" + link.name} key={link.name}>{link.name}</LinksText>
        })}
      </LinksContainer>
    </Container>
  )
}

export default Header
