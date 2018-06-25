import React from 'react';

const ErrorField = (props) => {
    const { id, input, type, meta: {error, touched} } = props;
    const errorText = touched
        && error
        && <div style={{ color: 'red', fontSize: '12px', paddingTop: '5px' }}>{error}</div>;

    return (
        <div>
            <input id={id} type={type} {...input}  />
            {errorText}
        </div>
    );
};

export default ErrorField;