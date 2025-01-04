import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Pasionate studend learning new technologies and programming languages
        </p>
      </div>
    </motion.section>
  )
}

export default Hero 