import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './component';
import { fetchOneUserThunk, upgradeUserThunk } from '../Users/actions';

class UserInfoContainer extends Component {
    state = {
        user: {},
    };

    componentDidMount() {
        const { users, match, fetchOneUserThunk } = this.props;
        const id = +match.params.id;

        if (id) {
            if (!users.length) {
                fetchOneUserThunk(`/${id}`)
                    .then(user => {
                        this.setState({ user });
                        this.logHistory(user);
                    })
                    .catch(() => this.goBack());
            } else {
                const user = users.find(item => item.id === id);
                user ? this.logHistory(user) : this.goBack();
            }
        } else {
            this.goBack();
        }
    }

    logHistory = (user) => {
        const { upgradeUserThunk } = this.props;

        if (user.history.length < 5) {
            user.history.push(this.formatDate(new Date()));
        } else {
            user.history = user.history.slice(-4);
            user.history.push(this.formatDate(new Date()));
        }
        upgradeUserThunk(user);
    };

    formatDate = (date) => {
        let day = date.getDate();
        day = day < 10 ? `0${day}` : day;

        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let year = date.getFullYear();
        year = year < 10 ? `0${year}` : year;

        let hours = date.getHours();
        hours = hours < 10 ? `0${hours}` : hours;

        let mins = date.getMinutes();
        mins = mins < 10 ? `0${mins}` : mins;

        return {
            date: `${day}-${month}-${year}`,
            time: `${hours}.${mins}`
        };
    };

    goBack = () => {
        this.props.history.push('/');
    };

    render() {
        const { users, match } = this.props;
        const user = users.find(item => item.id === +match.params.id) || this.state.user;

        return (
            <UserInfo
                user={user}
                goBack={this.goBack}
            />
        );
    }
}

const mapStateToProps = (state) => ({ users: state.users.users });

export default connect(
    mapStateToProps,
    { fetchOneUserThunk, upgradeUserThunk }
)(UserInfoContainer);
