import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-white"
          >
            Move better. Go further.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-white/80 max-w-xl"
          >
            Performance footwear engineered for speed, comfort and everyday style. Designed for athletes, creators and everyone in between.
          </motion.p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-white/90 transition">
              Shop Now
            </a>
            <a href="#new" className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              Explore New Arrivals
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
            alt="Hero Shoe"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl shadow-lg px-4 py-3 font-semibold">
            AirStep Runner
          </div>
        </motion.div>
      </div>
    </section>
  );
}
