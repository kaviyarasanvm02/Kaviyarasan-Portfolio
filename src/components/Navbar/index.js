import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavBarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation(); // Get the current location

  const handleLogoClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle navigation with hash
  const handleHashNavigation = (hash) => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the section
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the home page, navigate to the home page with the hash
      window.location.href = `/${hash}`;
    }
    setIsOpen(false); // Close the mobile menu
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={handleLogoClick}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
              cursor: "pointer",
              textDecoration: "none",
              background: "none",
              border: "none",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </button>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink as={Link} to="/#about" onClick={() => handleHashNavigation("#about")}>
            About
          </NavLink>
          <NavLink as={Link} to="/#skills" onClick={() => handleHashNavigation("#skills")}>
            Skills
          </NavLink>
          <NavLink as={Link} to="/#experience" onClick={() => handleHashNavigation("#experience")}>
            Experience
          </NavLink>
          <NavLink as={Link} to="/#projects" onClick={() => handleHashNavigation("#projects")}>
            Projects
          </NavLink>
          <NavLink as={Link} to="/#education" onClick={() => handleHashNavigation("#education")}>
            Education
          </NavLink>
          <NavLink as={Link} to="/#certification" onClick={() => handleHashNavigation("#certification")}>
            Certification
          </NavLink>
          <NavLink as={Link} to="/blog">
            Blog
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/#about" onClick={() => handleHashNavigation("#about")}>
              About
            </MobileLink>
            <MobileLink as={Link} to="/#skills" onClick={() => handleHashNavigation("#skills")}>
              Skills
            </MobileLink>
            <MobileLink as={Link} to="/#experience" onClick={() => handleHashNavigation("#experience")}>
              Experience
            </MobileLink>
            <MobileLink as={Link} to="/#projects" onClick={() => handleHashNavigation("#projects")}>
              Projects
            </MobileLink>
            <MobileLink as={Link} to="/#education" onClick={() => handleHashNavigation("#education")}>
              Education
            </MobileLink>
            <MobileLink as={Link} to="/#certification" onClick={() => handleHashNavigation("#certification")}>
              Certification
            </MobileLink>
            <MobileLink as={Link} to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;