import React from 'react';
import Layout from '../templates/landing';
import {
    AboutSection,
    ArticleSection,
    FeaturedSection,
    QuoteSection,
    ShopSection,
    SocialMediaSection,
    SpecificShopSection,
    SubscribeSection,
    Swipper,
} from '../components/pages/landing'

const Landing = () => {
    return (
        <Layout>
            <Swipper
                title="Awesome bicycle products"
                button="More info"
                right
            />
            <AboutSection />
            <FeaturedSection />
            <ArticleSection />
            <ShopSection />
            <QuoteSection />
            <SocialMediaSection />
            <SpecificShopSection />
            <SubscribeSection />
        </Layout>
    );
};

export default Landing;