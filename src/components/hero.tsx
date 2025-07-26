"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Users, Sparkles, Rocket, Star, ArrowLeft } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { easeOut } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Motion variants
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

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",  // use string easing here instead of number array
    },
  },
};


  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",  // <-- string easing
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-50 via-neon-50 to-cyber-50" />
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-electric-400/30 to-neon-400/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}  // <-- string easing
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-neon-400/30 to-cyber-400/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}  // <-- string easing
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-sunset-400/20 to-electric-400/20 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}  // <-- string easing
        />
      </div>

      {/* Floating Icons */}
      <motion.div className="absolute top-20 left-20 text-electric-400" variants={itemVariants} animate="animate">
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div className="absolute top-40 right-32 text-neon-400" variants={itemVariants} animate="animate">
        <Rocket className="w-6 h-6" />
      </motion.div>
      <motion.div className="absolute bottom-32 left-32 text-cyber-400" variants={itemVariants} animate="animate">
        <Star className="w-7 h-7" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-100 via-neon-100 to-cyber-100 border border-electric-200 text-electric-800 text-sm font-medium mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
              <Zap className="w-4 h-4 mr-2" />
            </motion.div>
            Leading Software Development Agency
          </motion.div>

          {/* Heading */}
          <motion.h1
            // className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight"
            // variants={itemVariants}
             className="holographic inline-block text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
          
            Let&apos;s Build Your{" "}
            <motion.span
              className="holographic inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Digital Vision
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transform your ideas into{" "}
            <span className="font-semibold bg-gradient-to-r from-electric-600 to-neon-600 bg-clip-text text-transparent">
              powerful digital solutions
            </span>{" "}
            with our expert team of developers, designers, and innovators.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-electric-500 via-neon-500 to-cyber-500 hover:from-electric-600 hover:via-neon-600 hover:to-cyber-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl group pulse-glow border-0"
              >
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  Start Your Project
                </motion.span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>

          
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-gradient-to-r from-electric-500 via-neon-500 to-cyber-500 hover:from-electric-600 hover:via-neon-600 hover:to-cyber-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl group pulse-glow border-0"
              >
                
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  Explore Our Services
                </motion.span>
               
              </Button>
            </motion.div>
                {/* // onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} */}
            
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" variants={itemVariants}>
            {/* Projects */}
            <motion.div className="text-center group" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-500 to-electric-600 rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-electric-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-4xl font-bold bg-gradient-to-r from-electric-600 to-electric-800 bg-clip-text text-transparent">
                30+
              </div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </motion.div>

            {/* Clients */}
            <motion.div className="text-center group" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-500 to-neon-600 rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-neon-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-4xl font-bold bg-gradient-to-r from-neon-600 to-neon-800 bg-clip-text text-transparent">
                21+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>

            {/* Experience */}
            <motion.div className="text-center group" whileHover={{ scale: 1.1 }}>
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyber-500 to-cyber-600 rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-cyber-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyber-600 to-cyber-800 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
