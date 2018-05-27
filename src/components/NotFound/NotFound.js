import React from 'react';
import DocumentTitle from 'react-document-title';

import styles from './NotFound.scss';

const NotFound = () => (
    <DocumentTitle title="PAGE NOT FOUND | PHONE BOOK APP" >
        <div className={styles.cont}>
            <div className={styles.notFound}>
                <p className={styles.statusNumber}>404</p>
				<p className={styles.statusText}>Page not found!</p>
            </div>
        </div>
    </DocumentTitle>
);

export default NotFound;
