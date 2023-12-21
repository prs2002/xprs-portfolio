import React from 'react';
import { Link } from 'react-scroll';
import './style/AboutMe.css';
import { HiOutlineDownload } from 'react-icons/hi';
import { TbBrandGithubFilled } from 'react-icons/tb'
import { MdOpenInNew } from 'react-icons/md';
import { FaArrowRightLong,FaLinkedin } from 'react-icons/fa6';
import Resume from '/assets/pdf/Praneetsresume.pdf';

function AboutMe() {
  return (
    <>
      <div id='about' className='about'>
        <h1>About Me</h1>
        <p className="about--info">
          <li>🎓 23' Computer Engineering graduate Vellore Institute of Technology, Chennai </li>
          <li>💼 Currently seeking opportunities in development.</li>
        </p>
      </div>

      <section className="s1">
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <a href='/'>
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </a>
            <ul id="navigation">
              <li>
                <Link to="contact" smooth={true} offset={-120} duration={800} className='links'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="left-column">
            <img id="profile_pic" src='/assets/images/profile.png' alt="Profile Picture" />
            <h5 style={{ textAlign: 'center', lineHeight: 2 }}>Personalize Theme</h5>
            <div id="theme-options-wrapper">
              <div data-mode="light" id="light-mode" className="theme-dot"></div>
              <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
              <div data-mode="green" id="green-mode" className="theme-dot"></div>
              <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
            </div>
            <p id="settings-note">*Theme settings will be saved for your next visit</p>
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>Find me on LinkedIn & Github</h3>
                <div className="social--button"> 
                    <button onClick={() => window.open('https://www.linkedin.com/in/praneetsuyal/' , '_blank')}>
                      <FaLinkedin size={25} className='social--button--margin'/>
                      praneetsuyal
                    </button>
                </div>
                <div className="social--button">
                    <button onClick={() => window.open('https://github.com/prs2002', '_blank')}>
                      <TbBrandGithubFilled size={25} className='social--button--margin'/>
                      prs2002
                    </button>
                  </div>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='s2'>
        <div className="about-wrapper">
          <div className="post-wrapper">
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