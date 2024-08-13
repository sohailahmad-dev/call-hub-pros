import React from 'react'
import './Career.css'
import NavBar from '../../components/navBar/NavBar'
import { Grid, TextField } from '@mui/material'
import SelectBox from '../../components/selectBox/SelectBox'
import Btn from '../../components/btn/Btn'

export default function Career() {
    return (
        <>
            <NavBar active='Careers' />
            {/* section 0  */}
            <div className='about-hero padding'>
                <div className="hero-heading">Careers</div>
                <div className="text-center " data-aos="fade-up" ><div className="hr" /></div>
            </div>
            {/* section 1  */}
            <div className="padding">
                <Grid container spacing={5}>
                    <Grid item xs={2.5}></Grid>
                    <Grid item sm={7} xs={12}>
                        <div className="career-form">
                            <div className="global-heading1 text-center">Join Our Team</div>
                            <div className="text-center mb-5per" data-aos="fade-up"><div className="hr" /></div>
                            <Grid container spacing={3}>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        label="Name"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        label="Phone"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        label="Email"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        label="Your Address"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <TextField
                                        label="Your Education"
                                        variant='outlined'
                                        size='small'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <SelectBox
                                        label='Experience'
                                        options={['1 Year', '2 Years', '3 Years', '4 Years', '5+ Years']}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <SelectBox
                                        label='Select Industry'
                                        options={['Call Center', 'Information Technology', 'Others']}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <SelectBox
                                    label='Where Did Here About Us'
                                    options={['Google', 'Friend Refer', 'Other']}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <SelectBox
                                    label='Applying For'
                                    options={['Part Time', 'Full Time']}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <div style={{marginBottom:'5px'}}>Upload CV</div>
                                    <TextField
                                        variant='standard'
                                        size='small'
                                        type='file'  
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <Btn label='Submit Form'  />
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}
