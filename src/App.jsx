import './App.css'
import './Responsive.css'
import AppSection from './components/AppSection'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import CounterSection from './components/CounterSection'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IntegrationSection from './components/IntegrationSection'
import Nav from './components/Nav'
import Pricing from './components/Pricing'
import StepsSection from './components/StepsSection'
import SubscribeSection from './components/SubscribeSection'
import { useState, useEffect } from "react";
import ScrollToTop from './components/small components/ScrollToTop'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {loading && (
        <div className="page-loader">
          <img
            src="https://html.themexriver.com/topapp/images/icons/preloader.svg"
            alt="Loading..."
            className="loader-img"
          />
        </div>
      )}

      <div className={`app-content ${loading ? "hidden" : ""}`}>
        <Nav />
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <StepsSection />
         <section id="how-it-works">
          <AppSection />
        </section>
        <CounterSection />
        <IntegrationSection />
        <section id="pricing">
          <Pricing />
        </section>
          <Faq />
         <section id="blog">
           <Blog />
        </section>
         <section id="contact">
            <ContactUs />
        </section>
        <SubscribeSection />
        <Footer />
      </div>

       <ScrollToTop />
       
    </>
  )
}

export default App
