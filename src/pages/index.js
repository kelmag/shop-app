import React from 'react';
import Layout from 'templates/landing';
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
} from 'components/pages/landing'

const Landing = () => {
    return (
        <Layout>
            <Swipper
                title="Awesome bicycle products"
                button="More info"
            />
            <AboutSection
                title="Who we are"
                description="We are one of the best bicycle companies in the world, We provide the best quality products of bicycle and no one can be compared to our service because we are the best and we will be, we deliver all products with brand new quality and services. Any product is available in different colors and they are very good looking, we take very less delivery charge in comparison to other companies"
                button="More info"
            />
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