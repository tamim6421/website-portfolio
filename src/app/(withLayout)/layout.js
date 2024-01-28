import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
          <Footer></Footer>
        </div>
    );
};

export default Layout;