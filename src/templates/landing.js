import React from 'react';
import { Header, Footer, Container } from 'components/common';
import { title } from 'data/config'
import SadImage from 'images/icons/sad-face.svg';
import { Modal } from 'components/common';

const Layout = ({ children }) => {
    return (
        <Container>
            <Modal
                title="Oh, Sorry!"
                description="We haven't made a complete version of the website yet!"
                importantText="We're Sorry! maybe next time!"
                illustration={SadImage}
            />
            <Header title={title}></Header>
            {children}
            <Footer
                title={title}
            />
        </Container>
    );
};

export default Layout;