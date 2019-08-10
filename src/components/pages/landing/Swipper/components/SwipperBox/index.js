import React from 'react';
import * as styles from './styles'

const SwipperBox = ({ title = "", button = "More info", right, left }) => {
    return (
        <styles.SwipperBox right={right} left={left}>
            <styles.Title>{title}</styles.Title>
            <styles.MainButton value={button} />
        </styles.SwipperBox>
    );
};

export default SwipperBox;