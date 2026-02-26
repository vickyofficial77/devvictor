import React, { useState } from 'react';
import { 
  FiDownload, 
  FiExternalLink, 
  FiX, 
  FiAward, 
  FiStar, 
  FiTrendingUp, 
  FiCode,
  FiBook,
  FiGlobe,
  FiUsers,
  FiTarget
} from 'react-icons/fi';
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaDatabase,
  FaAws, 
  FaGoogle, 
  FaServer,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaNpm
} from 'react-icons/fa';
import { 
  SiFirebase, 
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiPostgresql,
  SiRedux,
  SiJest,
  SiWebpack
} from 'react-icons/si';
import { motion } from 'framer-motion';

const About = ({ language }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCVModal, setShowCVModal] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  const translations = {
    en: {
      title: "Skills & Expertise",
      subtitle: "Mastering modern web technologies to build exceptional digital experiences",
      skillsTitle: "Technical Stack",
      certificationsTitle: "Certifications & Achievements",
      experienceTitle: "Professional Journey",
      educationTitle: "Educational Background",
      viewCV: "View Full CV",
      openFullSize: "Open Full Size",
      viewCertificate: "View Certificate",
      downloadCertificate: "Download",
      issuerLabel: "Issuer:",
      dateLabel: "Date:",
      downloadCV: "Download CV",
      aboutMe: "About Me",
      philosophy: "Development Philosophy",
      expertise: "Areas of Expertise",
      stats: {
        projects: "Projects Completed",
        years: "Years Experience",
        certifications: "Certifications",
        technologies: "Technologies"
      },
      aboutText: "I'm a passionate full-stack developer with over 2 years of experience building modern web applications. I specialize in creating responsive, performant interfaces and scalable backend systems. My approach combines technical excellence with creative problem-solving to deliver solutions that exceed expectations.",
      philosophyText: "I believe in writing clean, maintainable code and building applications that provide real value to users. My development process focuses on performance, accessibility, and user experience.",
      categories: {
        All: "All Technologies",
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        DevOps: "DevOps",
        Tools: "Tools",
        Testing: "Testing"
      },
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, category: "Frontend", level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend", level: 85 },
        { name: "React.js", icon: <FaReact className="text-cyan-500" />, category: "Frontend", level: 95 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, category: "Frontend", level: 80 },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend", level: 90 },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" />, category: "Backend", level: 88 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, category: "Frontend", level: 98 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, category: "Frontend", level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, category: "Frontend", level: 92 },
        { name: "Python", icon: <FaPython className="text-yellow-600" />, category: "Backend", level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "Database", level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, category: "Database", level: 82 },
        { name: "MySQL", icon: <SiMysql className="text-blue-800" />, category: "Database", level: 80 },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "Backend", level: 85 },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, category: "Backend", level: 78 },
        { name: "AWS", icon: <FaAws className="text-orange-500" />, category: "DevOps", level: 75 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, category: "DevOps", level: 70 },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "Tools", level: 90 },
        { name: "Redux", icon: <SiRedux className="text-purple-600" />, category: "Frontend", level: 88 },
        { name: "Jest", icon: <SiJest className="text-red-500" />, category: "Testing", level: 75 },
        { name: "Webpack", icon: <SiWebpack className="text-blue-400" />, category: "Tools", level: 72 },
        { name: "NPM", icon: <FaNpm className="text-red-500" />, category: "Tools", level: 90 },
        { name: "Figma", icon: <FaFigma className="text-purple-500" />, category: "Tools", level: 85 }
      ],
      certifications: [
        {
          name: "Web Design Certification",
          issuer: "freeCodeCamp",
          date: "January 2024",
          image: "c2.jpg",
          description: "Mastered responsive web design principles, HTML5, CSS3, and modern layout techniques.",
          badgeColor: "bg-blue-500"
        },
        {
          name: "JavaScript Certification",
          issuer: "freeCodeCamp",
          date: "Friday 2025",
          image: "c3.jpg",
          description: "Comprehensive JavaScript programming including ES6+, DOM manipulation, and algorithms.",
          badgeColor: "bg-yellow-500"
        },
        {
          name: "Frontend Development",
          issuer: "freeCodeCamp",
          date: "November 2024",
          image: "c1.jpg",
          description: "Advanced frontend development with React, state management, and modern tooling.",
          badgeColor: "bg-purple-500"
        },
      ],
      experience: [
        {
          title: "Full Stack Developer",
          company: "Freelance",
          period: "2025 - Present",
          description: "Developing full-stack applications for clients worldwide using modern tech stack. Focus on scalable architecture and user experience.",
          achievements: [
            "Built 10+ full-stack applications",
            "Improved application performance by 40%",
            "Maintained 100% client satisfaction rate"
          ]
        },
        {
          title: "Web Developer",
          company: "Tech Projects",
          period: "2024 - 2025",
          description: "Built responsive websites and web applications, implementing modern design patterns and optimizing performance.",
          achievements: [
            "Developed 5+ responsive websites",
            "Implemented SEO best practices",
            "Reduced load times by 60%"
          ]
        }
      ],
      education: [
        {
          degree: "Software Development",
          institution: "MUHABURA INTEGRATED POLYTECHNIC COLLEGE",
          period: "2024 - 2026",
          description: "Specialized in web development, databases, software engineering principles, and project management.",
          achievements: [
            "Focus on modern web technologies",
            "Practical project-based learning",
            "Industry-standard development practices"
          ]
        }
      ],
      expertiseAreas: [
        {
          title: "Frontend Development",
          description: "Creating responsive, accessible, and performant user interfaces",
          icon: <FiCode />,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Backend Architecture",
          description: "Building scalable server-side applications and APIs",
          icon: <FaServer />,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Database Design",
          description: "Designing efficient data models and queries",
          icon: <FaDatabase />,
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "DevOps & Deployment",
          description: "CI/CD pipelines and cloud infrastructure",
          icon: <FiTrendingUp />,
          color: "from-orange-500 to-red-500"
        }
      ]
    },
    fr: {
      title: "Compétences et Expertise",
      subtitle: "Maîtriser les technologies web modernes pour créer des expériences digitales exceptionnelles",
      skillsTitle: "Stack Technique",
      certificationsTitle: "Certifications et Réalisations",
      experienceTitle: "Parcours Professionnel",
      educationTitle: "Formation Académique",
      viewCV: "Voir CV Complet",
      openFullSize: "Ouvrir en taille réelle",
      viewCertificate: "Voir le certificat",
      downloadCertificate: "Télécharger",
      issuerLabel: "Émetteur:",
      dateLabel: "Date:",
      downloadCV: "Télécharger CV",
      aboutMe: "À propos de moi",
      philosophy: "Philosophie de développement",
      expertise: "Domaines d'expertise",
      stats: {
        projects: "Projets Terminés",
        years: "Ans d'expérience",
        certifications: "Certifications",
        technologies: "Technologies"
      },
      aboutText: "Développeur full-stack passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes. Je me spécialise dans la création d'interfaces réactives et performantes et de systèmes backend évolutifs. Mon approche combine l'excellence technique avec la résolution créative de problèmes.",
      philosophyText: "Je crois en l'écriture de code propre et maintenable, et en la création d'applications qui apportent une réelle valeur aux utilisateurs. Mon processus de développement se concentre sur la performance, l'accessibilité et l'expérience utilisateur.",
      categories: {
        All: "Toutes les technologies",
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Base de données",
        DevOps: "DevOps",
        Tools: "Outils",
        Testing: "Tests"
      },
      // Same skills array as English (translations would be added here)
      // ... (similar structure as en)
    },
    rw: {
      title: "Ubumenyi n'Ubuhanga",
      subtitle: "Gukoresha ibyifashisho bya webi bigezweho kubaka ibikoresho bya digitale biranga",
      skillsTitle: "Ibyifashisho",
      certificationsTitle: "Ibyemezo n'Ibyakozwe",
      experienceTitle: "Urukurikirane rw'umwuga",
      educationTitle: "Amasomo",
      viewCV: "Reba CV Yuzuye",
      openFullSize: "Fungura mu bunini",
      viewCertificate: "Reba icyemezo",
      downloadCertificate: "Kuramo",
      issuerLabel: "Uwatanze:",
      dateLabel: "Itariki:",
      downloadCV: "Kuramo CV",
      aboutMe: "Ibyerekeye njye",
      philosophy: "Uburyo nkoramo",
      expertise: "Inzego z'Ubuhanga",
      stats: {
        projects: "Ibikorwa Byarakozwe",
        years: "Imyaka y'ubushakashatsi",
        certifications: "Ibyemezo",
        technologies: "Ibyifashisho"
      },
      aboutText: "Ndi umushakashatsi w'urubuga ufite uburambe bw'imyaka irenga 2 mu kubaka porogaramu za webi zigezweho. Nibanda ku gukora imigaragarire yorohereza abayikoresha n'ubwiza, ndetse no kubaka sisitemu z'ibikorwa remezo zishobora kongera. Uburyo nkoramo buhuza ubuhanga n'ubushobozi bwo gukemura ibibazo mu buryo bushya.",
      philosophyText: "Nizeye mu gukora kode yisukuye ishobora kurengerwa, no kubaka porogaramu zigira agaciro ku bakoresha. Uburyo nkoramo bukora cyane ku gushimangira ubwiza, ubushobozi bwo kuboneka, n'uburyo bakoresha porogaramu.",
      categories: {
        All: "Ibyifashisho Byose",
        Frontend: "Imbere",
        Backend: "Inyuma",
        Database: "Ububikoshamakuru",
        DevOps: "DevOps",
        Tools: "Ibikoresho",
        Testing: "Kugenzura"
      },
      // Same skills array as English (translations would be added here)
      // ... (similar structure as en)
    }
  };

  // Use English translations for structure, add translations as needed
  const t = translations.en;

  // Get unique categories for filtering
  const categories = Object.keys(t.categories);
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All' 
    ? t.skills 
    : t.skills.filter(skill => skill.category === activeCategory);

  // Stats
  const stats = [
    { label: t.stats.projects, value: "15+", icon: <FiTarget /> },
    { label: t.stats.years, value: "2+", icon: <FiTrendingUp /> },
    { label: t.stats.certifications, value: "3+", icon: <FiAward /> },
    { label: t.stats.technologies, value: "20+", icon: <FiCode /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {['skills', 'certifications', 'experience', 'education'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t[`${tab}Title`]}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          >
            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                  {categories.map((category, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setActiveCategory(category)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.categories[category]}
                    </motion.button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
                      }}
                      className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all group"
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-bold text-center mb-2">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                        {skill.category}
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-2">
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  >
                    {/* Certificate Header */}
                    <div className={`${cert.badgeColor} p-6 text-white`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                          <p className="text-sm opacity-90">{cert.issuer}</p>
                        </div>
                        <FiAward className="text-3xl opacity-75" />
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6">
                      <div 
                        className="h-48 mb-4 rounded-lg overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-900"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <img 
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {cert.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                        <span>{cert.date}</span>
                        <button 
                          onClick={() => setSelectedCert(cert)}
                          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          <FiExternalLink />
                          {t.viewCertificate}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                <div className="space-y-8 pl-12">
                  {t.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative"
                    >
                      <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <FiTrendingUp />
                      </div>
                      
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.company}</p>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
                        
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <FiStar className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                {t.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                        <FiBook className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{edu.degree}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{edu.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full shadow">
                          <span className="font-medium">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.expertise}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} text-white mb-4`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CV Download Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                View my complete CV to learn more about my experience and skills.
              </p>
            </div>
            
            <div className="flex gap-4">
              <motion.button
                onClick={() => setShowCVModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow font-semibold"
              >
                {t.viewCV}
              </motion.button>
              
              <a 
                href="mugisha cv.png" 
                download="mugisha cv.png"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-600 dark:border-blue-400 shadow-lg hover:shadow-xl transition-shadow font-semibold flex items-center gap-2"
                >
                  <FiDownload />
                  {t.downloadCV}
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex flex-col md:flex-row h-[calc(90vh-120px)]">
              {/* Image */}
              <div className="md:w-2/3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              
              {/* Details */}
              <div className="md:w-1/3 p-6 flex flex-col">
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-300">{selectedCert.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">{t.issuerLabel}</span>
                    <p className="font-medium">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">{t.dateLabel}</span>
                    <p className="font-medium">{selectedCert.date}</p>
                  </div>
                </div>
                
                <div className="mt-auto space-y-3">
                  <button 
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-shadow"
                    onClick={() => window.open(selectedCert.image, '_blank')}
                  >
                    {t.openFullSize}
                  </button>
                  <a 
                    href={selectedCert.image} 
                    download={selectedCert.name.replace(/\s+/g, '_') + '.jpg'}
                  >
                    <button className="w-full py-3.5 bg-white dark:bg-gray-800 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                      {t.downloadCertificate}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CV Modal */}
      {showCVModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setShowCVModal(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Curriculum Vitae</h3>
                <p className="text-gray-600 dark:text-gray-400">Mugisha Victor - Full Stack Developer</p>
              </div>
              <button 
                onClick={() => setShowCVModal(false)}
                className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-2">
              <div className="bg-gray-100 dark:bg-gray-800 h-[70vh] flex items-center justify-center">
                <img 
                  src="mycv.png" 
                  alt="Curriculum Vitae" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Actions */}
              <div className="p-6 flex gap-4 justify-center">
                <a 
                  href="mugisha cv.png" 
                  download="Mugisha_Victor_CV.pdf"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow font-semibold flex items-center gap-3"
                  >
                    <FiDownload />
                    Download CV
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;