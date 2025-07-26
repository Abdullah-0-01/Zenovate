"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, ShoppingCart, Palette, Monitor, FileText, Plug, ArrowRight, Sparkles } from "lucide-react"
import { motion, Variants, easeOut } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailored web solutions built with modern technologies to meet your specific business requirements.",
    features: ["React & Next.js", "Node.js Backend", "Database Design", "Performance Optimization"],
    gradient: "from-electric-500 to-electric-600",
    hoverGradient: "from-electric-400 to-electric-700",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store development with secure payment integration and inventory management.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Order Management"],
    gradient: "from-neon-500 to-neon-600",
    hoverGradient: "from-neon-400 to-neon-700",
  },
  {
    icon: Palette,
    title: "AI Chatbot",
    description: "Intelligent conversational agents designed to enhance user engagement and automate support with natural language understanding.",
    features: [
      "Natural Language Processing (NLP)",
      "Contextual Conversations",
      "Multi-platform Integration",
      "Customizable Responses"
    ],
    gradient: "from-cyber-500 to-cyber-600",
    hoverGradient: "from-cyber-400 to-cyber-700",
  },
  {
    icon: Monitor,
    title: "Web Applications",
    description: "Scalable SaaS platforms, dashboards, and admin panels for business management.",
    features: ["SaaS Development", "Admin Dashboards", "Real-time Analytics", "User Management"],
    gradient: "from-sunset-500 to-sunset-600",
    hoverGradient: "from-sunset-400 to-sunset-700",
  },
  {
    icon: FileText,
    title: "Custom Landing Pages",
    description: "Design and development of high-converting, visually appealing landing pages tailored to your marketing goals.",
    features: ["Responsive Design", "A/B Testing", "SEO Friendly", "Conversion Optimization"],
    gradient: "from-electric-500 via-neon-500 to-cyber-500",
    hoverGradient: "from-electric-400 via-neon-400 to-cyber-400",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "Robust API development and third-party integrations for seamless connectivity.",
    features: ["RESTful APIs", "GraphQL", "Third-party Integration", "API Documentation"],
    gradient: "from-neon-500 via-cyber-500 to-sunset-500",
    hoverGradient: "from-neon-400 via-cyber-400 to-sunset-400",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  }

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-electric-50 to-neon-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-electric-300/30 to-neon-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-neon-100 text-electric-800 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Expertise
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="holographic">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm h-full group overflow-hidden relative">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-electric-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: featureIndex * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/AllService" passHref legacyBehavior>
              <a>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-electric-500 via-neon-500 to-cyber-500 hover:from-electric-600 hover:via-neon-600 hover:to-cyber-600 px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl pulse-glow border-0"
                >
                  Explore All Services
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
