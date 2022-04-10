import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const About = () => {
const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
      <>
    <div className='container about-page'>
       <div className='text-zone'>
           <h1>
               <AnimatedLetters
               letterClass={letterClass}
                   strArray={['A','b','o','u','t',' ','m','e']}
                   inx={15}
               />
           </h1>
         <p>
         I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest
         technologies on challenging and diverse projects.
         </p>
         <p align="LEFT">
         I'm quietly confident, naturally curious, and perpetually working on
         improving my chops one design problem at a time.
         </p>
         <p>
         If I need to define myself in one sentence that would be a sports ,a gamer, and tech-obsessed!
         </p>
         <p>
         I have finished an internship as React developer for more than 6 months.
         </p>
         <p>
         Looking forward to further advance development skills on JavaScript frameworks.
         </p>
       </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About