import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, initialize } from 'redux-form';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import { Button, ErrorField } from '../../components';
import { validate } from '../../helpers';

import styles from './component.scss';

class UserCreate extends Component {
    constructor(props) {
        super(props);
        props.initialize(props.user);
    }

    render() {
        const { id, goBack, createUser, handleSubmit } = this.props;
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
                                    <label htmlFor='name'>* Name: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='name'
                                        name='name'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='surname'>* Surname: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='surname'
                                        name='surname'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='birthday'>Birthday: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='birthday'
                                        name='birthday'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='town'>Town: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='town'
                                        name='town'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='phone'>* Phone: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='phone'
                                        name='phone'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='phoneGroup'>Group: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='phoneGroup'
                                        name='phoneGroup'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='email'>Email: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='email'
                                        name='email'
                                    />
                                </div>
                            </div>
                            <div className={styles.unit}>
                                <div className={styles.label}>
                                    <label htmlFor='skype'>Skype: </label>
                                </div>
                                <div className={styles.formInput}>
                                    <Field
                                        component={ErrorField}
                                        id='skype'
                                        name='skype'
                                    />
                                </div>
                            </div>
                            <p className={styles.required}>* - <span>required</span></p>
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
};

UserCreate.propTypes = {
    user: PropTypes.objectOf(PropTypes.any),
    id: PropTypes.string,
    createUser: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
};

const withStore = connect(null, { initialize });
const withForm = reduxForm({ form: 'simple', validate });

export default compose(
    withStore,
    withForm,
)(UserCreate);
