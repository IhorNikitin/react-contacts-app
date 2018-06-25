import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Users from './component';
import { Modal } from '../../components';
import { ITEMS_PER_PAGE } from '../../constants';
import { fetchUsersThunk, deleteUserThunk, getAllUsersCount, changeIsModal } from './actions';

class UsersContainer extends Component {
    state = {
        deleteID: null,
    };

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

    deleteUser = () => {
        this.props.changeIsModal();
        this.props.deleteUserThunk(this.state.deleteID);
    };

    showUserDetails = (id) => {
        this.props.history.push(`/user/${id}`);
    };

    createUser = () => {
        this.props.history.push('/create/');
    };

    handleDeleteID = id => {
        this.setState({
            deleteID: id,
        });
        this.props.changeIsModal();
    };

    render() {
        const { users, count, isModal, changeIsModal } = this.props;

        return (
            <Fragment>
                <Users
                    users={users}
                    count={count}
                    createUser={this.createUser}
                    handleDeleteID={this.handleDeleteID}
                    editUser={this.editUser}
                    showUserDetails={this.showUserDetails}
                />
                { isModal &&
                    <Modal
                        title={'Are you sure?'}
                        cancel={changeIsModal}
                        success={this.deleteUser}
                    />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    count: state.users.count,
    isModal: state.users.isModal,
});

export default connect(
    mapStateToProps,
    { fetchUsersThunk, deleteUserThunk, getAllUsersCount, changeIsModal }
)(UsersContainer);
