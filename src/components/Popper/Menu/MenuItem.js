import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ data, ...passProps }) {
    const props = {
        ...data,
    };

    delete props.title;
    delete props.icon;

    return (
        <li className={cx('menu-item')}>
            <Button className={cx('btn')} {...props} {...passProps} leftIcon={data.icon}>
                {data.title}
            </Button>
        </li>
    );
}

export default MenuItem;
