export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">Get Help</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#" className="hover:text-white">News</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Investors</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-white/70">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">TikTok</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Twitter/X</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white/60">© {new Date().getFullYear()} Airstep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
