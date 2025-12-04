
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, FileText, Plus, X, Loader2, Sparkles } from 'lucide-react';
import { BlogPost, LanguageCode, BlogCategory, LocalizedString } from '../types';
import { translatePost } from '../services/geminiService';

interface NewsBlogProps {
    currentLang: LanguageCode;
}

const NewsBlog: React.FC<NewsBlogProps> = ({ currentLang }) => {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState<BlogCategory>('成员故事');

  const getLocalizedText = (content: LocalizedString): string => {
      if (typeof content === 'string') return content;
      return content[currentLang] || content['en'] || '';
  };

  const handleCreatePost = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newTitle || !newContent || !newAuthor) return;

      setIsSubmitting(true);

      // Call AI to translate
      const translations = await translatePost(newTitle, newContent);

      const newPost: BlogPost = {
          id: `new-${Date.now()}`,
          title: translations ? translations.titles : newTitle,
          summary: translations ? translations.summaries : newContent.slice(0, 100) + '...',
          author: newAuthor,
          date: new Date().toISOString().split('T')[0],
          category: newCategory,
          imageUrl: `https://picsum.photos/600/400?random=${Date.now()}`
      };

      setPosts([newPost, ...posts]);
      setIsSubmitting(false);
      setIsModalOpen(false);
      
      // Reset form
      setNewTitle('');
      setNewContent('');
      setNewAuthor('');
  };

  return (
    <section id="news" className="py-20 bg-dark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Header */}
         <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-white mb-2">新闻与博客</h2>
                <p className="text-gray-400">最新行业动态、联盟公告与成员故事</p>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/50 px-4 py-2 rounded-full hover:bg-neon-green hover:text-black transition-all font-medium text-sm"
                >
                    <Plus className="w-4 h-4" /> 成员投稿
                </button>
            </div>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map(post => (
                <article key={post.id} className="bg-dark-surface rounded-xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                    {/* Image Wrapper */}
                    <div className="h-48 overflow-hidden relative">
                         <img src={post.imageUrl} alt={getLocalizedText(post.title)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
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
                            {getLocalizedText(post.title)}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                            {getLocalizedText(post.summary)}
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
      </div>

      {/* Submission Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
              <div className="relative bg-dark-card border border-white/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                  <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                      <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-2 mb-6 text-neon-green">
                      <Sparkles className="w-5 h-5" />
                      <h3 className="text-xl font-bold text-white">发布新闻 (AI 自动翻译)</h3>
                  </div>

                  <form onSubmit={handleCreatePost} className="space-y-4">
                      <div>
                          <label className="block text-sm text-gray-400 mb-1">标题</label>
                          <input 
                            type="text" 
                            required
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none"
                            placeholder="请输入文章标题..." 
                          />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">作者</label>
                            <input 
                                type="text" 
                                required
                                value={newAuthor}
                                onChange={(e) => setNewAuthor(e.target.value)}
                                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none"
                                placeholder="工作室名称" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-400 mb-1">分类</label>
                            <select 
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value as BlogCategory)}
                                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none"
                            >
                                <option>联盟动态</option>
                                <option>行业深度</option>
                                <option>成员故事</option>
                                <option>开发技术</option>
                            </select>
                          </div>
                      </div>

                      <div>
                          <label className="block text-sm text-gray-400 mb-1">正文内容</label>
                          <textarea 
                            required
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-2 text-white focus:border-neon-green focus:outline-none h-32 resize-none"
                            placeholder="输入正文，AI 将自动生成摘要并翻译成 6 种语言..." 
                          />
                      </div>

                      <div className="pt-2">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-neon-green hover:bg-green-400 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                              {isSubmitting ? (
                                  <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    正在翻译并发布...
                                  </>
                              ) : (
                                  '提交发布'
                              )}
                          </button>
                          <p className="text-center text-xs text-gray-500 mt-2">
                              系统将自动翻译为 EN, JA, KO, RU, MN
                          </p>
                      </div>
                  </form>
              </div>
          </div>
      )}
    </section>
  )
}

export default NewsBlog;
