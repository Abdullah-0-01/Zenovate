"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-electric-500/10 to-neon-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-electric-400 to-neon-400 bg-clip-text text-transparent mb-4 block"
            >
              Zenovate Digital
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into powerful digital solutions with expert development, design, and innovation.
            </p>
            <div className="flex space-x-4">
              {[ 
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577859735954", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zenovate-digital-a16350374/", color: "hover:bg-blue-700" },
                { icon: Instagram, href: "https://www.instagram.com/zenovatedigital/", color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["home", "about", "services", "testimonials", "contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors capitalize"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "E-commerce Solutions",
                "Landing Pages",
                "Web Applications",
                "AI Chatbot",
                "and many more",
              ].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-electric-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">zenovatedigital@gmail.com</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 text-electric-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+92 321 1166413</p>
                </div>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-electric-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Karachi, Pakistan</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* New Global Presence Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Global Presence</h3>
            <p className="text-gray-300 mb-4">
              Proudly serving clients in over 15 countries worldwide, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm leading-relaxed max-h-48 overflow-y-auto">
              {[
                "Kuwait",
                "United Kingdom",
                "Germany",
                "United States",
                "Canada",
                "Australia",
                "United Arab Emirates",
                "Saudi Arabia",
                "France",
                "Netherlands",
                "Sweden",
                "Singapore",
                "India",
                "Pakistan",
                "Brazil",
              ].map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-300 text-sm italic">
              Delivering tailored digital solutions across diverse markets with local expertise and global reach.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Zenovate Digital. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
