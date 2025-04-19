import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="dark-theme">
            <Header />
            <main>
                <h1>Welcome to the CP Handbook Resources</h1>
                <p>Explore a variety of resources to enhance your learning experience.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;