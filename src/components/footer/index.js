import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.scss';

import googleIcon from './../../assets/images/svg/004-google-plus.svg'
import twitterIcon from './../../assets/images/svg/002-twitter.svg'
import facebookIcon from './../../assets/images/svg/001-facebook.svg'
import Slider from "react-slick";

const cx = classNames.bind(styles);

export default function Footer() {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div>
            <section className={'page-section seven'}>
                <div className={'px-lg'}>
                    <p className={'text-primary mb-4 font-bold title'}>Photos</p>
                    <p className={'text-2xl font-black mb-10 sub-title'}>See our latest photos from restaurant and hotel</p>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className={'slides'}>
                            <img
                                src="https://res.cloudinary.com/nazarick/image/upload/v1606043313/mohamed-ajufaan-GFcWwwGNu_w-unsplash.png"
                                className={'w-full'}
                                alt=""/>
                        </div>
                        <div className={'slides'}>
                            <img
                                src="https://res.cloudinary.com/nazarick/image/upload/v1606043313/manuel-moreno-DGa0LQ0yDPc-unsplash.png"
                                className={'w-full'}
                                alt=""/>
                        </div>
                        <div className={'slides'}>
                            <img
                                src="https://res.cloudinary.com/nazarick/image/upload/v1606043313/manuel-moreno-DGa0LQ0yDPc-unsplash.png"
                                className={'w-full'}
                                alt=""/>
                        </div>
                        <div className={'slides'}>
                            <img
                                src="https://res.cloudinary.com/nazarick/image/upload/v1606043313/eddi-aguirre-ZAVHbpOn4Jk-unsplash.png"
                                className={'w-full'}
                                alt=""/>
                        </div>
                    </Slider>
                </div>
            </section>
            <footer
                className={`${cx(
                    'footer',
                )} px-lg py-10`}
            >
                <section className={'main-footer'}>
                    <div>
                        <div className={'w-half'}>
                            <p className={'text-lg text-bold text-white  mb-4'}>Zetta Hotels</p>
                            <p className={'text-sm text-grey line-height-text mb-4'}>Our hotel is an image of quality
                                and
                                profesionalism combined
                                with hard work and precision. You
                                can expect only the best services from our staff.</p>
                            <div className="social-icons flex flex-row mb-10">
                                <a href="" className={'mr-3'}>
                                    <img src={googleIcon} alt=""/>
                                </a>
                                <a href="" className={'mr-3'}>
                                    <img src={twitterIcon} alt=""/>
                                </a>
                                <a href="" className={'mr-3'}>
                                    <img src={facebookIcon} alt=""/>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className={'flex flex-row'}>
                        <div className={'w-half'}>
                            <p className={'text-white text-md font-semibold mb-4'}>Useful links</p>
                            <div>
                                <ul className={'flex-col items-center pl-0'}>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Blog
                                        </a>
                                    </li>
                                    <li className={'mb-2'}>
                                        <Link to={'/rooms'} className={'text-sm text-primary'}>
                                            Rooms
                                        </Link>
                                    </li>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Gift Card
                                        </a>
                                    </li>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={'w-half'}>
                            <p className={'text-white text-md font-semibold mb-4'}>Privacy</p>
                            <div>
                                <ul className={'flex-col items-center pl-0'}>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Career
                                        </a>
                                    </li>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            About Us
                                        </a>
                                    </li>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className={'mb-2'}>
                                        <a href="#" className={'text-sm text-primary'}>
                                            Services
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={'text-white text-md font-semibold mb-4'}>Contact Info</p>
                        <div>
                            <p className={'flex flex-row items-center text-white text-sm mb-3'}>
                                example@yahoo.com
                            </p>
                            <p className={'flex flex-row items-center text-white text-sm mb-3'}>+0 320 422 4254</p>
                            <p className={'flex flex-row items-center text-white text-sm mb-3'}>Main Str Chicago
                                Ilinois</p>
                        </div>
                    </div>
                </section>
                <section className={'flex justify-between items-center'}>
                    <p className={'text-grey text-sm'}>Copyright &copy;2020 All rights reserved | This template is made
                        with
                        love by <span>Marian</span>
                    </p>
                    <a href="#" className={'text-sm'}>www.portfolioname.com</a>
                </section>
            </footer>
        </div>
    );
}
