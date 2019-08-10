import React from 'react';
import * as styles from './styles'

const Container = ({ children }) => {
    return (
        <styles.Container>
            {children}
        </styles.Container>
    );
};

export default Container;