import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiDownload,
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiGlobe,
  FiSmartphone,
  FiFigma,
  FiSend,
  FiBriefcase,
  FiAward,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaMobileAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si';

const Home = ({ language }) => {
  const [activeTab, setActiveTab] = useState('skills');

  const translations = {
    en: {
      name: "MUGISHA Victor",
      title: "Full Stack Developer",
      tagline: "Crafting modern web, mobile, and intelligent digital solutions with clean code and scalable architecture.",
      hireMe: "Hire Me",
      viewWork: "View Portfolio",
      aboutTitle: "About Me",
      bio: "I'm a skilled full-stack developer focused on building modern web applications, mobile apps, backend systems, and smart software solutions. I combine clean UI, strong architecture, and practical problem-solving to deliver professional digital products.",
      skillsTitle: "Technical Stack",
      experienceTitle: "Professional Journey",
      educationTitle: "Education",
      viewCV: "Download CV",
      yearsExp: "Years Experience",
      inspiration: "Daily Motivation",
      quote: "Your work will fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
      author: "Steve Jobs",
      collaborators: "Technologies & Tools",
      hello: "Hi, I'm",
      expertise: "Expertise",
      projectsCompleted: "Projects Completed",
      clientSatisfaction: "Client Satisfaction",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile App Development",
      aiTools: "AI / Models",
      tools: "Tools & DevOps",
      currently: "Currently",
      working: "Building scalable products for web, mobile, and data-driven systems",
      featuredTitle: "What I Build",
      featuredItems: [
        "Responsive websites & dashboards",
        "Mobile apps with modern UI",
        "REST APIs & backend systems",
        "AI / model-powered solutions"
      ]
    },
    fr: {
      name: "MUGISHA Victor",
      title: "Développeur Full Stack",
      tagline: "Création de solutions web, mobile et intelligentes avec un code propre et une architecture évolutive.",
      hireMe: "Travaillons Ensemble",
      viewWork: "Voir Portfolio",
      aboutTitle: "À propos de moi",
      bio: "Je suis un développeur full-stack expérimenté spécialisé dans la création d’applications web modernes, d’applications mobiles, de systèmes backend et de solutions logicielles intelligentes. Je combine une interface propre, une architecture solide et une résolution pratique des problèmes.",
      skillsTitle: "Stack Technique",
      experienceTitle: "Parcours Professionnel",
      educationTitle: "Éducation",
      viewCV: "Télécharger CV",
      yearsExp: "Ans d'expérience",
      inspiration: "Motivation Quotidienne",
      quote: "Votre travail remplira une grande partie de votre vie, et la seule façon d’être vraiment satisfait est de faire ce que vous considérez comme un excellent travail.",
      author: "Steve Jobs",
      collaborators: "Technologies & Outils",
      hello: "Salut, je suis",
      expertise: "Expertise",
      projectsCompleted: "Projets Terminés",
      clientSatisfaction: "Satisfaction Client",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Développement Mobile",
      aiTools: "IA / Modèles",
      tools: "Outils & DevOps",
      currently: "Actuellement",
      working: "Développement de produits évolutifs pour le web, le mobile et les systèmes pilotés par les données",
      featuredTitle: "Ce que je développe",
      featuredItems: [
        "Sites web et tableaux de bord responsives",
        "Applications mobiles avec interface moderne",
        "APIs REST et systèmes backend",
        "Solutions alimentées par l’IA / les modèles"
      ]
    },
    rw: {
      name: "MUGISHA Victor",
      title: "Full Stack Developer",
      tagline: "Nkora ibisubizo bya web, mobile na systems zigezweho nkoresheje code isukuye n’architecture ishobora kwaguka.",
      hireMe: "Dukore Hamwe",
      viewWork: "Reba Portfolio",
      aboutTitle: "Ibyerekeye njye",
      bio: "Ndi full-stack developer ufite ubuhanga mu gukora web applications zigezweho, mobile apps, backend systems na software zikoresha ubwenge bw’ikoranabuhanga. Mvanga UI nziza, architecture ikomeye no gukemura ibibazo mu buryo bwa professional.",
      educationTitle: "Amashuri",
      viewCV: "Kuramo CV",
      yearsExp: "Imyaka y'uburambe",
      inspiration: "Inyigisho ya buri munsi",
      quote: "Akazi kawe kazuzura igice kinini cy’ubuzima bwawe, kandi uburyo bwiza bwo kunyurwa ni ugukora ibyo wemera ko ari akazi keza.",
      author: "Steve Jobs",
      collaborators: "Technologies & Tools",
      hello: "Hi, nitwa",
      expertise: "Ubuhanga",
      projectsCompleted: "Projects Zarangiye",
      clientSatisfaction: "Abakiliya Bishimye",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Gukora Mobile Apps",
      aiTools: "AI / Models",
      tools: "Tools & DevOps",
      currently: "Ubu",
      working: "Ndi gukora products zishobora kwaguka kuri web, mobile na systems zikoresha data",
      featuredTitle: "Ibyo nkora",
      featuredItems: [
        "Websites na dashboards bijyanye n'ibikoresho byose",
        "Mobile apps zifite UI nziza",
        "REST APIs na backend systems",
        "Solutions zikoresha AI / models"
      ]
    }
  };

  const t = translations[language] || translations.en;

  const skillGroups = useMemo(() => ({
    frontend: [
      { name: "React.js", icon: <FaReact className="text-sky-400" />, level: 95 },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 82 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 86 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 93 },
      { name: "HTML/CSS", icon: <FiCode className="text-orange-500" />, level: 96 }
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 88 },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" />, level: 84 },
      { name: "Python", icon: <FaPython className="text-yellow-500" />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" />, level: 81 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 84 },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600" />, level: 74 }
    ],
    mobile: [
      { name: "Flutter", icon: <SiFlutter className="text-sky-500" />, level: 80 },
      { name: "React Native", icon: <FaMobileAlt className="text-blue-500" />, level: 78 },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 84 }
    ],
    aiTools: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" />, level: 68 },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" />, level: 66 },
      { name: "scikit-learn", icon: <SiScikitlearn className="text-blue-500" />, level: 72 }
    ],
    tools: [
      { name: "AWS", icon: <FaAws className="text-yellow-600" />, level: 70 },
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 77 },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 91 },
      { name: "GitHub", icon: <FiGithub className="text-gray-700 dark:text-gray-300" />, level: 90 },
      { name: "Figma", icon: <FiFigma className="text-pink-500" />, level: 72 },
      { name: "Postman", icon: <FiSend className="text-orange-500" />, level: 79 }
    ]
  }), []);

  const experience = [
    {
      position: "Full Stack Developer",
      company: "Freelance",
      period: "2025 - Present",
      description: "Developing modern websites, dashboards, backend APIs, and client projects with focus on performance, scalability, and elegant user experience.",
      tags: ["React", "Node.js", "MongoDB", "PostgreSQL", "Tailwind"]
    },
    {
      position: "Web & App Developer",
      company: "Tech Projects",
      period: "2024 - 2025",
      description: "Built responsive websites and practical application interfaces, improved user flows, and delivered digital products with modern design patterns.",
      tags: ["JavaScript", "React", "Firebase", "UI/UX"]
    }
  ];

  const education = [
    {
      degree: "Software Development",
      institution: "MUHABURA INTEGRATED POLYTECHNIC COLLEGE (MIPC)",
      period: "2024 - 2026",
      details: "Focused on web development, software engineering, mobile solutions, and database systems."
    }
  ];

  const stats = [
    { label: t.yearsExp, value: "2+", desc: t.expertise },
    { label: t.projectsCompleted, value: "15+", desc: "Delivered" },
    { label: t.clientSatisfaction, value: "100%", desc: "Rate" }
  ];

  const tabLabels = {
    skills: t.skillsTitle,
    experience: t.experienceTitle,
    education: t.educationTitle
  };

  const categoryMeta = {
    frontend: {
      title: t.frontend,
      icon: <FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      bar: "from-blue-500 to-cyan-500"
    },
    backend: {
      title: t.backend,
      icon: <FiServer className="w-6 h-6 text-green-600 dark:text-green-400" />,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      bar: "from-green-500 to-emerald-500"
    },
    mobile: {
      title: t.mobile,
      icon: <FiSmartphone className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      iconBg: "bg-pink-100 dark:bg-pink-900/30",
      bar: "from-pink-500 to-rose-500"
    },
    aiTools: {
      title: t.aiTools,
      icon: <FiCpu className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      bar: "from-amber-500 to-orange-500"
    },
    tools: {
      title: t.tools,
      icon: <FiLayers className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      bar: "from-purple-500 to-indigo-500"
    }
  };

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/vickyofficial77", hover: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FiLinkedin, url: "https://www.linkedin.com/in/mugisha-victor-bb2844307/", hover: "hover:text-blue-600" },
    { icon: FiTwitter, url: "https://x.com/vicky_oofficial", hover: "hover:text-sky-500" },
    { icon: FiInstagram, url: "https://www.instagram.com/mugisha__victor/", hover: "hover:text-pink-600" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 mb-6 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t.currently} — {t.working}
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <span className="block text-lg md:text-xl text-blue-500 mb-3">{t.hello}</span>
                <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  {t.name}
                </span>
              </motion.h1>

              <motion.div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-500/20 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <FiBriefcase className="text-blue-500" />
                <span className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t.title}
                </span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                {t.tagline}
              </motion.p>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {t.featuredItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl"
                >
                  {t.hireMe}
                  <FiArrowRight />
                </motion.a>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur font-semibold"
                  >
                    {t.viewWork}
                    <FiGlobe />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 max-w-md mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 p-4 text-center shadow-sm"
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                {socialLinks.map(({ icon: Icon, url, hover }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl bg-white/75 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 ${hover} shadow-sm transition-colors`}
                    whileHover={{ y: -4, scale: 1.08 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ scale: 0.85, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 110, damping: 16, duration: 0.9 }}
            >
              <motion.div
                className="absolute -top-8 -left-2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] overflow-hidden rounded-[2rem] border border-white/40 dark:border-gray-700/70 shadow-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur">
                  <img
                    src="vick.jpg"
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaReact className="w-8 h-8 text-sky-400" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-xl"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <FaNodeJs className="w-8 h-8 text-green-600" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 hidden md:flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SiFlutter className="w-6 h-6 text-sky-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Mobile Apps</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About mini section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto rounded-[2rem] bg-white/75 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 shadow-xl backdrop-blur p-8 md:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t.aboutTitle}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
              {t.bio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="skills">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-14 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.skillsTitle}
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.entries(skillGroups).map(([key, items], groupIndex) => (
              <motion.div
                key={key}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-[1.75rem] p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className={`p-3 rounded-2xl ${categoryMeta[key].iconBg}`}>
                    {categoryMeta[key].icon}
                  </div>
                  <h3 className="text-2xl font-bold">{categoryMeta[key].title}</h3>
                </div>

                <div className="space-y-5">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${categoryMeta[key].bar}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['skills', 'experience', 'education'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-7 py-4 rounded-2xl font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm'
                  }`}
                >
                  {tabLabels[tab]}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-[2rem] p-8 md:p-10 shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Object.entries(skillGroups).flatMap(([category, items]) =>
                    items.map((item, index) => (
                      <motion.div
                        key={`${category}-${index}`}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.04 }}
                        className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-bold text-center mb-2">{item.name}</h3>
                        <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
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
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="relative pl-8"
                    >
                      <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                          <h3 className="text-xl md:text-2xl font-bold">{exp.position}</h3>
                          <span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-7 mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm"
                            >
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
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="rounded-[2rem] p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800/40"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
                          <FiLayers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{edu.institution}</p>
                          <p className="text-gray-600 dark:text-gray-300 leading-7 mb-4">{edu.details}</p>
                          <span className="inline-flex rounded-full px-4 py-2 bg-white dark:bg-gray-900 shadow-sm text-sm font-semibold">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    className="text-center pt-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <a href="mycv.png" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl"
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

      {/* Inspiration */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
              <FiGlobe className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">{t.inspiration}</h2>
            <div className="relative">
              <span className="absolute -top-8 -left-2 md:-left-8 text-6xl md:text-7xl text-blue-400/20">“</span>
              <p className="text-xl md:text-3xl italic text-gray-700 dark:text-gray-300 leading-relaxed px-4">
                {t.quote}
              </p>
              <span className="absolute -bottom-10 right-0 md:-right-4 text-6xl md:text-7xl text-blue-400/20">”</span>
            </div>
            <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mt-10">
              — {t.author}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
