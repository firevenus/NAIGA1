
import React from 'react';
import { Gamepad2, Twitter, Github, Mail } from 'lucide-react';
import { LanguageCode } from '../types';
import { ORGANIZATION_NAMES } from '../constants';

interface FooterProps {
    currentLang: LanguageCode;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="text-neon-blue w-6 h-6" />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-xl text-white tracking-tighter">NAIGA</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Northeast Asia</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {ORGANIZATION_NAMES[currentLang]}
            </p>
             <p className="text-gray-600 text-xs">
              连接中日韩俄蒙，构建无国界游戏开发生态。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">链接</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-neon-blue transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">会员服务</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">赞助合作</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">媒体资源</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-neon-blue transition-colors">开发者指南</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">发行商列表</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">活动日历</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">本地化工具</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">联系方式</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="mailto:contact@naiga.org" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <a href="mailto:contact@naiga.org" className="mt-4 block text-sm text-gray-500 hover:text-neon-blue transition-colors">
                contact@naiga.org
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} {ORGANIZATION_NAMES['en']}.</p>
          <p>NAIGA - Connecting Creativity Across Borders</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;