import Head from 'next/head'

import Header from 'components/organisms/Header';
import Hero from 'components/organisms/Hero';
import AboutUs from 'components/organisms/AboutUs';
import OurExpertise from 'components/organisms/OurExpertise';
import Vision from 'components/organisms/Vision';
import Portfolio from 'components/organisms/Portfolio';
import Testimonial from 'components/organisms/Testimonial';
import Video from 'components/organisms/Video';
import Stats from 'components/organisms/Stats';
import Carousel from 'components/organisms/Carousel';
import OurTeam from 'components/organisms/OurTeam';
import PricingPlans from 'components/organisms/PricingPlans';
import Partners from 'components/organisms/Partners';
import ContactUs from 'components/organisms/ContactUs';
import Footer from 'components/organisms/Footer';

const Index = () => (
  <>
    <Head>
      <title>
        Page name | Page description | Website
      </title>
    </Head>
    <Header />
    <Hero />
    <AboutUs />
    <OurExpertise />
    <Vision />
    <Portfolio />
    {/* To rewrite */}
    <Testimonial />
    <Video />
    <Stats />
    <Carousel />
    <OurTeam />
    <PricingPlans />
    <Partners />
    <ContactUs />
    <Footer />
  </>
);

export default Index;
