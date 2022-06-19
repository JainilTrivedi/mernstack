import React from 'react'
import me from "../Images/logo-01.png";
const About = () => {
  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere.</p>
      </div>

      <div class="row">
        <div class="column">
          <div class="card">
            <img src={me} alt="" />
            <div class="container-about">
              <h2>Jainil</h2>  &nbsp;
              <span class="title">MERN Developer</span>
              <hr></hr>
              <b>Phone</b>&nbsp;<span>1234567890</span>
              <p></p>
              <b>Email</b>&nbsp;<span>jainil04trivedi@gmail.com</span>
              <p></p>
              <p><button class="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
