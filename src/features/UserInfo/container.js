import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './component';
import { fetchUsersThunk, upgradeUserThunk } from '../Users/actions';
import { ITEMS_PER_PAGE } from '../../constants';

class UserInfoContainer extends Component {

    componentDidMount() {
		const { users, match, fetchUsersThunk } = this.props;
		const page = match.params.id ? Math.ceil(+match.params.id / ITEMS_PER_PAGE) : 1;
		
        if (!users.length) {
            fetchUsersThunk(`?_page=${page}&_limit=${ITEMS_PER_PAGE}`);
        } else {
            this.logHistory(users);
        }
    }
	
	componentWillReceiveProps(nextProps) {		
		if (this.props.users.length !== nextProps.users.length) {
			this.logHistory(nextProps.users);
		}
	}
	
	logHistory = (users) => {
		const { match, upgradeUserThunk } = this.props;
		const id = +match.params.id;
		if (id) {
			const user = users.find(item => item.id === id);

			if (user.history.length < 5) {
				user.history.push(this.formatDate(new Date()));
			} else {
				user.history = user.history.slice(-4);
				user.history.push(this.formatDate(new Date()));
			}
			upgradeUserThunk(user);
		}
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
		const user = users.find(item => item.id === +match.params.id) || {};

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
    { fetchUsersThunk, upgradeUserThunk }
)(UserInfoContainer);