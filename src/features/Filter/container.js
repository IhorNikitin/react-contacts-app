import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchByAnyField, sortBySurname, sortByGroup } from './actions';
import { fetchUsersThunk, getAllUsersCount, changeCurrentPage } from '../Users/actions';

import { ITEMS_PER_PAGE } from '../../constants';

import Filter from './component';

class FilterContainer extends Component {
    state = {
        inputStr: this.props.searchStr || '',
    };

    onChange = (e) => {
        this.setState({
            inputStr: e.target.value,
        });
    };
	
    handlerSortBySurname = () => {
        if (!this.props.isSortBySurname) {
            this.props.fetchUsersThunk(`?_page=1&_limit=${ITEMS_PER_PAGE}&_sort=surname&_order=asc`)
                .then(() => {
                    this.props.sortBySurname();
                    this.props.changeCurrentPage(1);
                });
        }
    };

    handlerSortByGroup = () => {
        if (!this.props.isSortByGroup) {
            this.props.fetchUsersThunk(`?_page=1&_limit=${ITEMS_PER_PAGE}&_sort=phoneGroup&_order=asc`)
		        .then(() => {
                    this.props.sortByGroup();
                    this.props.changeCurrentPage(1);
                });
        }
    };
	
    handlerSearchByAnyField = () => {
        this.props.fetchUsersThunk(`?q=${this.state.inputStr}&_page=1&_limit=${ITEMS_PER_PAGE}`)
            .then(() => {
                this.props.searchByAnyField(this.state.inputStr);
				this.props.changeCurrentPage(1);
                this.props.getAllUsersCount();
            });
    };

    render() {

        return (
            <Filter
                handlerSortBySurname={this.handlerSortBySurname}
                handlerSortByGroup={this.handlerSortByGroup}
                handlerSearchByAnyField={this.handlerSearchByAnyField}
                onChange={this.onChange}
                inputStr={this.state.inputStr}
            />
        );
    }
}

const mapStateToProps = (state) => ({
	isSortBySurname: state.filter.sortBySurname,
	isSortByGroup: state.filter.sortByGroup,
	searchStr: state.filter.searchStr,
});

export default connect(
    mapStateToProps,
    { searchByAnyField, sortBySurname, sortByGroup, fetchUsersThunk, getAllUsersCount, changeCurrentPage }
)(FilterContainer);