import React from 'react';
import { Gamepad2, Twitter, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="text-neon-blue w-6 h-6" />
              <span className="font-mono font-bold text-xl text-white">NAIGA</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              东北亚独立游戏联盟致力于构建一个开放、包容的开发者社区，推动区域内独立游戏的繁荣发展。
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                contact@naiga.org
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          <p>&copy; 2024 Northeast Asia Indie Game Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;