import React from 'react';
import * as styles from './styles'

export default ({ images }) => {
    return (
        <styles.Wrapper>
            {images.map(image =>
                <img src={image} alt="" />
            )}
        </styles.Wrapper>
    );
};

