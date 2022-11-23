import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/100076730?v=4"}
          alt="Founder"
        />

        <h2>Mehul Mittal</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedln.com/mehulmittal2601@gmail.com" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/mehulmittall" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/mehulmittall" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;