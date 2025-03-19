import { motion } from 'framer-motion';
import { TowerControl as GameController, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://media1.tenor.com/m/GiO4XNKti44AAAAd/retrowave-synthwave.gif')] bg-cover bg-center">
          <div className="absolut "></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.img
            src="/images/Athena logo.png"
            alt="Athena Logo"
            className="w-40 h-48 mx-auto mb-8 animate-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 animate-glow text-neon-red"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ATHENA SOCIETY
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to Bharatiya Vidyapeeth College of Engineering's Premier Gaming Community
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/register"
              className="bg-neon-green text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-neon-green/90 transition-colors"
            >
              Join the Ultimate Gaming Community!
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-darker-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GameController className="w-12 h-12 text-neon-green" />}
              title="Competitive Gaming"
              description="Participate in high-stakes tournaments across multiple game titles"
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-neon-green" />}
              title="Professional Events"
              description="Experience professionally organized gaming events and competitions"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-neon-green" />}
              title="Community"
              description="Join a thriving community of passionate gamers and tech enthusiasts"
            />
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">Latest Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Valorant Tournament"
              date="March 15, 2025"
              image="/images/Events/event9.jpg"
            />
            <EventCard
              title="BGMI Championship"
              date="March 20, 2025"
              image="/images/Events/event8.jpg"
            />
            <EventCard
              title="Recruitment Drive"
              date="March 25, 2025"
              image="/images/Events/Event7.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    className="p-6 bg-card-bg rounded-lg border border-neon-green/20 hover:border-neon-green/40 transition-colors"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

interface EventCardProps {
  title: string;
  date: string;
  image: string;
}

const EventCard = ({ title, date, image }: EventCardProps) => (
  <motion.div
    className="rounded-lg overflow-hidden bg-card-bg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img src={image} alt={title} className="w-full h-80 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neon-green">{date}</p>
    </div>
  </motion.div>
);

export default Home;