import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { content as en } from './content/en'
import { content as es } from './content/es'
import PageHead from './components/PageHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Programs from './components/Programs'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Renders the full page with the given content object.
// Shared by both / (English) and /es (Spanish) routes.
function Site({ content }) {
  return (
    <div className="min-h-screen font-sans">
      <PageHead seo={{ ...content.seo, lang: content.lang }} />
      <Navbar content={content.nav} />
      <Hero content={content.hero} />
      <TrustBar content={content.trust} />
      <Programs content={content.programs} />
      <About content={content.about} />
      <Testimonials content={content.testimonials} />
      <Pricing content={content.pricing} />
      <Contact content={content.contact} />
      <Footer content={content.footer} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<Site content={en} />} />
        <Route path="/es" element={<Site content={es} />} />
      </Routes>
    </BrowserRouter>
  )
}
