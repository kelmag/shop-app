import React from 'react';
import * as styles from './styles'

const Wrapper = ({ children, className }) => {
    return (
        <styles.Wrapper className={className}>
            {children}
        </styles.Wrapper>
    );
};

export default Wrapper;