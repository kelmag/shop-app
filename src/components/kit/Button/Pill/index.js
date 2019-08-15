import React from 'react';
import * as styles from './styles'

const Pill = ({ icon, value, right, left, className, ...props }) => {
    return (
        <styles.Wrap right={right} left={left} className={className} {...props}>
            <i className={"fa " + icon}></i>
            {value}
        </styles.Wrap>
    );
};

export default Pill;