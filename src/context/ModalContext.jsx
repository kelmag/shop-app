import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})


export default ({ children }) => {
    const [displayModal, setDisplayModal] = useState(false)

    return (
        <ModalContext.Provider value={{ displayModal, setDisplayModal }}>
            <ModalContext.Consumer >
                {children}
            </ModalContext.Consumer>
        </ModalContext.Provider>
    )
}