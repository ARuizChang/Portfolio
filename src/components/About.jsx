import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "RESTful APIs"
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center gradient-text mb-12">About Me</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/About.webp"
                alt="Profile"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">2+ Years</span>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold dark:text-white">
              Full Stack Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer focused on creating efficient and user-friendly web applications. 
              My approach combines clean code practices with modern design principles to deliver exceptional digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Specializing in the MERN stack, I've successfully built and deployed various web applications, 
              including e-commerce platforms and custom solutions. I'm constantly learning and implementing 
              new technologies to stay at the forefront of web development.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-semibold text-lg dark:text-white mb-2">Problem Solver</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about finding elegant solutions to complex technical challenges.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-semibold text-lg dark:text-white mb-2">Team Player</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Strong communicator who thrives in collaborative environments.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-semibold text-lg dark:text-white mb-2">Fast Learner</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Quick to master new technologies and adapt to changing requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 