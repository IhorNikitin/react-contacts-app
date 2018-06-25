import React from 'react';
import Portal from '../../Portal';

import styles from './component.scss';

const Modal = ({ title, cancel, success }) => (
    <Portal>
        <div className={styles.cont}>
            <div className={styles.window}>
                <h3>{title}</h3>
                <div className={styles.buttons}>
                    <button onClick={success}>Ok</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    </Portal>
);

export default Modal;