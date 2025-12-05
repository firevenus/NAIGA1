
import React, { useState, useMemo } from 'react';
import { MEMBERS, BLOG_POSTS } from '../constants';
import { Country, LanguageCode, BlogPost, Member, BlogCategory, LocalizedString } from '../types';
import { translatePost } from '../services/geminiService';
import { Plus, Loader2, Sparkles, User, Calendar, FileText, ArrowRight, X, Filter } from 'lucide-react';

interface MemberZoneProps {
    currentLang: LanguageCode;
}

const MemberZone: React.FC<MemberZoneProps> = ({ currentLang }) => {
    const [selectedCountry, setSelectedCountry] = useState<Country | 'ALL'>('ALL');
    const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
    const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);

    // Contribution Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newCategory, setNewCategory] = useState<BlogCategory>('成员故事');

    // Helper to get localized string
    const getLocalized = (content: LocalizedString): string => {
        if (typeof content === 'string') return content;
        return content[currentLang] || content['en'] || content['zh'] || '';
    };

    // Derived Data
    const filteredMembers = useMemo(() => {
        return MEMBERS.filter(m => selectedCountry === 'ALL' || m.country === selectedCountry);
    }, [selectedCountry]);

    const selectedMember = useMemo(() => {
        return MEMBERS.find(m => m.id === selectedMemberId);
    }, [selectedMemberId]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            // If a member is selected, strictly show their posts
            if (selectedMemberId) {
                return post.memberId === selectedMemberId;
            }
            // If no member selected, show posts from the selected country (via member lookup)
            if (selectedCountry !== 'ALL') {
                const authorMember = MEMBERS.find(m => m.id === post.memberId);
                return authorMember?.country === selectedCountry;
            }
            return true;
        });
    }, [posts, selectedMemberId, selectedCountry]);

    // Handlers
    const handlePostSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const translations = await translatePost(newTitle, newContent);
        
        const newPost: BlogPost = {
            id: `new-${Date.now()}`,
            memberId: 'm_naiga', // Default to generic for this demo
            title: translations ? translations.titles : newTitle,
            summary: translations ? translations.summaries : newContent.slice(0, 100),
            author: newAuthor,
            date: new Date().toISOString().split('T')[0],
            category: newCategory,
            imageUrl: `https://picsum.photos/600/400?random=${Date.now()}`
        };

        setPosts([newPost, ...posts]);
        setIsSubmitting(false);
        setIsModalOpen(false);
        setNewTitle(''); setNewContent(''); setNewAuthor('');
    };

    return (
        <section id="members" className="py-20 bg-dark-bg relative border-t border-white/5 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">联盟成员与动态</h2>
                        <p className="text-gray-400">探索来自东北亚各地的顶尖独立游戏团队</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/50 px-4 py-2 rounded-full hover:bg-neon-green hover:text-black transition-all font-medium text-sm"
                        >
                            <Plus className="w-4 h-4" /> 成员投稿
                        </button>
                    </div>
                </div>

                {/* 2. Country Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
                    <button 
                        onClick={() => { setSelectedCountry('ALL'); setSelectedMemberId(null); }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCountry === 'ALL' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                    >
                        ALL
                    </button>
                    {[Country.CN, Country.JP, Country.KR, Country.RU, Country.MN].map(country => (
                        <button
                            key={country}
                            onClick={() => { setSelectedCountry(country); setSelectedMemberId(null); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${selectedCountry === country ? 'bg-neon-blue text-black' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                        >
                           {country}
                        </button>
                    ))}
                </div>

                {/* 3. Member Grid */}
                <div className="mb-16">
                    <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <Filter className="w-4 h-4" /> 
                        {selectedCountry === 'ALL' ? '所有成员' : `${selectedCountry} 成员`}
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredMembers.map(member => (
                            <button
                                key={member.id}
                                onClick={() => setSelectedMemberId(selectedMemberId === member.id ? null : member.id)}
                                className={`group relative p-4 rounded-xl border text-left transition-all duration-300 flex flex-col items-center gap-3
                                    ${selectedMemberId === member.id 
                                        ? 'bg-neon-blue/10 border-neon-blue ring-1 ring-neon-blue' 
                                        : 'bg-dark-surface border-white/5 hover:border-white/20 hover:bg-white/5'
                                    }`}
                            >
                                <img src={member.logoUrl} alt={getLocalized(member.name)} className="w-16 h-16 rounded-full object-cover border border-white/10 group-hover:scale-110 transition-transform" />
                                <div className="text-center">
                                    <h4 className={`text-sm font-bold truncate w-full ${selectedMemberId === member.id ? 'text-neon-blue' : 'text-white'}`}>
                                        {getLocalized(member.name)}
                                    </h4>
                                    <p className="text-[10px] text-gray-500 line-clamp-2 mt-1 h-8">
                                        {getLocalized(member.description)}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4. News Feed */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-8">
                        {selectedMember ? (
                            <>
                                <img src={selectedMember.logoUrl} className="w-8 h-8 rounded-full" />
                                <h3 className="text-2xl font-bold text-white">
                                    {getLocalized(selectedMember.name)} <span className="text-gray-500 font-normal text-lg">的动态</span>
                                </h3>
                            </>
                        ) : (
                            <h3 className="text-2xl font-bold text-white">最新动态</h3>
                        )}
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20 bg-dark-surface rounded-xl border border-white/5 border-dashed">
                            <p className="text-gray-500">该分类下暂无新闻</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {filteredPosts.map(post => (
                                <article key={post.id} className="bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={post.imageUrl} alt={getLocalized(post.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-neon-green border border-neon-green/20">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                                            <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2 leading-tight">
                                            {getLocalized(post.title)}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                                            {getLocalized(post.summary)}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                            <button className="text-sm text-gray-300 group-hover:text-white flex items-center gap-2 transition-colors">
                                                <FileText className="w-4 h-4" /> 阅读全文
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

            </div>

             {/* Modal Reuse from previous NewsBlog logic */}
             {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
                    <div className="relative bg-dark-card border border-white/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
                        <div className="flex items-center gap-2 mb-6 text-neon-green">
                            <Sparkles className="w-5 h-5" />
                            <h3 className="text-xl font-bold text-white">成员投稿 (AI 翻译)</h3>
                        </div>
                        <form onSubmit={handlePostSubmit} className="space-y-4">
                            <div><label className="block text-sm text-gray-400 mb-1">标题</label><input type="text" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-400 mb-1">发布者</label><input type="text" required value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none" /></div>
                                <div><label className="block text-sm text-gray-400 mb-1">分类</label><select value={newCategory} onChange={(e) => setNewCategory(e.target.value as BlogCategory)} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none"><option>联盟动态</option><option>行业深度</option><option>成员故事</option><option>开发技术</option></select></div>
                            </div>
                            <div><label className="block text-sm text-gray-400 mb-1">内容</label><textarea required value={newContent} onChange={(e) => setNewContent(e.target.value)} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none h-32 resize-none" /></div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-neon-green hover:bg-green-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2">{isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : '提交'}</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MemberZone;
