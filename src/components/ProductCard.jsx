export default function ProductCard({ product }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold tracking-tight">{product.title}</h3>
          <span className="text-emerald-300 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-sm text-white/70 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center gap-3">
          <button className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-white/90 transition">Add to Bag</button>
          <button className="px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
