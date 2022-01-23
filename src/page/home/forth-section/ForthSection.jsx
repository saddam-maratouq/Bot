import React from 'react'

import './Forth.css'  

import ReactPlayer from "react-player"


import chatBot from '../../../../images/chatBot.png'


const ForthSection = () => {
  return (
  <section className="feathers">
          <img src={chatBot} alt=" chat boot " /> 
      <div className='feathers-info'>  
          <h7>    
          Chatbots are not just a trend or a special tool reserved for large <br /> companies, any organization with an online presence can benefit from a <br /> chatbot.
          </h7> 
           
          <p>
           <br /> <br />
            At i2i, we’re proud to offer our clients not only English-speaking chatbots, <br />  which are quickly becoming a commodity, but a highly sophisticated <br /> Arabic-speaking chatbot. It is the proud product of our team’s passion <br />  and expertise in working with the Arabic language and a special focus on <br /> the MENA region. Our chatbots use machine learning and our Natural <br />  Language Processing (NLP) engine to provide your users and customers <br /> with the best and most meaningful experience possible.
          </p> 
       <div className='video'>  
      <ReactPlayer className='youtube'
       width='40%'
      min-height='40%'
        url="https://www.youtube.com/watch?v=bt4WRYouvFE&feature=emb_logo"
      />
    </div>
      </div> 
     

      
  </section>
  )
}

export default ForthSection
