import React, {useState} from 'react'
import styled from 'styled-components';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const ThemeToggle = ({setTheme,theme}) => {

    const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
    function changeTheme() {
      if (theme === "light") {
          setTheme("dark");
      } else {
          setTheme("light");
      }
      
  };
  return (
    <DarkToggle onClick={changeTheme}>{icon}</DarkToggle>   
  )
}

export default ThemeToggle

const DarkToggle = styled.div`
    position: absolute;
    bottom: 0;
    bottom: 2rem;
    right: 2rem;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: ${props => props.theme.toggleBg};
    color:${props => props.theme.toggleColor};
    border: 3px solid ${props => props.theme.toggleBorder};
    z-index: 999;
    cursor:pointer;
`