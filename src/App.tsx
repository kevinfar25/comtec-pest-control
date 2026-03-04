import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Facebook,
  Instagram,
  Phone,
  Menu,
  X,
  Mail,
  Bug,
  BugOff,
  Mouse,
  Wind,
  Bird,
  TreePine,
  ShieldCheck,
  Clock,
  Trophy,
  Star,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  Zap,
  Award,
  MapPin,
  Leaf,
  Briefcase,
  Warehouse,
  Key,
  Utensils,
} from 'lucide-react';
import Chatbot from './Chatbot';

type Page = 'home' | 'book' | 'contact' | 'commercial';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>('home');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', pestType: '', address: '', plan: '' });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const navigate = (page: Page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setBookingForm({ name: '', phone: '', pestType: '', address: '', plan: '' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: Bug,
      name: 'Stop Cockroaches Before They Multiply',
      desc: "Cockroaches breed fast and hide deeper than you think. We eliminate the colony — not just the ones you can see.",
      img: 'https://images.pexels.com/photos/6526933/pexels-photo-6526933.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      icon: BugOff,
      name: 'Ants in Your Kitchen? Not for Long.',
      desc: 'Ant trails in your kitchen mean a colony is nearby. We destroy it at the source before they spread to every room.',
      img: 'https://images.pexels.com/photos/14255746/pexels-photo-14255746.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      icon: Mouse,
      name: 'Rodents Carry Disease — We Remove Them.',
      desc: 'Rodents chew wiring, contaminate food, and carry disease. We remove them, seal the entry points, and protect your home permanently.',
      img: 'https://images.pexels.com/photos/7164046/pexels-photo-7164046.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      icon: Wind,
      name: 'Enjoy Your Terrace Again.',
      desc: 'Flies on your food. Mosquitoes keeping you up at night. We eliminate breeding sites and create a barrier so you can live in peace.',
      img: 'https://images.pexels.com/photos/12719589/pexels-photo-12719589.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      icon: Bird,
      name: 'Bird Proofing That Actually Works.',
      desc: 'Birds nesting on your property mean damage, mess, and noise. We install humane deterrents that actually work — and keep working.',
      img: 'https://images.pexels.com/photos/12828418/pexels-photo-12828418.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      icon: TreePine,
      name: 'Termites Destroy Silently. We Stop Them.',
      desc: "Termites silently eat through your home's structure before you notice. We detect them early, eliminate them completely, and protect your investment.",
      img: 'https://images.pexels.com/photos/12895278/pexels-photo-12895278.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
  ];

  const stats = [
    { value: '25+', label: 'Years in Malta' },
    { value: '10,000+', label: 'Jobs Completed' },
    { value: '5★', label: 'Google Rated' },
    { value: '100%', label: 'Guaranteed Results' },
  ];

  const trustBadges = [
    { icon: Award, label: 'Est. 1999 — 25+ Years' },
    { icon: ShieldCheck, label: 'Fully Licensed & Insured' },
    { icon: Leaf, label: 'EU-Approved, Family-Safe Products' },
    { icon: MapPin, label: 'All Malta & Gozo' },
    { icon: Star, label: '5★ Google Rated' },
    { icon: CheckCircle2, label: 'Pest-Free Guarantee' },
  ];

  const steps = [
    {
      icon: Phone,
      step: '01',
      title: 'Call or Book Online',
      desc: "Contact us in seconds. Same-day and next-day slots available across Malta and Gozo — because pests don't wait.",
    },
    {
      icon: CalendarCheck,
      step: '02',
      title: 'We Inspect & Treat',
      desc: 'A certified technician identifies the source and applies the right treatment — not just a surface spray.',
    },
    {
      icon: CheckCircle2,
      step: '03',
      title: 'Problem Solved. Guaranteed.',
      desc: "Your home is protected. If the pest returns, we come back at no extra cost until it's completely resolved.",
    },
  ];

  const testimonials = [
    {
      name: 'Joseph Borg',
      location: 'Valletta',
      service: 'Rodent Control',
      text: "We had mice under the kitchen for weeks. Called Comtec on Tuesday, the technician arrived Wednesday morning. He sealed three entry points we hadn't even noticed. Two months on — not a single sign.",
    },
    {
      name: 'Maria Farrugia',
      location: 'Birkirkara',
      service: 'Cockroach Control',
      text: "The cockroach problem in our restaurant had us terrified of a health inspection. Comtec treated the entire kitchen in one visit. The inspector came two weeks later — zero issues. They literally saved our business.",
    },
    {
      name: 'David Azzopardi',
      location: "St Julian's",
      service: 'Bird Control',
      text: "Birds had been nesting on our roof terrace for two full seasons. The mess was unbearable. Comtec installed deterrents in one morning — haven't had a single bird back since. Very professional team.",
    },
  ];

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "You're In Safe Hands",
      desc: "Every technician is fully certified and licensed. No amateurs, no guesswork — just trained professionals who know exactly what they're doing in your home.",
    },
    {
      icon: Clock,
      title: "We Don't Make You Wait",
      desc: "When you call, we respond fast. Same-day service available across Malta — because pests don't wait, and neither should you.",
    },
    {
      icon: Trophy,
      title: "Gone For Good. Guaranteed.",
      desc: "Every treatment comes with a guarantee. If the problem returns, so do we — until it's completely resolved. That's our commitment to you.",
    },
  ];

  const commercialSectors = [
    {
      icon: Utensils,
      name: 'Restaurants & Bars',
      desc: 'Protect your hygiene rating. A single pest sighting can cost you your licence. We keep your kitchen compliant and pest-free year-round.',
    },
    {
      icon: Building2,
      name: 'Hotels & Guesthouses',
      desc: 'One bad review can follow you for months. Our discreet, reliable service protects your TripAdvisor rating and your guests.',
    },
    {
      icon: Briefcase,
      name: 'Offices & Commercial',
      desc: 'A pest-free workplace protects your staff, your reputation, and your productivity. We work around your schedule.',
    },
    {
      icon: Warehouse,
      name: 'Warehouses & Food Retail',
      desc: 'Protect stock, meet food safety regulations, and stay fully compliant with Maltese and EU standards.',
    },
    {
      icon: Key,
      name: 'Property Management',
      desc: 'One trusted partner for all your managed properties — consolidated reporting, priority response, and competitive rates.',
    },
    {
      icon: TreePine,
      name: 'Construction & Sites',
      desc: 'Rodent and pest control for active building sites to protect workers, materials, and prevent structural damage.',
    },
  ];

  const plans = [
    {
      name: 'One-Off Treatment',
      tagline: 'Fast relief for an active infestation',
      features: [
        'Single targeted treatment',
        'Certified technician visit',
        'Post-treatment guidance',
        'Covered by our guarantee',
      ],
      popular: false,
      cta: 'Get a Quote',
    },
    {
      name: 'Seasonal Protection',
      tagline: "Covers Malta's peak pest season: April–October",
      features: [
        'Quarterly inspections & treatments',
        'Covers all common pests',
        'Priority booking guaranteed',
        'Free follow-up if needed',
        'Better value than one-off visits',
      ],
      popular: true,
      cta: 'Get a Quote',
    },
    {
      name: 'Annual Contract',
      tagline: 'Year-round peace of mind for home or business',
      features: [
        'Scheduled visits all year',
        'Free call-outs between treatments',
        'Residential & commercial',
        'Detailed treatment reports',
        'Best value per treatment',
      ],
      popular: false,
      cta: 'Get a Quote',
    },
  ];

  const faqs = [
    {
      q: 'Are your treatments safe for children and pets?',
      a: "Yes. We use professional-grade, EU-approved products applied by certified technicians. We'll always advise you on any precautions needed — such as vacating the property for a short period — before we begin.",
    },
    {
      q: 'How quickly can you attend? Do you offer same-day appointments?',
      a: "We aim to respond the same day for urgent problems. Same-day and next-day appointments are available across Malta and Gozo. Call us on 21800666 or 79800666 and we'll get a technician to you as fast as possible.",
    },
    {
      q: 'How many treatments will I need?',
      a: "Most infestations are resolved in 1–2 treatments. Some cases — such as heavy rodent infestations or termite problems — may require a multi-visit plan. We'll always be upfront about what's needed after the initial inspection.",
    },
    {
      q: 'Do you treat both residential homes and commercial premises?',
      a: "Absolutely. We serve homeowners, landlords, and commercial clients — restaurants, hotels, offices, warehouses, food retailers, and more. We offer tailored maintenance contracts for businesses.",
    },
    {
      q: 'Are your products EU-approved and environmentally responsible?',
      a: "Yes. All products are fully EU-approved and legally compliant. We use targeted treatments to minimise environmental impact and offer eco-conscious options where suitable.",
    },
    {
      q: "Why do cockroaches keep coming back in Malta?",
      a: "Malta's warm, humid Mediterranean climate — especially between May and October — is ideal for cockroach breeding. Shop sprays kill what you can see but don't reach the colony in walls, drains, and crevices. Our treatment eliminates the entire colony at the source.",
    },
    {
      q: 'How much does pest control cost in Malta?',
      a: "Pricing depends on pest type, severity, and property size. We offer free, no-obligation quotes tailored to your situation. Call us on 21800666 or book online to get started — there's no commitment.",
    },
  ];

  const navLinkClass = (page: Page) =>
    `text-sm font-medium transition-colors ${
      activePage === page
        ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1'
        : 'text-neutral-600 hover:text-emerald-600'
    }`;

  const mobileNavClass = (page: Page) =>
    `py-4 px-4 text-sm font-medium text-left border-b border-neutral-100 transition-colors ${
      activePage === page ? 'text-emerald-600 bg-emerald-50' : 'text-neutral-600'
    }`;

  const inputClass =
    'w-full border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors';

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">

      {/* Top Bar */}
      <div className="bg-emerald-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 shrink-0" />
            <p className="font-medium tracking-wide">Same-day pest control across Malta &amp; Gozo</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="tel:+35621800666" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5">
                <Phone className="w-3 h-3" /> 21800666
              </a>
              <a href="tel:+35679800666" className="hover:text-emerald-200 transition-colors flex items-center gap-1.5">
                <Phone className="w-3 h-3" /> 79800666
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-emerald-200 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-emerald-200 transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            <button onClick={() => navigate('home')} className="flex items-center">
              <img
                src="/images/140864_0c31c9e93a6f4abd83ebdb842d7a187a~mv2.avif"
                alt="Comtec Malta"
                className="h-10 object-contain"
              />
            </button>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => navigate('home')} className={navLinkClass('home')}>Home</button>
              <button onClick={() => navigate('commercial')} className={navLinkClass('commercial')}>Commercial</button>
              <button onClick={() => navigate('book')} className={navLinkClass('book')}>Book Online</button>
              <button onClick={() => navigate('contact')} className={navLinkClass('contact')}>Contact</button>
              <a
                href="tel:+35621800666"
                className="flex items-center gap-1.5 text-sm font-semibold text-neutral-700 hover:text-emerald-600 transition-colors border-l border-neutral-200 pl-6"
              >
                <Phone className="w-4 h-4" />
                21800666
              </a>
              <button
                onClick={() => navigate('book')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-95"
              >
                Get a Free Quote
              </button>
            </nav>

            <button
              className="md:hidden p-2 text-neutral-600 min-w-12 min-h-12 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white absolute w-full left-0 shadow-lg z-50">
            <nav className="flex flex-col">
              <button onClick={() => navigate('home')} className={mobileNavClass('home')}>Home</button>
              <button onClick={() => navigate('commercial')} className={mobileNavClass('commercial')}>Commercial</button>
              <button onClick={() => navigate('book')} className={mobileNavClass('book')}>Book Online</button>
              <button onClick={() => navigate('contact')} className={`${mobileNavClass('contact')} border-b-0`}>Contact</button>
              <div className="p-4 space-y-3">
                <a
                  href="tel:+35621800666"
                  className="flex items-center justify-center gap-2 w-full border border-emerald-600 text-emerald-600 font-semibold py-3 rounded-lg min-h-12"
                >
                  <Phone className="w-4 h-4" />
                  Call 21800666
                </a>
                <button
                  onClick={() => navigate('book')}
                  className="w-full bg-emerald-600 text-white font-semibold py-3.5 rounded-lg min-h-12"
                >
                  Get a Free Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── PAGE: HOME ── */}
      {activePage === 'home' && (
        <main>

          {/* Hero */}
          <section
            className="relative bg-emerald-900 text-white py-28 md:py-36 px-4 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/Whisk_91fd5cdda135d9baa93410c8d9e31057dr.jpeg)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
            <div className="relative max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="flex flex-col items-center gap-6"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block bg-emerald-600/30 border border-emerald-400/40 text-emerald-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-sm"
                >
                  Malta's Trusted Pest Control Since 1999
                </motion.span>
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl md:text-6xl font-bold leading-tight"
                >
                  Stop Living in Dread.<br />Take Back Your Home.
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="text-xl text-neutral-200 max-w-2xl"
                >
                  The shop sprays aren't working because they don't treat the source. We do.<br className="hidden md:block" />
                  Certified technicians. Same-day response. Guaranteed results.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <button
                    onClick={() => navigate('book')}
                    className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:scale-105 active:scale-95 min-h-14"
                  >
                    Get a Free Quote
                  </button>
                  <a
                    href="tel:+35621800666"
                    className="border-2 border-white/70 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 min-h-14"
                  >
                    <Phone className="w-5 h-5" />
                    Call 21800666
                  </a>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-emerald-200 pt-2"
                >
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> No obligation</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Same-day available</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Pest-free guaranteed</span>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Stats Bar */}
          <div className="bg-emerald-800 text-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {stats.map(({ value, label }) => (
                <motion.div key={label} variants={fadeUp}>
                  <p className="text-2xl md:text-3xl font-bold">{value}</p>
                  <p className="text-xs text-emerald-300 mt-1 uppercase tracking-wide font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white border-b border-neutral-100 py-4 px-4 overflow-x-auto">
            <div className="max-w-5xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-x-8 gap-y-3 min-w-max md:min-w-0">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-neutral-600 whitespace-nowrap">
                  <Icon className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  Our Services
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500 max-w-xl mx-auto">
                  Every pest. Every property. Treated at the source — not just on the surface.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-2 md:grid-cols-3 gap-5"
              >
                {services.map(({ icon: Icon, name, desc, img }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden cursor-default"
                  >
                    <div className="relative h-36 sm:h-44 overflow-hidden">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3 transition-colors group-hover:bg-emerald-200">
                        <Icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-neutral-800 mb-1.5 text-sm leading-snug">{name}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-4 bg-neutral-50">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-14"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  How It Works
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500">
                  Simple, fast, and effective — every time.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {steps.map(({ icon: Icon, step, title, desc }) => (
                  <motion.div
                    key={step}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <span className="text-5xl font-black text-neutral-100 select-none leading-none">{step}</span>
                    </div>
                    <h3 className="font-bold text-neutral-800 text-lg mb-2">{title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Comtec */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-3xl font-bold text-center text-neutral-800 mb-12"
              >
                Why Choose Comtec?
              </motion.h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src="https://images.pexels.com/photos/6196677/pexels-photo-6196677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Professional pest control team"
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="space-y-8"
                >
                  {trustPoints.map(({ icon: Icon, title, desc }) => (
                    <motion.div key={title} variants={fadeUp} className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
                        <p className="text-neutral-500">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Commercial Section */}
          <section className="py-20 px-4 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-14"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                >
                  Commercial Services
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
                  Protecting Malta's Businesses Since 1999
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-400 max-w-2xl mx-auto">
                  A single pest sighting can cost a restaurant its hygiene rating, a hotel its TripAdvisor score, and a business its reputation. We provide discreet, reliable contract pest management for Malta's commercial sector.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12"
              >
                {commercialSectors.map(({ icon: Icon, name, desc }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 hover:border-emerald-600/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-emerald-900/60 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm">{name}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <button
                  onClick={() => navigate('commercial')}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 active:scale-95 min-h-14"
                >
                  Learn About Commercial Services
                </button>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  What Malta Says About Us
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500 mb-3">
                  Real customers. Real results. Verified on Google.
                </motion.p>
                <motion.a
                  variants={fadeUp}
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  View our Google reviews →
                </motion.a>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {testimonials.map(({ name, location, service, text }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-sm flex flex-col gap-4"
                  >
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-1">"{text}"</p>
                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-800 text-sm">{name}</p>
                        <p className="text-xs text-neutral-400">{location} · {service}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Service Plans */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  Choose Your Level of Protection
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500 max-w-xl mx-auto">
                  From a single urgent treatment to year-round protection — we have a plan to suit every home and business.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {plans.map(({ name, tagline, features, popular, cta }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    className={`relative rounded-2xl p-7 border flex flex-col gap-5 ${
                      popular
                        ? 'bg-emerald-700 border-emerald-600 text-white shadow-xl scale-[1.03]'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    {popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${popular ? 'text-white' : 'text-neutral-800'}`}>{name}</h3>
                      <p className={`text-sm ${popular ? 'text-emerald-200' : 'text-neutral-500'}`}>{tagline}</p>
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {features.map(f => (
                        <li key={f} className={`flex items-start gap-2.5 text-sm ${popular ? 'text-emerald-100' : 'text-neutral-600'}`}>
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${popular ? 'text-emerald-300' : 'text-emerald-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate('book')}
                      className={`w-full font-bold py-3 rounded-lg transition-all min-h-12 ${
                        popular
                          ? 'bg-white text-emerald-800 hover:bg-emerald-50'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {cta}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center text-sm text-neutral-400 mt-8"
              >
                All plans include our guarantee — if pests return, so do we. Free of charge.
              </motion.p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4 bg-neutral-50">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  Frequently Asked Questions
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500">
                  Everything you need to know before booking.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="space-y-3"
              >
                {faqs.map(({ q, a }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-neutral-800 hover:text-emerald-700 transition-colors min-h-14"
                    >
                      <span className="text-sm">{q}</span>
                      <motion.div
                        animate={{ rotate: activeFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-emerald-600" />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {activeFaq === i && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">{a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <section className="bg-emerald-700 text-white py-16 px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col items-center gap-6 text-center"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold">Stop worrying tonight.</motion.h2>
              <motion.p variants={fadeUp} className="text-emerald-100 text-lg max-w-lg">
                Same-day and next-day appointments available across Malta and Gozo.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('book')}
                  className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-lg text-lg hover:bg-emerald-50 transition-all hover:shadow-xl hover:scale-105 active:scale-95 min-h-14"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:+35621800666"
                  className="border-2 border-white/70 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 min-h-14"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
              <motion.p variants={fadeUp} className="text-emerald-200 text-sm">
                Free quote · No obligation · Pest-free guaranteed
              </motion.p>
            </motion.div>
          </section>

        </main>
      )}

      {/* ── PAGE: COMMERCIAL ── */}
      {activePage === 'commercial' && (
        <main>

          {/* Commercial Hero */}
          <section className="bg-neutral-900 text-white py-24 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="flex flex-col items-center gap-6"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
                >
                  Commercial Pest Control
                </motion.span>
                <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold leading-tight">
                  Protect Your Business.<br />Protect Your Reputation.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-neutral-300 max-w-2xl">
                  A single pest sighting can cost a restaurant its hygiene rating, a hotel its TripAdvisor score, and a business its customers. Comtec provides discreet, reliable contract pest management for Malta's commercial sector.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('book')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 active:scale-95 min-h-14"
                  >
                    Get a Commercial Quote
                  </button>
                  <a
                    href="tel:+35621800666"
                    className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 min-h-14"
                  >
                    <Phone className="w-5 h-5" />
                    Call 21800666
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Commercial Sectors */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-neutral-800 mb-3">
                  Industries We Serve
                </motion.h2>
                <motion.p variants={fadeUp} className="text-neutral-500 max-w-xl mx-auto">
                  Tailored pest management for every commercial sector across Malta and Gozo.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {commercialSectors.map(({ icon: Icon, name, desc }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl p-7 hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-neutral-800 mb-2">{name}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Commercial Choose Comtec */}
          <section className="py-20 px-4 bg-neutral-50">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-3xl font-bold text-neutral-800 text-center mb-12"
              >
                What Our Commercial Contracts Include
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Compliance-Ready Documentation',
                    desc: 'Full written treatment reports and pest monitoring logs to support hygiene audits, health inspections, and regulatory compliance.',
                  },
                  {
                    icon: Clock,
                    title: 'Priority Response',
                    desc: 'Commercial contract clients receive priority scheduling. We understand that a pest emergency at a food business cannot wait.',
                  },
                  {
                    icon: Leaf,
                    title: 'Discreet, Minimally Disruptive Service',
                    desc: "We work around your operations — early mornings, evenings, or outside business hours. Your customers won't know we were there.",
                  },
                  {
                    icon: Trophy,
                    title: 'Dedicated Account Management',
                    desc: 'One point of contact, consistent technicians who know your site, and a tailored treatment programme reviewed annually.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-800 mb-1.5">{title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Commercial CTA */}
          <section className="bg-emerald-700 text-white py-16 px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-bold">Ready to protect your business?</motion.h2>
              <motion.p variants={fadeUp} className="text-emerald-100 text-lg">
                Get in touch for a free, no-obligation commercial assessment. We'll recommend the right contract for your premises.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('book')}
                  className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-lg text-lg hover:bg-emerald-50 transition-all hover:scale-105 active:scale-95 min-h-14"
                >
                  Get a Commercial Quote
                </button>
                <a
                  href="tel:+35621800666"
                  className="border-2 border-white/70 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 min-h-14"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </section>

        </main>
      )}

      {/* ── PAGE: BOOK ONLINE ── */}
      {activePage === 'book' && (
        <main className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
              <h1 className="text-3xl font-bold text-neutral-800 mb-2">Get a Free Quote</h1>
              <p className="text-neutral-500 mb-2">Tell us what's going on. We'll take it from there.</p>
              <p className="text-xs text-neutral-400 mb-8">No obligation · We respond within 24 hours · Pest-free guaranteed</p>

              {bookingSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <p className="text-emerald-800 font-bold text-lg mb-1">Request Received!</p>
                  <p className="text-emerald-600 text-sm">We'll be in touch shortly to confirm your appointment.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={e => setBookingForm(f => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={e => setBookingForm(f => ({ ...f, phone: e.target.value }))}
                      className={inputClass}
                      placeholder="+356 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Pest Type</label>
                    <select
                      required
                      value={bookingForm.pestType}
                      onChange={e => setBookingForm(f => ({ ...f, pestType: e.target.value }))}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="">Select a pest type...</option>
                      <option>Cockroaches</option>
                      <option>Ants</option>
                      <option>Rodents</option>
                      <option>Flies &amp; Mosquitoes</option>
                      <option>Birds</option>
                      <option>WoodWorm &amp; Termites</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Service Type</label>
                    <select
                      value={bookingForm.plan}
                      onChange={e => setBookingForm(f => ({ ...f, plan: e.target.value }))}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="">Not sure yet — I'd like advice</option>
                      <option>One-Off Treatment</option>
                      <option>Seasonal Protection Plan</option>
                      <option>Annual Contract</option>
                      <option>Commercial Contract</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Property Address <span className="text-neutral-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={bookingForm.address}
                      onChange={e => setBookingForm(f => ({ ...f, address: e.target.value }))}
                      className={inputClass}
                      placeholder="Your address in Malta"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all hover:shadow-md text-base min-h-14"
                  >
                    Request a Free Quote
                  </button>
                  <p className="text-xs text-center text-neutral-400">
                    Or call us directly:{' '}
                    <a href="tel:+35621800666" className="text-emerald-600 font-medium hover:underline">21800666</a>
                    {' '}·{' '}
                    <a href="tel:+35679800666" className="text-emerald-600 font-medium hover:underline">79800666</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>
      )}

      {/* ── PAGE: CONTACT ── */}
      {activePage === 'contact' && (
        <main className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-neutral-800 mb-2">Contact Us</h1>
            <p className="text-neutral-500 mb-10">We'd love to hear from you. Get in touch below.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div>
                <h2 className="text-xl font-bold text-neutral-800 mb-6">Get in Touch</h2>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+35621800666" className="flex items-center gap-3 text-neutral-600 hover:text-emerald-600 transition-colors min-h-12">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-neutral-500">Landline</p>
                        <p className="text-sm font-semibold">+356 21800666</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+35679800666" className="flex items-center gap-3 text-neutral-600 hover:text-emerald-600 transition-colors min-h-12">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-neutral-500">Mobile</p>
                        <p className="text-sm font-semibold">+356 79800666</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-600 min-h-12">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-neutral-500">Email</p>
                      <p className="text-sm text-neutral-400">Use the form →</p>
                    </div>
                  </li>
                </ul>

                <div className="flex items-center gap-4 mt-8">
                  <a href="#" className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-emerald-100 text-neutral-600 hover:text-emerald-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-emerald-100 text-neutral-600 hover:text-emerald-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-neutral-800 mb-6">Send a Message</h2>
                {contactSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center"
                  >
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <p className="text-emerald-800 font-bold text-lg mb-1">Message Sent!</p>
                    <p className="text-emerald-600 text-sm">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                        className={inputClass}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                        className={`${inputClass} resize-none`}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all hover:shadow-md min-h-14"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </main>
      )}

      {/* Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            <div>
              <div className="mb-4">
                <img
                  src="/images/140864_0c31c9e93a6f4abd83ebdb842d7a187a~mv2.avif"
                  alt="Comtec Malta"
                  className="h-10 object-contain"
                />
              </div>
              <p className="text-sm text-neutral-400 mb-4 max-w-xs">
                Professional pest control for homes and businesses across Malta and Gozo. Est. 1999.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+35621800666" className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    +356 21800666
                  </a>
                </li>
                <li>
                  <a href="tel:+35679800666" className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    +356 79800666
                  </a>
                </li>
                <li>
                  <button onClick={() => navigate('contact')} className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    Send a Message
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
                <li><button onClick={() => navigate('commercial')} className="hover:text-emerald-400 transition-colors">Commercial Services</button></li>
                <li><button onClick={() => navigate('book')} className="hover:text-emerald-400 transition-colors">Book Online</button></li>
                <li><button onClick={() => navigate('contact')} className="hover:text-emerald-400 transition-colors">Contact</button></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>©2026 by Alpine Group</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
