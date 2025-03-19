import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darker-bg border-t border-neon-green/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/Athena logo.png"
              alt="Athena Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Join the ultimate gaming community at Bharatiya Vidyapeeth College of Engineering.
              Experience competitive gaming, events, and more!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-neon-green">About Us</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-neon-green">Events</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-neon-green">Our Team</a></li>
              <li><a href="/register" className="text-gray-400 hover:text-neon-green">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/athena_bvcoe?igsh=b21id29iMnZudmc2" className="text-gray-400 hover:text-neon-green">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/athena-bvcoe-a1603a2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-neon-green">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neon-green/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Athena Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;