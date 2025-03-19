import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darker-bg border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/Athena logo.png"
                alt="Athena Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-neon-green">ATHENA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink to="/register" className="bg-neon-green text-black hover:bg-neon-green/90">
                Join Us
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neon-green hover:text-neon-green/80"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink to="/team" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
            <MobileNavLink to="/register" onClick={() => setIsOpen(false)} className="bg-neon-green text-black">
              Join Us
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

import { ReactNode } from 'react';

const NavLink = ({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium hover:text-neon-green transition-colors ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick, className = '' }: { to: string; children: ReactNode; onClick: () => void; className?: string }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-neon-green transition-colors ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;