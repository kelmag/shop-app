import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;