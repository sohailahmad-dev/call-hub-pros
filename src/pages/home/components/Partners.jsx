import React, { useRef, useState } from 'react'
import './Partners.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from '../../../assets/imgs/logo-2.png'
import logo3 from '../../../assets/imgs/logo-3.png'
import logo4 from '../../../assets/imgs/logo-4.png'
import logo5 from '../../../assets/imgs/logo-5.png'
import logo6 from '../../../assets/imgs/logo-6.png'
import logo7 from '../../../assets/imgs/logo-7.png'


export default function Partners() {
    let [currentSlide, setCurrentSlide] = useState(0);
    const sliderData = [logo2, logo3, logo4, logo5, logo6, logo7];

    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let sliderRef = useRef(null);

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            sliderRef.slickPrev();
        }
    }

    const nextSlide = () => {
        if (currentSlide < (sliderData.length - 1)) {
            setCurrentSlide(currentSlide + 1);
            sliderRef.slickNext();
        }
    }
    return (

            <Slider
                ref={slider => {
                    sliderRef = slider;
                }}
                {...settings}>
                {sliderData.map((item, i) => (
                    <div className="sliderItem-partners" key={i}>
                        <img src={item} alt="img" className='partners-slide-img' />
                    </div>
                ))}
            </Slider>


    )
}