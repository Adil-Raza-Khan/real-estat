import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
<section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">

     <div className="flexColStart f-left">
        
         <img src="./logo2.png" alt="" width={120}/><br/>
           <span className="secondaryText">Our vision is to make all people
             <br/>the best place to live for them.</span>


      
     </div>
     <div className="FlexColStart f-right">
        <span className="primaryText">
            Information <br/>
        </span>
        <span className="secondaryText">
            145 Delhi,India-1947
        </span>

        <div className="flexCenter f-menue">
          <span>Property</span>
          <span>Services</span>
          <span>Product</span>
          <span>About Us</span>


        </div>
     </div>
     
     
       
   

      </div>

</section>  

)
}

export default Footer