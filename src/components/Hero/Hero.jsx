import React from 'react'
import "./Hero.css"
import { HiOutlineLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
  <section className="hero-wrapper">
    
    <div className="padding innerWidth flexCenter hero-container">
        
      <div className="hero-left">
       <div className="hero-title">
        <div className="orange-circle"/>

        <motion.h1
        initial={{x:"-2rem",opacity:0}}
        animate={{x:0,opacity:1}}             
        transition={{
          duration: 2,
          type : "spring"
        }}
        >

        Discover <br/>Most Suitable<br/> Property
        </motion.h1>

       </div>
       
     <div className="hero-des">
     <span className="secondaryText">
        Find a variety of properties that suit you very easilty<br/>Forget all difficulties in finding a residence for you
     </span>
       </div>
       
     <div className=" flexCenter search-bar">
      <HiOutlineLocationMarker/> 
      <input type="text"/>
      <button className="button">Search</button>
    </div>


    <div className="flexCenter stats">

      <div className="flexColCenter stat">
        <span>
        <CountUp start={8800} end={9000} duration={4}/>
        <span>+</span>
        </span>
    
        <span className="secondaryText">Premium Prodects</span>

      </div>

      <div className="flexColCenter stat">
        <span>
        <CountUp start={1950} end={2000} duration={4}/>
        <span>+</span>
        </span>
    
        <span className="secondaryText">Happy Customers</span>
        </div>


        <div className="flexColCenter stat">
        <span>
        <CountUp start={0} end={28} duration={4}/>
        <span>+</span>
        </span>
    
        <span className="secondaryText">Awards Won</span>

      

      </div>




    </div>






 </div>


    
 
  
      <div className="flexCenter hero-right">
      <motion.div
      initial={{x: "7rem",opacity:0}} 
      animate={{x:0,opacity:1}}
      transition={{
        duration:2,
        type:'spring'

        
      }
      }
        
      
      className="image-container">
        <img src="./anatolii-nesterov-pIqUc3A97V0-unsplash.jpg" alt=""/>
      </motion.div>
      </div>




 </div>

    

 </section>  
 
)
}

export default Hero