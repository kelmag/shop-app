import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { title } from 'data/config'

const Layout = ({ children }) => {
    return (
        <div>
            <Header title={title}></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;