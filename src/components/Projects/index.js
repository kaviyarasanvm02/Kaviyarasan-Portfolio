import React from "react";
import { Container, Desc, SliderContainer, Title, Wrapper } from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ openModal, setOpenModal }) => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>
        <SliderContainer>
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </div>
            ))}
          </Slider>
        </SliderContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
