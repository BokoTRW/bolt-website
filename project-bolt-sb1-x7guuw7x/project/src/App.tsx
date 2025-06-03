import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Magnet, Bell, Globe, Video, Phone, Search, MessageSquare, BarChart3, Rocket, TrendingUp, Clock, DollarSign, Check, ChevronDown, ChevronUp, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SparklesCore } from '@/components/ui/sparkles';
import { BeamsBackground } from '@/components/ui/beams-background';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { cn } from '@/lib/utils';
import './App.css';

const menuItems = [
  { name: 'Features', href: '#link' },
  { name: 'Solution', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'About', href: '#link' },
];

const features = [
  {
    title: 'Ads & Lead Generation',
    icon: Magnet,
    description: 'Ads that pull in real buyers, not tire kickers.',
  },
  {
    title: 'Email & SMS Marketing',
    icon: Bell,
    description: 'Messages your leads actually read and respond to.',
  },
  {
    title: 'High Converting Websites',
    icon: Globe,
    description: 'Websites built to sell your services clearly and quickly.',
  },
  {
    title: 'AI Phone Callers',
    icon: Phone,
    description: '30% of calls never get answered. We call back every lead before they move on to someone else.',
  },
  {
    title: 'Video Ads & AI UGC Ads',
    icon: Video,
    description: 'AI and human-made content that actually works.',
  },
  {
    title: 'Straightforward SEO',
    icon: Search,
    description: 'When people search, you show up. And they call.',
  },
  {
    title: 'AI Chatbots',
    icon: MessageSquare,
    description: "While you're offline, it's still answering and scheduling.",
  },
  {
    title: 'Google & Facebook Ads',
    icon: BarChart3,
    description: 'Ads so dialed in, they hit the mark and bring results.',
  },
  {
    title: 'Growth Strategy',
    icon: Rocket,
    description: 'Custom growth roadmap built specifically for your business goals.',
  },
];

const stats = [
  {
    value: '247%',
    label: 'increase in booked appointments in 30 days',
    icon: TrendingUp,
  },
  {
    value: '37%',
    label: 'more leads converted with AI phone follow-ups',
    icon: Phone,
  },
  {
    value: '$100K+',
    label: 'in sales from 1 email campaign',
    icon: DollarSign,
  },
  {
    value: '10+ hours',
    label: 'saved per week through automation',
    icon: Clock,
  },
];

const steps = [
  {
    number: '1',
    title: 'Attract',
    description: 'We build ads and content that bring in leads who want to talk to you.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    number: '2',
    title: 'Automate',
    description: 'AI tools reply, call, and follow up while you focus on running your business.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    number: '3',
    title: 'Convert',
    description: 'Email sequences, landing pages, and copy that close deals fast.',
    color: 'from-purple-600 to-indigo-600',
  },
];

const benefits = [
  'Full marketing funnel review',
  'Lead generation analysis',
  'Automation opportunities',
];

const noObligations = [
  'Zero pressure sales tactics',
  'Take our ideas even if you don\'t hire us',
  '30-minute focused session',
];

