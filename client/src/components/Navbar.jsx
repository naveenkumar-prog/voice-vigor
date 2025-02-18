import React, { useState } from 'react'
import styled from 'styled-components'
import LogoImg from '../utils/images/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { MenuRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/userSlice';

const Nav = styled.div`
  background-color: ${( {theme} ) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({theme}) => theme.text_secondary + 20};
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 24px;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(Link)`
  color: ${({theme}) => theme.black};
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  text-decoration: none;
`;
const Logo = styled.img`
  height: 42px;
`;

const MobileIcon = styled.div`
  color: ${({theme}) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    align-items: center;
  }
`;

const NavItems = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled(NavLink)`
  color: ${({theme}) => theme.text_primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  &:hover {
    color: ${({theme}) => theme.primary};
  }
  &.active {
    color: ${({theme}) => theme.primary};
    border-bottom: 1.8px solid ${({theme}) => theme.primary};
  }
`;

const UserContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
  padding: 0 6px;
  color: ${({theme}) => theme.primary};
`;
const TextButton = styled.div`
  color: ${({theme}) => theme.text_primary};
  cursor: pointer;
  text-align: end;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    color: ${({theme}) => theme.primary};
  }
`;

const MobileMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    position: absolute;
    list-style: none;
    width: 90%;
    padding: 12px 40px 24px 40px;
    background: ${({theme}) => theme.bg};
    transition: all 0.5s ease-in-out;
    top: 80px;
    right: 0;
    transform: ${({isOpen}) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({isOpen}) => isOpen ? '100%' : '0'};
    z-index: ${({isOpen}) => isOpen ? '1000' : '-1000'};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Navbar = ({currentUser}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded sx={{color: 'inherit'}}>

          </MenuRounded>
        </MobileIcon>
        <NavLogo to='/'>
          <Logo src={LogoImg}/>
          FitAssist
        </NavLogo>

        <MobileMenu isOpen={isOpen}>
          <Navlink to='/'>Dashboard</Navlink>
          <Navlink to='/workouts'>Workouts</Navlink>
          <Navlink to='/tutorials'>Tutorials</Navlink>
          <Navlink to='/blogs'>Blogs</Navlink>
          <Navlink to='/contact'>Contact</Navlink>
        </MobileMenu>

        <NavItems>
          <Navlink to='/'>Dashboard</Navlink>
          <Navlink to='/workouts'>Workouts</Navlink>
          <Navlink to='/tutorials'>Tutorials</Navlink>
          <Navlink to='/blogs'>Blogs</Navlink>
          <Navlink to='/contact'>Contact</Navlink>
        </NavItems>

        <UserContainer>
          <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
          <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
        </UserContainer>
      </NavContainer>
      
    </Nav>
  )
}

export default Navbar
