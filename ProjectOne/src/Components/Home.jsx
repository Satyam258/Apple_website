import React from 'react';
import vg from "../assets/2.webp"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
  <>
    <div className='home' id='home'>
      <main>
        <h1>Jarvis Technology</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>
    <div className='home2'>
      <img src={vg} alt="Graphics" />
      <p>
      JARVIS Technology is an advanced AI-driven 
      software development company specializing 
      in custom software solutions for businesses
      and enterprises. It leverages cutting-edge
      technologies such as machine learning (ML) and artificial intelligence (AI) to enhance software capabilities, offering web, mobile, and cloud-based applications tailored to client needs. By integrating automation tools, JARVIS optimizes business processes while ensuring robust cybersecurity measures. The company excels in blockchain, big data, and IoT solutions, developing scalable applications that grow with business demands. Supporting multiple programming languages like Python, JavaScript, and C#, JARVIS also provides AI-powered chatbots, virtual assistants, and predictive analytics for data-driven decision-making. Its cloud computing solutions integrate seamlessly with AWS and Azure, ensuring cross-platform compatibility and high-performance software. Using Agile methodology, JARVIS delivers fast and flexible software development, including custom ERP and CRM solutions for businesses. AI-driven automation enhances customer support and workflow efficiency, while real-time data processing ensures insightful analytics. With expertise across industries like healthcare, finance, and e-commerce, JARVIS is revolutionizing software development through intelligent automation and AI 
      innovation, creating smarter and more efficient digital solutions. 
      </p>
    </div>

    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
        JARVIS Technology is a cutting-edge software development company dedicated to transforming businesses with innovative digital solutions. We specialize in AI-driven software, custom applications, and automation technologies that enhance efficiency, scalability, and security. Our expertise spans across web, mobile, and cloud-based platforms, integrating advanced technologies like machine learning, blockchain, and IoT. With a strong focus on AI-powered automation, predictive analytics, and seamless cloud computing, we help businesses streamline operations and make data-driven decisions. Our team of expert developers, engineers, and AI specialists follows Agile methodologies to deliver high-quality, tailored software solutions. Serving industries such as healthcare, finance, and e-commerce, we are committed to revolutionizing technology with intelligent automation and smart digital transformation.
        </p>
      </div>
    </div>
    <div id = "brands" className='home4'>
      <div>
        <h1>Brands</h1>

        <article>
          <div 
          style={{
            animationDelay:"0.3s"
          }}
          >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div 
          style={{
            animationDelay:"0.5s"
          }}
          >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div 
          style={{
            animationDelay:"0.7s"
          }}
          >
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>

          <div 
          style={{
            animationDelay:"0.9s"
          }}
          >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>

  </>  
  )
}

export default Home;