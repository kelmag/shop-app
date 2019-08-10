import React from 'react';
import * as styles from './styles'

const Notify = ({ icon, value, rightButton, leftButton, ...props }) => {
    return (
        <styles.Wrap right={rightButton} left={leftButton} {...props} >
            <i className={"fa " + icon}></i>
        </styles.Wrap>
    );
};

export default Notify;