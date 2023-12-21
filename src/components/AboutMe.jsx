import React from 'react'
import { Link } from 'react-scroll';
import './style/AboutMe2.css'
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6"
import Resume from "/assets/pdf/Praneetsresume.pdf"


function AboutMe() {
  return (
    <>
    <div id='about' className='about'>
      <h1>About Me</h1>
      <p className="about--info">
        <li>🎓 23' Computer Engineering graduate Vellore Institute of Technology, Chennai </li>
        <li>💼 Currently seeking opportunities in development.</li>
      </p>

      {/* <p className='about--info'>Hello World!! I'm a Computer Science student, absolutely captivated by web development, especially the fantastic realm of ReactJS. My passion revolves around taking those snazzy design concepts and turning them into actual functional websites. When I'm not diving into lines of code, you'll likely catch me reading books or sleeping. </p>

      <p className='about--info'>This portfolio? Think of it as a scrapbook documenting my journey through the web development landscape. From quirky personal projects to my spotify playlist, it's all here. So take a little tour, explore around, and if you share the same enthusiasm for all things web, let's have a chat!</p> */}

    </div>
    <section class="s1">
      <div class="intro-wrapper">
        <div class="nav-wrapper">
          <a href='/'>
            <div class="dots-wrapper">
              <div id="dot-1" class="browser-dot"></div>
              <div id="dot-2" class="browser-dot"></div>
              <div id="dot-3" class="browser-dot"></div>
            </div>
          </a>
          <ul id="navigation">
            <li><Link to="contact" smooth={true} offset={-120} duration={800} className='links'>
                Contact
              </Link></li>
          </ul>
        </div>

        <div class="left-column">
          <img id="profile_pic" src="img/anubhav-pabby-profile.jfif" alt="Profile Picture" />
          <h5 style={{ textAlign: 'center', lineHeight: 2 }}>Personalize Theme</h5>
          <div id="theme-options-wrapper">
            <div data-mode="light" id="light-mode" class="theme-dot"></div>
            <div data-mode="blue" id="blue-mode" class="theme-dot"></div>
            <div data-mode="green" id="green-mode" class="theme-dot"></div>
            <div data-mode="purple" id="purple-mode" class="theme-dot"></div>
          </div>
          <p id="settings-note">*Theme settings will be saved for your next visit</p>
        </div>

        <div class="right-column">
          <div id="preview-shadow">
            <div id="preview">
              <div id="corner-tl" class="corner"></div>
              <div id="corner-tr" class="corner"></div>
              <h3>Find me on LinkedIn & Github</h3>
                <a target="_blank" href="https://www.linkedin.com/in/praneetsuyal/">LinkedIn: @PraneetSuyal</a> <br />
                <a target="_blank" href="https://github.com/prs2002">Github: @prs2002</a>
              <div id="corner-br" class="corner"></div>
              <div id="corner-bl" class="corner"></div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class='s2'>
      <div class="about-wrapper">
      <div class="post-wrapper">
        <h1>More about Me</h1>
        <p className="about--info">
          <li>🌟 I love to work on & build projects just to tickle my brain and love to work with others to build something new and take the project to new highs. </li>
          <li>📚 While I am busy building projects, I also love to explore new technologies in the market and am eager to learn them to increase my knowledge.</li>
        </p>
        <hr />
        <h4>TOP EXPERTISE</h4>
        <p>Fullstack developer with a primary focus on React + Spring-Boot: </p>
        <div className="about--button">
          <button className='about--button--resume'>
            Resume
            <FaArrowRightLong size={25} style={{ marginLeft: '10px' }} />
            <a href="https://drive.google.com/file/d/1bR8SeBMG3U-46P1V4T0lvcbkyuyjMfb2/view?usp=sharing" target="_blank">
              <button className='about--button--open'>
                <MdOpenInNew size={30} />
              </button>
            </a>
            <a href={Resume} download="Praneetsresume.pdf">
              <button className='about--button--download'>
                <HiOutlineDownload size={30} />
              </button>
            </a>
          </button>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutMe;
