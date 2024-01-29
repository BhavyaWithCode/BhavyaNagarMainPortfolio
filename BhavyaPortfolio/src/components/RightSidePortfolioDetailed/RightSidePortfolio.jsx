import React from 'react';
import styled from 'styled-components';
import BhavyaBanner from './img/BhavyaBanner.png';
import CLanguage from './img/C_Language.png';
import CPlusPlusLanguage from './img/CPlusPlusLanguage.webp'
import Html5 from './img/HTML5.webp'
import CSS3 from './img/CSS3.webp'
import Javascript from './img/Javascript.webp'
import Bootstrap5 from './img/Bootstrap5.webp'
import reactjs from './img/ReactJs.webp'
import Tailwindcss from './img/Tailwindcss.webp'
import StyledComponents from './img/StyledComponents.png'
import Python from './img/Python.webp'
import Django from './img/Django.png'
import MySql from './img/MySql.webp'
import Sqlite from './img/SQLite.webp'
import dart from './img/Dart.webp'
import flutter from './img/Flutter.webp'
import comingsoon from './img/ComingSoon.png'
import BhavyaJavaScriptCertificate from './img/BhavyaJavaScriptWorkshop.jpeg'
import BhavyaTopsTechnology from './img/BhavyaTops.png'
import * as Styled from './RightSidePortfolioStyled';



