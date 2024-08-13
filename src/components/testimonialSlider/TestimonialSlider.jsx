import React, { useRef, useState } from 'react'
import './TestimonialSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../../assets/imgs/client1.jpg'
import client2 from '../../assets/imgs/client2.jpg'
import client3 from '../../assets/imgs/client3.jpg'

export default function TestimonialSlider() {
    const sliderData = [
        {
            id: 1,
            img: client1,
            name: 'Amna Masood',
            role:'CEO Sky999 LLC',
            review:"Hello! I'm Amna Masood, CEO at CallHubPros, I'm deeply committed to inspiring others. My journey as an entrepreneur and businessswomen has been one of perseverance, resilience, and continuous learning. I believe in leading with vision and determination, striving to empower individuals and businesses alike to realize their full potential. It's an honor to be on this transformative journey of inspiration and growth, and I'm excited to continue making a positive impact in the world. Start before you're Ready"
        },
        {
            id: 2,
            img: client2,
            name: 'Sophie Johnston',
            role:'Business Women',
            review:'With many outsourcing processes, you can apply to the company website it is an excellent place to grow your skills.'
        },
        {
            id: 1,
            img: client3,
            name: 'Adam Jefferson',
            role:'Founder Quickenworks',
            review:'Call Hub Pros always provides the best service ever and more than any customer can expect!'
        },

    ]

    let [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
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
    {sliderData.map((item) => (
        <div className="t-sliderItem" key={item?.id}>
            <div className="t-review">{item?.review}</div>
            <div className='t-details'>
            <img src={item.img} alt="img" width='80px' />
            <div className="t-info">
                <div className="t-name">{item?.name}</div>
                <div className="t-role">{item?.role}</div>
            </div>
            </div>
        </div>
    ))}
</Slider>
  )
}

