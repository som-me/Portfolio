"use client";
import React, { useState, useRef } from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Squares from './Squares';

function Landing_page() {
    const ref = useRef(null)
    return (
        <div ref={ref}
            className="relative w-full h-screen bg-white overflow-hidden">
            <Navbar />
            <Hero />
            <Squares/>
        </div>
    )
}

export default Landing_page
