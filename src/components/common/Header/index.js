import React from 'react';
import * as styles from './styles'
import { Icon } from '../../kit'

const Header = ({ title }) => {
    return (
        <styles.Wrap >
            <styles.Mobile >
                {title}
            </styles.Mobile>
            <styles.Container >
                <styles.Search >
                    <Icon value="fa-search" />
                </styles.Search>
                <styles.NavBar >
                    <Icon value="fa-bars" />
                    <span>Shop Category</span>
                </styles.NavBar>
                <styles.Title >
                    {title}
                </styles.Title>
                <styles.Profile >
                    <Icon value="fa-user-o" />
                </styles.Profile>
                <styles.Favorite >
                    <Icon value="fa-heart-o" />
                </styles.Favorite>
                <styles.Cart icon="fa-shopping-cart" value="1" />
            </styles.Container>
        </styles.Wrap>
    );
};

export default Header;