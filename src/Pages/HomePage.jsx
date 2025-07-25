import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductsPage from '../components/Products/ProductsPage.jsx';
import DesktopLayout from '../components/Desktop/DesktopLayout1.jsx';
import DesktopLayout2 from '../components/Desktop/DesktopLayout2.jsx';
import DesktopLayout3 from '../components/Desktop/DesktopLayout3.jsx';
import DesktopFooter from '../components/Desktop/DesktopFooter.jsx';
import AboutUs from '../components/About Us/AboutUs.jsx';
import MobileLayout from '../components/Mobile/MobileLayout.jsx';
import MobileLayout2 from '../components/Mobile/MobileLayout2.jsx';
import MobileLayout3 from '../components/Mobile/MobileLayout3.jsx';
import MobileFooter from '../components/Mobile/MobileFooter.jsx';
import MobileProductPage from '../components/Mobile/MobileProductPage.jsx';

const HomePage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className='w-full'>
            {isMobile ? (
                <>
                    <MobileLayout />
                    <MobileLayout2 />
                    <MobileProductPage />
                    <MobileLayout3 />
                    <AboutUs />
                    <MobileFooter />
                </>
            ) : (
                <>
                    <DesktopLayout />
                    <DesktopLayout2 />
                    <ProductsPage />
                    <DesktopLayout3 />
                    <AboutUs />
                    <DesktopFooter />
                </>
            )}
        </div>
    );
};

export default HomePage;
