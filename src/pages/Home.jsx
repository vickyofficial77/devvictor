import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiDownload, FiArrowRight, FiCode, FiServer, FiDatabase, FiLayers, FiCpu, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiGraphql, SiTailwindcss } from 'react-icons/si';

const Home = ({ language }) => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const translations = {
    en: {
      name: "MUGISHA Victor",
      title: "Full Stack Developer",
      tagline: "Crafting digital experiences through clean code & innovative solutions",
      hireMe: "Hire Me",
      viewWork: "View Portfolio",
      aboutTitle: "About Me",
      bio: "I'm a passionate full-stack developer with over 2 years of experience building modern web applications. I specialize in creating responsive, performant interfaces with React and scalable backend systems with Node.js. My approach combines technical excellence with creative problem-solving to deliver solutions that exceed client expectations.",
      skillsTitle: "Technical Stack",
      experienceTitle: "Professional Journey",
      educationTitle: "Education",
      viewCV: "Download CV",
      yearsExp: "Years Experience",
      inspiration: "Daily Motivation",
      quote: "Your work will fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do",
      author: "Steve Jobs",
      collaborators: "Technologies & Tools",
      hello: "Hi, I'm",
      expertise: "Expertise",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & DevOps",
      currently: "Currently",
      working: "Building scalable web applications"
    },
    fr: {
      name: "MUGISHA Victor",
      title: "Développeur Full Stack",
      tagline: "Création d'expériences digitales avec un code propre et des solutions innovantes",
      hireMe: "Travaillons Ensemble",
      viewWork: "Voir Portfolio",
      aboutTitle: "À propos de moi",
      bio: "Développeur full-stack passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes. Je me spécialise dans la création d'interfaces réactives et performantes avec React et de systèmes backend évolutifs avec Node.js. Mon approche combine l'excellence technique avec la résolution créative de problèmes pour fournir des solutions qui dépassent les attentes des clients.",
      skillsTitle: "Stack Technique",
      experienceTitle: "Parcours Professionnel",
      educationTitle: "Éducation",
      viewCV: "Télécharger CV",
      yearsExp: "Ans d'expérience",
      inspiration: "Motivation Quotidienne",
      quote: "Votre travail remplira une grande partie de votre vie, et la seule façon d’être vraiment satisfait est de faire ce que vous croyez être un excellent travail. Et la seule façon de faire un excellent travail est d’aimer ce que vous faites.",
      author: "Steve Jobs",
      collaborators: "Technologies & Outils",
      hello: "Salut, je suis",
      expertise: "Expertise",
      projectsCompleted: "Projets Terminés",
      clientSatisfaction: "Satisfaction Client",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils & DevOps",
      currently: "Actuellement",
      working: "Développement d'applications web évolutives"
    },
    rw: {
      name: "MUGISHA Victor",
      title: "Umushakashatsi w'urubuga",
      tagline: "Kubaka ibikoresho bya digitale hakoreshejwe kode nziza n'ibisubizo bishya",
      hireMe: "Dukore Hamwe",
      viewWork: "Reba Porifoliyo",
      aboutTitle: "Ibyerekeye njye",
      bio: "Ndi umushakashatsi w'urubuga ufite uburambe bw'imyaka irenga 2 mu kubaka porogaramu za webi zigezweho. Nibanda ku gukora imigaragarire yorohereza abayikoresha (responsive, performant interfaces) hakoreshejwe React, ndetse no kubaka sisitemu z'ibikorwa remezo zishobora kongera (scalable backend systems) hakoreshejwe Node.js. Uburyo nkoramo buhuza ubuhanga n'ubushobozi bwo gukemura ibibazo mu buryo bushya, kugira ngo ntange ibisubizo birenga ibyo abakiriya bateganyaga.",
      skillsTitle: "Ibyifashisho",
      experienceTitle: "Urukurikirane",
      educationTitle: "Amasomo",
      viewCV: "Kuramo CV",
      yearsExp: "Imyaka y'ubushakashatsi",
      inspiration: "Inyigisho za buri munsi",
      quote: "Akazi kawe kazuzura igice kinini cy’ubuzima bwawe, kandi uburyo bwonyine bwo kwishimira koko ni gukora ibyo wemera ko ari akazi keza. Kandi uburyo bwonyine bwo gukora akazi keza ni gukunda ibyo ukora.",
      author: "Steve Jobs",
      collaborators: "Ibyifashisho n'ibikoresho",
      hello: "Mwaramutse, nitwa",
      expertise: "Ubuhanga",
      projectsCompleted: "Ibikorwa Byarakozwe",
      clientSatisfaction: "Abakiriya Barakishimiye",
      frontend: "Imbere",
      backend: "Inyuma",
      tools: "Ibikoresho & DevOps",
      currently: "Ubu",
      working: "Kubaka porogaramu za webi zishobora kongera"
    }
  };

  const t = translations[language] || translations.en;

  const skills = {
    frontend: [
      { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 95 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 90 },
      { name: "HTML/CSS", icon: <FiCode className="text-orange-500" />, level: 95 }
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 88 },
      { name: "Python", icon: <FaPython className="text-yellow-500" />, level: 78 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 80 },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 75 }
    ],
    tools: [
      { name: "AWS", icon: <FaAws className="text-yellow-600" />, level: 70 },
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 82 },
      { name: "Git", icon: <FiGithub className="text-gray-700" />, level: 90 }
    ]
  };

  const experience = [
    {
      position: "Full Stack Developer",
      company: "Freelance",
      period: "2025 - Present",
      description: "Developing full-stack applications for clients worldwide using modern tech stack. Focus on scalable architecture and user experience.",
      tags: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      position: "Web Developer",
      company: "Tech Projects",
      period: "2024 - 2025",
      description: "Built responsive websites and web applications, implementing modern design patterns and optimizing performance.",
      tags: ["JavaScript", "React", "Firebase"]
    }
  ];

  const education = [
    {
      degree: "Software Development",
      institution: "MUHABURA INTEGRATED POLYTECHNIC COLLEGE (MIPC)",
      period: "2024 - 2026",
      details: "Specialized in web development, databases, and software engineering principles."
    }
  ];

  const stats = [
    { label: t.yearsExp, value: "2+", desc: t.expertise },
    { label: t.projectsCompleted, value: "15+", desc: "Delivered" },
    { label: t.clientSatisfaction, value: "100%", desc: "Rate" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">{t.currently} {t.working}</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-lg md:text-xl text-blue-400 mb-4">
                  {t.hello}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {t.name}
                </span>
              </motion.h1>
              
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <FiCode className="text-blue-400" />
                <span className="text-xl text-gray-800 dark:text-gray-200">{t.title}</span>
              </motion.div>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t.tagline}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-xl flex items-center font-semibold group hover:shadow-blue-500/30 transition-shadow"
                >
                  {t.hireMe}
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.a
                  href="/portfolio"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-xl border border-gray-300 dark:border-gray-600 shadow-lg flex items-center font-semibold hover:bg-white/20 transition-all"
                >
                  {t.viewWork}
                  <FiGlobe className="ml-2" />
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-6 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-5 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: FiGithub, url: "https://github.com/vickyofficial77", color: "hover:text-gray-800 dark:hover:text-white" },
                  { icon: FiLinkedin, url: "https://www.linkedin.com/in/mugisha-victor-bb2844307/", color: "hover:text-blue-600" },
                  { icon: FiTwitter, url: "https://x.com/vicky_oofficial", color: "hover:text-sky-500" },
                  { icon: FiInstagram, url: "https://www.instagram.com/mugisha__victor/", color: "hover:text-pink-600" }
                ].map(({ icon: Icon, url, color }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 dark:text-gray-400 ${color} transition-colors p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-gray-600`}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8 
                }
              }}
            >
              {/* Animated Background Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              
              {/* Profile Container */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-3xl border-8 border-white/30 dark:border-gray-800/50 shadow-2xl w-72 h-72 md:w-96 md:h-96">
                  <img 
                    src="vick.jpg" 
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <FaReact className="w-8 h-8 text-blue-400" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  animate={{
                    y: [0, 10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }
                  }}
                >
                  <FaNodeJs className="w-8 h-8 text-green-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="skills">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.skillsTitle}
            </span>
          </motion.h1>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Card */}
            <motion.div 
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">{t.frontend}</h2>
              </div>
              <div className="space-y-6">
                {skills.frontend.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Backend Card */}
            <motion.div 
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiServer className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold">{t.backend}</h2>
              </div>
              <div className="space-y-6">
                {skills.backend.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Tools Card */}
            <motion.div 
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiCpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">{t.tools}</h2>
              </div>
              <div className="space-y-6">
                {skills.tools.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience/Education Tabs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* Animated Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['skills', 'experience', 'education'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all ${
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
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {Object.entries(skills).flatMap(([category, items]) =>
                    items.map((item, index) => (
                      <motion.div
                        key={`${category}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
                      >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-bold mb-2">{item.name}</h3>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                          {item.level}% Mastery
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-10 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-blue-500 to-purple-500 before:rounded-full"
                    >
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="relative">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                          <FiLayers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{edu.institution}</p>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.details}</p>
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full">
                            <span className="text-sm font-medium">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* CV Download */}
                  <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <a 
                      href="mycv.png" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-xl hover:shadow-blue-500/30 transition-shadow font-semibold"
                      >
                        <FiDownload />
                        {t.viewCV}
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <FiGlobe className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold mb-8">{t.inspiration}</h2>
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-6xl text-blue-400/20">"</div>
              <p className="text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div className="absolute -bottom-8 -right-8 text-6xl text-blue-400/20">"</div>
            </div>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-8">
              — {t.author}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;