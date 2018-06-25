import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import styles from './component.scss';

import { Button } from '../../components';
import { SERVER_URL } from '../../constants';

const UserInfo = ({ user, goBack }) => (
    <DocumentTitle title="DETAIL USER INFO | PHONE BOOK APP" >
        <div className={styles.cont}>
            <section className={styles.userInfo}>
                <h3 className={styles.heading}>Detail User Info</h3>
                <div className={styles.buttons}>
                    <Button onClick={goBack}>Back</Button>
                </div>
                <div className={styles.card}>
                    <div className={styles.main}>
                        <div className={styles.icon}>
                            <img src={`${SERVER_URL}/${user.img}`} alt="user look" />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.fullname}>{`${user.surname} ${user.name}`}</p>
                            <p className={styles.phone}>{user.phone}</p>
                            <p className={styles.group}>
                                <span>group: </span>
                                <span>{user.phoneGroup}</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.personal}>
                        <p className={styles.subheading}><i className="fas fa-angle-down" />Personal</p>
                        <p className={styles.birthday}>
                            <span><i className="fas fa-birthday-cake" /> Birthday: </span>
                            <span className={styles.value}>{user.birthday}</span>
                        </p>
                        <p className={styles.town}>
                            <span><i className="fas fa-university" /> Town: </span>
                            <span className={styles.value}>{user.town}</span>
                        </p>
                    </div>
                    <div className={styles.contacts}>
                        <p className={styles.subheading}><i className="fas fa-angle-down" />Contacts</p>
                        <p className={styles.email}>
                            <span><i className="far fa-envelope" /> Email: </span>
                            <span className={styles.value}>{user.email}</span>
                        </p>
                        <p className={styles.skype}>
                            <span><i className="fab fa-skype" /> Skype: </span>
                            <span className={styles.value}>{user.skype}</span>
                        </p>
                    </div>
                    <div className={styles.history}>
                        <p className={styles.subheading}><i className="fas fa-angle-down" />History (last five)</p>
                        <ul>
                            {
                                user.history && user.history.map((element, index) =>
                                    <li key={index} className={styles.date}>{`${element.date} / ${element.time}`}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </DocumentTitle>
);

UserInfo.defaultProps = {
    user: {},
};

UserInfo.propTypes = {
    goBack: PropTypes.func.isRequired,
    user: PropTypes.objectOf(PropTypes.any),
};

export default UserInfo;
