import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'

export default ({ product }) => {
    const { setDisplayModal } = useContext(ModalContext);
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
                    <styles.BuyButton
                        value="Buy"
                        icon="fa-shopping-cart"
                        onClick={() => { setDisplayModal(true) }} />
                    <styles.LoveButton
                        icon="fa-heart-o"
                        onClick={() => { setDisplayModal(true) }} />
                </styles.Action>
            </styles.ProductInfo>
        </styles.Wrapper>
    );
};

