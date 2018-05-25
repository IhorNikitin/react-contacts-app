import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Header.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.cont}>
            <Link to={`/`} >
                <div className={styles.logo}>phonebook</div>
            </Link>
			<div className={styles.lang} />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover
			/>
        </div>
    </header>
);

export default Header;
