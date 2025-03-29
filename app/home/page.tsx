"use client"

import React from 'react'
import Navbar from './Navbar'
import About from '../about/page'
import Skills from '../skills/page'
import FeaturedProjects from '../projects/page'
import Contact from '../contact/page'

export default function Home() {
    return (
        <div className='bg-gray-50'>
            <Navbar />
            <About />
            <Skills />
            <FeaturedProjects />
            <Contact />
        </div>
    )
}
