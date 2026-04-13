import backgroundImage from '../assets/mainpage.jpg'

export default function HeroSection() {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById('collection');
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg fade-in-up">
          Discover the Dark Elegance of Premium Perfumes
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 max-w-2xl drop-shadow-md fade-in-up" style={{ animationDelay: '0.2s' }}>
          Explore our curated collection of luxury perfumes from the world's finest brands
        </p>

        <button
          onClick={scrollToCollection}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-slate-800 text-white font-bold text-base sm:text-lg rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30 fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Shop Now
        </button>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce fade-in-up" style={{ animationDelay: '0.6s' }}>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
