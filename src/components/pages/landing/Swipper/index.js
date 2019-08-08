import React from 'react';
import * as styles from './styles'
import swipper1 from 'images/swipper/swipper1.png';

const SwipperSection = () => {
    return (
        <styles.Wrap>
            <styles.Img src={swipper1} alt="" />
            <styles.LeftButton left icon="fa-angle-left" />
            <styles.RightButton right icon="fa-angle-right" />
        </styles.Wrap>
    );
};

export default SwipperSection;