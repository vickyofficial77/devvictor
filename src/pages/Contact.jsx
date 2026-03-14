import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiMail, FiPhone, FiMessageSquare, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = ({ language = "en" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const toastTimeoutRef = useRef(null);

  const phoneNumber = "+250787711111";
  const formattedPhone = "+250 787 711 111";
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const translations = {
    en: {
      title: "Get In Touch",
      description:
        "Have a project in mind? Want to discuss potential opportunities? Feel free to reach out using the form below or through my contact information.",
      formTitle: "Send me a message",
      nameLabel: "Your Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitButton: "Send Message",
      sending: "Sending...",
      contactTitle: "Contact Information",
      whatsapp: "Chat on WhatsApp",
      whatsappMessage:
        "Hello! I came from your portfolio and would like to chat.",
      socialTitle: "Connect with me",
      toastSuccess: "Message sent successfully.",
      toastError: "Something went wrong while sending the message.",
      successTitle: "Success",
      errorTitle: "Error",
      invalidEmail: "Please enter a valid email address.",
      requiredFields: "Please fill in all fields.",
      emailText: "Email",
      phoneText: "Phone",
      whatsappText: "WhatsApp",
      footerText: `Available for projects and collaborations • ${currentYear}`,
    },
    fr: {
      title: "Contactez-moi",
      description:
        "Vous avez un projet en tête ? Vous souhaitez discuter d'opportunités potentielles ? N'hésitez pas à me contacter en utilisant le formulaire ci-dessous ou via mes coordonnées.",
      formTitle: "Envoyez-moi un message",
      nameLabel: "Votre nom",
      emailLabel: "Adresse e-mail",
      subjectLabel: "Sujet",
      messageLabel: "Message",
      submitButton: "Envoyer le message",
      sending: "Envoi en cours...",
      contactTitle: "Informations de contact",
      whatsapp: "Discuter sur WhatsApp",
      whatsappMessage:
        "Bonjour! Je viens de votre portfolio et je voudrais discuter.",
      socialTitle: "Connectez-vous avec moi",
      toastSuccess: "Message envoyé avec succès.",
      toastError: "Une erreur est survenue lors de l'envoi.",
      successTitle: "Succès",
      errorTitle: "Erreur",
      invalidEmail: "Veuillez entrer une adresse e-mail valide.",
      requiredFields: "Veuillez remplir tous les champs.",
      emailText: "E-mail",
      phoneText: "Téléphone",
      whatsappText: "WhatsApp",
      footerText: `Disponible pour les projets et collaborations • ${currentYear}`,
    },
    rw: {
      title: "Mvugishe",
      description:
        "Ufite umushinga mu bitekerezo? Ushaka kuganira ku mahirwe ashoboka? Wumve utuje, ukoreshe fomu iri hasi cyangwa amakuru yanjye yo kuvugana.",
      formTitle: "Ohereza ubutumwa",
      nameLabel: "Izina ryawe",
      emailLabel: "Imeri",
      subjectLabel: "Umutwe",
      messageLabel: "Ubutumwa",
      submitButton: "Ohereza",
      sending: "Kohereza...",
      contactTitle: "Uburyo bwo kuvugana",
      whatsapp: "Vugana kuri WhatsApp",
      whatsappMessage:
        "Muraho! Naje kuri portfolio yawe ndashaka kuvugana nawe.",
      socialTitle: "Mvugishe",
      toastSuccess: "Ubutumwa bwoherejwe neza.",
      toastError: "Habaye ikibazo mu kohereza ubutumwa.",
      successTitle: "Byakunze",
      errorTitle: "Ikibazo",
      invalidEmail: "Andika imeri iboneye.",
      requiredFields: "Uzuza ibice byose bisabwa.",
      emailText: "Imeri",
      phoneText: "Telefone",
      whatsappText: "WhatsApp",
      footerText: `Witeguye imishinga n'ubufatanye • ${currentYear}`,
    },
  };

  const t = translations[language] || translations.en;

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(t.whatsappMessage)}`;

  const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_n7vx3fv";
  const OWNER_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || "template_jw5gxsj";
  const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "jvg9cG1CPiM8xRYlw";

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (type, text) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);

    setSubmitMessage({ type, text });

    toastTimeoutRef.current = setTimeout(() => {
      setSubmitMessage(null);
    }, 4000);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (
      !trimmedData.name ||
      !trimmedData.email ||
      !trimmedData.subject ||
      !trimmedData.message
    ) {
      showToast("error", t.requiredFields);
      return;
    }

    if (!isValidEmail(trimmedData.email)) {
      showToast("error", t.invalidEmail);
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name: trimmedData.name,
      email: trimmedData.email,
      from_name: trimmedData.name,
      from_email: trimmedData.email,
      subject: trimmedData.subject,
      message: trimmedData.message,
      reply_to: trimmedData.email,
      to_name: "Victor",
      language,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        OWNER_TEMPLATE_ID,
        templateParams,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      showToast("success", t.toastSuccess);
    } catch (error) {
      console.error("EmailJS error:", error);

      const errorText =
        error?.text || error?.message || t.toastError;

      showToast("error", `${t.toastError} ${errorText}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const cardMotion = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/vickyofficial77",
      label: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/mugisha-victor-bb2844307/",
      label: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/vicky_oofficial",
      label: "X",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2H21l-6.56 7.496L22.154 22H16.11l-4.734-6.207L5.95 22H3.192l7.017-8.017L1.846 2h6.198l4.279 5.645L18.244 2zm-.967 18.35h1.527L7.215 3.564H5.577L17.277 20.35z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/mugisha__victor/",
      label: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto px-4 py-12 relative"
    >
      <AnimatePresence>
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-6 right-6 z-50 min-w-[280px] max-w-sm rounded-xl px-5 py-4 shadow-2xl border backdrop-blur-md ${
              submitMessage.type === "success"
                ? "bg-green-500/95 text-white border-green-400"
                : "bg-red-500/95 text-white border-red-400"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-lg">
                {submitMessage.type === "success" ? "✅" : "⚠️"}
              </div>
              <div>
                <p className="font-semibold">
                  {submitMessage.type === "success"
                    ? t.successTitle
                    : t.errorTitle}
                </p>
                <p className="text-sm opacity-95 break-words">
                  {submitMessage.text}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={item} className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {t.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.div
            variants={cardMotion}
            whileHover={{ y: -4 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8"
          >
            <motion.h2 variants={item} className="text-2xl font-bold mb-6">
              {t.formTitle}
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={item}>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-900 transition-all duration-300 disabled:opacity-70"
                  placeholder={t.nameLabel}
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-900 transition-all duration-300 disabled:opacity-70"
                  placeholder={t.emailLabel}
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-900 transition-all duration-300 disabled:opacity-70"
                  placeholder={t.subjectLabel}
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-900 transition-all duration-300 resize-none disabled:opacity-70"
                  placeholder={t.messageLabel}
                  required
                />
              </motion.div>

              <motion.div variants={item}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-xl text-white font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                      />
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <FiSend />
                      {t.submitButton}
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <div>
          <motion.div variants={cardMotion} className="mb-8">
            <motion.h2 variants={item} className="text-2xl font-bold mb-6">
              {t.contactTitle}
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={item}
                whileHover={{ x: 6 }}
                className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-4">
                  <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.emailText}</h3>
                  <a
                    href="mailto:vickydeveloper200@gmail.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                  >
                    vickydeveloper200@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ x: 6 }}
                className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-4">
                  <FiPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.phoneText}</h3>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {formattedPhone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ x: 6 }}
                className="flex items-start bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl mr-4">
                  <FiMessageSquare className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t.whatsappText}</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    <FiMessageSquare className="mr-2" />
                    {t.whatsapp}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={cardMotion}>
            <motion.h2 variants={item} className="text-2xl font-bold mb-6">
              {t.socialTitle}
            </motion.h2>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -6, scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.p
              variants={item}
              className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            >
              {t.footerText}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;