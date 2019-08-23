import React, { useContext } from 'react';
import * as styles from './styles'
import { ModalContext } from 'context/ModalContext'



const Pill = ({ icon, value, right, left, className, onClick, ...props }) => {
    const { setDisplayModal } = useContext(ModalContext);
    const handleClick = () => setDisplayModal(true)
    return (
        <styles.Wrap right={right} left={left} className={className} onClick={onClick || handleClick} {...props} >
            <i className={"fa " + icon}></i>
            {value}
        </styles.Wrap >)

};

export default Pill;