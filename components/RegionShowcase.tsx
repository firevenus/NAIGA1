import React from 'react';
import { REGION_DATA } from '../constants';
import { Globe, Users } from 'lucide-react';

const RegionShowcase: React.FC = () => {
  return (
    <section className="py-12 bg-black border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {REGION_DATA.map((region) => (
            <div 
              key={region.id} 
              className={`group relative p-6 bg-dark-surface rounded-xl border border-white/5 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Decorative line top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${region.color.split(' ')[1]}`} />
              
              <div className="flex justify-between items-start mb-4">
                <span className={`text-4xl font-black opacity-20 group-hover:opacity-100 transition-opacity duration-300 font-mono ${region.color}`}>
                  {region.code}
                </span>
                <Globe className={`w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity ${region.color.split(' ')[1]}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{region.name}</h3>
              
              <p className="text-xs text-gray-500 mb-4 h-16 leading-relaxed">
                {region.description}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <Users className="w-3 h-3 text-gray-500" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                  {region.stats}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -bottom-10 -right-10 w-20 h-20 blur-[50px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${region.color.replace('text-', 'bg-').replace('border-', '')}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionShowcase;