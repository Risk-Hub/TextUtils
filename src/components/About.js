import React from "react";
import profilepic from "../images/ProfilePic.jpeg"
import geo from '../images/geo.svg'
import phone from '../images/phone.svg'
import mail from '../images/mail.svg'
import fb from '../images/fb.svg'
import insta from '../images/insta.svg'
import linkedin from '../images/linkedin.svg'
import "./About.css"

function About(props) {
  return (
    <>
    <div className="container">
      <div className="container my-4 mx-4" id="firstDiv">
        <img src={profilepic} alt="profile pic" id="profileimage"/>
        <div className="aboutMe">
          <p>Hey there! 🙋‍♂️</p>
          <p>I am Rishabh Kumar, currently pursuing B.Tech. in Computer Science and Engineering from Kalinga Institute of Industrial Technology. I am a passionate Java Developer and used to do coding in Java language. I also do full-stack development using ReactJs, NodeJs, ExpressJs and MongoDb. I also use Java Servlets as backend.</p>
          <p>This TextUtils website is a utility which can be used to manipulate your text in the way you want. Just write something on the text area provided and use the buttons below to see the magic!</p>
          <p>Hope you liked it!</p>
        </div>
      </div>
    </div>
    <div id="secondDiv" style={{backgroundColor: props.bg}}>
      <h1>Get in Touch</h1>
      <div style={{width: "28rem"}}>
        <img src={geo} alt="fb" className="mx-1" style={props.image}/>
        Bimla Niketan, Chhapra Colony, New Jakkanpur, Patna-01
        <div display="block">
          <img src={phone} alt="phone" className="my-2 mx-2" style={props.image} />
          <a href="tel:+91-8873165937">8873165937</a>
        </div>
        <img src={mail} alt="email" className="mx-2" style={props.image}/>
        <a href="mailto:riskhub.thinklogical@gmail.com">riskhub.thinklogical@gmail.com</a>
      </div>
      <div className="my-4" style={{display: "flex",width: "15rem",justifyContent: "space-around"}}>
        <a href="https://www.facebook.com/profile.php?id=100006188325847" target="_blank" rel="noreferrer">
          <img src={fb} alt="fb" style={props.image}/>
        </a>
        <a href="https://www.instagram.com/4rishabh_kumar/" target="_blank" rel="noreferrer">
          <img src={insta} alt="insta" style={props.image}/>
        </a>
        <a href="https://www.linkedin.com/in/4rishabh-kumar/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" style={props.image}/>
        </a>
      </div>
    </div>
    </>
  );
}

export default About;
