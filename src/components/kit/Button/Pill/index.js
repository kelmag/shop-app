import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'

const Pill = ({ icon, value, right, left, className, ...props }) => {
    const { setDisplayModal } = useContext(ModalContext);
    return (
        <styles.Wrap right={right} left={left} className={className} {...props} onClick={() => { setDisplayModal(true) }}>
            <i className={"fa " + icon}></i>
            {value}
        </styles.Wrap>)

};

export default Pill;