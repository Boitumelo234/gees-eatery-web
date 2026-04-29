import { useState } from 'react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">Gee's <span>Eatery</span></div>
                <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
                <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}