import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsersThunk, changeCurrentPage } from '../../actions';
import { ITEMS_PER_PAGE } from '../../../../constants';

import styles from './component.scss';

class Pagination extends Component {

    state = {
        allPages: Math.ceil(this.props.itemCount / ITEMS_PER_PAGE),
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.itemCount !== nextProps.itemCount) {
            this.setState({ allPages: Math.ceil(nextProps.itemCount / ITEMS_PER_PAGE) });
        }
    }

    changePage = (target) => {
        const { sortBySurname, sortByGroup, searchStr, fetchUsersThunk, changeCurrentPage } = this.props;
        let page = +target.getAttribute('value');

        if (page < 1 || page > this.state.allPages) {
            return;
        }

        let query = `?_page=${page}&_limit=${ITEMS_PER_PAGE}`;

        if (sortBySurname) query = `${query}&_sort=surname&_order=asc`;
        else if (sortByGroup) query = `${query}&_sort=phoneGroup&_order=asc`;
        else if (searchStr) query = `${query}&q=${searchStr}`;

        fetchUsersThunk(query)
            .then(() => changeCurrentPage(page));
    };

    render() {
        const { allPages } = this.state;
        const { currentPage } = this.props;

        let pages;

        if (allPages <= 1) {
            return null;
        }

        if (allPages) {
            pages = new Array(allPages);
            pages = pages.fill(1).map((el, index) => (index + 1));
        }

        return (
            <div className={styles.pagination}>
                <ul className={styles.paginationList}>
                {
                    pages && pages.map(page =>
                        (<li
                            key={page}
                            value={page}
                            onClick={(e) => this.changePage(e.target)}
                            className={page === currentPage ? styles.activePage : ''}
                        >
                            {page}
                        </li>)
                    )
                }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sortBySurname: state.filter.sortBySurname,
    sortByGroup: state.filter.sortByGroup,
    searchStr: state.filter.searchStr,
    currentPage: state.users.currentPage,
});

export default connect(
    mapStateToProps,
    { fetchUsersThunk, changeCurrentPage }
)(Pagination);
