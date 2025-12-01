import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-mono mb-8 animate-pulse">
          <Sparkles className="w-3 h-3" />
          <span>目前已有 500+ 工作室加入联盟</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block mb-2">连接东北亚</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-purple-400 to-neon-purple">
            无国界的创意
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          NAIGA 致力于消除语言与文化的隔阂，帮助中国、日本、韩国的独立游戏开发者走向全球舞台。
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#games"
            className="px-8 py-3 border border-transparent text-base font-bold rounded-full text-black bg-white hover:bg-neon-blue transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            探索游戏 <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-gray-600 text-base font-medium rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            了解更多
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-10">
            <div className="flex flex-col">
                <span className="text-3xl font-mono font-bold text-white">CN</span>
                <span className="text-sm text-gray-500">中国开发者</span>
            </div>
            <div className="flex flex-col">
                <span className="text-3xl font-mono font-bold text-white">JP</span>
                <span className="text-sm text-gray-500">日本开发者</span>
            </div>
            <div className="flex flex-col">
                <span className="text-3xl font-mono font-bold text-white">KR</span>
                <span className="text-sm text-gray-500">韩国开发者</span>
            </div>
            <div className="flex flex-col">
                <span className="text-3xl font-mono font-bold text-white">GL</span>
                <span className="text-sm text-gray-500">全球发行</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;