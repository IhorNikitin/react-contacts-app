import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, initialize } from 'redux-form';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import styles from './component.scss';

import { Button } from '../../components';

class UserCreate extends Component {
    constructor(props) {
        super(props);

        props.initialize(props.user);
    }

    render() {
        const { id, errMsg, goBack, removeError, createUser, handleSubmit } = this.props;
        const action = id ? 'Edit' : 'Create';

        return (
            <DocumentTitle title={`${action.toUpperCase()} USER | PHONE BOOK APP`} >
                <div className={styles.cont}>
                    <section className={styles.userCreate}>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(createUser)}
                            onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
                        >
                            <h3 className={styles.formHeading}>{`${action} User`}</h3>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='name'>Name: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='name'
                                        name='name'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='surname'>Surname: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='surname'
                                        name='surname'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='birthday'>Birthday: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='birthday'
                                        name='birthday'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='town'>Town: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='town'
                                        name='town'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='phone'>Phone: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='phone'
                                        name='phone'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='phoneGroup'>Group: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='phoneGroup'
                                        name='phoneGroup'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='email'>Email: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='email'
                                        name='email'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='skype'>Skype: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component='input'
                                        id='skype'
                                        name='skype'
                                        onFocus={removeError}
                                    />
                                </div>
                            </div>
                            {
                                errMsg
                                    ? (
                                        <div
                                            className={styles.error}>
                                            <i className="fas fa-exclamation-triangle" />
                                            The form contains errors:
                                            <ul className={styles.errorList}>
                                                <li>{errMsg}</li>
                                            </ul>
                                        </div>
                                    )
                                    : null
                            }
                            <div className={styles.buttons}>
                                <Button onClick={goBack}>Back</Button>
                                <Button type="submit" addClass={styles.blueSkin}>{action}</Button>
                            </div>
                        </form>
                    </section>
                </div>
            </DocumentTitle>
        );
    }
}

UserCreate.defaultProps = {
    user: {},
    id: '',
    errMsg: '',
};

UserCreate.propTypes = {
    user: PropTypes.objectOf(PropTypes.any),
    id: PropTypes.string,
    errMsg: PropTypes.string,
    createUser: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    removeError: PropTypes.func.isRequired,
};

const withStore = connect(null, { initialize });
const withForm = reduxForm({ form: 'simple' });

export default compose(
    withStore,
    withForm,
)(UserCreate);