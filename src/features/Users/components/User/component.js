import React from 'react';

import { SERVER_URL } from '../../../../constants';

import styles from './component.scss';

const User = ({ user, editUser, handleDeleteID, showUserDetails }) => (
    <div className={styles.user}>
        <div className={styles.icon}>
            <img src={`${SERVER_URL}/${user.img}`} alt="userpic" />
        </div>
        <div className={styles.info}>
            <p className={styles.personal}>
                <i className="fas fa-address-card" />
                <span className={styles.fullname} onClick={showUserDetails}>{`${user.surname} ${user.name}`}</span>
            </p>
            <p className={styles.phone}>
                <i className="fas fa-mobile-alt" />
                <span>{user.phone}</span>
            </p>
            <p className={styles.group}>
                <i className="fas fa-user-friends" />
                <span>{user.phoneGroup}</span>
            </p>
        </div>
        <div className={styles.controls}>
            <div className={styles.buttons}>
                <i className="fas fa-pencil-alt" onClick={editUser} />
                <i className="fas fa-trash-alt" onClick={handleDeleteID} />
            </div>
        </div>
    </div>
);

export default User;
