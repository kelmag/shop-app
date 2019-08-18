import React from 'react';
import * as styles from './styles'

const SubscribeSection = ({ title, subtitle }) => {
    return (
        <styles.Wrapper>
            <styles.Title>{title}</styles.Title>
            <p>{subtitle}</p>
            <styles.Wrap>
                <i class="fa fa-envelope"></i>
                <styles.EmailInput type="email" placeholder="Enter your email" />
            </styles.Wrap>
        </styles.Wrapper>
    );
};

export default SubscribeSection;