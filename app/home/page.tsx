"use client"

import React from 'react'
import About from '../about/page'
import Skills from '../skills/page'
import FeaturedProjects from '../projects/page'
import Services from '../services/page'
import ScrollToTop from '../ScrollToTop'

export default function Home() {
    return (
        <div className='bg-gray-50'>
            <About />
            <Services />
            <Skills />
            <FeaturedProjects />
            <ScrollToTop />
        </div>
    )
}
