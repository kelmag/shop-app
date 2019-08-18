import React from 'react';
import * as styles from './styles'

export default ({ product }) => {
    return (
        <styles.Wrapper >
            <styles.ProductInfo>
                <styles.ImgWrapper >
                    <img src={product.image} alt="" />
                </styles.ImgWrapper>
                <styles.Name>{product.name}</styles.Name>
                <styles.Action>
                    <styles.Price className="price">
                        ${product.price}
                    </styles.Price>
                    <styles.BuyButton value="Buy" icon="fa-shopping-cart" />
                    <styles.LoveButton icon="fa-heart-o" />
                </styles.Action>
            </styles.ProductInfo>
        </styles.Wrapper>
    );
};