function App() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col overflow-x-hidden relative">
      {/* Navigation */}
      <header>
        <nav
          data-state={menuState && 'active'}
          className="fixed z-20 w-full px-2">
          <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', 
            isScrolled && 'bg-black/50 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-lg lg:px-5')}>
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                {/* Logo */}
                <div className="flex flex-col items-center w-[120px]">
                  <h1 className="text-2xl font-bold text-white animate-glow">
                    Whiteline
                  </h1>
                  <div className="w-full h-[2px] my-1">
                    <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 h-px w-full" />
                  </div>
                  <h2 className="text-sm font-bold text-white">
                    Digital Mastery
                  </h2>
                </div>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                  <Menu className={cn("m-auto h-6 w-6 text-white transition-all", 
                    menuState && "scale-0 opacity-0")} />
                  <X className={cn("absolute inset-0 m-auto h-6 w-6 text-white transition-all", 
                    !menuState && "scale-0 opacity-0")} />
                </button>
              </div>

              <div className="absolute inset-0 m-auto hidden h-fit w-fit lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                      <a
                        href={item.href}
                        className="text-white block duration-150">
                        <span>{item.name}</span>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(
                "bg-black/80 mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                menuState && "block"
              )}>
                <div className="lg:hidden">
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => (
                      <li key={index} className="relative group">
                        <a
                          href={item.href}
                          className="text-white block duration-150">
                          <span>{item.name}</span>
                          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 hover:opacity-90 transition-opacity">
                    <a 
                      href="https://calendly.com/boko-blacklinedm/boko-meeting"
                      target="_blank"
                      rel="noopener noreferrer">
                      <span>Book a Call</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <BeamsBackground intensity="strong">
        <div className="text-center">
          <h1 className="flex flex-col gap-2 text-white mb-4 max-w-5xl mx-auto leading-tight">
            <span className="md:text-6xl text-3xl lg:text-7xl font-bold">Stop Chasing Leads.</span>
            <span className="md:text-5xl text-2xl lg:text-6xl font-bold">Start Closing Them Automatically.</span>
          </h1>
          <p className="text-neutral-300 text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
            We create ads that actually work, automate follow-ups, and turn visitors into customers even while you sleep.
          </p>
          <a 
            href="https://calendly.com/boko-blacklinedm/boko-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
            Book Your Free Strategy Call
          </a>
        </div>
      </BeamsBackground>

      {/* Services Section */}
      <section className="py-8 md:py-16 relative bg-black">
        <div className="mx-auto w-full max-w-7xl space-y-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl font-bold tracking-wide text-white md:text-5xl lg:text-6xl xl:font-extrabold whitespace-nowrap inline-block">
              Everything You Need, Nothing You Dont
            </h2>
            <p className="text-neutral-300 mt-6 text-lg tracking-wide md:text-xl">
              Practical services that bring you more leads, close more deals, and let you get back to running your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <FeatureCard 
                  feature={feature} 
                  className="text-white bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 p-10" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative cta-section">
        <div className="logo-neon logo-neon-1"></div>
        <div className="logo-neon logo-neon-2"></div>
        <div className="logo-neon logo-neon-3"></div>
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 p-8 md:p-12 lg:p-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
              Leads Are Slipping. You Just Don't See It Yet.
            </h2>
            <div className="space-y-6 text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
              <p>You're getting interest. People are clicking, calling, filling out forms.</p>
              <p>Then they wait. You're busy. They move on.</p>
              <p>That's where the money goes.</p>
              <p>You don't need more leads. You need a system that follows up fast, books calls, and keeps things moving without you babysitting it.</p>
              <p>That's what we build.</p>
              <p>No chasing. No juggling tools. No patchwork fixes.</p>
              <p className="text-white font-semibold">Just a setup that works every time.</p>
            </div>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 hover:opacity-90 text-white text-lg px-8 py-6 h-auto hover-animate">
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 relative bg-black overflow-hidden stats-section">
        <div className="neon-line neon-line-1"></div>
        <div className="neon-line neon-line-2"></div>
        <div className="neon-line neon-line-3"></div>
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              They Tried It Once. And Regretted Not Trying It Sooner.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8 flex items-start gap-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/10"></div>
                <stat.icon className="w-6 h-6 text-[#3B82F6] flex-shrink-0 relative z-10" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-neutral-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-indigo-500/10"></div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-white text-xl font-bold">
                M
              </div>
              <h3 className="text-xl font-semibold text-white">Mini Case Study</h3>
            </div>
            <p className="text-neutral-300 text-lg relative z-10">
              Mike from a local HVAC company cut ad spend by 40% — and got double the leads. Our AI phone system followed up with every inquiry within seconds, increasing his appointment booking rate by 68%.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Steps Section */}
      <section className="py-16 md:py-24 relative three-steps-section">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our System Works in 3 Simple Phases
            </h2>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-start gap-6"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xl font-bold`}>
                  {step.number}
                </div>
                <div className="flex-1 bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-neutral-300 mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 hover:opacity-90 text-white text-lg px-8 py-6 h-auto hover-animate">
              Let's Build Yours
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 relative bg-black overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              You Handle the Business. We'll Bring the Clients.
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
              Book a free strategy call. We'll audit your current setup, show you where you're leaking money — and fix it.
            </p>
          </motion.div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 hover:opacity-90 text-white text-lg px-8 py-6 h-auto hover-animate mb-16">
              <a 
                href="https://calendly.com/boko-blacklinedm/boko-meeting"
                target="_blank"
                rel="noopener noreferrer">
                Book Your Free Strategy Call
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <Check className="w-5 h-5 text-indigo-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/40 backdrop-blur-xl rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">No Obligations:</h3>
              <ul className="space-y-4">
                {noObligations.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <Check className="w-5 h-5 text-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative bg-black overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-300 text-lg md:text-xl">
              Everything you need to know about working with us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Is this only for online businesses?",
                answer: "No — we specialize in local businesses like HVAC, medspas, dentists, electricians, and more. Our automation and marketing systems work especially well for service-based businesses with high customer lifetime value."
              },
              {
                question: "What if I already run ads?",
                answer: "Perfect — we'll audit your current campaigns, identify leaks in your funnel, and show you exactly how to get more out of your ad spend. Most clients see a 30-50% reduction in cost per lead within 60 days."
              },
              {
                question: "How much time does this take from me?",
                answer: "Very little. After our initial strategy session (30 minutes) and onboarding call (60 minutes), we handle everything. You'll get weekly updates and can check your dashboard anytime, but the system runs itself."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most clients see their first results within 2-3 weeks. This includes more leads, faster response times, and better conversion rates. Full optimization usually takes 60-90 days."
              },
              {
                question: "Do you offer guarantees?",
                answer: "Yes. If we don't hit the agreed-upon KPIs within 90 days, you get a full refund. No questions asked. We can afford to do this because our system works consistently across industries."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById(`faq-${index}`);
                    const isExpanded = el?.getAttribute('aria-expanded') === 'true';
                    el?.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
                  }}
                  className="flex w-full items-center justify-between rounded-lg bg-white/5 p-4 text-left text-white hover:bg-white/10 transition-all duration-200"
                  id={`faq-${index}`}
                  aria-expanded="false"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-neutral-300 group-aria-expanded:rotate-180 transition-transform duration-200" />
                </button>
                <div className="overflow-hidden transition-all duration-200 max-h-0 group-aria-expanded:max-h-96">
                  <div className="p-4 text-neutral-300">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-300 mb-6">Still have questions?</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 hover:opacity-90 text-white">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="flex flex-col items-start mb-8">
                <h1 className="text-2xl font-bold text-white">
                  Whiteline
                </h1>
                <div className="w-full h-[2px] my-1">
                  <div className="bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 h-px w-full" />
                </div>
                <h2 className="text-sm font-bold text-white">
                  Digital Mastery
                </h2>
              </div>
              <ul className="space-y-2">
                <li><a href="#about" className="text-neutral-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#careers" className="text-neutral-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#partners" className="text-neutral-300 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#news" className="text-neutral-300 hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-neutral-300 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#case-studies" className="text-neutral-300 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#faq" className="text-neutral-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-neutral-300">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contact@whiteline.com" className="hover:text-white transition-colors">contact@whiteline.com</a>
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <MapPin className="h-4 w-4" />
                  <span>123 Business Ave, Suite 100</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="#facebook" className="text-neutral-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#twitter" className="text-neutral-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#instagram" className="text-neutral-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#linkedin" className="text-neutral-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-neutral-300">
              © {new Date().getFullYear()} Whiteline Digital Mastery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;