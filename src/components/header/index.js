import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.scss';

const cx = classNames.bind(styles);
export default function Header() {

    return (
        <div className="fixed header-wrapper w-full">
            <header
                className={`${cx('header')} py-4`}>
                <nav className={'flex flex-row justify-between items-center px-lg'}>
                    <div className="app-title text-white">
                        <NavLink className={'font-semibold text-sm text-white'} to={'/'}>Zetta Hotels</NavLink>
                    </div>
                    <ul className={'flex flex-row'}>
                        <li className={'capitalize'}>
                            <NavLink to={'/'} className={'p-3 text-white text-xs'}>HOME</NavLink>
                        </li>
                        <li className={'capitalize'}>
                            <NavLink to={'/rooms'} className={'p-3 text-white text-xs'}>ROOMS</NavLink>
                        </li>
                        <li className={'capitalize'}>
                            <a href={'#'} className={'p-3 text-white text-xs'}>
                                ABOUT US
                            </a>
                        </li>
                        <li className={'capitalize'}>
                            <a href={'#'} className={'p-3 text-white text-xs'}>
                                BlOG
                            </a>
                        </li>
                        <li className={'capitalize'}>
                            <a href={'#'} className={'p-3 text-white text-xs'}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}