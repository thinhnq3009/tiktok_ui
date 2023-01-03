import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    className,
    to,
    href,
    leftIcon,
    rightIcon,

    outline = false,
    primary = false,
    small = false,
    lager = false,
    round = false,
    isText = false,
    children,
    onClick,
    ...passProps
}) {
    let Components = 'button';

    if (to || isText) {
        Components = Link;
    } else if (href) {
        Components = 'a';
    }

    const props = { to, href, onClick, ...passProps };

    const classes = cx('wrapper', className, {
        primary,
        outline,
        small,
        lager,
        round,
        isText,
    });

    return (
        <Components className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}> {children} </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Components>
    );
}

export default Button;
