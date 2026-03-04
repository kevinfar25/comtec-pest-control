import { useState } from 'react';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Search,
  ChevronRight,
  Mail
} from 'lucide-react';

const CATEGORIES = [
  "All",
  "Air Fragrance & Refills",
  "Ant Control",
  "Anti-bacterial/ Disinfectants",
  "Bird Control",
  "Common Crawling Insects Control",
  "Flies, Mosquitoes & Moth Control",
  "OFFERS",
  "Rodent Control",
  "SPECIAL COLLECTION",
  "WoodWorm & Termite Control"
];

const PRODUCTS = [
  { id: 1, name: "Roach Eradicator - Cyperkill", regularPrice: 66.95, salePrice: 58.95, badge: "BEST SELLER!", image: "https://picsum.photos/seed/roach-cyperkill/400/400" },
  { id: 2, name: "Roach Eradicator - Deltrinate", regularPrice: 68.95, salePrice: 60.00, badge: "BEST SELLER!", image: "https://picsum.photos/seed/roach-deltrinate/400/400" },
  { id: 3, name: "COMTEC Cockroach Gel 10g", regularPrice: 40.00, salePrice: 35.00, badge: "ONLINE EXCLUSIVE!", image: "https://picsum.photos/seed/roach-gel/400/400" },
  { id: 4, name: "COMTEC Cockroach Bait Stations - X4 Stations", price: 35.00, image: "https://picsum.photos/seed/roach-bait/400/400" },
  { id: 5, name: "COMTEC Ant Gel 10g", price: 45.00, image: "https://picsum.photos/seed/ant-gel/400/400" },
  { id: 6, name: "COMTEC Ant Bait Stations - X4 Stations", price: 35.00, image: "https://picsum.photos/seed/ant-bait/400/400" },
  { id: 7, name: "COMTEC Ant Gel 10g + X4 Reusable Stations", price: 55.00, image: "https://picsum.photos/seed/ant-combo/400/400" },
  { id: 8, name: "COMTEC Cockroach Gel 10g + X4 Reusable Stations", regularPrice: 50.00, salePrice: 45.00, badge: "ONLINE EXCLUSIVE!", image: "https://picsum.photos/seed/roach-combo/400/400" },
  { id: 9, name: "Ant Eradicator - Cyperkill", regularPrice: 66.95, salePrice: 58.95, badge: "NEW COMBO!", image: "https://picsum.photos/seed/ant-cyperkill/400/400" },
  { id: 10, name: "Ant Eradicator - Deltrinate", regularPrice: 68.95, salePrice: 60.00, badge: "NEW COMBO!", image: "https://picsum.photos/seed/ant-deltrinate/400/400" },
  { id: 11, name: "Bug Bite Suction Tool", price: 7.99, image: "https://picsum.photos/seed/bug-bite/400/400" },
  { id: 12, name: "Cockroach Traps", price: 8.50, image: "https://picsum.photos/seed/roach-traps/400/400" },
  { id: 13, name: "Cockroach Traps Combo", regularPrice: 25.50, salePrice: 24.00, image: "https://picsum.photos/seed/roach-traps-combo/400/400" },
  { id: 14, name: "CYPERKILL COMBO", regularPrice: 60.45, salePrice: 50.00, image: "https://picsum.photos/seed/cyperkill-combo/400/400" },
  { id: 15, name: "DELTRINATE COMBO", regularPrice: 64.45, salePrice: 55.00, image: "https://picsum.photos/seed/deltrinate-combo/400/400" },
  { id: 16, name: "PROTECTION COMBO", regularPrice: 62.45, salePrice: 53.00, image: "https://picsum.photos/seed/protection-combo/400/400" },
  { id: 17, name: "NOMAD Fly Killer", price: 70.00, image: "https://picsum.photos/seed/nomad-fly/400/400" },
  { id: 18, name: "Insect Picker", price: 15.00, image: "https://picsum.photos/seed/insect-picker/400/400" }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      {/* Top Bar */}
      <div className="bg-emerald-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-medium tracking-wide">We have got you covered!</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3" /> 21800666
              </a>
              <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-1">
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
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900 leading-tight">Comtec Malta</h1>
                <p className="text-xs text-emerald-600 font-medium tracking-wider uppercase">Pest Control</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#" className="text-sm font-bold text-emerald-600 border-b-2 border-emerald-600 pb-1">SHOP</a>
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Book Online</a>
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Pre-Book 2026</a>
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Blog</a>
              <a href="#" className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors">
                <User className="w-5 h-5" />
                Log In
              </button>
              <button className="relative p-2 text-neutral-600 hover:text-emerald-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button 
                className="md:hidden p-2 text-neutral-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white absolute w-full left-0 shadow-lg">
            <nav className="flex flex-col p-4">
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 border-b border-neutral-100">Home</a>
              <a href="#" className="py-3 px-4 text-sm font-bold text-emerald-600 bg-emerald-50 border-b border-neutral-100">SHOP</a>
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 border-b border-neutral-100">Book Online</a>
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 border-b border-neutral-100">Pre-Book 2026</a>
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 border-b border-neutral-100">Blog</a>
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 border-b border-neutral-100">Contact</a>
              <a href="#" className="py-3 px-4 text-sm font-medium text-neutral-600 flex items-center gap-2">
                <User className="w-4 h-4" /> Log In
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Promo Banner */}
      <div className="bg-emerald-100 border-b border-emerald-200 py-3 px-4 text-center">
        <p className="text-sm font-medium text-emerald-800 uppercase tracking-wide">
          Free delivery with every order above €50. Use code <span className="font-bold bg-emerald-200 px-2 py-0.5 rounded">'freedel'</span> on checkout.
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden sticky top-24">
              <div className="p-4 bg-neutral-50 border-b border-neutral-200">
                <h2 className="font-bold text-neutral-800 uppercase tracking-wider text-sm">Category</h2>
              </div>
              <ul className="p-2">
                {CATEGORIES.map((category) => (
                  <li key={category}>
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between group ${
                        activeCategory === category 
                          ? 'bg-emerald-50 text-emerald-700 font-medium' 
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                      }`}
                    >
                      {category}
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeCategory === category ? 'text-emerald-500 translate-x-1' : 'text-transparent group-hover:text-neutral-400'
                      }`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-neutral-800">{activeCategory}</h2>
              <p className="text-sm text-neutral-500">{PRODUCTS.length} products</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {product.badge}
                      </div>
                    )}
                    <button className="absolute bottom-3 right-3 bg-white text-neutral-800 p-2 rounded-full shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-emerald-50 hover:text-emerald-600">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-medium text-neutral-800 mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>
                    
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-col">
                        {product.salePrice ? (
                          <>
                            <span className="text-xs text-neutral-400 line-through">€{product.regularPrice?.toFixed(2)}</span>
                            <span className="text-lg font-bold text-emerald-600">€{product.salePrice.toFixed(2)}</span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-neutral-800">€{product.price?.toFixed(2)}</span>
                        )}
                      </div>
                      <button className="bg-neutral-900 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                  C
                </div>
                <h3 className="text-lg font-bold text-white">Comtec Malta</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4 max-w-xs">
                Professional pest control services and products in Malta. We have got you covered!
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
                  <a href="#" className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    Send a Message
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Book Online</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
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

