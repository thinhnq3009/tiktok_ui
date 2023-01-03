import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import { RiLoader4Fill, RiSearchLine } from 'react-icons/ri';
import { BiMessageAltMinus, BiDotsVerticalRounded } from 'react-icons/bi';
import { FaGlobeAsia, FaKeyboard, FaQuestionCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper/Menu';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FaGlobeAsia />,
        title: 'English',
        onClick: () => alert('Hello'),
    },
    {
        icon: <FaQuestionCircle />,
        title: 'Feedback and help',
        to: '/profile',
    },
    {
        icon: <FaKeyboard />,
        title: 'Keyboard shortcuts',
        href: 'http://facebook.com',
    },
];

function Header() {
    // State
    const [key, setKey] = useState('');

    // Two-way binding for search input
    const handelChange = (value) => {
        setKey(value);
        console.log(key);
    };

    const handelClick = () => {
        if (!key) return;

        /* Xử lý */
        console.log(key);
    };

    const handelClear = () => {
        setKey('');
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Tik Tok"></img>
                    </Link>
                </div>

                <Tippy
                    interactive
                    visible={key}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('search-result-popper')}>
                                <h6 className={cx('search-title')}>Accounts</h6>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            value={key}
                            onChange={(e) => handelChange(e.target.value)}
                            placeholder="Search account and video ..."
                        ></input>
                        <div className={cx('icon-wrapper')}>
                            <IoIosCloseCircle onClick={handelClear} />
                            {/* <RiLoader4Fill /> */}
                        </div>
                        <span className={cx('line')}></span>
                        <button
                            className={cx('search-btn')}
                            tabIndex={-1}
                            onClick={handelClick}
                        >
                            {<RiSearchLine />}
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button isText>Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu
                        data={MENU_ITEMS}
                        tippy={{
                            visible: false,
                            delay: [0, 700],
                            interactive: true,
                            placement: 'bottom-end',
                        }}
                    >
                        <button className={cx('more-btn')}>
                            <BiDotsVerticalRounded />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
