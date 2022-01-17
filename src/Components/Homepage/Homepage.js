import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Services from './Services/Services';
import ServicesTitle from './ServicesTitle/ServicesTitle';
import WhySelectUs from './WhySelectUs/WhySelectUs';

const Homepage = () => {
    return (
        <div>
            {/* home page note : navbar and footer in you find the shared component */}
            <Header></Header>
            <About></About>
            <WhySelectUs></WhySelectUs>
            <ServicesTitle></ServicesTitle>
            <Services></Services> 
        </div>
    );
};

export default Homepage;