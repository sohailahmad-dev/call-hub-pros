import React from 'react'
import './Footer.css'
import logo from './../../assets/imgs/logo.png'
import { Grid } from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';



export default function Footer() {
    const services = [
        {
            title: 'Call Center',
            to: '/',
        },
        {
            title: 'Collection',
            to: '/',
        },
        {
            title: 'Customer Support',
            to: '/',
        },
        {
            title: 'Inbound Requests',
            to: '/',
        },
        {
            title: 'Outbound Calls',
            to: '/',
        },
        {
            title: 'Virtual Assistance',
            to: '/',
        }
    ]

    const companies = [
        {
            title: 'About Us',
            to: '/',
        },
        {
            title: 'Careers',
            to: '/',
        },
        {
            title: 'Article & News',
            to: '/',
        }
    ]

    const supports = [
        {
            title: 'Ticket System',
            to: '/',
        },
        {
            title: 'FAQ',
            to: '/',
        },
        {
            title: 'Contact Us',
            to: '/',
        }
    ]
    return (
        <>
            <div className='padding f-box '>
                <Grid container spacing={5}>
                    <Grid item sm={4} xs={12}>
                        <img src={logo} alt="logo" width="100px" />
                        <div className="global-text1 mt-50">3226 wooded way Jeffersonville IN 47130 USA .</div>
                        <div className="global-text1 mt-10"><AddIcCallIcon sx={{ color: 'red', fontSize: '14px', marginRight: '8px' }} /> 812-225-959</div>
                        <div className="global-text1 mt-10"><AlternateEmailIcon sx={{ color: 'red', fontSize: '14px', marginRight: '8px' }} /> cs@callhubpros.com</div>
                        <div className="global-text1 mt-10"><AlternateEmailIcon sx={{ color: 'red', fontSize: '14px', marginRight: '8px' }} /> sales@callhubpros.com</div>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <div className="f-heading">Services</div>
                        {services.map(item => (
                            <div className='f-link' >{item?.title}</div>
                        ))}
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <div className="f-heading">Company</div>
                        {companies.map(item => (
                            <div className='f-link' >{item?.title}</div>
                        ))}
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <div className="f-heading">Support</div>
                        {supports.map(item => (
                            <div className='f-link' >{item?.title}</div>
                        ))}
                    </Grid>
                </Grid>

            </div>
            <div className="f-bottom">
                <div>Call Hub Pros</div>
                <div> &copy; {new Date().getFullYear()} Call Hub Pros, All rights reserved.  </div>
            </div>
        </>
    )
}
