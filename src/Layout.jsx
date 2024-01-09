import React from 'react';
import Header from './componets/Header';
import { Outlet } from 'react-router-dom';
import Footer from './componets/Footer';

function Layout  () {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;