import React from 'react';
import * as styles from './styles'

const Notify = ({ icon, value, right, left }) => {
    return (
        <styles.Wrap right={right} left={left}>
            <i className={"fa " + icon}></i>
        </styles.Wrap>
    );
};

export default Notify;