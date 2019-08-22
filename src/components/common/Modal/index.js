import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'

const Modal = ({ title, description, importantText, illustration }) => {
    const { displayModal, setDisplayModal } = useContext(ModalContext);
    return displayModal && (
        <styles.Wrapper >
            <styles.Wrap>
                <styles.Img src={illustration} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
                <p><b>{importantText}</b></p>
                <styles.Button value="Okay" onClick={() => setDisplayModal(false)} />
            </styles.Wrap>
            <styles.Background onClick={() => setDisplayModal(false)} />
        </styles.Wrapper>
    );
};

export default Modal;