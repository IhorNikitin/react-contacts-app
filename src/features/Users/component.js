import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.scss';

import User from './components/User';
import Pagination from './components/Pagination';
import { Button } from '../../components';

const Users = ({ users, count, createUser, deleteUser, editUser, showUserDetails }) => {
    return (
        <section className={styles.users}>
            <div className={styles.buttonCreate}>
                <Button onClick={createUser} addClass={styles.greenSkin}>Create New User</Button>
            </div>

            <div className={styles.list}>
                {
                    users.map(user =>
                        <User
                            deleteUser={deleteUser.bind(this, user.id)}
                            editUser={editUser.bind(this, user.id)}
                            showUserDetails={showUserDetails.bind(this, user.id)}
                            key={user.id}
                            user={user}
                        />
                    )
                }
            </div>
            <Pagination itemCount={count} />
        </section>
    );
};

Users.defaultProps = {
    users: {},
    count: 0,
};

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    count: PropTypes.number,
    createUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    showUserDetails: PropTypes.func.isRequired,
};

export default Users;