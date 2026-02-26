// src/pages/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQItem from '../components/FAQItem';
import NewsletterForm from '../components/NewsletterForm';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};
const Services = ({ language }) => {
  const translations = {
    en: {
      title: "My Services",
      packagesTitle: "Development Packages",
      consultationTitle: "Consultation Services",
      testimonialsTitle: "Client Testimonials",
      faqTitle: "Frequently Asked Questions",
      newsletterTitle: "Stay Updated",
      packages: [
        {
          name: "Basic",
          price: "$90",
          features: [
            "1 Page Website",
            "Responsive Design",
            "Contact Form",
            "Basic SEO",
            "1 Revision"
          ],
          popular: false
        },
        {
          name: "Standard",
          price: "$200",
          features: [
            "Up to 5 Pages",
            "Responsive Design",
            "Contact Form",
            "Advanced SEO",
            "Content Management",
            "3 Revisions"
          ],
          popular: true
        },
        {
          name: "Premium",
          price: "$500",
          features: [
            "Unlimited Pages",
            "Responsive Design",
            "E-commerce Functionality",
            "Advanced SEO",
            "Content Management",
            "Custom Features",
            "Unlimited Revisions"
          ],
          popular: false
        }
      ],
      consultation: {
        price: "$15",
        description: "consultation session to discuss your project requirements, technical solutions, and development strategy.",
        features: [
          "Project analysis",
          "Technical guidance",
          "Development roadmap",
          "Q&A session"
        ]
      },
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "Marketing Director, TechStart",
          content: "MUGISHA Victor delivered our e-commerce platform ahead of schedule. His attention to detail and technical expertise exceeded our expectations.",
          rating: 5
        },
        {
          name: "Ruterana jeanluc",
          position: "CEO, UMURABYO TV",
          content: "The dashboard he created transformed how we track our social media performance. Highly recommended!",
          rating: 5
        },
        {
          name: "Ishimwe gisele",
          position: "Product Manager, Growth Inc.",
          content: "Working with MUGISHA Victor was a great experience. He understood our requirements perfectly and delivered an excellent solution.",
          rating: 4
        }
      ],
      faqs: [
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. A basic website takes 1-2 weeks, while larger applications may take 2-6 months."
        },
        {
          question: "Do you offer maintenance services?",
          answer: "Yes, I offer monthly maintenance packages that include updates, security checks, and technical support."
        },
        {
          question: "What payment methods do you accept?",
          answer: "I accept bank transfers, credit cards, PayPal, and other major payment methods."
        },
        {
          question: "Can I request changes after project completion?",
          answer: "Minor changes are included in the package for a limited time. Major changes would be quoted separately."
        }
      ]
    },
    fr: {
      title: "Mes Services",
      packagesTitle: "Forfaits de Développement",
      consultationTitle: "Services de Consultation",
      testimonialsTitle: "Témoignages de Clients",
      faqTitle: "Questions Fréquemment Posées",
      newsletterTitle: "Restez Informé",
      packages: [
        {
          name: "Basique",
          price: "$90",
          features: [
            "Site Web d'une page",
            "Design Responsive",
            "Formulaire de Contact",
            "SEO de base",
            "1 Révision"
          ],
          popular: false
        },
        {
          name: "Standard",
          price: "$200",
          features: [
            "Jusqu'à 5 pages",
            "Design Responsive",
            "Formulaire de Contact",
            "SEO avancé",
            "Gestion de contenu",
            "3 Révisions"
          ],
          popular: true
        },
        {
          name: "Premium",
          price: "$500",
          features: [
            "Pages illimitées",
            "Design Responsive",
            "Fonctionnalité E-commerce",
            "SEO avancé",
            "Gestion de contenu",
            "Fonctionnalités personnalisées",
            "Révisions illimitées"
          ],
          popular: false
        }
      ],
      consultation: {
        price: "$15",
        description: "consultation d'une heure pour discuter des exigences de votre projet, des solutions techniques et de la stratégie de développement.",
        features: [
          "Analyse de projet",
          "Conseils techniques",
          "Feuille de route de développement",
          "Session de questions-réponses"
        ]
      },
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "Directrice Marketing, TechStart",
          content: "MUGISHA Victor a livré notre plateforme e-commerce en avance sur le planning. Son attention aux détails et son expertise technique ont dépassé nos attentes.",
          rating: 5
        },
        {
          name: "Ruterana jeanluc",
          position: "PDG, UMURABYO TV",
          content: "Le tableau de bord qu'il a créé a transformé notre façon de suivre nos performances sur les médias sociaux. Hautement recommandé !",
          rating: 5
        },
        {
          name: "Ishimwe gisele",
          position: "Chef de Produit, Growth Inc.",
          content: "Travailler avec MUGISHA Victor a été une excellente expérience. Il a parfaitement compris nos exigences et a livré une excellente solution.",
          rating: 4
        }
      ],
      faqs: [
        {
          question: "Combien de temps prend un projet typique ?",
          answer: "Les délais des projets varient selon leur complexité. Un site web de base prend 1 à 2 semaines, tandis que les applications plus importantes peuvent prendre 2 à 6 mois."
        },
        {
          question: "Proposez-vous des services de maintenance ?",
          answer: "Oui, je propose des forfaits de maintenance mensuels qui incluent des mises à jour, des vérifications de sécurité et une assistance technique."
        },
        {
          question: "Quelles méthodes de paiement acceptez-vous ?",
          answer: "J'accepte les virements bancaires, les cartes de crédit, PayPal et d'autres méthodes de paiement principales."
        },
        {
          question: "Puis-je demander des modifications après la fin du projet ?",
          answer: "Les modifications mineures sont incluses dans le forfait pour une durée limitée. Les modifications majeures seraient facturées séparément."
        }
      ]
    },
    rw: {
      title: "Serivisi Zanjye",
      packagesTitle: "Ibiciro bya serivisi",
      consultationTitle: "Serivisi z’Inama n’Ubujyanama",
      testimonialsTitle: "Ibyavuzwe n'Abakiriya",
      faqTitle: "Ibibazo Byibazwa Akenshi",
      newsletterTitle: "Komeza Kumenya Amakuru",
      packages: [
        {
          name: "Iby'ibanze",
          price: "$90",
          features: [
            "Urupapuro rumwe rwa website",
    "Imigaragarire ihuza na telefone na desktop (Responsive Design)",
    "Fomu yo kuvugana (Contact Form)",
    "SEO y'ibanze (Basic SEO)",
    "Guhindura rimwe (1 Revision)"
          ],
          popular: false
        },
        {
          name: "Ibisanzwe",
          price: "$200",
          features: [
             "Uruhande rw'imbere kugeza ku mapaji 5 (Up to 5 Pages)",
    "Imigaragarire ihuza na telefone na desktop (Responsive Design)",
    "Fomu yo kuvugana (Contact Form)",
    "SEO igezweho (Advanced SEO)",
    "Gucunga ibikubiye mu rubuga (Content Management)",
    "Guhindura inshuro 3 (3 Revisions)"
          ],
          popular: true
        },
        {
          name: "Ibyiza cyane",
          price: "$500",
          features: [
            "Amapaji adafite umupaka (Unlimited Pages)",
    "Imigaragarire ihuza na telefone na desktop (Responsive Design)",
    "Imikorere ya E-commerce (E-commerce Functionality)",
    "SEO igezweho (Advanced SEO)",
    "Gucunga ibikubiye mu rubuga (Content Management)",
    "Ibiranga byihariye (Custom Features)",
    "Guhindura inshuro zose (Unlimited Revisions)"
          ],
          popular: false
        }
      ],
      consultation: {
        price: "15$",
        description: "Inama ku bisabwa n'umushinga wawe, ibisubizo by'ikoranabuhanga, hamwe na gahunda y'iterambere.",
        features: [
           "Isesengura ry'umushinga (Project analysis)",
    "Ubuyobozi bw'ikoranabuhanga (Technical guidance)",
    "Gahunda y'iterambere (Development roadmap)",
    "Ikiganiro cyo kubaza no gusubiza (Q&A session)"
        ]
      },
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "Umuyobozi wa Marketing, TechStart",
          content: "MUGISHA Victor yakoze urubuga rwacu rwa e-commerce mbere y’igihe cyateganyijwe. Uburyo yitaye ku bisobanuro byose hamwe n’ubuhanga bwe mu ikoranabuhanga byararenze ibyo twari twiteze.",
          rating: 5
        },
        {
          name: "Ruterana jeanluc",
          position: "Umuyobozi Mukuru, UMURABYO TV",
          content: "Dashboard yakoze yahinduye uburyo dukurikirana imikorere y’imbuga zacu nkoranyambaga. Turamugira inama cyane!",
          rating: 5
        },
        {
          name: "Ishimwe gisele",
          position: "Umuyobozi w'ibicuruzwa, Growth Inc.",
          content: "Gukorana na MUGISHA Victor byari uburambe bwiza. Yumvise neza ibyo twasabaga kandi atanze igisubizo cyiza cyane.",
          rating: 4
        }
      ],
      faqs: [
        {
          question: "Igihe kingana cy'umushinga bisanzwe?",
          answer: "Igihe cy'umushinga gitandukanye bitewe n'uburemere n'ingorane zacyo. Urubuga rw'ibanze rushobora kurangira mu byumweru 1-2, mugihe porogaramu nini zishobora gufata amezi 2-6."
        },
        {
          question: "Ese utanga serivisi zo kubungabunga urubuga?",
          answer: "Yego, ntanga packages z'ukwezi ku zirimo kuvugurura, kugenzura umutekano, no gutanga ubufasha bw'ikoranabuhanga."
        },
        {
          question: "Ni ubuhe buryo bwo kwishyura wemera?",
          answer: "Nemera kohereza amafaranga kuri banki, amakarita ya credit, PayPal, n'ubundi buryo bwose bukomeye bwo kwishyura."
        },
        {
          question: "Ese nshobora gusaba impinduka nyuma y'isozwa ry'umushinga?",
          answer: "Impinduka nto ziri muri package mu gihe gito. Impinduka nini zihabwa igiciro cyihariye."
        }
      ]
    }
  };

   const t = translations[language] || translations.en;

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1 
        variants={fadeIn}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        {t.title}
      </motion.h1>
      
      {/* Development Packages */}
      <motion.section 
        variants={itemVariants}
        className="mb-16"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-bold mb-8 text-center"
        >
          {t.packagesTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              <ServiceCard 
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
                hideServiceButton
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Consultation Services */}
      <motion.section 
        variants={itemVariants}
        className="mb-16"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-bold mb-8 text-center"
        >
          {t.consultationTitle}
        </motion.h2>
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            damping: 15
          }}
          className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              whileHover={{ 
                rotate: 5,
                transition: { duration: 0.3 } 
              }}
              className="bg-indigo-100 dark:bg-indigo-800 rounded-lg p-6 text-center min-w-[180px]"
            >
              <div className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">{t.consultation.price}</div>
              <div className="text-indigo-600 dark:text-indigo-200 mt-2">
                {language === 'en' ? 'per hour' : language === 'fr' ? 'par heure' : 'kwi saha'}
              </div>
            </motion.div>
            <div>
              <p className="mb-4">{t.consultation.description}</p>
              <ul className="space-y-2 mb-6">
                {t.consultation.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Testimonials */}
      <motion.section 
        variants={itemVariants}
        className="mb-16"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-bold mb-8 text-center"
        >
          {t.testimonialsTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 } 
              }}
            >
              <TestimonialCard 
                name={testimonial.name}
                position={testimonial.position}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* FAQ */}
      <motion.section 
        variants={itemVariants}
        className="mb-16"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-bold mb-8 text-center"
        >
          {t.faqTitle}
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {t.faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQItem 
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      {/* Newsletter */}
      <motion.section
        variants={itemVariants}
      >
        <motion.h2 
          variants={fadeIn}
          className="text-2xl font-bold mb-8 text-center"
        >
          {t.newsletterTitle}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 60
          }}
        >
          <NewsletterForm language={language} />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Services;