
import React from 'react';
import { Mail, Globe, ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { LanguageCode } from '../types';
import { ORGANIZATION_NAMES } from '../constants';

interface AboutProps {
    currentLang: LanguageCode;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  const content = {
    zh: {
      title: "关于 NAIGA",
      subtitle: "连接 · 赋能 · 创造",
      desc: "东北亚独立游戏联盟致力于打破语言与文化的壁垒，为中日韩俄蒙的独立开发者建立一个自由交流、资源共享的生态系统。",
      contactTitle: "联系我们",
      emailLabel: "官方邮箱 / 商务合作 / 加入申请"
    },
    en: {
      title: "About NAIGA",
      subtitle: "Connect · Empower · Create",
      desc: "NAIGA is dedicated to breaking down language and cultural barriers, building an ecosystem for free exchange and resource sharing for indie developers across Northeast Asia.",
      contactTitle: "Contact Us",
      emailLabel: "Official Email / Business / Join Us"
    },
    ja: {
      title: "NAIGAについて",
      subtitle: "つながる · 力を与える · 創造する",
      desc: "NAIGAは、言語や文化の壁を取り払い、北東アジアのインディー開発者のための自由な交流とリソース共有のエコシステムを構築することに尽力しています。",
      contactTitle: "お問い合わせ",
      emailLabel: "公式メール / ビジネス / 加盟申請"
    },
    ko: {
      title: "NAIGA 소개",
      subtitle: "연결 · 권한 부여 · 창조",
      desc: "NAIGA는 언어와 문화의 장벽을 허물고 동북아시아 인디 개발자들을 위한 자유로운 교류와 자원 공유의 생태계를 구축하는 데 전념하고 있습니다.",
      contactTitle: "문의하기",
      emailLabel: "공식 이메일 / 비즈니스 / 가입 신청"
    },
    ru: {
      title: "О NAIGA",
      subtitle: "Соединять · Вдохновлять · Создавать",
      desc: "NAIGA стремится разрушить языковые и культурные барьеры, создавая экосистему для свободного обмена и совместного использования ресурсов для инди-разработчиков Северо-Восточной Азии.",
      contactTitle: "Связаться с нами",
      emailLabel: "Официальная почта / Бизнес / Вступление"
    },
    mn: {
      title: "NAIGA-ийн тухай",
      subtitle: "Холбох · Эрх олгох · Бүтээх",
      desc: "NAIGA нь хэл, соёлын саад бэрхшээлийг арилгаж, Зүүн Хойд Азийн инди хөгжүүлэгчдэд чөлөөт солилцоо, нөөц хуваалцах экосистемийг бий болгохыг зорьдог.",
      contactTitle: "Бидэнтэй холбогдох",
      emailLabel: "Албан ёсны имэйл / Бизнес / Элсэх"
    }
  };

  const t = content[currentLang] || content['en'];

  return (
    <section id="about" className="py-20 bg-dark-card border-t border-white/5 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: About Text */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-neon-blue rounded-full" />
                    <span className="text-neon-blue font-bold tracking-widest uppercase text-sm">{t.subtitle}</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-6">
                    {t.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {t.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <Shield className="w-8 h-8 text-neon-green mb-3" />
                        <h4 className="text-white font-bold mb-1">IP Protection</h4>
                        <p className="text-xs text-gray-500">协助成员处理跨国版权事务与法律咨询。</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <Zap className="w-8 h-8 text-neon-purple mb-3" />
                        <h4 className="text-white font-bold mb-1">Global Publishing</h4>
                        <p className="text-xs text-gray-500">连接全球发行商，提供本地化支持。</p>
                    </div>
                </div>
            </div>

            {/* Right: Contact Card */}
            <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-xl opacity-50 animate-pulse" />
                
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    {t.contactTitle}
                </h3>

                <div className="space-y-6">
                    <div className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-blue/50 p-6 rounded-2xl transition-all duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neon-blue/10 rounded-full text-neon-blue group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-400 mb-1">{t.emailLabel}</p>
                                <a 
                                    href="mailto:contact@naiga.org" 
                                    className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-neon-blue transition-colors break-all"
                                >
                                    contact@naiga.org
                                </a>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-neon-blue group-hover:translate-x-1 transition-all mt-3" />
                        </div>
                    </div>

                    <div className="flex gap-4">
                         <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-2">
                            <Globe className="w-6 h-6 text-gray-400" />
                            <span className="text-xs text-gray-500">Official Website</span>
                            <span className="text-sm font-bold text-white">naiga.org</span>
                         </div>
                         <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center gap-2">
                            <Users className="w-6 h-6 text-gray-400" />
                            <span className="text-xs text-gray-500">Members</span>
                            <span className="text-sm font-bold text-white">750+</span>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
