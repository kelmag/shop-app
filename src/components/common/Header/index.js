import React from 'react';
import * as styles from './styles'
import { Icon } from '../../kit'

const Header = () => {
    return (
        <styles.Wrap >
            <styles.Search >
                <Icon value="fa-spin fa-spinner" />
            </styles.Search>
            <styles.NavBar ></styles.NavBar>
            <styles.Title ></styles.Title>
            <styles.Profile ></styles.Profile>
            <styles.Favorite ></styles.Favorite>
            <styles.Cart ></styles.Cart>
        </styles.Wrap>
    );
};

export default Header;