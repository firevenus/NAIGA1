import React from 'react';
import { UPCOMING_EVENTS } from '../constants';
import { Calendar, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-dark-bg border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">近期活动</h2>
            <p className="text-gray-400">线上 Game Jam 与线下 Meetup</p>
        </div>

        <div className="space-y-4">
            {UPCOMING_EVENTS.map((event) => (
                <div key={event.id} className="group flex flex-col md:flex-row items-start md:items-center justify-between bg-dark-surface p-6 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-all duration-300">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide
                                ${event.type === 'GameJam' ? 'bg-purple-500/20 text-purple-300' : 
                                  event.type === 'Conference' ? 'bg-blue-500/20 text-blue-300' : 
                                  'bg-green-500/20 text-green-300'}`}>
                                {event.type}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">{event.title}</h3>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</span>
                        </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0">
                        <button className="w-full md:w-auto px-6 py-2 rounded-full border border-gray-600 text-white font-medium hover:bg-white hover:text-black transition-all">
                            报名参加
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;