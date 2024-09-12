import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-img">
          <img src={ME} alt="About image" />
        </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsAward />
           <h5>Experience</h5>
           <small>1+ Years</small>
          </article>

          <article className='about__card'>
          <FaUserFriends className='about__card'/>
           <h5>CLients</h5>
           <small>5+ Worldwide</small>
          </article>

          <article className='about__card'>
          <AiOutlineFundProjectionScreen className='about__card' />
           <h5>Projects</h5>
           <small>5+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic aspernatur, adipisci deleniti mollitia neque repellendus distinctio beatae reiciendis voluptates numquam, amet nam vitae sapiente excepturi dignissimos assumenda non ut.
          Amet suscipit voluptatibus illum consectetur aliquid quisquam mollitia perferendis, autem explicabo ad delectus deleniti provident expedita dolore animi? Quo, nulla delectus quas consequatur a tenetur. Enim architecto quae libero repellendus?
          Quam similique, mollitia quisquam officiis quasi quod, ipsa nesciunt sint nemo deserunt dignissimos voluptates aliquid deleniti omnis ab hic modi. Atque quaerat ea laboriosam? Nobis beatae corporis similique non fugiat?  
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default about