import React from 'react';
import * as styles from './styles'
import Card from './components/card'


const ShopSection = ({ title, description, products: { products } }) => {
    const index = products.length;
    return (
        <styles.Wrapper>
            <styles.Info>
                <styles.Title>{title}</styles.Title>
                <styles.Description>{description}</styles.Description>
                <styles.Button value="see all products" />
            </styles.Info>
            <styles.CardsWrap>
                {products.slice(index - 2, index).map(product =>
                    <Card product={product} />
                )}

            </styles.CardsWrap>

        </styles.Wrapper>
    );
};

export default ShopSection;