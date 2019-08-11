import React from 'react';
import * as styles from './styles'
import product1 from 'images/about/product1.jpg';
import product2 from 'images/about/product2.png';
import ImgContainer from './components/ImgContainer'

const AboutSection = ({ title, description, button }) => {
    return (
        <styles.Wrap>
            <styles.Content>
                <styles.Title>{title}</styles.Title>
                <styles.Description>{description}</styles.Description>
                <styles.Button value={button} />
            </styles.Content>
            <ImgContainer images={[product2, product1]} />
        </styles.Wrap>
    );
};

export default AboutSection;