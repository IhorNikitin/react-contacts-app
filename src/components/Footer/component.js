import React from 'react';

import styles from './component.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.cont}>
            <div className={styles.copyright}>Phonebook &copy; 2018</div>
        </div>
    </footer>
);

export default Footer;
