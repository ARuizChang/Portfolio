import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  // Get initial state from localStorage or default to true
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode !== null ? JSON.parse(savedMode) : true
  })

  // Update localStorage when darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="container mx-auto px-4">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App 