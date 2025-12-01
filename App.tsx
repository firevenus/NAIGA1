import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import MarketChart from './components/MarketChart';
import Events from './components/Events';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import NewsBlog from './components/NewsBlog';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-neon-blue selection:text-black">
      <Header />
      <main>
        <Hero />
        <GameGrid />
        <MarketChart />
        <NewsBlog />
        <Events />
      </main>
      <Footer />
      <GeminiAssistant />
    </div>
  );
}

export default App;