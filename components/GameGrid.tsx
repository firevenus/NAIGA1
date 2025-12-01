import React from 'react';
import { FEATURED_GAMES } from '../constants';
import { Tag } from 'lucide-react';
import { Country } from '../types';

const CountryBadge: React.FC<{ country: Country }> = ({ country }) => {
    const colors = {
        [Country.CN]: 'bg-red-500/20 text-red-300 border-red-500/30',
        [Country.JP]: 'bg-white/20 text-white border-white/30',
        [Country.KR]: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        [Country.OTHER]: 'bg-gray-500/20 text-gray-300',
    };

    return (
        <span className={`text-xs px-2 py-0.5 rounded border ${colors[country]}`}>
            {country}
        </span>
    );
};

const GameGrid: React.FC = () => {
  return (
    <section id="games" className="py-20 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">精选作品</h2>
                <p className="text-gray-400">来自联盟成员的最新创意之作</p>
            </div>
            <button className="hidden sm:block text-neon-blue hover:text-white transition-colors text-sm font-medium">
                查看全部 &rarr;
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_GAMES.map((game) => (
            <div key={game.id} className="group relative bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                    <CountryBadge country={game.country} />
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1 truncate">{game.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{game.developer}</p>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {game.tags.map(tag => (
                    <span key={tag} className="text-xs flex items-center gap-1 text-gray-400 bg-white/5 px-2 py-1 rounded">
                      <Tag className="w-3 h-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
            <button className="text-neon-blue font-medium">查看全部 &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default GameGrid;