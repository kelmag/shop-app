import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'

const Notify = ({ icon, value }) => {
    const { setDisplayModal } = useContext(ModalContext);
    return (
        <styles.Wrap onClick={() => { setDisplayModal(true) }}>
            <styles.Label>{value}</styles.Label>
            <i className={"fa " + icon}></i>
        </styles.Wrap>
    );
};

export default Notify;