import React from 'react';
import './style.css';

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
        </div>
    )
}

export default App;