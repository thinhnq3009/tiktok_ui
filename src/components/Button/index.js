import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
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

    if (to) {
        Components = Link;
    } else if (href) {
        Components = 'a';
    }

    const props = { to, href, onClick, ...passProps };

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        lager,
        round,
        isText,
    });

    return (
        <Components className={classes} {...props}>
            <span> {children} </span>
        </Components>
    );
}

export default Button;
