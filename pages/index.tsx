import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/General/Footer'
import Header from '../components/General/Header'
import Companies from '../components/Home/Companies'
import ContactUs from '../components/Home/ContactUs'
import Features from '../components/Home/Features'
import LandingHero from '../components/Home/Landing/LandingHero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <LandingHero />
    <Companies />
    <Features />
    <ContactUs />
    <Footer />
    </>
  )
}

export default Home
