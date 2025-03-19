import { motion } from 'framer-motion';

const Events = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-green">
            Game On! Explore Our Exciting Past Events
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  game: string;
  description: string;
  image: string;
  registerLink: string;
}

const EventCard = ({ title, date, game, description, image, registerLink }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * Math.random() }}
    className="bg-card-bg rounded-lg overflow-hidden border border-neon-green/20 hover:border-neon-green/40 transition-all"
  >
    <img src={image} alt={title} className="w-full h-70 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neon-green mb-2">{date}</p>
      <p className="text-gray-400 mb-4">{game}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <a
        href={registerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center bg-neon-green text-black py-2 rounded-md font-medium hover:bg-neon-green/90 transition-colors"
      >
        Veiw Events
      </a>
    </div>
  </motion.div>
);

const events = [
  {
    title: "Valorant Championship",
    date: "March 15, 2025",
    game: "Valorant",
    description: "5v5 tactical shooter tournament with prize pool of ₹50,000",
    image: "/images/Events/event6.jpg",
    registerLink: "https://www.instagram.com/reel/C4FavhCyCRn/?igsh=YTFwa25teGdrb2tj"
  },
  {
    title: "BGMI Battle Royale",
    date: "March 20, 2025",
    game: "BGMI",
    description: "Squad tournament with qualifiers and finals",
    image: "/images/Events/event5.jpg",
    registerLink: "https://www.instagram.com/p/C3Vcs7KShTt/?img_index=4&igsh=MTFmYWY3cWg2cHNpNg=="
  },
  {
    title: "FIFA World Cup",
    date: "March 25, 2025",
    game: "FIFA 24",
    description: "1v1 knockout tournament with live commentary",
    image: "/images/Events/event4.jpg",
    registerLink: "https://example.com/register/fifa1"
  },
  {
    title: "FIFA World Cup",
    date: "March 25, 2025",
    game: "FIFA 24",
    description: "1v1 knockout tournament with live commentary",
    image: "/images/Events/Event3.jpg",
    registerLink: "https://www.instagram.com/reel/CrX57Brs60p/?igsh=bGYwdG9pNjhzamk3"
  },
  {
    title: "FIFA World Cup",
    date: "March 25, 2025",
    game: "FIFA 24",
    description: "1v1 knockout tournament with live commentary",
    image: "/images/Events/event 2.jpg",
    registerLink: "https://www.instagram.com/p/CqM_r2_JCuC/?igsh=eWlhM3NueDR5dmIz"
  },
  {
    title: "FIFA World Cup",
    date: "March 25, 2025",
    game: "FIFA 24",
    description: "1v1 knockout tournament with live commentary",
    image: "/images/Events/event1.jpg",
    registerLink: "https://www.instagram.com/p/CqM_oKhpdpp/?igsh=MXhxOGY3dWliZTd4eA=="
  },
];

export default Events;