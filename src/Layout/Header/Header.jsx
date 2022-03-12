import React from 'react';

import styles from './Header.module.css';

const Header = () => (
    <div>
        <h1 className={styles.heading}>
            World<span className={styles.light}> Wide</span> Weather
        </h1>
        <p className={styles.subHeader}>
            BY PA KHOZA
        </p>
    </div>
);

export default Header;
