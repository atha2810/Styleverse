
 
  import React, { useState } from 'react'
  import "./Slider.scss"
  
  
  const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0)

    const data=["/sliderImg/Style-verse.jpg","/sliderImg/womenbg.jpg","/sliderImg/slide.gif",
    ];

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    };  
    const nextSlide = () => {  
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    };
    return (
      <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={process.env.PUBLIC_URL + data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
        </div>
       <div className="icons"> 
       <div className="icon" onClick={prevSlide}>
       <img src={process.env.PUBLIC_URL + '/slideIcons/left-arrow.png'} alt='' style={{height:"15px",width:"15px"}}/>
        </div> 
       <div className="icon" onClick={nextSlide}>
       <img src={process.env.PUBLIC_URL + '/slideIcons/right-arrow.png'} alt='' style={{height:"15px",width:"15px"}}/>
       </div>
       </div> 
      </div>
    )
  }
  
  export default Slider
  