"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award, Sparkles } from "lucide-react"
import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-electric-200/30 to-neon-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
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
            About Us
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-electric-600 to-neon-600 bg-clip-text text-transparent">
              Zenovate Digital
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital strategists committed to delivering
            exceptional software solutions that drive business growth and innovation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and business success, Zenovate
              Digital has grown into a trusted partner for companies looking to transform their digital presence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team combines years of experience in software development, user experience design, and digital
              strategy to create solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-electric-600 to-neon-600 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : { width: 0 }}
                transition={{ delay: 1, duration: 1 }}
              />
              <span className="text-gray-500 font-medium">Innovation • Quality • Excellence</span>
            </div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="aspect-square bg-gradient-to-br from-electric-100 to-neon-100 rounded-2xl p-8 flex items-center justify-center"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-r from-electric-600 to-neon-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Lightbulb className="w-12 h-12 text-white" />
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Innovation First</h4>
                <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To empower businesses with innovative digital solutions that drive growth and success.",
              gradient: "from-electric-500 to-electric-600",
            },
            {
              icon: Users,
              title: "Our Team",
              description: "Expert developers, designers, and strategists working together to deliver excellence.",
              gradient: "from-neon-500 to-neon-600",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Staying ahead of technology trends to provide cutting-edge solutions.",
              gradient: "from-cyber-500 to-cyber-600",
            },
            {
              icon: Award,
              title: "Excellence",
              description: "Committed to delivering high-quality solutions that exceed expectations.",
              gradient: "from-sunset-500 to-sunset-600",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-electric-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
