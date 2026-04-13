import type { Perfume } from '../data/perfumes';

interface PerfumeCardProps extends Perfume {
  whatsappNumber: string;
}

export default function PerfumeCard({
  name,
  brand,
  image,
  whatsappNumber,
}: PerfumeCardProps) {
  const handleShopNow = () => {
    const message = `Hi, I'm interested to buy ${name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-900 rounded-xl shadow-2xl shadow-black/30 overflow-hidden card-hover group border border-slate-800">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 bg-slate-800">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Brand */}
        <p className="text-purple-300 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1">
          {brand}
        </p>

        {/* Name */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-200">
          {name}
        </h3>

        {/* Shop Now Button */}
        <button
          onClick={handleShopNow}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-700 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-slate-600 transition-all duration-300 group-hover:shadow-lg"
        >
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
}
