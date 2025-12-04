
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { ORGANIZATION_NAMES, TAGLINES } from '../constants';

interface HeroProps {
    currentLang: LanguageCode;
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  return (
    <div id="hero" className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        {/* Giant NAIGA Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter">
            NAIGA
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Acronym Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-sm font-mono mb-8 animate-pulse shadow-[0_0_15px_rgba(10,255,104,0.3)]">
          <Sparkles className="w-4 h-4" />
          <span className="font-bold tracking-widest">NAIGA</span>
        </div>
        
        {/* Main Title - Localized Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-white to-neon-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
            {ORGANIZATION_NAMES[currentLang]}
          </span>
        </h1>

        {/* English Name (Visible if lang is NOT English, to show international presence) */}
        {currentLang !== 'en' && (
            <h2 className="text-lg sm:text-2xl text-gray-400 font-light tracking-wide mb-4 font-mono">
                Northeast Asia Indie Game Alliance
            </h2>
        )}
        
        {/* Slogan */}
        <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-gray-300 font-medium border-t border-white/10 pt-6">
          {TAGLINES[currentLang]}
        </p>
        
        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500">
             Connecting developers from China, Japan, Korea, Russia, and Mongolia.
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#games"
            className="px-8 py-3 border border-transparent text-base font-bold rounded-full text-black bg-white hover:bg-neon-blue transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            探索游戏 <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-gray-600 text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            加入联盟
          </a>
        </div>

        {/* Stats Strip - Integrated with Hero */}
        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-5 border-t border-white/10 pt-10 opacity-70">
            <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">CN</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">China</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">JP</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Japan</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">KR</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Korea</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">RU</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Russia</span>
            </div>
             <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">MN</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Mongolia</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
