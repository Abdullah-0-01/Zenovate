"use client"

import React from 'react'
import { Header } from "@/components/header"
import { Footer } from '../../components/footer'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  { title: "Custom Web Development", description: "Responsive, scalable websites with React, Next.js, Laravel.", icon: "💻" },
  { title: "E-commerce Solutions", description: "Secure online stores with payment integration & inventory management.", icon: "🛒" },
  { title: "AI Chatbot Agents", description: "Intelligent chatbots for automating customer support & sales.", icon: "🤖" },
  { title: "WordPress Development", description: "Fast, SEO optimized WordPress sites & custom themes.", icon: "🌐" },
  { title: "Landing Page Design", description: "High-converting landing pages tailored to your marketing goals.", icon: "🚀" },
  { title: "Web Application Development", description: "SaaS platforms, admin dashboards, and internal tools.", icon: "📱" },
  { title: "UI/UX Design", description: "Modern, user-friendly designs using Figma and Adobe XD.", icon: "🎨" },
  { title: "SEO Optimization", description: "Boost website rankings with on-page & technical SEO.", icon: "📈" },
  { title: "Website Performance Optimization", description: "Speed and core web vitals improvements.", icon: "⚡" },
  { title: "Website Maintenance", description: "Regular updates, security patches, and backups.", icon: "🔧" },
  { title: "WhatsApp Chatbots", description: "Automate WhatsApp communication via bots.", icon: "📞" },
  { title: "CMS Integration", description: "Dynamic content management with Strapi, Contentful, or Sanity.", icon: "🗂️" },
  { title: "Business Email Setup", description: "Professional emails setup with Google Workspace or Zoho.", icon: "📬" },
  { title: "Portfolio Websites", description: "Personal branding websites for freelancers and creatives.", icon: "🧑‍💼" },
  { title: "Multi-language Website", description: "Reach global audiences with multi-lingual sites.", icon: "🌍" },
  { title: "API Development", description: "Custom REST/GraphQL APIs for seamless integration.", icon: "🔌" },
  { title: "Mobile App Development", description: "Cross-platform apps with React Native or Flutter.", icon: "📲" },
  { title: "Social Media Integration", description: "Connect with Facebook, Instagram, Twitter APIs.", icon: "📱" },
  { title: "Content Writing", description: "SEO-friendly blogs, articles, and product descriptions.", icon: "✍️" },
  { title: "Graphic Design", description: "Logos, banners, and branding material design.", icon: "🖌️" },
  { title: "Digital Marketing", description: "Social ads, PPC, and email marketing campaigns.", icon: "📣" },
  { title: "Cloud Hosting", description: "Deploy your site on AWS, Azure, or Google Cloud.", icon: "☁️" },
  { title: "Security Audits", description: "Identify and fix vulnerabilities to keep your site safe.", icon: "🛡️" },
  { title: "Database Design", description: "Efficient database schemas for fast data handling.", icon: "🗄️" },
  { title: "Video Production", description: "Promotional and explainer videos for your brand.", icon: "🎥" },
  { title: "Email Marketing", description: "Engage customers with personalized email flows.", icon: "📧" },
  { title: "Live Chat Support Setup", description: "Real-time chat support integration for websites.", icon: "💬" },
  { title: "Analytics & Reporting", description: "Track user behavior and campaign effectiveness.", icon: "📊" },
  { title: "Payment Gateway Integration", description: "Integrate Stripe, PayPal, and other payment methods.", icon: "💳" },
  { title: "Custom Plugin Development", description: "Add new functionalities with tailor-made plugins.", icon: "🔧" },
]

const Allservices = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Web Development Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Link key={index} href="/#contact" className="relative group cursor-pointer rounded-xl p-6 shadow-lg bg-white overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 block">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 rounded-xl blur-3xl transition-opacity duration-500 group-hover:opacity-60"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-start">
                <div className="text-6xl mb-5">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Allservices
