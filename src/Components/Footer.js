import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pankaj Saharan</h4>
      <h4>Copyright &copy; 2025 DS</h4>
      <div className="footerLinks">
        <a href="https://github.com/kithogun666dunnel" target="_blank">
          <FaGithub />
        </a>
        <a href="linkedin.com/in/pankajkumarsaharan" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:devpankajkumar14@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a
          href="https://www.codewars.com/users/kithogun666dunnel"
          target="_blank"
        >
          <SiCodewars />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
