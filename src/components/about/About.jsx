import React from 'react'
import './about.css'
import Me from '../../assets/me11.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5 >Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
              <img src={Me} alt='me11'></img>
          </div>

        </div>
        <div className='about_content'>
           <div className='about_cards'>
            <article className='about_card'>
               <FaAward  className='about_icon'/>
               <h5>Experience</h5>
               <small>7+ months</small>
            </article>

            <article className='about_card'>
               <VscFolderLibrary className='about_icon'/>
               <h5>Projects</h5>
               <small>5+ completed</small>
            </article>
           </div>

           <p>A meticulous and organized individual seeking an Entrylevel position in the field of Project Management. 
            Skilled at developing reports, analyzing data, and identifying solutions. Strong ability to handle complex projects.
             Innovative, creative, and willing to contribute ideas and learn new things.
            </p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>

    )
}

export default about