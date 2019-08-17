import React, { useState } from 'react';
import * as styles from './styles'

const ShopByPartSection = ({ title, bikes: { bikes } }) => {
    const [selectedImage, setSelected] = useState(0)

    return (
        <styles.Wrapper>
            <styles.Title>
                {title}
            </styles.Title>
            <styles.Wrapper>
                <img src={bikes[selectedImage].image} alt="" />
                <styles.Button value="See Products" />
            </styles.Wrapper>
            <styles.NavBar>
                {bikes.map((bike, index) =>
                    <li className={index == selectedImage && `active`}>
                        <button onClick={() => setSelected(index)}>
                            {bike.type}
                        </button>
                    </li>
                )}
            </styles.NavBar>
        </styles.Wrapper>
    );
};

export default ShopByPartSection;