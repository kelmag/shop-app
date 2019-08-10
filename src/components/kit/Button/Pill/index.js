import React from 'react';
import * as styles from './styles'

const Pill = ({ icon, value, right, left }) => {
    return (
        <styles.Wrap right={right} left={left}>
            {value}
            <i className={"fa " + icon}></i>
        </styles.Wrap>
    );
};

export default Pill;