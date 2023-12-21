import React from 'react'
import './style/Footer.css'
import { SiLinkedin, SiTwitter, SiGithub, SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer--links'>
        <a href="https://github.com/prs2002" target="_blank"><SiGithub size={40} /></a>
        <a href="https://leetcode.com/prs2002" target="_blank"><SiLeetcode size={40} /></a>
        <a href="https://www.linkedin.com/in/praneetsuyal" target="_blank"><SiLinkedin size={40} /></a>
        <a href="https://twitter.com/prs_xd" target="_blank"><SiTwitter size={40} /></a>
      </div>
      <p>Coded with 💙 by Praneet</p>
    </div>
  )
}

export default Footer