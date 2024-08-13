import React from 'react'
import './About.css'
import { Grid } from '@mui/material'
import aboutImg from '../../assets/imgs/about-img.jpg'
import amna from '../../assets/imgs/amna.png'
import Btn from '../../components/btn/Btn'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import useIsMobile from '../../hooks/useIsMobile'

export default function About() {
    const isMobile = useIsMobile();
    return (
        <>
            <NavBar active='About Us' />
            {/* hero section  */}
            <div className='about-hero padding'>
                <div className="hero-heading">About</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <div className="hero-text">We are what we repeatedly do. Excellence, then, is not an act, but a habit. </div>
            </div>
            {/* section 1  */}
            <div className="about-sec1 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">Hey There !</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <Grid container spacing={5}>
              {isMobile &&  <Grid item sm={6} xs={12}>
                        <div className="text-center">
                            <img src={amna} alt='img' width='75%' className=' br-10' data-aos="fade-up" />
                        </div>
                    </Grid>}
                    <Grid item sm={6} xs={12} data-aos="fade-up">
                        <div className="about-heading1">I'm <span>Amna Masood</span>
                        </div>
                        <div className='about-text1 mt-20'>How I went from overworked "yes girl" to helping thousands of online entrepreneurs build a life and best experience of contact center. "Customers may forget what you said but they will never forget how we make them feel"</div>

                    </Grid>
                   {!isMobile && <Grid item sm={6} xs={12}>
                        <div className="text-center">
                            <img src={amna} alt='img' width='75%' className=' br-10' data-aos="fade-left" />
                        </div>
                    </Grid>}

                </Grid>
            </div>
            {/* section 2  */}
            <div className="h-sec2 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">Who We are?</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <Grid container spacing={5}>
                    <Grid item sm={6.5} xs={12} data-aos="fade-up">
                        <div className="global-heading1">We communicate to get <span>Your Business</span> to the next level
                        </div>
                        <div className='global-text1 mt-20'>works as an integral part of its clients’ business; respecting their culture and achievements, protecting their reputation, supporting their employees, and committing to results-focused, risk-reward agreements.</div>
                        <div className='flex-start mt-20 h-sec2-pb'>
                            <Btn
                                label='Discover More'
                                style={{ alignSelf: 'center' }}
                            />
                        </div>
                    </Grid>
                    <Grid item sm={5.5} xs={12}>
                        <img src={aboutImg} alt='img' width='100%' className=' br-10' data-aos="fade-right" />
                    </Grid>

                </Grid>
            </div>
            {/* section bg */}
            <div className='about-bg-section padding'>
                <div className="hero-heading1" data-aos="fade-up">We are partners whom you can trust</div>
            </div>
            {/* section 3  */}
            <div className="about-sec3 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">CODE OF ETHICS</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className="global-heading2 mt-30 mb-5per text-center" data-aos="fade-up" >Excellent executives, excellent solutions!</div>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12} >
                        <div className='about-sec3-card' data-aos="zoom-in-up">
                            <div className='about-sec3-icon'>
                                <TipsAndUpdatesIcon fontSize='large' />
                            </div>
                            <div className="h-sec3-card-heading">Our Vision</div>
                            <div className='h-sec3-card-text'>
                                Our vision at Call Hub Pros is to revolutionize the call center industry by consistently delivering superior service and value to our clients. We aspire to be recognized as pioneers in cutting-edge technology and customer-centric practices, fostering long-term partnerships built on trust, reliability, and innovation. Through continuous evolution and a dedication to excellence, we envision becoming the premier choice for businesses seeking world-class call center solutions globally.
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12} >
                        <div className='about-sec3-card' data-aos="zoom-in-up">
                            <div className='about-sec3-icon'>
                                <AutoGraphIcon fontSize='large' />
                            </div>
                            <div className="h-sec3-card-heading">Our Mission</div>
                            <div className='h-sec3-card-text'>
                                At Call Hub Pros, our mission is to redefine excellence in call center services through innovative technology, unparalleled customer support, and a commitment to exceeding client expectations. We aim to be the trusted partner for businesses seeking to optimize their communication channels, providing seamless solutions that enhance productivity, customer satisfaction, and overall operational efficiency.
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* footer  */}
            <Footer />
        </>
    )
}
