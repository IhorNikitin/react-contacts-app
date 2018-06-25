import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.scss';

const Input = (props) => {
    const { onChange, value, placeholder } = props;

    return (
        <input
            className={styles.input}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            value={value}
        />
    );
};

Input.defaultProps = {
    value: '',
    placeholder: '',
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
