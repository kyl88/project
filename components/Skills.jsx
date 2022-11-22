import Image from 'next/image';
import React from 'react';
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Skills = () => {
  return (
    <div className="lg:flex gap-10" id="skills">
            <h3 className="text-3xl py-1 dark: text-teal-600 ">Skills</h3>

    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
      <Image src={design} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2  ">
        Web Application
      </h3>
      <p className="py-2">
        Creating elegant designs suited for your needs following core
        design theory.
      </p>
      <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
      <p className="text-gray-800 py-1">HTML</p>
      <p className="text-gray-800 py-1">CSS</p>
      <p className="text-gray-800 py-1">Javascript</p>
      <p className="text-gray-800 py-1">React</p>
      <p className="text-gray-800 py-1">Next JS</p>
      <p className="text-gray-800 py-1">PHP</p>
      <p className="text-gray-800 py-1">SQL</p>



    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image src={code} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2 ">
        Code your dream project
      </h3>
      <p className="py-2">
        Do you have an idea for your next great app? Let's make it a
        reality.
      </p>
      <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
      <p className="text-gray-800 py-1">Andriod Studio</p>
      <p className="text-gray-800 py-1">Java</p>
      <p className="text-gray-800 py-1">C#</p>
      <p className="text-gray-800 py-1">MySqlite</p>
    </div>
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image src={consulting} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
      <p className="py-2">
        Are you interested in feedback for your current project? I can
        give you tips and tricks to level it up.
      </p>
      <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
      <p className="text-gray-800 py-1">Agile Methodology</p>
      <p className="text-gray-800 py-1">monday.com</p>
      <p className="text-gray-800 py-1">liquid planner</p>
    </div>
  </div>
      );
};

export default Skills;
