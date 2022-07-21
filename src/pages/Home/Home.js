import React from 'react';
import DownloadApp from './DownloadApp';
import Header from './Header';
import './Home.css'
import NewsPortal from './NewsPortal';

const Home = () => {
    return (
        <div>
            <Header />
            <NewsPortal />
            <DownloadApp />
            
        </div>
    );
};

export default Home;