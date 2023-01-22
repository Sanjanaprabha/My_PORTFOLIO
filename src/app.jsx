import React from 'react'
import Header from './components/header/header'
import Nav from'./components/nav/Nav'
import About from './components/about/about'
import Project from './components/project/project'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Services from './components/sevices/services'

const app = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Project/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default app