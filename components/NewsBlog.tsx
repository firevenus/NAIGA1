import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';

const NewsBlog: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Header */}
         <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">新闻与博客</h2>
                <p className="text-gray-400">最新行业动态、联盟公告与成员故事</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-neon-green hover:text-white transition-colors text-sm font-medium">
                浏览归档 <ArrowRight className="w-4 h-4" />
            </button>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
                <article key={post.id} className="bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                    {/* Image Wrapper */}
                    <div className="h-48 overflow-hidden relative">
                         <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark-surface to-transparent opacity-60"></div>
                         <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-neon-green border border-neon-green/20">
                            {post.category}
                         </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
                            <span className="flex items-center gap-1"><User className="w-3 h-3"/> {post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2 leading-tight">
                            {post.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                            {post.summary}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                            <button className="text-sm text-gray-300 group-hover:text-white flex items-center gap-2 transition-colors">
                                <FileText className="w-4 h-4" /> 阅读全文
                            </button>
                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-neon-green -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                    </div>
                </article>
            ))}
         </div>
         
         <div className="mt-8 text-center sm:hidden">
            <button className="text-neon-green font-medium flex items-center justify-center w-full gap-2">浏览归档 <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  )
}

export default NewsBlog;