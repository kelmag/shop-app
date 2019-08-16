import React from 'react';
import * as styles from './styles'
import Card from './Card'

const FeaturedSection = ({ title, products: { products } }) => {
    return (
        <div>
            <styles.Title>
                {title}
            </styles.Title>
            <styles.CardWrap direction='row'>
                <styles.CardWrap direction='column' flex="7" >
                    <Card className="rectangle" product={products[0]} color="lightGray" />
                    <styles.CardWrap direction='row'>
                        <Card className="square" flex="1" product={products[2]} color="darkRed" />
                        <Card className="square" flex="1" product={products[3]} color="gold" />
                    </styles.CardWrap>
                </styles.CardWrap>
                <Card className="portrait" flex="3" product={products[1]} color="darkerGray" />
            </styles.CardWrap>
        </div>
    );
};

export default FeaturedSection;