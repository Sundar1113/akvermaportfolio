import React, { useEffect, useRef } from "react";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import { repoLink, CVLink, socialMedia } from "../constants";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { profilePic } from "../assets";
import { motion } from "framer-motion";
import { CountUp } from "countup.js";

const Hero = () => {
  const counters = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 8, suffix: "+", label: "Technologies Mastered" },
    { value: 20, suffix: "+", label: "Projects Completed" },
  ];

  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (el) {
        const { value, suffix } = counters[index];
        const countUp = new CountUp(el, value, {
          duration: 2,
          suffix: suffix || "",
        });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
    });
  }, []);

  return (
    <>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full text-white">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
              Hi there!
              <br className="sm:block hidden" /> I am
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <LetsConnect />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
            <span className="text-gradient">Abhinav Kumar Verma</span>
          </h1>
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <a href={CVLink} target="_blank">
              <Button styles="mt-10 mr-3 inline-flex items-center justify-center" text="CV" icon={AiOutlineFilePdf} />
            </a>
            <a href={repoLink} target="_blank">
              <Button styles="mt-10 inline-flex items-center justify-center" text="Star" icon={FaGithub} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`flex flex-col md:flex-row items-start ${styles.paddingY}`}>
      <div className="flex-1 flex flex-col justify-start px-100 sm:px-10 lg:px-10">
      <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[60px] lg:leading-[70px]">
            About Me
          </h1>
          <p className="text-dimWhite text-sm mt-4 sm:text-base lg:text-lg max-w-full md:max-w-[90%] lg:max-w-[100%] leading-relaxed">
    My name is <span className="text-teal-500 font-bold">Abhinav Kumar Verma</span>, age 27, exploring the frontiers of
      <span className="text-teal-500 font-bold"> Complex Adaptive Systems, Network Sciences, and AI</span>. I focus on developing
      advanced AGI systems by leveraging technologies like deep learning and large language models, integrating them with the latest developments in 
      <span className="text-teal-500 font-bold"> complex sciences, network dynamics, information theory, and cognitive science</span>.
      <br /><br />
      I completed my Matriculation (Class 10th) and Intermediate (Class 12th) from the CBSE board at 
      <span className="text-teal-500 font-bold"> Delhi Public School, Varanasi</span>. During school, I participated in multiple prestigious Olympiads 
      and qualified <span className="text-teal-500 font-bold"> INMO</span> and <span className="text-teal-500 font-bold"> KVPY</span>. I joined the 
      <span className="text-teal-500 font-bold"> Department of Electronics and Electrical Communication Engineering at IIT Kharagpur</span> in 2014, 
      where I was rigorously trained in subjects such as linear algebra, probability, algorithms, information theory, and statistical signal processing. 
      I consistently performed well, improving my SGPA from 8.36 to 9.71 in my final semester, demonstrating resilience and determination. 
      For my M.Tech thesis, I developed an end-to-end physical layer simulator of WiFi in MATLAB under the expert guidance of 
      <span className="text-teal-500 font-bold"> Prof. Suvra Sekhar Das</span>.
      <br /><br />
      During college, I participated in multiple hackathons, business pitches, product design competitions, and robotics challenges, winning accolades 
      in circuit design, game theory, and robotics. I interned at prestigious institutions such as 
      <span className="text-teal-500 font-bold"> Team Indus (a space agency)</span> and <span className="text-teal-500 font-bold"> Laval University</span>, 
      gaining experience in domains ranging from space technologies to quantum computing and ASIC design. With these skills, I can design, prototype, 
      and produce hardware systems. In my final two years, I specialized in <span className="text-teal-500 font-bold">Telecommunication System Engineering</span>, 
      gaining expertise in advanced wireless communication subjects such as MIMO communication, OFDM, and signal processing.
      <br /><br />
      After college, I joined the modem systems team at <span className="text-teal-500 font-bold">Qualcomm, Hyderabad</span>, where I designed multiple 
      system protocols and simulators for cutting-edge cellular technologies. I took initiatives to automate processes, conserving man-hours, 
      and integrated systems to predict power consumption in upcoming chips, providing a competitive edge in a constrained timeframe. 
      Additionally, I worked on designing a high-speed inter-chip communication protocol and simulator for efficient data transfer between radio 
      and modem units. At Qualcomm, I collaborated with a global team, learning the importance of teamwork, coordination, and leadership.
      <br /><br />
      <span className="italic text-teal-400">
        "What is intelligence? Is my smartphone or a dolphin more intelligent than my tennis racquet? What about the collective intelligence of 
        humanity, the internet, and individual curiosity? Can intelligence be quantified, studied, or modeled?"
      </span> – These questions led me to explore <span className="text-teal-500 font-bold">Complex Science</span>. While working, I delved into 
      network science, random graph theory, non-linear dynamics, cognitive psychology, neuroscience, AI/ML, GNNs, and LLMs. I resigned from Qualcomm in 
      July 2023 to dedicate myself to self-study and independent research. Since then, I have worked on four projects in these domains and have 
      a research paper on <span className="text-teal-500 font-bold">edge-critical directed graphs</span> in the submission pipeline. My research spans 
      LLMs, network science, random graph theory, and cellular automata, reflecting my deep interest in these fields.
      <br /><br />
      Currently, I am actively looking for a doctoral position in the closely interdependent domains of 
      <span className="text-teal-500 font-bold"> Network Science, Complex Systems, Brain Networks, and Graph Neural Networks</span>. 
      With my academic background, industry experience, and research expertise, I am eager to contribute to and explore groundbreaking advancements in these fields.
    </p>
        </div>
        
        {/* Profile Image on the Right */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0 pr-6">
          <div className="border-0 border-teal-600 rounded-lg overflow-hidden w-60 h-100 md:w-64 md:h-100">
            <img src={profilePic} alt="Abhinav Kumar Verma" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-center items-center text-center mb-20">
          {counters.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <p ref={(el) => (el ? (refs.current[index] = el) : null)} className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-white"></p>
              <p className="text-teal-200 text-sm sm:text-base lg:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
