import React from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '../../components';

import styles from './component.scss';

const Filter = ({ handlerSortBySurname, handlerSortByGroup, handlerSearchByAnyField, onChange, inputStr }) =>  (
    <section className={styles.filter}>
        <h3 className={styles.heading}>Sorting & Filtering</h3>
        <div className={styles.sorting}>
            <Button onClick={handlerSortBySurname} addClass={styles.blueSkin}>sortBySurname A-Z</Button>
            <Button onClick={handlerSortByGroup} addClass={styles.blueSkin}>sortByGroup A-Z</Button>
        </div>
        <div className={styles.search}>
            <Input
                onChange={onChange}
                placeholder="Search By Any Fields"
                value={inputStr}
            />
            <Button
                onClick={handlerSearchByAnyField}
            >
                Go
            </Button>
        </div>
    </section>
);

Filter.defaultProps = {
    inputStr: '',
};

Filter.propTypes = {
    handlerSortBySurname: PropTypes.func.isRequired,
    handlerSortByGroup: PropTypes.func.isRequired,
    handlerSearchByAnyField: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    inputStr: PropTypes.string,
};

export default Filter;