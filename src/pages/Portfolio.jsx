// src/pages/Portfolio.js
import React, { useEffect } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

// ✅ LIVE + COMING SOON PROJECTS
const staticProjects = [
  // ✅ LIVE
  {
    id: 'ibicupuri',
    imageUrl: '/ibicupuri.png',
    liveDemo: 'https://ibicupuri.netlify.app/',
    githubRepo: 'https://github.com/username/ibicupuri',
    featured: true,
    year: '2025',
    status: 'live',
    showButtons: true,
  },
  {
    id: 'blueledger',
    imageUrl: '/blueledger.png',
    liveDemo: 'https://blue-ledger.netlify.app/',
    githubRepo: 'https://github.com/username/blue-leadger',
    featured: true,
    year: '2026',
    status: 'live',
    showButtons: true,
  },

  // ⏳ COMING SOON
  {
    id: 'social',
    imageUrl: '/social.jpg',
    liveDemo: null,
    githubRepo: null,
    featured: false,
    year: '2026',
    status: 'development',
    showButtons: false,
  },
  {
    id: 'commerce',
    imageUrl: '/commerce.jpg',
    liveDemo: null,
    githubRepo: null,
    featured: false,
    year: '2026',
    status: 'development',
    showButtons: false,
  },
];

// ✅ Text mapped by project id (no index mismatch issues)
const translations = {
  en: {
    title: 'My Digital Portfolio',
    subtitle: 'Live projects + upcoming products I’m building',
    statusLive: 'Live Project',
    statusDev: 'In Development',
    comingSoon: 'Coming Soon',
    projectsCount: 'total projects',
    liveCount: 'live projects',
    description:
      'Explore my portfolio. Ibicupuri and BlueLedger are live and available for demo. More projects are in active development and will launch soon.',
    viewDemo: 'Live Demo',
    viewCode: 'Source Code',
    ctaTitle: 'Interested in Collaborating?',
    ctaText:
      'You can explore my live projects now. If you need a similar system built for your business or school, reach out.',
    ctaButton: 'View Live Projects',
    projects: {
      ibicupuri: {
        title: 'Ibicupuri Educational Platform',
        description:
          'A deployed educational platform that provides students with access to past exam papers, study materials, and progress tracking. Built with React and Firebase for real-time updates.',
        challenge:
          'Delivering a smooth experience for students with different devices and internet conditions.',
        highlight: 'Live and actively used by students.',
      },
      blueledger: {
        title: 'BlueLedger — Stock Management System',
        description:
          'A live inventory system with Admin and Worker dashboards. Admin manages products and workers; workers update stock and mark items sold. Built for real business workflows.',
        challenge:
          'Building secure role-based access (admin vs worker) while keeping data accurate and the UI simple.',
        highlight: 'Live demo available — responsive & production-ready.',
      },
      social: {
        title: 'Social Analytics Platform',
        description:
          'A social media analytics tool under development. Planned features include engagement tracking, sentiment insights, and performance dashboards.',
        challenge:
          'Handling large-scale data efficiently and presenting insights in a clean UI.',
        highlight: 'Coming soon (in development).',
      },
      commerce: {
        title: 'E-Commerce Solution',
        description:
          'A full-stack e-commerce platform in development. Planned modules include inventory, orders, customer analytics, and payment integration.',
        challenge:
          'Designing for scalability and reliability during high traffic periods.',
        highlight: 'Coming soon (in development).',
      },
    },
  },

  fr: {
    title: 'Mon Portfolio Numérique',
    subtitle: 'Projets live + projets à venir',
    statusLive: 'Projet Live',
    statusDev: 'En Développement',
    comingSoon: 'Bientôt',
    projectsCount: 'projets totaux',
    liveCount: 'projets live',
    description:
      'Découvrez mon portfolio. Ibicupuri et BlueLedger sont disponibles en live. D’autres projets sont en développement et seront lancés prochainement.',
    viewDemo: 'Démo Live',
    viewCode: 'Code Source',
    ctaTitle: 'Intéressé(e) par une collaboration ?',
    ctaText:
      'Vous pouvez tester mes projets live maintenant. Si vous voulez une solution similaire, contactez-moi.',
    ctaButton: 'Voir les Projets Live',
    projects: {
      ibicupuri: {
        title: 'Plateforme Éducative Ibicupuri',
        description:
          "Plateforme éducative déployée offrant l’accès aux examens passés, ressources d’étude et suivi des progrès. React + Firebase (temps réel).",
        challenge:
          "Assurer performance et accessibilité selon les appareils et la connexion.",
        highlight: 'Live et utilisée par des étudiants.',
      },
      blueledger: {
        title: 'BlueLedger — Gestion de Stock',
        description:
          "Système d’inventaire live avec tableaux Admin et Employé. L’admin gère produits et employés; l’employé met à jour le stock et marque vendu.",
        challenge:
          "Mettre en place les rôles (admin vs employé) avec données fiables et UI simple.",
        highlight: 'Démo live disponible — prêt production.',
      },
      social: {
        title: "Plateforme d'Analyse Sociale",
        description:
          "Outil d'analyse des réseaux sociaux en développement : engagement, sentiment, tableaux de performance.",
        challenge:
          "Traiter un grand volume de données et afficher des insights clairs.",
        highlight: 'Bientôt (en développement).',
      },
      commerce: {
        title: 'Solution E-Commerce',
        description:
          "Plateforme e-commerce en développement : stock, commandes, analytics client, paiements.",
        challenge:
          "Concevoir une solution scalable et stable en forte charge.",
        highlight: 'Bientôt (en développement).',
      },
    },
  },

  rw: {
    title: 'Porifoliyo Yanjye',
    subtitle: "Imishinga iri live + indi iri gutegurwa",
    statusLive: 'Umushinga Urakora',
    statusDev: 'Mu Gukora',
    comingSoon: 'Uzaza vuba',
    projectsCount: 'ibikorwa byose',
    liveCount: 'ibikorwa biriho',
    description:
      'Reba porifoliyo yanjye. Ibicupuri na BlueLedger biri live kandi wabireba. Indi mishinga iri gukorwa kandi izatangira vuba.',
    viewDemo: 'Live Demo',
    viewCode: "Kode y'Umwimerere",
    ctaTitle: 'Wifuza gukorana?',
    ctaText:
      'Reba projects ziri live ubu. Niba ushaka system imeze gutyo ikagukorera, nyandikira.',
    ctaButton: 'Reba Live Projects',
    projects: {
      ibicupuri: {
        title: "Urubuga rw'Uburezi Ibicupuri",
        description:
          "Urubuga rwahashyizweho rufasha abanyeshuri kubona past papers, materials n'ukurikirana iterambere (React + Firebase).",
        challenge:
          "Gukora neza ku bikoresho bitandukanye no ku internet itandukanye.",
        highlight: 'Live kandi rukoreshwa n’abanyeshuri.',
      },
      blueledger: {
        title: 'BlueLedger — Sisitemu yo Gucunga Stock',
        description:
          "Sisitemu iri live ifite Admin na Worker dashboards. Admin acunga products/workers; worker avugurura stock kandi akamarka sold.",
        challenge:
          "Gushyiraho security ya roles no gutuma amakuru aba accurate kandi UI ikoroha.",
        highlight: 'Live demo irahari — ready for business.',
      },
      social: {
        title: "Urubuga rwo Gusuzuma Social",
        description:
          "Igikoresho kiri gukorwa kizafasha gusuzuma engagement, sentiment n’andi makuru y’ikorwa.",
        challenge:
          "Gutunganya amakuru menshi no kuyerekana mu buryo bworoshye.",
        highlight: 'Uzaza vuba (mu itegurwa).',
      },
      commerce: {
        title: 'E-Commerce Solution',
        description:
          "Urubuga rwa e-commerce ruri gukorwa: inventory, orders, analytics, na payments.",
        challenge:
          "Gukora scalable kandi stable n’igihe traffic iri hejuru.",
        highlight: 'Uzaza vuba (mu itegurwa).',
      },
    },
  },
};

