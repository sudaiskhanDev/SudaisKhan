import React from 'react'
import { motion } from "framer-motion";
import projectBG from "../assets/projectBG.png"
import FlipLink from "./ui/text-effect-flipper";

function Projects() {
  return (
    <>
      <div className="main-project text-white text-center w-full min-h-[80vh] rounded-2xl bg-gray-400 mt-5 p-5">
        <FlipLink>Projects</FlipLink>

        <div className='projects mt-10 flex flex-wrap justify-center gap-5'>
          {/* Project Card */}
          <div className="project-card w-full sm:w-[45%] md:w-[30%] lg:w-[25%] h-auto     ">
            <a href="https://generative-ai-cyan.vercel.app/"><img src={projectBG} alt="project1" className='w-full h-auto object-cover'/></a>
          </div>

        </div>
      </div>

      <motion.hr
        className="w-[90%] sm:w-[80%] lg:w-[75%] m-auto mt-6 border-t-2 border-gray-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  )
}

export default Projects
