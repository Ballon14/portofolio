import React from "react";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";

const AboutPage = () => {
  return (
      <section>
          <HeroBanner />
          <div className="mt-14 text-left text-(--text-color-black)">
              <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
                  About Us
              </h1>
              <p className="text-lg">
                  Hi, I’m Iqbal, an aspiring Frontend Web Developer currently
                  studying Information Technology at Universitas Muhammadiyah
                  Purworejo. I'm passionate about building responsive,
                  user-friendly, and visually engaging web interfaces using
                  modern tools like React.js and Tailwind CSS. As a student with
                  a strong interest in UI/UX design and frontend technologies, I
                  love translating ideas into interactive digital experiences.
                  From creating clean, reusable components to experimenting with
                  smooth animations using GSAP or exploring 3D interactions with
                  Three.js, I focus not just on how a website looks—but how it
                  works and feels to the user. I enjoy working on side projects,
                  collaborating with peers, and learning from real-world
                  challenges. My goal is to develop fast, accessible, and
                  scalable websites that deliver both functionality and
                  creativity. I’m always excited to learn more about motion
                  design, frontend performance, and the latest trends in web
                  development. Let’s create something meaningful and
                  innovative—one line of code at a time.
              </p>

              <BoxSocial />
          </div>
      </section>
  )
};

export default AboutPage;
