import React, { useContext } from 'react';
import { ModalContext } from 'context/ModalContext'
import * as styles from './styles'
import { Icon } from '../../kit'

const Header = ({ title }) => {
    const { setDisplayModal } = useContext(ModalContext);
    return (
        <styles.Wrap >
            <styles.Mobile >
                {title}
            </styles.Mobile>
            <styles.Container >
                <styles.Search onClick={() => { setDisplayModal(true) }}>
                    <Icon value="fa-search" />
                </styles.Search>
                <styles.NavBar onClick={() => { setDisplayModal(true) }}>
                    <Icon value="fa-bars" />
                    <span>Shop Category</span>
                </styles.NavBar>
                <styles.Title >
                    {title}
                </styles.Title>
                <styles.Profile onClick={() => { setDisplayModal(true) }}>
                    <Icon value="fa-user-o" />
                </styles.Profile>
                <styles.Favorite onClick={() => { setDisplayModal(true) }}>
                    <Icon value="fa-heart-o" />
                </styles.Favorite>
                <styles.Cart icon="fa-shopping-cart" value="1" />
            </styles.Container>
        </styles.Wrap>
    );
};

export default Header;