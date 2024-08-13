import React from 'react'
import './Services.css'
import { Grid, Icon } from '@mui/material'
import servicesImg1 from '../../assets/imgs/servicesImg1.jpg'
import servicesImg2 from '../../assets/imgs/servicesImg2.jpg'
import Footer from '../../components/footer/Footer'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import MarkChatReadRoundedIcon from '@mui/icons-material/MarkChatReadRounded';
import Partners from '../home/components/Partners'
import NavBar from '../../components/navBar/NavBar'
import useIsMobile from '../../hooks/useIsMobile'


export default function Services() {
    const isMobile = useIsMobile();
    const features = ["Professional Staff", 'Affordable Price', '100% Guarantee Satisfaction', '24/7 Support']
    const features1 = ["Professional", 'Experience', '24/7 Support']

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
    ]

    const data2 = [
        {
            icon: SupportRoundedIcon,
            iconColor: '#FF9B0E',
            iconBgColor: '#F6F1EA',
            heading: 'IT ENABLED SERVICES',
            text: 'In a modern world, IT is your best friend. Call Hub Pros provides a range of IT-enabled Services (ITeS) to its clients that can help them optimize their business operations and ensure growth and efficiency.'
        },
        {
            icon: MarkChatReadRoundedIcon,
            iconColor: '#00D9CF',
            iconBgColor: '#E1F4F6',
            heading: 'Live Chat Support',
            text: ''
        },


    ]
    return (
        <>
        <NavBar active='Services'/>
            {/* section 0 */}
            <div className='about-hero padding'>
                <div className="hero-heading">Services</div>
                <div className="text-center " data-aos="fade-up" ><div className="hr" /></div>
            </div>
            {/* section 2  */}
            <div className="service-sec2 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">Our Services</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <Grid container spacing={5}>
                    <Grid item sm={5.5} xs={12}>
                        <img src={servicesImg1} alt='img' width='100%' className=' br-10' data-aos={isMobile ? "fade-up" : "fade-right"} />
                    </Grid>
                    <Grid item sm={6.5} xs={12} data-aos="fade-up">
                        <div className="global-heading1">We promise to <span>protect</span> your brand
                        </div>
                        <div className='global-text1 mt-20'>At Call Hub Pros, protecting your brand's reputation is our top priority. Our highly trained professionals ensure every customer interaction mirrors your brand's voice and values, fostering trust and loyalty. We employ advanced technology and stringent protocols to safeguard your data, guaranteeing the highest levels of security.
                            <br /><br />
                            Our customized solutions reflect your brand’s unique identity, offering personalized service that resonates with your customers. By continuously integrating the latest advancements in technology and best practices, we keep your brand ahead of the curve. Trust Call Hub Pros to deliver consistent, reliable support that strengthens your customer relationships and upholds your brand's integrity.</div>
                        <div className='mt-20 flex-row'>
                            {features1.map((e, i) => (
                                <div className='h-sec4-list-item1' key={i} >
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
            {/* section 3  */}
            <div className="h-sec3 padding">
                <div className="global-heading1 text-center" data-aos="fade-up">WHAT WE OFFER</div>
                <div className="text-center" data-aos="fade-up"><div className="hr" /></div>
                <div className="global-heading2 text-center mt-30 mb-5per" data-aos="fade-up">We will help your business grow</div>
                <Grid container spacing={5}>
                    {data1.map((item, index) => (
                        <Grid item sm={4} xs={12} key={index}>
                            <div className={` h-sec3-card`} data-aos="zoom-in-up">
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
                    {data2.map((item, index) => (
                        <Grid item sm={4} xs={12} key={index}>
                            <div className={` h-sec3-card`} data-aos="zoom-in-up">
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
            {/* section 4 */}
            <div className='about-bg-section padding'>
                <div className="hero-heading1" data-aos="fade-up" >We are partners whom you can trust</div>
            </div>
            {/* section  5 */}
            <div className="h-sec1"> <Grid container spacing={5}>
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
            {/* section 6  */}
            <div className=" padding">
                <div className="global-heading1 text-center" data-aos="fade-up" >WHY CHOOSE US</div>
                <div className="text-center mb-5per" data-aos="fade-up" ><div className="hr" /></div>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12} data-aos="fade-right">
                        <div className="global-heading2 mt-30 mb-5per">We will help your business grow</div>
                        <div className="global-text1">Call Hub Pros stands as the epitome of excellence in USA call center industry, offering unparalleled international call center and BPO services. Renowned as the “best call center in USA ,” Call Hub Pros excels in delivering top-tier customer service, cutting-edge technology, and seamless outsourcing solutions to global clients, setting a benchmark for excellence in the industry.</div>
                        <div className='mt-20'>
                            <Grid container spacing={3}>
                                {features.map((e, i) => (
                                    <Grid item sm={6} xs={12} key={i}>
                                        <div className='h-sec4-list-item' style={{ marginBottom: '0px' }} key={i} >
                                            <div >
                                                <CheckCircleRoundedIcon sx={{ color: 'red' }} />
                                            </div>
                                            {e}
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item sm={5.5} xs={12}>
                        <img src={servicesImg2} alt='img' width='100%' className=' br-10' data-aos={isMobile ? "fade-up" : "fade-left"} />
                    </Grid>
                </Grid>
            </div>
            {/* footer  */}
            <Footer />
        </>
    )
}
