"use client"

import React from 'react'
import Navbar from './Navbar'
import About from '../about/page'
import Skills from '../skills/page'
import FeaturedProjects from '../projects/page'
import Contact from '../contact/page'
import Services from '../services/page'

export default function Home() {
    return (
        <div className='bg-gray-50'>
            <Navbar />
            <About />
            <Services />
            <Skills />
            <FeaturedProjects />
            <Contact />
        </div>
    )
}
