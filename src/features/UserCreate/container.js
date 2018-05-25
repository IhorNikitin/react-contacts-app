import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsersThunk, createUserThunk, upgradeUserThunk, changeCurrentPage } from '../Users/actions';
import { USERPIC_DEFAULT } from '../../constants';
import UserCreate from './component';
import { validate } from '../../helpers';

class UserCreateContainer extends Component {
	state = {
		error: '',
    };
	
	createUser = (data) => {
		this.setState({ error: '' });
		let error = validate(data);

		if (!error) {
			if (!this.props.match.params.id) {
				data.img = USERPIC_DEFAULT;
				data.history = [];
				this.props.createUserThunk(data)
				    .then(() => {
						this.props.history.push('/');
					});
			} else {            
				this.props.upgradeUserThunk(data)
				    .then(() => {
						this.props.history.push('/');
					});
			}
		} else {
            this.setState({ error });
        }
	};
	
	removeError = () => {
		this.setState({ error: '' });
	};
	

	
	goBack = () => {
		this.props.history.push('/');
	};
  
    render() {
        const { error:errMsg } = this.state;
        const { users, match } = this.props;
        const user = match.params.id && users.length > 0
            ? users.find(item => item.id === +match.params.id)
            : {};

        return (
		    <UserCreate
                id={this.props.match.params.id}
                user={user}
                errMsg={errMsg}
				goBack={this.goBack}
                removeError={this.removeError}
                createUser={this.createUser}
			/>
        );
    }
}

const mapStateToProps = (state) => ({ users: state.users.users });

export default connect(
    mapStateToProps,
    { fetchUsersThunk, createUserThunk, upgradeUserThunk, changeCurrentPage }
)(UserCreateContainer);