const Portfolio = ({ language }) => {
  const t = translations[language] || translations.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalProjects = staticProjects.length;
  const liveProjects = staticProjects.filter((p) => p.status === 'live').length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: 'beforeChildren', duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-4xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">{t.subtitle}</p>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm md:text-base">{t.description}</p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 dark:text-white">{totalProjects}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t.projectsCount}
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">{liveProjects}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t.liveCount}
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {totalProjects === 0 ? '0%' : `${Math.round((liveProjects / totalProjects) * 100)}%`}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Deployment Rate
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {staticProjects.map((project) => {
            const projectData = t.projects?.[project.id];
            const isLive = project.status === 'live';

            return (
              <motion.div
                key={`${language}-${project.id}`}
                variants={itemVariants}
                whileHover={{ y: isLive ? -8 : 0, scale: isLive ? 1.02 : 1 }}
                className="group relative"
              >
                <div className={`relative rounded-2xl overflow-hidden ${isLive ? 'ring-2 ring-blue-500/20' : 'opacity-85'}`}>
                  {/* Overlay for coming soon */}
                  {!isLive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-800/60 z-10 flex items-center justify-center">
                      <span className="text-white text-xl font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                        {t.comingSoon}
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-20">
                    {isLive ? (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <FiExternalLink className="text-xs" />
                        {t.statusLive}
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                        {t.statusDev}
                      </span>
                    )}
                  </div>

                  <PortfolioCard
                    title={projectData?.title || 'Project'}
                    description={projectData?.description || ''}
                    highlight={projectData?.highlight || ''}
                    // ✅ tags removed
                    tags={[]}
                    imageUrl={project.imageUrl}
                    liveDemo={project.liveDemo}
                    githubRepo={project.githubRepo}
                    year={project.year}
                    status={project.status}
                    featured={project.featured}
                    viewDemo={t.viewDemo}
                    viewCode={t.viewCode}
                    statusLive={t.statusLive}
                    statusDev={t.statusDev}
                    showButtons={project.showButtons}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t.ctaTitle}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">{t.ctaText}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all shadow-lg shadow-blue-500/20"
            onClick={() => (window.location.href = '/contact')}
          >
            {t.ctaButton}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
