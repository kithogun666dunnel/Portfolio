import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Pankaj Kumar</b>, and I am from India. I'm a{" "}
            <b>JavaScript developer</b> with experience in{" "}
            <b>web development</b>, currently exploring the <b>MERN stack</b>. I
            graduated from the <b>Army Institute of Technology, Pune</b>, with a
            degree in <b>Information Technology</b>.
            <br />
            <br />
            I’ve interned as a <b>React developer</b> at{" "}
            <b>Mittarv Private Limited</b>, where I contributed to building
            interactive and scalable user interfaces. My passion lies in
            creating impactful projects that blend functionality with visually
            appealing designs. You can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to collaborations or work opportunities that
            allow me to contribute, learn, and grow. Feel free to connect with
            me—links are in the footer.
            <br />
            <br />I enjoy exploring new technologies, solving complex problems,
            and continuously evolving as a developer.
            <a
              href="https://www.linkedin.com/in/pankajkumarsaharan/"
              target="_blank"
            >
              linkedin.
            </a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
