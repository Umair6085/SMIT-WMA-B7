import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Blogs from '../../components/blogs/Blogs'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Blogs />
        <Footer />
    </>
  )
}
