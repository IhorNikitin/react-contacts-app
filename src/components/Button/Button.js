import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.scss';

const Button = (props) => {
    const { onClick, addClass, children } = props;

    return (
        <button
            className={`${styles.button} ${addClass}`}
            onClick={onClick}
        >{children}</button>
    );
};

Button.defaultProps = {
    addClass: '',
    children: '',
};

Button.propTypes = {
    onClick: PropTypes.func,
    addClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
};

export default Button;
