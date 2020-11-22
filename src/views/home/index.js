import React from "react"
import classNames from 'classnames/bind';
import Slider from "react-slick";

import styles from './index.scss';
import arrowLeft from '../../assets/images/svg/arrow-left.svg'

import arrowRight from '../../assets/images/svg/arrow-right.svg'
import arrowRightWhite from '../../assets/images/svg/arrow-right-white.svg'
import send from '../../assets/images/svg/send.svg'

const cx = classNames.bind(styles);

export default function Home() {
    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <span className={'bg-white arrow-left p-4 mr-2'} onClick={onClick} style={{opacity: '30%'}}>
                <img src={arrowLeft} alt="" className={''}/>
            </span>
        );
    }
    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <span className={'bg-white arrow-left p-4 ml-2'} onClick={onClick}>
                <img src={arrowRight} alt="" className={''}/>
            </span>
        );
    }
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (<section className={`${cx('home-container')}`}>
        <section className="page-section one flex flex-col justify-center relative pb-xl">
            <div className={'px-lg w-half welcome-text'}>
                <p className={'text-3xl text-white font-black main-welcome-text pb-3'}>The best hotel you will ever
                    need</p>
                <p className={'text-white text-sm sub-welcome-text'}>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
            <div className={'booking-container absolute w-full'}>
                <div className={'px-lg'}>
                    <div className={'flex flex-row justify-end'}>
                        <div className={'bg-white arrow-left p-4'}>
                            <img src={arrowLeft} alt="" className={''}/>
                        </div>
                        <div className={'bg-primary arrow-left p-4'}>
                            <img src={arrowRight} alt="" className={''}/>
                        </div>
                    </div>
                    <form className={'px-lg py-10 flex flex-row bg-white items-end'}>
                        <div className={'grid grid-cols-3 gap-6 mr-10'}>
                            <div className={''}>
                                <p className={'text-primary capitalize mb-3'}>check in date</p>
                                <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                            </div>
                            <div className={''}>
                                <p className={'text-primary capitalize mb-3'}>check out date</p>
                                <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                            </div>
                            <div className={''}>
                                <p className={'text-primary capitalize mb-3'}>Rooms</p>
                                <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                            </div>
                        </div>
                        <div>
                            <button className={'bg-primary p-4 flex flex-row items-center'}>
                                <img src={send} alt=""/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section className={'page-section two p-lg pt-xl flex flex-row'}>
            <div className={'w-half pr-lg'}>
                <p className={'text-primary mb-4 font-bold title'}>ABOUT US</p>
                <p className={'text-2xl font-black mb-4 sub-title'}>Trust and quality are our atuus</p>
                <div className={'details'}>
                    <p className={'font-medium mb-3'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className={'font-normal mb-4'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
                <button className={'flex flex-row items-center bg-primary-light py-3 px-6 text-white'}>
                    read more <img src={arrowRightWhite} alt="" className={'ml-2 text-white'}/>
                </button>
            </div>
            <div className={'w-half'}>
                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606038947/Group_12.png" alt=""/>
            </div>
        </section>
        <section className={'page-section three pb-lg'}>
            <div className={'px-lg pt-lg pb-10'}>
                <p className={'text-primary mb-4 font-bold title'}>ABOUT US</p>
                <p className={'text-2xl text-white font-black mb-4 sub-title'}>We bring you the finest details</p>
            </div>
            <div className={'px-10'}>
                <Slider {...settings}>
                    <div className="p-6">
                        <div className={'flex flex-col justify-center bg-white p-6 card'}>
                            <div className={'text-center'}>
                                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606039472/001-hotel-1.svg"
                                     alt=""
                                     className={'mb-4 mx-auto'}/>
                            </div>
                            <p className={'text-center text-md font-semibold mb-3'}>Free Wifi to stay connected</p>
                            <p className={'text-center text-grey text-sm'}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="p-6">

                        <div className={'flex flex-col justify-center bg-white p-6 card'}>
                            <div className={'text-center'}>
                                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606039472/001-hotel-1.svg"
                                     alt=""
                                     className={'mb-4 mx-auto'}/>
                            </div>
                            <p className={'text-center text-md font-semibold mb-3'}>4K Television and Netflix
                                included</p>
                            <p className={'text-center text-grey text-sm'}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className={'flex flex-col justify-center bg-white p-6 card'}>
                            <div className={'text-center'}>
                                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606039472/001-hotel-1.svg"
                                     alt=""
                                     className={'mb-4 mx-auto'}/>
                            </div>
                            <p className={'text-center text-md font-semibold mb-3'}>Span zone where you can chill</p>
                            <p className={'text-center text-grey text-sm'}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className={'flex flex-col justify-center bg-white p-6 card'}>
                            <div className={'text-center'}>
                                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606039472/001-hotel-1.svg"
                                     alt=""
                                     className={'mb-4 mx-auto'}/>
                            </div>
                            <p className={'text-center text-md font-semibold mb-3'}>Spacious rooms for awesome
                                parties</p>
                            <p className={'text-center text-grey text-sm'}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="p-6">

                        <div className={'flex flex-col justify-center bg-white p-6 card'}>
                            <div className={'text-center'}>
                                <img src="https://res.cloudinary.com/nazarick/image/upload/v1606039472/001-hotel-1.svg"
                                     alt=""
                                     className={'mb-4 mx-auto'}/>
                            </div>
                            <p className={'text-center text-md font-semibold mb-3'}>Spacious rooms for awesome
                                parties</p>
                            <p className={'text-center text-grey text-sm'}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit,
                                sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                </Slider>
            </div>

        </section>
        <section className={'page-section four flex flex-row'}>
            <div className={'pl-lg pt-lg w-half pr-lg relative bg-light-grey'}>
                <p className={'text-primary mb-4 font-bold title'}>Testimonials</p>
                <p className={'text-2xl font-black mb-6 sub-title'}>
                    We trust our customers and they trust us too
                </p>
                <div className={'testimonial'}>
                    <div className="flex flex-row items-center mb-3">
                        <img
                            src="https://res.cloudinary.com/nazarick/image/upload/v1606040405/marius-ciocirlan-vMV6r4VRhJ8-unsplash.png"
                            alt="" className={'mr-3'}/>
                        <div>
                            <p className={'text-md font-semibold mb-2'}>John Doe</p>
                            <p className={'font-semibold'}>IT Engineer</p>
                        </div>
                    </div>
                    <p className={'testimonial-text text-sm'}>I'm very glad I had the opportunity to visit this hotel.
                        The stuff is very friendly and I will
                        definetly visit the hotel again next year.</p>
                </div>
                <div className="dots"></div>
                <div className={'bg-primary arrow-left absolute p-4'}>
                    <img src={arrowLeft} alt="" className={''}/>
                </div>
            </div>
            <div className={'w-half relative'}>
                <img
                    src="https://res.cloudinary.com/nazarick/image/upload/v1606040410/rhema-kallianpur-jbJ-_hw2yag-unsplash.png"
                    alt="" className={'w-full'}/>
                <div className={'bg-light-grey arrow-right absolute p-4'}>
                    <img src={arrowRight} alt="" className={''}/>
                </div>
            </div>
        </section>
        <section className={'page-section five px-lg pt-lg py-10'}>
            <p className={'text-primary mb-4 font-bold title'}>Restaurant</p>
            <p className={'text-2xl font-black mb-6 sub-title'}>Explore our menu and eat what you want</p>
            <div className={'grid grid-cols-2 gap-6'}>
                <div className={'flex flex-row bg-light-grey'}>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606041462/victoria-shes-UC0HZdUitWY-unsplash.png"
                        alt=""/>
                    <div className={'py-3 px-3 flex flex-col justify-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Food</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Fresh fish and onions</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant ready cooked
                            for you and you family</p>
                    </div>
                    <div className={'flex flex-row items-end'}>
                        <div className={'bg-primary p-6'}>
                            <img src={arrowRightWhite} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-row bg-light-grey'}>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606041463/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                        alt=""/>
                    <div className={'py-3 px-3 flex flex-col justify-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Desert</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Chocolate cupcakes</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant ready cooked
                            for you and you family</p>
                    </div>
                    <div className={'flex flex-row items-end'}>
                        <div className={'bg-primary p-6'}>
                            <img src={arrowRightWhite} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-row bg-light-grey'}>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606041463/sheelah-brennan-UaeVmc51Ttw-unsplash.png"
                        alt=""/>
                    <div className={'py-3 px-3 flex flex-col justify-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>DESERT</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Chocolate cupcakes</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant ready cooked
                            for you and you family</p>
                    </div>
                    <div className={'flex flex-row items-end'}>
                        <div className={'bg-primary p-6'}>
                            <img src={arrowRightWhite} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-row bg-light-grey'}>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606041462/victoria-shes-UC0HZdUitWY-unsplash.png"
                        alt=""/>
                    <div className={'py-3 px-3 flex flex-col justify-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Food</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Fresh fish and onions</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant ready cooked
                            for you and you family</p>
                    </div>
                    <div className={'flex flex-row items-end'}>
                        <div className={'bg-primary p-6'}>
                            <img src={arrowRightWhite} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={'page-section six px-lg pt-10 pb-lg'}>
            <p className={'text-react object in img srcprimary mb-4 font-bold title'}>Blog</p>
            <p className={'text-2xl font-black mb-6 sub-title'}>Read our newest blog post right away</p>
            <div className={'grid grid-cols-3 gap-6'}>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042374/vicky-sim-mj51pZwan9c-unsplash.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Food and life</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Succed in hotel business</p>
                        <p className={'text-grey line-height-text text-center'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042498/victoria-shes-UC0HZdUitWY-unsplash-2.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Cooking</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Cooking delicious food</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042497/sheelah-brennan-UaeVmc51Ttw-unsplash-2.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Fruits</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Getting fresh fruits</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042497/sheelah-brennan-UaeVmc51Ttw-unsplash-2.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Fruits</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Getting fresh fruits</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042498/victoria-shes-UC0HZdUitWY-unsplash-2.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Cooking</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Cooking delicious food</p>
                        <p className={'text-grey line-height-text text-center'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/nazarick/image/upload/v1606042374/vicky-sim-mj51pZwan9c-unsplash.png"
                        alt="" className={'w-full'}/>
                    <div className={'bg-light-grey flex flex-col items-center p-6 text-center'}>
                        <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>Food and life</p>
                        <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>Succed in hotel business</p>
                        <p className={'text-grey line-height-text'}>Fresh food directly from our restaurant
                            ready cooked for you and you family</p>
                    </div>
                </div>
            </div>
        </section>
    </section>)
}