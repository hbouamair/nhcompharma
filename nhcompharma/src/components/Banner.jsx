import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img1.svg'
import img2 from '../assets/img7.svg'
import img3 from '../assets/img8.svg'
import img4 from '../assets/img8.svg'

export default class Carousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
           
            speed: 6000,
            autoplaySpeed: 9000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Grid container >


                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Slider {...settings}>
                        <div>
                            <img src={img1} alt="supermarket"/>
                        </div>
                        <div>
                            <img src={img2} alt="supermarket"/>
                        </div>
                        <div>
                            <img src={img3} alt="supermarket"/>
                        </div>
                        <div>
                            <img src={img4} alt="supermarket"/>
                        </div>
                    </Slider>
                </Grid>

            </Grid>
        )
    }
}
