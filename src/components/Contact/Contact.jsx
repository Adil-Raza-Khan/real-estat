import React from 'react'
import './Contact.css'
import {MdCall, MdMessage, MdTextDecrease, MdTextFormat, MdVideoCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
<section>
    <div className="paddings innerWidth flexCenter c-container">

        <div className="flexColStart c-left">
            <span className="orangeText">Contact Us</span><br/>
            <span className="primaryText">Easy To Contact Us</span><br/>
            <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace <br/> to live can make your life better.</span>

              <div className="flexColStart contactModes">

                <div className="flexStart row">
                    
                    <div className="flexCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span>
                                <span className="secondaryText">021 123 145</span>
                            </div>

                        </div>
                        <div className="flexCenter button">
                            CallNow
                        </div>
                    </div>

                    <div className="flexCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdVideoCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">VideoCall</span>
                                <span className="secondaryText">021 123 145</span>
                            </div>

                        </div>
                        <div className="flexCenter button">
                            CallNow
                        </div>
                    </div>
                
                   
                   




                    </div>

                    
                    <div className="flexStart row">
                    
                    <div className="flexCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdMessage size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span>
                                <span className="secondaryText">021 123 145</span>
                            </div>

                        </div>
                        <div className="flexCenter button">
                            CallNow
                        </div>
                    </div>

                    <div className="flexCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdMessage size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Text</span>
                                <span className="secondaryText">021 123 145</span>
                            </div>

                        </div>
                        <div className="flexCenter button">
                            CallNow
                        </div>
                    </div>
                
                   
                   




                    </div>
                 </div>
              </div>






        <div className="c-right">
            <div className="image-container">

            <img src="./istockphoto-185275043-1024x1024.jpg" alt=""/>

            </div>

        </div>





    </div>
</section>  )
}

export default Contact