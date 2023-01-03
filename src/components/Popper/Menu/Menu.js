import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ data, children, tippy }) {
    console.log(tippy);
    const renderItem = () =>
        data.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);

    return (
        <Tippy
            {...tippy}
            render={(attrs) => (
                <ul className={cx('menu-container')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        <Header title={'Language'} />
                        {renderItem()}
                    </PopperWrapper>
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
