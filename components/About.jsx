import React from 'react';
import AboutImg from '../public/assets/about.jpg';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";



const About = () => {
  return (
    <section>
    <div id="about">
      <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        My strength includes my COLLABORATIVE approach to working because
        I strongly believe that a team can achieve brilliant things when
        they support each other, when they are respectful of everyone's
        opinion and contributions and when they focused on the same goals.
        Finally, perhaps my greatest strength is my LOYALTY and
        TRUSTWORTHINESS, you can rely on me to always be a positive role
        model when representing your company and if you hire me I will be
        committed to the business for many years to come. As a Software
        Developer, Web development has become one of my favorites. Skills
        in ReactJs, HTML5, CSS, JavaScript,PHP, MySQL Xampp
        Database,MySql, Java, SQL, Sqlite, C#, Angular Js, Visual
        basic,Java, Mobile App development.
        <br></br>
      </p>

      <h3 className="text-3xl py-1 dark:text-white ">
        Why you want to be a developer at SovTech ?
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        First of all, SovTech is a big company that provides better
        opportunities and showing love to people and customers around the
        globe by creating cultures and cultural effective customer
        journeys that create an impact that values their customer and
        employee relationship, aiming to help develop people around the
        globe.
      </p>
      <video controls width="30%" height="20%">
      <source src="aboutme.mp4" type="video/mp4"
      
      />
      Sorry, your browser doesn't support videos.
    </video>
    

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I will love to work for Company like SovTech because its heart of
        essence includes Diversity, equity, and inclusion which means a
        lot, and in teams of the culture of the company, SovTech has
        proved enough in how they value their customer as well as their
        employee. I firmly believe in taking a collaborative approach to
        each project so when I saw a position with your company to join
        the production team I knew I had to apply. I've seen your work in
        theatrical production because I saw teamwork in action. I love
        working with a team to achieve a common goal, and I know my
        background in production has prepared me for this role. I look
        forward to becoming a valued contributor to this phenomenal team.
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Secondly, I see this as an opportunity for me to grow in IT. I
        want to join Sovtech because I have a strong passion for joining
        your development team, and team- working as become one of my
        passions by working together to build a goal for the company.
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Also, Another that got interested because it is a IT Graduate
        position, and love creating a application such as a web
        application, desktop app both frontend and backend C#, Java and
        other programming language am really good in that as well at
        SovTech is a company that works well with the team, and I love
        working as a team-working because I believe once we come together
        as one we make the dreams work. I really want to provide the best
        with my skill in transforming SovTech to meet the future goal and
        that’s my dream
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        <b>I offer from a wide range of services, including brand design,
        programming and teaching.</b>
        
      </p>
    </div>
  
  </section>
  );
};

export default About;
