import React from 'react';
import * as styles from './styles'
import { Icon } from 'components/kit'
const Footer = ({ title }) => {
    let myGithubLink = "https://github.com/kelmag";
    return (
        <styles.Wrap>
            <styles.Info>
                <styles.Brand>
                    {title}
                </styles.Brand>
                <p>
                    We are one of the best bicycle companies in the world, We provide the best quality products of bicycle and no one can be compared to our service
                </p>
                <styles.Actions >
                    <a href={myGithubLink}>Guides</a>
                    <a href={myGithubLink}>Terms of Use</a>
                    <a href={myGithubLink}>Privacy Policy</a>
                </styles.Actions>
                <p>Copyright 2019 <a href={myGithubLink}> @kelmag</a> Bicycle company</p>
            </styles.Info>
            <styles.Links>
                <styles.Wrapper>
                    <styles.Title>
                        Quick links
                    </styles.Title>
                    <styles.Actions direction='column'>
                        <a href={myGithubLink}>Search</a>
                        <a href={myGithubLink}>Shipping and Delivery</a>
                        <a href={myGithubLink}>Payment Options</a>
                        <a href={myGithubLink}>Contact Us</a>
                    </styles.Actions>
                </styles.Wrapper>
                <styles.Wrapper>
                    <styles.Title>
                        About us
                    </styles.Title>
                    <styles.Actions direction='column'>
                        <a href={myGithubLink}>Our Story</a>
                        <a href={myGithubLink}>Maintenance</a>
                        <a href={myGithubLink}>Service</a>
                        <a href={myGithubLink}>Products</a>
                    </styles.Actions>
                </styles.Wrapper>
                <styles.SocialMedia>
                    <styles.Title>
                        Follow us
                </styles.Title>
                    <styles.Actions place="center" color="light" >
                        <a href={myGithubLink}><Icon value="fa-facebook fa-2x" /></a>
                        <a href={myGithubLink}><Icon value="fa-twitter fa-2x" /></a>
                        <a href={myGithubLink}><Icon value="fa-instagram fa-2x" /></a>
                    </styles.Actions>

                    <p>
                        Payments method
                </p>
                    <styles.Actions place="center" color="light" >
                        <a href={myGithubLink}><Icon value="fa-cc-paypal fa-2x" /></a>
                        <a href={myGithubLink}><Icon value="fa-cc-visa fa-2x" /></a>
                    </styles.Actions>
                </styles.SocialMedia>
            </styles.Links>
        </styles.Wrap>
    );
};

export default Footer;