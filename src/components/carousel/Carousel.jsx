import React, { useEffect, useState } from 'react';
import slider1 from '../../assets/imgs/slider1.png'
import slider2 from '../../assets/imgs/slider2.jpg'
import Btn from '../btn/Btn'
import './Carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {

    let [currentSlide, setCurrentSlide] = useState(1);
    const slides = 2;
    // const navigate = useNavigate();

    const changeSlide = () => {
        (currentSlide === slides) ? setCurrentSlide(1) : setCurrentSlide(currentSlide + 1);
    }

    useEffect(() => {
        let interval = setInterval(changeSlide, 5000);

        return () => clearInterval(interval);
    })

    const handlePreviousSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(slides)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleNextSlide = () => {
        if (currentSlide === slides) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }


    return (
        <>
            <div className='sliderStyle'>
                {currentSlide === 1 && <div className='slideStyle' >
                    <img src={slider2} className='slide-rightImg' data-aos="fade-left" />
                    <div className='slide-content' >
                        <br />
                        <br />
                        <div className="slide-heading" data-aos="zoom-in">
                            Start Before <br></br>
                            <span data-aos="fade-down">You're Ready</span>
                        </div>
                        <div className="slide-text" data-aos="zoom-out">"Empowering Excellence, One Call at a Time - Where Satisfaction Meets Inspiration!" One Call Away.</div>
                        <div className="slide-btns" data-aos="fade-right">
                            <Btn label='Get Started' className='slide-btn'
                            />
                        </div>
                    </div>
                    <div className="slider-arrows">
                        <div onClick={handlePreviousSlide} className='slider-arrow-left'>
                            <KeyboardArrowLeftRoundedIcon  />
                        </div>
                        <div onClick={handleNextSlide} className='slider-arrow-right'>
                            <KeyboardArrowRightRoundedIcon  />
                        </div>
                    </div>
                </div>}

                {currentSlide === 2 && <div className='slideStyle' >
                    <img src={slider1} className='slide-rightImg' data-aos="fade-left" />
                    <div className='slide-content' >
                        <br />
                        <br />
                        <div className="slide-heading" data-aos="zoom-in">
                            Start Before <br></br>
                            <span data-aos="fade-down">You're Ready</span>
                        </div>
                        <div className="slide-text" data-aos="zoom-out">"Empowering Excellence, One Call at a Time - Where Satisfaction Meets Inspiration!" One Call Away.</div>
                        <div className="slide-btns" data-aos="fade-right">
                            <Btn label='Get Started' className='slide-btn'
                            />
                        </div>
                    </div>
                    <div className="slider-arrows">
                        <div onClick={handlePreviousSlide} className='slider-arrow-left'>
                            <KeyboardArrowLeftRoundedIcon  />
                        </div>
                        <div onClick={handleNextSlide} className='slider-arrow-right'>
                            <KeyboardArrowRightRoundedIcon  />
                        </div>
                    </div>
                </div>}
            </div>

        </>
    )
}