export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Our Fragrance Collection
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              At FragranceLine, we believe luxury should be experienced, not overpriced. Our fragrances are inspired by high-end scents, crafted to deliver the same rich, long-lasting impression at a more accessible price. Each bottle is designed to elevate your presence—subtle, bold, and unforgettable—because true luxury isn’t about how much you spend, it’s about how you make people remember you.

            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Each fragrance in our collection is carefully selected for its quality, uniqueness, and
              ability to express your personal style. Whether you're seeking a fresh daytime scent,
              an intoxicating evening perfume, or a versatile unisex fragrance.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-slate-400">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-400">Authentic Products</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl p-8 h-96 flex items-center justify-center border border-slate-800 shadow-xl shadow-black/30">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-slate-900 rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Luxury Fragrances
                </h3>
                <p className="text-slate-300">
                  Curated with passion for the discerning fragrance enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
