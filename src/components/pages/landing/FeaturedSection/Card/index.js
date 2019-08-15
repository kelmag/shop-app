import React from 'react';
import * as styles from './styles'

export default ({ product, ...props }) => {
    return (
        <styles.Wrapper {...props}>
            <styles.ProductInfo>
                <styles.Wrap >
                    <div>
                        <styles.Category>{product.category}</styles.Category>
                        <styles.Name>{product.name}</styles.Name>
                    </div>
                    <styles.ImgWrapper className="square-img" >
                        <img src={product.image} alt="" />
                    </styles.ImgWrapper>
                </styles.Wrap>
                <styles.Action>
                    <styles.Buttons>
                        <styles.BuyButton value="Buy" icon="fa-shopping-cart" />
                        <styles.LoveButton icon="fa-heart-o" />
                    </styles.Buttons>
                    <styles.Price className="price">
                        <p>
                            From ${product.price}
                        </p>
                    </styles.Price>
                </styles.Action>
            </styles.ProductInfo>
            <styles.ImgWrapper className="normal-img" >
                <img src={product.image} alt="" />
            </styles.ImgWrapper>
        </styles.Wrapper>
    );
};

