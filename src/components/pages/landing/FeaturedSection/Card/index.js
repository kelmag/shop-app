import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'

export default ({ product, ...props }) => {
    const { setDisplayModal } = useContext(ModalContext);
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
                        <styles.LoveButton icon="fa-heart-o" onClick={() => { setDisplayModal(true) }} />
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

