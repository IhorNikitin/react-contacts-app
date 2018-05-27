import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './component';
import { ITEMS_PER_PAGE } from '../../constants';
import { fetchUsersThunk, deleteUserThunk, getAllUsersCount } from './actions';

class UsersContainer extends Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.fetchUsersThunk(`?_page=1&_limit=${ITEMS_PER_PAGE}`);
        }
        if (!this.props.count) {
            this.props.getAllUsersCount();
        }
    }

    editUser = (id) => {
        this.props.history.push(`/edit/${id}`);
    };

    deleteUser = (id) => {
        this.props.deleteUserThunk(id);
    };

    showUserDetails = (id) => {
        this.props.history.push(`/user/${id}`);
    };

    createUser = () => {
        this.props.history.push('/create/');
    };

    render() {
        const { users, count } = this.props;

        return (
            <Users
                users={users}
                count={count}
                createUser={this.createUser}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
                showUserDetails={this.showUserDetails}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    count: state.users.count,
});

export default connect(
    mapStateToProps,
    { fetchUsersThunk, deleteUserThunk, getAllUsersCount }
)(UsersContainer);