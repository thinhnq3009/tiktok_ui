import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { RiLoader4Fill, RiSearchLine } from 'react-icons/ri';
import { BiMessageAltMinus } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

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
                    <Button to="/">
                        <img src={images.logo} alt="Tik Tok"></img>
                    </Button>
                </div>

                <Tippy
                    interactive
                    visible={key}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
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
                    <Button outline small round>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
