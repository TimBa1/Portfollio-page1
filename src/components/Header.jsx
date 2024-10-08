import React from "react";
import styled from "styled-components";
import { socialMedia } from "../Socials";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import timba1 from "../Assets/timba1.jpg";





const Header = () => {
  const Header = styled.div`
    height: 100vh;
    padding-top: 2rem;
    overflow: hidden;
    
    .headerCont {
      text-align: center;
      height: 100%;
      position: relative;
    }
    .cta {
      margin-top: 2.5rem;
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }
    .me {
      background: linear-gradient(var(--color-primary), transparent);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30rem;
      width: 23rem;
      margin-bottom: 5rem;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 4rem;
      border-radius: 12rem 12rem 0 0;
      overflow: hidden;
      padding: 2rem 1.5rem 1.5rem 1.5rem;
    }
    img {
      height: 100%;
      width:100%;
      background-size: cover;
      border-radius: 11rem 11rem 0 0;
      background-repeat: no-repeat;
      background-position: top;
    }
    .scroll_down {
      position: absolute;
      right: -2.3rem;
      bottom: 5rem;
      transform: rotate(90deg) !important;

      font-weight: 300;
      font-size: 0.9rem;
    }
    .socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      position: absolute;
      left: 0;
      bottom: 4rem;
    }
     
    
    .socials::after {
      content: "";
      width: 1px;
      height: 2rem;
      background: var(--color-primary);
    }
    @media screen and (max-width: 1024px) {
      height: 68vh;
    }
    @media screen and (max-width: 600px) {
      height: 100vh;
       
      .socials {
        margin-left: -0.5rem;
        bottom: 10rem;
      }
      .me {
        width: 20rem;
        height:30rem;
      }
      .scroll_down{
        bottom: 16rem;
      }
    }
  `;
  return (
    <Header id='home'>
      <div className="container headerCont">
        <h5 data-aos="fade-down">Hello I'm</h5>
        <h1 data-aos="fade-down">Timilehin Bakare</h1>
        <h5 data-aos="fade-down" className="text-light">Frontend Developer</h5>
        <div className="cta">
          <a data-aos="flip-right" href={socialMedia.cv} target='_blank' rel='noreferrer'alt="no img" className="btn">
            Download Resume
          </a>
          <a data-aos="flip-left" href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <div  className="me">
          <img data-aos="fade-up" src={timba1} alt="no img" />
        </div>
        
        <a href="#footer" data-aos="flip-left" className="scroll_down">
          Scroll Down
        </a>
        <div data-aos="fade-up-right"  className="socials">
          <a
            href={socialMedia.linkedIn}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <BsLinkedin />
          </a>
          <a
            href={socialMedia.Github}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <BsGithub />
          </a>
          <a
            href={socialMedia.gmail}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <SiGmail />
          </a>
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
            alt="no img"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </Header>
  );
};

export default Header;
