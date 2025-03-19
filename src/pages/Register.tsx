import { motion } from 'framer-motion';

const Register = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-green">
            Level Up! Join Athena Gaming Society
          </h1>

          <div className="bg-card-bg rounded-lg p-8 border border-neon-green/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-darker-bg border border-neon-green/20 rounded-md px-4 py-2 focus:outline-none focus:border-neon-green"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-darker-bg border border-neon-green/20 rounded-md px-4 py-2 focus:outline-none focus:border-neon-green"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-darker-bg border border-neon-green/20 rounded-md px-4 py-2 focus:outline-none focus:border-neon-green"
                />
              </div>

              <div>
                <label htmlFor="game" className="block text-sm font-medium mb-2">
                  Preferred Game
                </label>
                <select
                  id="game"
                  className="w-full bg-darker-bg border border-neon-green/20 rounded-md px-4 py-2 focus:outline-none focus:border-neon-green"
                >
                  <option value="">Select a game</option>
                  <option value="valorant">Valorant</option>
                  <option value="bgmi">BGMI</option>
                  <option value="fifa">FIFA</option>
                </select>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Preferred Role
                </label>
                <select
                  id="role"
                  className="w-full bg-darker-bg border border-neon-green/20 rounded-md px-4 py-2 focus:outline-none focus:border-neon-green"
                >
                  <option value="">Select a role</option>
                  <option value="player">Player</option>
                  <option value="organizer">Event Organizer</option>
                  <option value="content">Content Creator</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-neon-green text-black py-3 rounded-md font-medium hover:bg-neon-green/90 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;