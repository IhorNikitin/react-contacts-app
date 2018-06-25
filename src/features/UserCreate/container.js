import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsersThunk, createUserThunk, upgradeUserThunk, changeCurrentPage } from '../Users/actions';
import { USERPIC_DEFAULT } from '../../constants';
import UserCreate from './component';

class UserCreateContainer extends Component {
    createUser = (data) => {
        const defaultUser = {
            img: USERPIC_DEFAULT,
            name: '',
            surname: '',
            birthday: '',
            town: '',
            phone: '',
            phoneGroup: 'friends',
            email: '',
            skype: '',
            history: [],
        };

        if (!this.props.match.params.id) {
            const user = { ...defaultUser, ...data };
            this.props.createUserThunk(user)
                .then(() => {
                    this.props.history.push('/');
                });
        } else {
            this.props.upgradeUserThunk(data)
                .then(() => {
                    this.props.history.push('/');
                });
        }
    };

    goBack = () => {
        this.props.history.push('/');
    };

    render() {
        const { users, match } = this.props;
        const user = match.params.id && users.length > 0
            ? users.find(item => item.id === +match.params.id)
            : {};

        return (
            <UserCreate
                id={this.props.match.params.id}
                user={user}
                goBack={this.goBack}
                createUser={this.createUser}
            />
        );
    }
}

const mapStateToProps = (state) => ({ users: state.users.users });

export default connect(
    mapStateToProps,
    { fetchUsersThunk, createUserThunk, upgradeUserThunk, changeCurrentPage },
)(UserCreateContainer);