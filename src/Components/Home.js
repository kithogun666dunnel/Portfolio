import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>PANKAJ SAHARAN</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love transforming raw ideas into websites or products that solve
            real-world problems and make a meaningful impact. I seek work that
            challenges me as a developer and allows me to showcase creativity
            and innovation with pride.
            <br />
            <br />I am fluent in <b>JavaScript</b>, have proficiency in{" "}
            <b>SQL</b>, and am skilled in <b>Node.js</b>. Currently, I am
            working on projects using <b>React</b> and exploring the <b>MERN</b>{" "}
            stack.
            <br />I have a strong foundation in <b>data structures</b>,{" "}
            <b>algorithms</b>, and <b>cloud platforms</b> like AWS and Google
            Cloud.
            <br />
            In the near future, I plan to deepen my expertise in <b>
              Next.js
            </b>, <b>TypeScript</b>, and explore <b>Three.js</b> for interactive
            web experiences.
            <br />
            <br />
            Also, I am passionate about solving problems, enjoy a good cup of{" "}
            <b>coffee</b>, and am constantly striving to grow as a developer.
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
