import React from "react";
import { CardContainer, Container, Desc, SliderContainer, Title, Wrapper } from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ openModal, setOpenModal }) => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 2, // Show 2 cards per slide
    slidesToScroll: 1, // Scroll 1 card at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 cards per slide on tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 card per slide on mobile
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
