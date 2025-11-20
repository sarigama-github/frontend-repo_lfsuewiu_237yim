import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError(e.message || "Error loading products");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <p className="text-white/80">Loading products…</p>;
  if (error) return <p className="text-red-300">{error}</p>;

  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Featured</h2>
        <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
