import { Menu, Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/10" aria-label="Menu">
            <Menu className="w-5 h-5 text-white" />
          </button>
          <a href="/" className="text-white text-xl font-bold tracking-tight">
            air<span className="text-emerald-400">step</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#new" className="hover:text-white transition">New & Featured</a>
          <a href="#men" className="hover:text-white transition">Men</a>
          <a href="#women" className="hover:text-white transition">Women</a>
          <a href="#kids" className="hover:text-white transition">Kids</a>
          <a href="#sale" className="text-emerald-300 hover:text-emerald-200 transition">Sale</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-white/10" aria-label="Search">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10" aria-label="Account">
            <User className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10" aria-label="Bag">
            <ShoppingBag className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
