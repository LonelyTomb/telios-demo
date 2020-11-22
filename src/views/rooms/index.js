import React, {useState} from "react"
import classNames from 'classnames/bind';
import {NavLink} from 'react-router-dom';

import styles from './index.scss';

import arrowRight from '../../assets/images/svg/arrow-right.svg'
import send from '../../assets/images/svg/send.svg'
import arrowRightWhite from "../../assets/images/svg/arrow-right-white.svg";

const cx = classNames.bind(styles);

export default function Rooms() {
    const rooms = [
        {
            title: 'Big',
            subTitle: 'Spacious Room',
            text: 'The most spacious room you will ever see in our hotel. Equipped with span and warm beds',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606048982/deborah-cortelazzi-gREquCUXQLI-unsplash.png'
        },
        {
            title: 'Small',
            subTitle: 'Small Cheap Room',
            text: 'Smallest and the most economic room in our hotel. Save an extra buck for your holyday',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606048941/christopher-jolly-GqbU78bdJFM-unsplash.png'
        },
        {
            title: 'Prremium',
            subTitle: 'Big Room',
            text: 'Biggest room in our hotel fully equipped with Wi-fi and hot coffee',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606049017/minh-pham-1_B4Zzh7UpQ-unsplash.png'
        },
        {
            title: 'Expensive',
            subTitle: 'Expensive Luxury Room',
            text: 'The most expensive room available for milionars and very rich people',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606049039/sven-brandsma-GmRiN7tVW1w-unsplash.png'
        },
        {
            title: 'Big',
            subTitle: 'Spacious Room',
            text: 'The most spacious room you will ever see in our hotel. Equipped with span and warm beds',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606048982/deborah-cortelazzi-gREquCUXQLI-unsplash.png'
        },
        {
            title: 'Small',
            subTitle: 'Small Cheap Room',
            text: 'Smallest and the most economic room in our hotel. Save an extra buck for your holyday',
            image: 'https://res.cloudinary.com/nazarick/image/upload/v1606048941/christopher-jolly-GqbU78bdJFM-unsplash.png'
        },
    ]
    return (<section className={`${cx('rooms-container')}`}>
        <section className={'page-title px-lg py-xl'}>
            <h1 className={'text-2xl font-black text-white'}>Rooms</h1>
            <div className={'flex flex-row items-center text-white'}>
                <NavLink to={'/'}
                         className={'p-3 text-white text-xs'}>Home</NavLink> | <NavLink
                to={'/rooms'} className={'p-3 text-white text-xs'}>Rooms</NavLink>
            </div>
        </section>
        <section className={'page-content one px-lg pt-lg py-10 pb-lg'}>
            <p className={'text-primary mb-4 font-bold title'}>ABOUT US</p>
            <p className={'text-2xl font-black mb-6 sub-title'}>Trust and quality are our atuus</p>
            <div className={'grid grid-cols-2 gap-6'}>
                {
                    rooms.map((room, i) => (<div className={'flex flex-row bg-light-grey'} key={`room.title-${i}`}>
                        <img
                            src={room.image}
                            alt=""/>
                        <div className={'py-3 px-3 flex flex-col justify-center'}>
                            <p className={'text-primary mb-3 font-bold text-sm line-height-title'}>{room.title}</p>
                            <p className={'font-semibold mb-3 text-lg line-height-sub-title'}>{room.subTitle}</p>
                            <p className={'text-grey line-height-text'}>{room.text}</p>
                        </div>
                        <div className={'flex flex-col bg-primary items-end justify-center'}>
                            <a href="">
                                <div className={'p-6'}>
                                    <img src={arrowRightWhite} alt=""/>
                                </div>
                            </a>
                        </div>
                    </div>))
                }

            </div>
        </section>
        <section className={'page-content two px-lg pt-lg py-10 pb-lg bg-light-grey flex flex-row justify-center mb-lg'}>
            <form className={'flex flex-row items-end mx-auto'}>
                <div className={'grid grid-cols-4 gap-6 items-end'}>
                    <div className={''}>
                        <p className={'text-primary capitalize mb-3 text-sm'}>check in date</p>
                        <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                    </div>
                    <div className={''}>
                        <p className={'text-primary capitalize mb-3 text-sm'}>check out date</p>
                        <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                    </div>
                    <div className={''}>
                        <p className={'text-primary capitalize mb-3 text-sm'}>Rooms</p>
                        <input type="text" className={'px-4 py-4 w-full'} placeholder={'check in date'}/>
                    </div>
                    <div>
                        <button className={'bg-primary p-4 flex flex-row items-center justify-center text-white w-full'}>
                            Submit <img src={send} alt="" className={'ml-2'}/>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </section>)
}