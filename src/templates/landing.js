import React from 'react';
import { Header, Footer, Container } from 'components/common';
import { title } from 'data/config'

const Layout = ({ children }) => {
    return (
        <Container>
            <Header title={title}></Header>
            {children}
            <Footer></Footer>
        </Container>
    );
};

export default Layout;