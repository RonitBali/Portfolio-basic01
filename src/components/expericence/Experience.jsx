import React from 'react'
import './experience.css'
import { FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  const myicon=   <FaCircleCheck className='experience__details-icon'/>
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          {myicon}
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Beginner</small>
          </div>
          </article>
          <article className='experience__details'>
           {myicon}
          <div><h4>CSS</h4>
          <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
         <div> <h4>JavaScript</h4>
         <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
          <div><h4>React</h4>
          <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
         <div> <h4>Github</h4>
         <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
       <div>   <h4>Figma</h4>
       <small className='text-light'>Beginner</small></div>
          </article>
        </div>
        </div>
        {/* End Of Frontend */}
        <div className="container__backend">
          <h3>Backend Development</h3>
          
        <div className="experience__content">
          <article className='experience__details'>
           {myicon}
         <div> <h4>HTML</h4>
         <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
        <div>  <h4>CSS</h4>
        <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
        <div>  <h4>JavaScript</h4>
        <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
        <div>  <h4>React</h4>
        <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
        <div>  <h4>Github</h4>
        <small className='text-light'>Beginner</small></div>
          </article>
          <article className='experience__details'>
           {myicon}
         <div> <h4>Figma</h4>
         <small className='text-light'>Beginner</small></div>
          </article>
        </div>
        </div>
      </div>
      </section>
  )
}

export default Experience