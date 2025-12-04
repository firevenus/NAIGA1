
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, Gamepad2, ChevronDown } from 'lucide-react';
import { LanguageCode } from '../types';

interface HeaderProps {
  currentLang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

const NAV_LABELS: Record<LanguageCode, Record<string, string>> = {
  zh: { home: '首页', games: '游戏展示', market: '市场趋势', news: '新闻博客', events: '活动', about: '关于我们', join: '加入联盟' },
  en: { home: 'Home', games: 'Games', market: 'Market', news: 'News', events: 'Events', about: 'About', join: 'Join' },
  ko: { home: '홈', games: '게임', market: '시장', news: '뉴스', events: '이벤트', about: '소개', join: '가입' },
  ja: { home: 'ホーム', games: 'ゲーム', market: '市場', news: 'ニュース', events: 'イベント', about: '概要', join: '加盟' },
  ru: { home: 'Главная', games: 'Игры', market: 'Рынок', news: 'Новости', events: 'События', about: 'О нас', join: 'Вступить' },
  mn: { home: 'Нүүр', games: 'Тоглоом', market: 'Зах зээл', news: 'Мэдээ', events: 'Үйл явдал', about: 'Бидний тухай', join: 'Элсэх' },
};

const LANGUAGES: { code: LanguageCode; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'ko', label: 'Korean', native: '한국어' },
  { code: 'ja', label: 'Japanese', native: '日本語' },
  { code: 'zh', label: 'Chinese', native: '中文' },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'mn', label: 'Mongolian', native: 'Монгол' },
];

const Header: React.FC<HeaderProps> = ({ currentLang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = NAV_LABELS[currentLang];

  const navLinks = [
    { name: t.home, href: '#hero' },
    { name: t.games, href: '#games' },
    { name: t.market, href: '#market' },
    { name: t.news, href: '#news' },
    { name: t.events, href: '#events' },
    { name: t.about, href: '#about' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded flex items-center justify-center">
              <Gamepad2 className="text-white w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              NAIGA
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             {/* Language Dropdown */}
             <div className="relative" ref={langMenuRef}>
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/5"
                >
                    <Globe className="w-5 h-5" />
                    <span className="text-xs uppercase font-mono">{currentLang}</span>
                    <ChevronDown className="w-3 h-3" />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-dark-card border border-white/10 rounded-lg shadow-xl py-1 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLang(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-white/10 transition-colors ${
                          currentLang === lang.code ? 'text-neon-blue' : 'text-gray-300'
                        }`}
                      >
                        <span>{lang.native}</span>
                        {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />}
                      </button>
                    ))}
                  </div>
                )}
             </div>

             <a href="#about" className="bg-white text-black hover:bg-neon-blue transition-colors px-4 py-1.5 rounded-full text-sm font-bold">
                {t.join}
             </a>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-4">
            {/* Mobile Language Toggle (Simple Cycle) */}
            <button 
                onClick={() => {
                    const currentIndex = LANGUAGES.findIndex(l => l.code === currentLang);
                    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
                    setLang(LANGUAGES[nextIndex].code);
                }}
                className="text-gray-400 hover:text-white"
            >
                <span className="font-mono text-xs border border-gray-600 px-1.5 py-0.5 rounded uppercase">{currentLang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#about" onClick={() => setIsOpen(false)} className="w-full text-left text-neon-blue px-3 py-2 rounded-md text-base font-medium block">
                {t.join}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
