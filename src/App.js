import { ThemeProvider } from "styled-components";
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Import Routes
import { ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Footer/ScrollTopBtn";
import ProjectDetails from "./components/ProjectDetails";
import Certification from "./components/Certification";
import DotLoader from "./components/Navbar/DotLoader";
import HomePageBlog from "./components/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Blog from "./components/Blog/Blog";

const Body = styled.div`
 background-color: ${({ theme }) => theme.bg};
 width: 100%;
 overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timer); // Cleanup function
  }, []);
  
  return loading ? (
    <ThemeProvider theme={darkTheme}>
      <DotLoader />
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={darkTheme}>
      <ParallaxProvider>
        <Router>
          <Navbar />
          <Body>
            <Routes>  {/* ✅ Wrap all routes inside <Routes> */}
              <Route path="/" element={
                <>
                  <HeroSection />
                  <Wrapper>
                    <Skills />
                    <Experience />
                  </Wrapper>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Wrapper>
                    <Education />
                    <Certification />
                    <HomePageBlog />
                    <br />
                    <br />
                    <br />
                  </Wrapper>
                  <Contact />
                </>
              } />
                <Route path="/blog" element={<Blog />} />
              <Route path="/blog-details/:id" element={<BlogDetails />} />  {/* ✅ Blog details page */}
              
            </Routes>

            <Footer />
            <ScrollToTopButton />

            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Body>
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
