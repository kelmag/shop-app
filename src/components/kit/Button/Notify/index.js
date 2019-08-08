import React from 'react';
import * as styles from './styles'

const Notify = ({ icon, value }) => {
    return (
        <styles.Wrap>
            <styles.Label>{value}</styles.Label>
            <i className={"fa " + icon}></i>
        </styles.Wrap>
    );
};

export default Notify;