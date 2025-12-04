import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MARKET_TRENDS } from '../constants';

const MarketChart: React.FC = () => {
  return (
    <section id="market" className="py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-white mb-6">区域市场增长趋势</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    近年来，东北亚地区的独立游戏市场呈现爆发式增长。得益于数字发行平台的普及和跨国合作的加深，中日韩三国的独立游戏开发者正在通过 NAIGA 获得更多曝光机会。
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-gray-300">中国市场规模年增长率 &gt; 25%</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-white" />
                        <span className="text-gray-300">日本独立游戏出海比例提升</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-gray-300">韩国叙事类游戏受到全球关注</span>
                    </li>
                </ul>
            </div>
            
            <div className="lg:col-span-2 h-[400px] bg-dark-card/30 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={MARKET_TRENDS}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorCn" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorJp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorKr" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="year" stroke="#666" tick={{fill: '#888'}} />
                        <YAxis stroke="#666" tick={{fill: '#888'}} />
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e1e1e', border: '1px solid #333', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="cn" name="China" stroke="#ef4444" fillOpacity={1} fill="url(#colorCn)" strokeWidth={2} />
                        <Area type="monotone" dataKey="jp" name="Japan" stroke="#ffffff" fillOpacity={1} fill="url(#colorJp)" strokeWidth={2} />
                        <Area type="monotone" dataKey="kr" name="Korea" stroke="#3b82f6" fillOpacity={1} fill="url(#colorKr)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChart;