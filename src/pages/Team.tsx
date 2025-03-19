import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, TowerControl, Video, Megaphone, Coins, Component } from 'lucide-react';

const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredMembers = selectedDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-green">
            Meet the Squad Behind Athena
          </h1>
        </motion.div>

        {/* Department Filter */}
        <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
            <FilterButton
              label="All Teams"
              icon={<Users />}
              active={selectedDepartment === 'all'}
              onClick={() => setSelectedDepartment('all')}
            />
            <FilterButton
              label="Core Team"
              icon={<Trophy />}
              active={selectedDepartment === 'Core Team'}
              onClick={() => setSelectedDepartment('Core Team')}
            />
            <FilterButton
              label="Gaming"
              icon={<TowerControl />}
              active={selectedDepartment === 'gaming'}
              onClick={() => setSelectedDepartment('gaming')}
            />
            <FilterButton
              label="Events"
              icon={<Megaphone />}
              active={selectedDepartment === 'events'}
              onClick={() => setSelectedDepartment('events')}
            />
            <FilterButton
              label="Content"
              icon={<Video />}
              active={selectedDepartment === 'content'}
              onClick={() => setSelectedDepartment('content')}
            />
            <FilterButton
              label="Social Media"
              icon={<Component />}
              active={selectedDepartment === 'socialmedia'}
              onClick={() => setSelectedDepartment('socialmedia')}
            />
            <FilterButton
              label="Sponsorship"
              icon={<Coins />}
              active={selectedDepartment === 'sponsorship'}
              onClick={() => setSelectedDepartment('sponsorship')}
            />
            <FilterButton
              label="Design"
              icon={<TowerControl />}
              active={selectedDepartment === 'design'}
              onClick={() => setSelectedDepartment('design')}
            />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <TeamCard key={index} {...member} socials={Object.fromEntries(Object.entries(member.socials || {}).filter(([_, v]) => v))} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, icon, active, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
      active 
        ? 'bg-neon-green text-black' 
        : 'bg-card-bg text-gray-400 hover:text-neon-green border border-neon-green/20'
    }`}
  >
    {icon}
    {label}
  </button>
);

interface TeamCardProps {
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  achievements?: string[];
  socials?: { [key: string]: string };
}

const TeamCard = ({ name, role, department, image, bio, achievements, socials }: TeamCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * Math.random() }}
    className="bg-card-bg rounded-lg overflow-hidden border border-neon-green/20 hover:border-neon-green/40 transition-all group"
  >
    <div className="relative">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-neon-green mb-2">{role}</p>
      <p className="text-gray-200 text-sm mb-4">{department}</p>
      
      <div className="space-y-4 opacity-0 group-hover:opacity-90 transition-opacity">
        <p className="text-gray-300 text-sm">{bio}</p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-neon-green mb-2">Achievements</h4>
            <ul className="text-sm text-gray-400">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-1">• {achievement}</li>
              ))}
            </ul>
          </div>
        )}
        
        {socials && (
          <div className="flex gap-4 pt-2">
            {Object.entries(socials).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-green transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const teamMembers = [
  {
    name: "Kshitiz Gaur",
    role: "President",
    department: "Core Team",
    image: "/images/Kshitiz gaur.jpg",
    bio: "Gaming enthusiast with 5+ years of esports management experience. Leading Athena's vision of gaming excellence.",
    achievements: [
      "Founded college's first gaming society",
      "Organized Delhi's largest collegiate gaming tournament",
      "3x Valorant tournament champion"
    ],
    socials: {
      LinkedIn: "https://www.linkedin.com/in/kshitiz-gaur-3b03ba241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      Instagram: "https://www.instagram.com/_kshitiz_13?igsh=a29sMG56cjVtZ2tj"
    }
  },
  {
    name: "Abhisar Chaudhary",
    role: "Vice President",
    department: "Core Team",
    image: "/images/Abhisar.png",
    bio: "Strategy expert focusing on community building and event management. Passionate about making gaming inclusive.",
    achievements: [
      "Led 20+ successful gaming events",
      "Established inter-college gaming network",
      "Featured in Gaming Monthly magazine"
    ],
    socials: {
      LinkedIn: "https://www.linkedin.com/in/abhisar-choudhary-1b6917316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Instagram: "#https://www.instagram.com/abb.ysar?igsh=aDVuNXEzZGpkaGpz"
    }
  },
  {
    name: "Aryan Baghel",
    role: "General Secratary",
    department: "Core Team",
    image: "/images/Aryan Baghel .jpg",
    bio: "Assisting in overall society operations, event planning, and team coordination. Managing tasks efficiently while supporting the President and Core Team. Dedicated to enhancing the gaming experience for all.",
    achievements: [
      "Led 20+ successful gaming events",
      "Established inter-college gaming network",
      "Featured in Gaming Monthly magazine"
    ],
    socials: {
      LinkedIn: "https://www.linkedin.com/in/aryan-baghel-718816285",
      Instagram: "https://www.instagram.com/aryan_baghel97?igsh=MWIycWI5dnoyZW5lOA=="
    }
  },
  {
    name: "Hridyansh Jha",
    role: "Treasurer",
    department: "Core Team",
    image: "/images/MYPIC.jpg",
    bio: "Strategy expert focusing on community building and event management. Passionate about making gaming inclusive.",
    achievements: [
      "Led 20+ successful gaming events",
      "Established inter-college gaming network",
      "Featured in Gaming Monthly magazine"
    ],
    socials: {
      LinkedIn: "https://www.linkedin.com/in/hridyansh-j-b8a165260",
      Instagram: "#https://www.instagram.com/hridyansh.jha?igsh=dG5idmEwNnh1YW5w"
    }
  },
  {
    name: "Nipun Vasistha",
    role: "Joint Secretary",
    department: "Core Team",
    image: "/images/Nipun.jpg",
    bio: "Overseeing internal operations and ensuring smooth communication within the society. Supporting events, sponsorships, and content teams to maintain efficiency. Keeping the gaming community engaged and active.",
    achievements: [
      "Led 20+ successful gaming events",
      "Established inter-college gaming network",
      "Featured in Gaming Monthly magazine"
    ],
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Nitya Mahajan",
    role: "Content & Documentation Head",
    department: "content",
    image: "/images/Heads/Nitya Mahajan.PNG",
    bio: "Creating in-depth guides and strategies for competitive gaming. Specializing in meta analysis, team breakdowns, and gameplay tutorials. Helping gamers level up with well-researched content.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Aditya Sharma",
    role: "Content & Documentation Head",
    department: "content",
    image: "/images/Heads/Aditya sharma.jpg",
    bio: "Responsible for drafting and maintaining fair play policies for gaming events. Experienced in creating rulebooks, dispute guidelines, and event FAQs. Ensuring smooth and transparent tournament operations.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Anirudh Goel",
    role: "Event Management Head",
    department: "events",
    image: "/images/Heads/Anirudh.png",
    bio: "Leading the planning and execution of gaming tournaments and LAN parties. Ensuring smooth scheduling, fair play, and an electrifying atmosphere. Dedicated to making every event a grand success.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Sahil Sharma",
    role: "Event Management Head",
    department: "events",
    image: "/images/Heads/Sahil Sharma .jpg",
    bio: "Specializing in setting up seamless LAN and online gaming events. Handling registrations, match fixtures, and live streaming. Ensuring smooth, competitive, and engaging gameplay.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Khushi Khanna",
    role: "Sponsorship & Outreach Head",
    department: "sponsorship",
    image: "/images/Heads/Khushi khanna.png",
    bio: "Building strong partnerships to elevate our gaming society. Experienced in securing sponsorships, brand collaborations, and funding opportunities. Ensuring every event gets the backing it deserves.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Kartik Chhabara",
    role: "Sponsorship & Outreach Head",
    department: "sponsorship",
    image: "/images/Heads/Kartik.png",
    bio: "Creative director specializing in gaming content creation and social media management.",
    socials: {
      LinkedIn: "#",
      Instagram: "#",
    }
  },
  {
    name: "Aditya Gautam",
    role: "Technical & Game Development Head",
    department: "gaming",
    image: "/images/Heads/Aditya.jpg",
    bio: "Passionate about growing gaming events through sponsorships and partnerships. Crafting sponsorship proposals, handling negotiations, and ensuring sponsor satisfaction. Making every tournament financially sustainable.",
    socials: {
      LinkedIn: "#",
      Instagram: "#",
    }
  },
  {
    name: "Diptanshu",
    role: "Event Management Head",
    department: "events",
    image: "/images/Heads/diptanshu EM head.jpg",
    bio: "Ensuring our gaming society gets the financial and brand support it needs. Skilled in outreach, pitch decks, and maintaining sponsor relations. Powering the future of gaming events through strategic funding.",
    socials: {
      LinkedIn: "#",
      Instagram: "#"
    }
  },
  {
    name: "Somya Sharma",
    role: "Social Media Head",
    department: "socialmedia",
    image: "/images/Heads/Somya SM head.jpg",
    bio:"Bringing the gaming society to life through dynamic content and engagement. Managing social media platforms, event promotions, and community interactions. Ensuring our esports journey reaches a wider audience.",
    socials: {
      Instagram: "#",
      LinkedIn: "#"
    }
  },
  {
    name: "Somya Sharma",
    role: "Social Media Head",
    department: "socialmedia",
    image: "/images/Heads/sm head .jpg",
    bio:"Leading social media campaigns to promote tournaments and gaming events. Managing esports branding, live event coverage, and player spotlights. Elevating our online presence with powerful storytelling.",
    socials: {
      Instagram: "#",
      LinkedIn: "#"
    }
  },
];

export default Team;