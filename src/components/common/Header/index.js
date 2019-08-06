import React from 'react';
import * as styles from './styles'
import { Icon } from '../../kit'

const Header = () => {
    return (
        <styles.Wrap >
            <styles.Search >
                <Icon value="fa-search" />
            </styles.Search>
            <styles.NavBar >
                <Icon value="fa-bars" />
                <span>Shop Category</span>
            </styles.NavBar>
            <styles.Title >
                BICYCLE COMPANY
            </styles.Title>
            <styles.Profile >
                <Icon value="fa-user-o" />
            </styles.Profile>
            <styles.Favorite >
                <Icon value="fa-heart-o" />
            </styles.Favorite>
            <styles.Cart >
                <Icon value="fa-shopping-cart" />
            </styles.Cart>
        </styles.Wrap>
    );
};

export default Header;