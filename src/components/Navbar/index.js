import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Tooltip } from 'react-tooltip';
import { Squash as Hamburger } from 'hamburger-react';

import { SiGeeksforgeeks, SiLeetcode, SiCodechef } from 'react-icons/si';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Pratiksha Patare</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => {
            setIsOpen(!isOpen)
          }}>
          <Hamburger  />
        </MobileIcon>

        <NavItems className='gap-15'>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>

        <NavItems>
        <NavLink href="https://github.com/PP-Pratiksha"><FaGithub size={26} /></NavLink>
          <NavLink href='https://auth.geeksforgeeks.org/user/patarepratiksha'><SiGeeksforgeeks size={26}  /></NavLink>
          <NavLink href='https://leetcode.com/patarepratiksha243/'><SiLeetcode size={26}  /></NavLink>
          <NavLink href='https://www.codechef.com/users/pratiksha_3110'><SiCodechef size={26}  /></NavLink>
          <NavLink href='mailto:${Bio.email}'><AiOutlineMail size={28}   /></NavLink>
          <NavLink href='https://www.linkedin.com/in/pratiksha-patare-17793b218'><FaLinkedinIn size={26}  /></NavLink>
    
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>


            <MobileLink href="https://github.com/PP-Pratiksha"><FaGithub size={26}  /></MobileLink>
            <MobileLink href='https://auth.geeksforgeeks.org/user/patarepratiksha' ><SiGeeksforgeeks size={26}  /></MobileLink>
            <MobileLink href='https://leetcode.com/patarepratiksha243/' ><SiLeetcode size={26}  /></MobileLink>
            <MobileLink href='https://www.codechef.com/users/pratiksha_3110' ><SiCodechef size={26}  /></MobileLink>
            <MobileLink href='https://www.linkedin.com/in/pratiksha-patare-17793b218n'><FaLinkedinIn size={26}  /></MobileLink>
    

          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar