import classNames from 'classnames/bind';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './AccountItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Quốc Thịnh</span>
                    <BsFillCheckCircleFill className={cx('check')} />
                </h4>
                <div className={cx('id')}>quocthinhtme</div>
            </div>
        </div>
    );
}

export default AccountItem;
