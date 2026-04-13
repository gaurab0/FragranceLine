import { useState } from 'react';
import PerfumeCard from './PerfumeCard';
import { perfumes } from '../data/perfumes';

type Category = 'all' | 'men' | 'women' | 'unisex';

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const whatsappNumber = '9779803062257'; // Replace with your actual WhatsApp number

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'men', label: 'Men' },
    { key: 'women', label: 'Women' },
    { key: 'unisex', label: 'Unisex' },
  ];

  const filteredPerfumes = selectedCategory === 'all'
    ? perfumes
    : perfumes.filter(perfume => perfume.category === selectedCategory);

  return (
    <section id="collection" className="py-16 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover luxury fragrances from the world's most prestigious perfume houses
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-slate-700 text-white shadow-lg shadow-black/20 transform scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 shadow-md shadow-black/10 hover:shadow-lg'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">
                ({category.key === 'all'
                  ? perfumes.length
                  : perfumes.filter(p => p.category === category.key).length
                })
              </span>
            </button>
          ))}
        </div>

        {/* Perfume Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              {...perfume}
              whatsappNumber={whatsappNumber}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPerfumes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No perfumes found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
