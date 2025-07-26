"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Sparkles } from "lucide-react"
import { motion, useInView, easeOut } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sarah Khan",
    role: "CEO, TechStart Inc.",
    content:
      "Zenovate Digital transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    // avatar removed, not used
  },
  {
    name: "Michael Chen",
    role: "Founder, E-Shop Pro",
    content:
      "The e-commerce platform they built for us increased our sales by 300%. Outstanding work and excellent communication throughout the project.",
    rating: 5,
  },
  {
    name: "Emily ",
    role: "Marketing Director, GrowthCo",
    content:
      "Professional, reliable, and innovative. Zenovate Digital delivered our project on time and within budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Zain Ali",
    role: "CTO, DataFlow Systems",
    content:
      "Their API development and integration services helped us streamline our operations. The team is knowledgeable and responsive.",
    rating: 5,
  },
  {
    name: "Abdullah Khan",
    role: "Product Manager, InnovateLab",
    content:
      "Exceptional landing page design that perfectly captured our brand identity. The user experience improvements were remarkable.",
    rating: 5,
  },
  {
    name: "James Miller",
    role: "Director, ContentHub",
    content:
      "The AI chatbot solution they developed was awsome. Great technical support and documentation.",
    rating: 5,
  },
]

export function Testimonials() {
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
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-neon-200/30 to-cyber-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Heading without Client DP */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-100 to-neon-100 text-electric-800 text-sm font-medium mb-6 justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Client Reviews
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-electric-600 to-neon-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <Quote className="w-8 h-8 text-electric-500 mr-2" />
                    </motion.div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed italic group-hover:text-gray-700 transition-colors">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    {/* Removed avatar image */}
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-electric-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-100 to-neon-100 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
            <span className="text-gray-700 font-medium">4.9/5 Average Rating from 30+ Projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
