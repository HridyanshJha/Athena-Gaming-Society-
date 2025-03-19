import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-green">
            Who We Are – The Heart of Gaming Excellence!
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-neon-green">Our Mission</h2>
            <p className="text-gray-300">
              Athena Society aims to foster a vibrant gaming community within Bharatiya Vidyapeeth College of Engineering,
              promoting competitive gaming, esports excellence, and technological innovation through gaming.
            </p>

            <h2 className="text-2xl font-bold text-neon-green">Our Vision</h2>
            <p className="text-gray-300">
              To become the leading collegiate gaming society in India, creating opportunities for students to excel in
              esports while developing valuable skills in leadership, teamwork, and event management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-neon-green">What We Do</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Organize competitive gaming tournaments</li>
              <li>• Host gaming workshops and training sessions</li>
              <li>• Facilitate networking with professional gamers</li>
              <li>• Promote esports culture in academia</li>
              <li>• Develop leadership through gaming events</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;