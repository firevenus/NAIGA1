
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegionShowcase from './components/RegionShowcase';
import GameGrid from './components/GameGrid';
import Events from './components/Events';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import NewsBlog from './components/NewsBlog';
import About from './components/About';
import { LanguageCode } from './types';

function App() {
  const [language, setLanguage] = useState<LanguageCode>('zh');

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-neon-blue selection:text-black">
      <Header currentLang={language} setLang={setLanguage} />
      <main>
        <Hero currentLang={language} />
        <RegionShowcase />
        <GameGrid />
        <NewsBlog currentLang={language} />
        <Events />
        <About currentLang={language} />
      </main>
      <Footer currentLang={language} />
      <GeminiAssistant currentLang={language} />
    </div>
  );
}

export default App;
