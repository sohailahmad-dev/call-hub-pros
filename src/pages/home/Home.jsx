import React from 'react'
import './Home.css'
import Carousel from '../../components/carousel/Carousel'
import { Grid, Icon } from '@mui/material'
import aboutImg from '../../assets/imgs/about-img.jpg'
import aboutImg1 from '../../assets/imgs/about-img1.png'
import Btn from '../../components/btn/Btn'
import Partners from './components/Partners'
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import WifiCalling3RoundedIcon from '@mui/icons-material/WifiCalling3Rounded';
import MarkChatReadRoundedIcon from '@mui/icons-material/MarkChatReadRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TestimonialSlider from '../../components/testimonialSlider/TestimonialSlider'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddchartIcon from '@mui/icons-material/Addchart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navBar/NavBar'
import NavBar from '../../components/navBar/NavBar'
import useIsMobile from '../../hooks/useIsMobile'

export default function Home() {
    const isMobile = useIsMobile();
    const data1 = [
        {
            icon: CallRoundedIcon,
            iconColor: '#00D9CF',
            iconBgColor: '#E1F4F6',
            heading: 'Outbound Call Center',
            text: 'Being the best in the industry, we at Call Hub Pros provide specialized outbound programs that concentrate on lead generation, sales qualification, product promotion and customer care.'
        },
        {
            icon: PhoneCallbackRoundedIcon,
            iconColor: '#00D9CF',
            iconBgColor: '#E1F4F6',
            heading: 'Inbound Call Center',
            text: 'Our Inbound call center services are aimed to provide an uplifting customer experience so that our customer’s get more sales. Our competent sales agents have extensive experience in handling different call situations'
        },
        {
            icon: LeaderboardRoundedIcon,
            iconColor: '#4DAEFA',
            iconBgColor: '#E7EAFC',
            heading: 'Lead Generation',
            text: 'We qualify your lead lists using our state-of-the-art lead qualification call center. Our competitively-priced services help your business to send only the most qualified leads to your sales team.'
        },
        {
            icon: SupportRoundedIcon,
            iconColor: '#FF9B0E',
            iconBgColor: '#F6F1EA',
            heading: 'IT ENABLED SERVICES',
            text: 'In a modern world, IT is your best friend. Call Hub Pros provides a range of IT-enabled Services (ITeS) to its clients that can help them optimize their business operations and ensure growth and efficiency.'
        },
        {
            icon: WifiCalling3RoundedIcon,
            iconColor: '#FF9B0E',
            iconBgColor: '#F6F1EA',
            heading: 'BPO / Outsourcing Services',
            text: 'BPO / Outsourcing Services Available. Welcome to the website of Amna Masood, a highly successful entrepreneur and leading provider of BPO and outsourcing services. Her services at callhubpros are designed to help businesses streamline their operations, reduce expenses, and increase efficiency. take advantage of our BPO services. So, why wait? Contact us today and discover how callhubpros BPO and outsourcing services can help your business succeed. We are confident that you will be satisfied with the results and look forward to working with you.            '
        },
        {
            icon: MarkChatReadRoundedIcon,
            iconColor: '#00D9CF',
            iconBgColor: '#E1F4F6',
            heading: 'Live Chat Support',
            text: ''
        },


    ]

    const features = ["Professional Staff", 'Affordable Price', '100% Guarantee Satisfaction', '24/7 Support']

    const features2 = [
        {
            icon: HandshakeIcon,
            heading: 'COLLABORATIVE PARTNERSHIPS',
            text: 'Call Hub Pros works as an integral part of its clients’ business; respecting their culture and achievements, protecting their reputation, supporting their employees, and committing to results-focused, risk-reward agreements.',
        },
        {
            icon: AdsClickIcon,
            heading: 'TARGETS MET, PROMISES KEPT',
            text: 'Our clients are confident we will deliver on our obligations because we build service levels and continuous improvement commitments into our contracts.',
        },
        {
            icon: LightbulbIcon,
            heading: 'INNOVATIVE SOLUTIONS',
            text: 'We create innovative solutions for our clients. We know every organization is different, and we work to understand individual priorities and develop innovative solutions that make a difference.',
        },
        {
            icon: EmojiEmotionsIcon,
            heading: 'TRIED AND TESTED EXPERIENCE',
            text: 'We have years of experience in business process outsourcing, working with leading organizations internationally.',
        },
    ]

    const steps = [
        {
            icon: TextSnippetIcon,
            text: "1. Consultations with our staff",
        },
        {
            icon: AddchartIcon,
            text: "2. Choose your package service",
        },
        {
            icon: SupportAgentIcon,
            text: "3. Our staff ready to help",
        },
        {
            icon: AssignmentIcon,
            text: "4. Report work progress"
        }
    ]

    return (
        <>
            <NavBar active='Home' />
            {/* section 0  */}
            <Carousel />
            {/* section 1  */}
            <div className="h-sec1">
                <Grid container spacing={5}>
                    <Grid item sm={1.5} xs={4}>
                        <div className="h-sec1-heading" data-aos="fade-right">
                            <span>Our</span>
                            Technology Partners
                        </div>
                    </Grid>
                    <Grid item sm={10} xs={7}>
                        <Partners />
                    </Grid>
                </Grid>
            </div>
            {/* section 2  */}
            <div className="h-sec2 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">Who We are?</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <Grid container spacing={5}>
                    <Grid item sm={5.5} xs={12}>
                        <img src={aboutImg} alt='img' width='100%' className={isMobile?'br-10 mt-20':'mt-80 br-10'} data-aos={isMobile ? "zoom-in-up" : "fade-right"} />
                    </Grid>
                    <Grid item sm={6.5} xs={12}>
                        <img src={aboutImg1} alt='img' width='100%' data-aos={isMobile ? "zoom-in-up" : "fade-left"} />
                    </Grid>
                    <Grid item sm={5.5} xs={12}>
                    </Grid>
                    <Grid item sm={6.5} xs={12} data-aos="fade-up">
                        <div className="global-heading1">We communicate to get <span>Your Business</span> to the next level
                        </div>
                        <div className='global-text1 mt-20'>works as an integral part of its clients’ business; respecting their culture and achievements, protecting their reputation, supporting their employees, and committing to results-focused, risk-reward agreements.</div>
                        <div className='flex-start mt-20'>
                            <Btn
                                label='Discover More'
                                style={{ alignSelf: 'flex-start' }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* section 3  */}
            <div className="h-sec3 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">WHAT WE OFFER</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className="global-heading2 text-center mt-30 mb-5per" data-aos="fade-up">We will help your business grow</div>
                <Grid container spacing={5}>
                    {data1.map((item, index) => (
                        <Grid item sm={4} xs={12} key={index}>
                            <div className={` h-sec3-card  ${index > 2 && 'h-sec3-card-big'}`} data-aos="zoom-in-up">
                                <div className='h-sec3-icon' style={{ background: item?.iconBgColor }}>
                                    <Icon fontSize='large' component={item?.icon} sx={{ color: item?.iconColor }} />
                                </div>
                                <div className="h-sec3-card-heading">{item?.heading}</div>
                                <div className='h-sec3-card-text'>
                                    {item?.text}
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
            {/* section 4  */}
            <div className="h-sec4 padding">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12} data-aos="fade-right">
                        <div className="global-heading1 " style={{ color: 'white' }}>WHY CHOOSE US</div>
                        <div className=""><div className="hr" /></div>
                        <div className="global-heading2 mt-30 mb-5per">We will help your business grow</div>
                        <div className="global-text1">Call Hub Pros stands as the epitome of excellence in USA call center industry, offering unparalleled international call center and BPO services. Renowned as the “best call center in USA ,” Call Hub Pros excels in delivering top-tier customer service, cutting-edge technology, and seamless outsourcing solutions to global clients, setting a benchmark for excellence in the industry.</div>
                        <div className='mt-20'>
                            {features.map((e, i) => (
                                <div className='h-sec4-list-item' key={i} >
                                    <div >
                                        <CheckCircleRoundedIcon sx={{ color: 'red' }} />
                                    </div>
                                    {e}
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* section 5  */}
            <div className="h-sec5 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">We are focused on making your process a success</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className='mt-5per'>
                    <Grid container spacing={3}>
                        {features2.map((item, index) => (
                            <Grid item sm={6} xs={12} key={index}>
                                <div className="h-sec5-card" data-aos="zoom-in-up">
                                    <div className='h-sec5-icon'>
                                        <Icon fontSize='large' component={item?.icon} />
                                    </div>
                                    <div>
                                        <div className="h-sec5-card-heading">{item?.heading}</div>
                                        <div className='h-sec5-card-text'>
                                            {item?.text}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            {/* section 6  */}
            <div className="h-sec6 padding">
                <div className="global-heading1 text-center" data-aos="fade-up"
                    style={{ color: 'white' }}>Testimonials</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className="global-heading2 mt-30 mb-5per text-center" data-aos="fade-up" >What they say about us.</div>
                <div className="testimonial-padding">
                    <TestimonialSlider />
                </div>
            </div>
            {/* section 7  */}
            <div className="h-sec5 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">HOW IT WORKS</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className="global-heading2 mt-30 mb-5per text-center" data-aos="fade-up" >Easy steps to get service</div>
                <div className='mt-8per'>
                    <Grid container spacing={3}>
                        {steps.map((item) => (
                            <Grid item sm={3} xs={12} key={item}>
                                <div className="h-sec7-card" data-aos="zoom-in-up">
                                    <div className='h-sec7-icon'>
                                        <Icon fontSize='medium' component={item?.icon} />
                                    </div>
                                    <div className='h-sec7-card-text'>
                                        {item?.text}
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </>

    )
}