const AboutMe = () => {
  return (
    <Styled.ResponsiveContainer>
      {/* RightSideImageBanner Section starts here */}
      <Styled.ResponsiveRightSideImage>
        <Styled.RightSideBanner src={BhavyaBanner} alt='Bhavya-Right-Side-Banner' />
      </Styled.ResponsiveRightSideImage>
      {/* RightSideImageBanner section ends here */}

      {/* RightSideAboutMeDetailed section starts here */}
      <Styled.RightSideDetailed>
        <Styled.RightSideTitle>💫About Me:</Styled.RightSideTitle>
        <hr />
        <p> Welcome to My Coding Universe! 🌌
          <br />
          <br />
          Hey there! 👋 Welcome to my cosmic corner of the digital galaxy. 🌌 I'm thrilled to have you here as we embark on an exciting journey through the stars of my coding odyssey. 🚀 From education to training and beyond, let me take you on a thrilling ride through the universe of technology and innovation.🌟
        </p>
        <p>🎓 Education and Training Journey 🚀

          🎓 My academic voyage began with a Bachelor's degree in Computer Applications (BCA) from Christ College, Rajkot. 🌟 Eager to delve deeper into the realms of software engineering, I pursued intensive training as a Full Stack Python Web Developer at Tops Technologies. 💻 This immersive experience equipped me with the skills and knowledge needed to thrive in the dynamic world of web development.🚀
        </p>

        🌟 Mastering Full Stack Python Web Development 🐍

        🔧🌐 As a Full Stack Python Web Developer, my primary role revolves around leveraging the versatile Django framework to craft robust and scalable web applications. 🎨🖥️ From designing intuitive user interfaces to implementing complex backend logic, I immerse myself in every aspect of the development process. 👁️‍🗨️💼 With a keen eye for detail and a passion for excellence, I strive to deliver solutions that exceed expectations and make a meaningful impact. 🚀
        <br />
        <br />
        🚀 Embarking on a Flutterful Journey 🌈

        🚀📱 In my relentless pursuit of growth and innovation, I've embarked on an exhilarating Flutterful journey at Red and White Multimedia in Rajkot. 💫 Flutter, with its cross-platform magic and expressive Dart language, has opened up a universe of possibilities in mobile app development. 🌟 As I navigate through this exciting terrain, I eagerly embrace the challenges and discoveries that await me, fueling my passion for continuous learning and evolution. 🌈
        <br />
        <br />

        🌠 Join Me on this Epic Coding Adventure! 🚀

        🌌🚀 As I continue to traverse the vast expanse of the coding cosmos, I invite you to join me on this epic adventure. Together, let's push the boundaries of innovation, explore the frontiers of technology, and leave our mark on the digital universe. ✨ Whether you're a fellow explorer or a curious stargazer, there's a place for you in my coding constellation. Let's embark on this thrilling journey of discovery and create something extraordinary together! 🌠🌟
        <br />
        <br />
        #️⃣ #CodingUniverse #FullStackDeveloper #Python #Django #WebDevelopment #Flutter #MobileAppDevelopment #Innovation #ContinuousLearning 🌟🚀🐍🌐📱🎨🔧💻🌈✨📚

      </Styled.RightSideDetailed>
      {/* RightSideTechStack section starts here */}
      <Styled.RightSideTechStack>
        {/* RightSideTechStack Title section starts here */}
        <Styled.ResponsiveRightSideTechStackTitle>🖥️Tech Stack:</Styled.ResponsiveRightSideTechStackTitle>
        {/* RightSideTechStack Title section ends here */}
        <hr />
        {/* RightSideTechStack detail section starts here */}
        <Styled.TechStackImage src={CLanguage} alt='Clanguage' />
        <Styled.TechStackImage src={CPlusPlusLanguage} alt='C++language' />
        <Styled.TechStackImage src={Html5} alt='Html5' />
        <Styled.TechStackImage src={CSS3} alt='css3' />
        <Styled.TechStackImage src={Javascript} alt='javascript' />
        <Styled.TechStackImage src={Bootstrap5} alt='Bootstrap 5' />
        <Styled.TechStackImage src={reactjs} alt='reactjs' />
        <Styled.TechStackImage src={Tailwindcss} alt='Tailwind css' />
        <Styled.TechStackImage src={StyledComponents} alt='styled components' />
        <Styled.TechStackImage src={Python} alt='python' />
        <Styled.TechStackImage src={Django} alt='django' />
        <Styled.TechStackImage src={MySql} alt='mysql' />
        <Styled.TechStackImage src={Sqlite} alt='sqlite' />
        <Styled.TechStackImage src={dart} alt='dart' />
        <Styled.TechStackImage src={flutter} alt='flutter' />
        {/* RightSideTechStack detail section ends here */}
      </Styled.RightSideTechStack>
      {/* RightSideTechStack section ends here */}

      {/* RightSideProject section starts here */}
      <Styled.RightSideProject>
        {/* RightSideProjectTitle section starts here */}
        <Styled.RightSideProjectTitle>🎨Projects:</Styled.RightSideProjectTitle>
        <hr />
        {/* RightSideProjectTitle section ends here */}

        {/* RightSideProject comingsoon section starts here */}
        <Styled.RightSideComingSoon>
          {/* RightSideProject comingsoon image section starts here */}
          <Styled.RightSideComingSoonImage src={comingsoon} alt='Coming-Soon-Image' />
          {/* RightSideProject comingsoon image section ends here */}
        </Styled.RightSideComingSoon>
        {/* RightSideProject comingsoon section ends here */}
      </Styled.RightSideProject>
      {/* RightSideProject section ends here */}

      {/* RightSideCertification section starts here */}
      <Styled.RightSideCertification>
        {/* RightSideCertification title section starts here */}
        <Styled.ResponsiveRightSideCertificationTitle>📚Certifications:</Styled.ResponsiveRightSideCertificationTitle>
        <hr />
        {/* RightSideCertificcation title section ends here */}

        {/* RightSideCertificationImages section starts here */}
          <Styled.ResponsiveRightSideCertificationImages src={BhavyaJavaScriptCertificate} alt="BhavyaJavaScriptCertificate" />
          <Styled.ResponsiveRightSideCertificationImages src={BhavyaTopsTechnology} alt="BhavyaTopsTechnology" />
        {/* RightSideCertificationImage section ends here */}
      </Styled.RightSideCertification>
      {/* RightSideCertification section ends here */}

    </Styled.ResponsiveContainer>
  )
}

export default AboutMe
