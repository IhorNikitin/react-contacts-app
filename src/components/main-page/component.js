import React from 'react';
import DocumentTitle from 'react-document-title';

import { Filter, Users } from '../../features';

import styles from './component.scss';

const MainPage = (props) => (
    <DocumentTitle title="MAIN PAGE | PHONE BOOK APP" >
        <div className={styles.cont}>
            <article className={styles.article}>
                <Filter {...props} />
                <Users {...props} />
            </article>
        </div>
    </DocumentTitle>
);


export default MainPage;
