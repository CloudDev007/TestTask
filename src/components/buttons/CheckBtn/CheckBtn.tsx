import cStyles from '../btns.module.css';
import styles from './CheckBtn.module.css';
import React from 'react';


const CheckBtn = (props: any) => {
    const { active, onClick } = props;

    const handleClick = () => {
        onClick();
    }

    return (
        <button className={`${cStyles.btn} ${styles.btn} ${active ? styles.active : ''}`}
            aria-label='Add' title='Add' onClick={handleClick}
        >
            <svg className={`${cStyles.btn_icon} ${styles.btn_icon}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className={`${cStyles.icon_path} ${styles.icon_path}`} fillRule="evenodd" d="M12,2 C17.5229861,2 22,6.47701386 22,12 C22,17.5229861 17.5229861,22 12,22 C6.47701386,22 2,17.5229861 2,12 C2,6.47701386 6.47701386,2 12,2 Z M10.85725,15.7765003 L16.70725,9.92650027 C17.09825,9.53650027 17.09825,8.90350027 16.70725,8.51250027 C16.31625,8.12250027 15.68425,8.12250027 15.29325,8.51250027 L10.85725,12.9485003 L8.70725,10.7985003 C8.31625,10.4075003 7.68425,10.4075003 7.29325,10.7985003 C6.90225,11.1895003 6.90225,11.8215003 7.29325,12.2125003 L10.85725,15.7765003 Z" />
            </svg>
        </button>
    );
};


export default CheckBtn;