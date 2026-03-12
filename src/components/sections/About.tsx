"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Instagram, Youtube, ExternalLink, Facebook } from "lucide-react";

const tabs = [
  { id: "profile", label: "PROFILE" },
  { id: "bio", label: "BIO" },
  { id: "interview", label: "INTERVIEW" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"profile" | "bio" | "interview">("profile");
  return (
    <section id="about" className="bg-[#2B2B2B] text-white transition-colors duration-1000 w-full overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 pt-20 md:pt-32 pb-24 md:pb-48 min-h-screen scroll-mt-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-12"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] md:leading-[0.9] mb-8 md:mb-12 font-sans overflow-hidden py-2">
            ABOUT
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium leading-[1.6] md:leading-[1.8] break-keep max-w-4xl">
            20년 실무 경험을 바탕으로 게임 IP를 기획하고 스팀 정식 출시까지 총괄한 크리에이터
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group lg:col-span-4 aspect-[4/5] bg-white/5 relative overflow-hidden flex items-center justify-center text-white/20 font-medium rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 w-full mt-2"
          >
            <img src="/image/profile_picture.jpeg" alt="Profile" className="w-full h-full object-cover object-top transition-opacity duration-700 group-hover:opacity-0" />
            <img src="/image/gls2022_2_03_076_.png" alt="Profile Hover" className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50 mix-blend-multiply pointer-events-none" />
          </motion.div>

          {/* Narrative / Cover Letter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col justify-start pt-4 lg:pt-2 gap-6"
          >
            <div className="flex flex-wrap justify-start gap-4 md:gap-8 mb-6 border-b border-white/10 pb-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`text-lg md:text-2xl font-bold tracking-tight transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-white/40"
                    } relative pb-2`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="about-tab-indicator"
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-white"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-p:font-light prose-p:leading-relaxed max-w-none text-white/80">

              <AnimatePresence mode="wait">
                {activeTab === "profile" && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-12 w-full max-w-4xl relative z-20 pointer-events-auto"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-4xl space-y-6"
                    >
                      <ul className="space-y-2">
                        <div className="flex flex-col gap-4 w-full">
                          {/* 1. Name */}
                          <li className="flex flex-col border-b border-white/10 pb-3">
                            <p className="text-3xl font-black text-white tracking-tight">최용찬</p>
                          </li>

                          {/* 2. Role */}
                          <li className="flex flex-col border-b border-white/10 pb-3">
                            <p className="text-xl font-bold text-white">PD, 디렉터, 디자이너, 기획 <span className="text-white/60 text-lg font-medium ml-2">(게임 분야: 모바일, PC 및 콘솔)</span></p>
                          </li>

                          {/* 3. Email */}
                          <li className="flex flex-col border-b border-white/10 pb-3">
                            <p className="text-xl font-medium text-white">
                              <a href="mailto:pigromance@daum.net" className="hover:text-white/80 transition-colors">pigromance@daum.net</a>
                            </p>
                          </li>

                          {/* 4. Phone */}
                          <li className="flex flex-col border-b border-white/10 pb-3">
                            <p className="text-xl font-medium text-white">010-8226-6892</p>
                          </li>

                          {/* 5. SNS */}
                          <li className="flex flex-col border-b border-white/10 pb-3">
                            <div className="relative z-10 flex flex-wrap gap-8 items-center pt-1">
                              <a href="https://www.facebook.com/PIGROMANCE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors relative z-10 cursor-pointer">
                                <Facebook size={22} />
                                <span className="text-lg font-medium">Facebook</span>
                              </a>
                              <a href="https://www.youtube.com/@PIGROMANCE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors relative z-10 cursor-pointer">
                                <Youtube size={22} />
                                <span className="text-lg font-medium">YouTube</span>
                              </a>
                            </div>
                          </li>
                        </div>
                      </ul>

                      {/* Links */}
                      <div className="relative z-20 flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                        <a href="https://gemini.google.com/share/62f619990e7f" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-sm transition-colors text-base font-bold w-full sm:w-fit cursor-pointer">
                          Gemini 인재 분석 보고서
                          <ExternalLink size={16} className="opacity-50" />
                        </a>

                        <a href="https://drive.google.com/drive/folders/17OaEjVESlN7DfhuleC7V2HHfZPtUL55V?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:opacity-90 rounded-sm transition-opacity text-base font-bold w-full sm:w-fit cursor-pointer">
                          피그로맨스 게임 다운로드
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "bio" && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-4 text-white">
                      그래피티 아트 작가에서 그래픽 디자이너, 게임 PD 등 콘텐츠 제작의 전 과정을 직접 설계하고 이끌어온 <span className="font-bold text-white">크리에이티브 디렉터</span>입니다.
                    </p>
                    <p className="mb-4 text-white">
                      계원예술대학교에서 인지학 기반 디자인을 학습한 뒤, 디자인 스튜디오 토이랩을 창업해 전시 그래픽, 영상, 애니메이션, 브랜드 디자인 등 실무 전반을 수행했습니다. 이후 독자 IP를 만들겠다는 목표로 게임 스튜디오 외계인납치작전을 설립하고, 내러티브 퍼즐 게임 피그로맨스를 약 5년간 총괄 개발했습니다.
                    </p>
                    <p className="mb-4 text-white">
                      시나리오부터 아트 디렉션, 애니메이션, 사운드 디렉팅까지 제작 전 과정을 이끌었으며, 스팀 98% 긍정 평가, 국내 주요 게임 어워즈 다수 수상, 메이저 게임사 글로벌 퍼블리싱 계약 체결 및 닌텐도 스위치 포팅을 완수했습니다. 게임스컴, TGS 등 해외 전시와 IR, 정부 지원사업 자문까지 사업 운영 전반을 직접 수행했습니다.
                    </p>

                    <div className="bg-white/5 p-6 rounded-sm mt-8 border-l-4 border-white/20">
                      <h4 className="text-lg font-bold mb-4">❝ 저는 게임 산업에서 이런 경험을 해봤습니다.❞</h4>
                      <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>게임 제작 실무 경험 : 8년 / 시각콘텐츠 관련 분야 실무 경험 : 20년</li>
                        <li>퍼블리싱 계약 체결 경험</li>
                        <li>정부지원사업 선정으로 자금 조달 경험</li>
                        <li>‘피그로맨스’ 스팀, 스토브 정식 출시 경험</li>
                        <li>콘솔 포팅 경험 : 닌텐도스위치, Xbox</li>
                        <li>개발팀 관리 경험</li>
                        <li>인사 담당 경험</li>
                        <li>IR 투자 유치 활동 및 국내외 투자자와의 교류 경험</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "interview" && (
                  <motion.div
                    key="interview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {[
                      {
                        title: "인터뷰 1",
                        url: "https://unitysquare.co.kr/madewith/game/view?bidx=1&idx=688&utm_source=facebook-page&utm_medium=soci",
                        colors: ["#1e293b", "#334155", "#0f172a", "#1e293b"] // Dark Slate Muted Tones
                      },
                      {
                        title: "인터뷰 2",
                        url: "https://www.thisisgame.com/articles/196491",
                        colors: ["#292524", "#44403c", "#1c1917", "#292524"] // Deep Charcoal / Warm Black
                      },
                      {
                        title: "인터뷰 3",
                        url: "https://cda.or.kr/CDAPost/2/read/1094",
                        colors: ["#18181b", "#27272a", "#3f3f46", "#18181b"] // Neutral Zinc Grays
                      }
                    ].map((item, idx) => (
                      <motion.a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden flex items-center justify-center text-center p-6 border border-white/10 shadow-md hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]"
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Dynamic Color Background Loop */}
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          animate={{ backgroundColor: item.colors }}
                          transition={{
                            duration: 18 + (idx * 2), // Gives a slightly different tempo to each card (18s, 20s, 22s) so they naturally desync
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                        {/* Dark Overlay for Text Readability & Hover Darken Effect */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-0" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                          <h4 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-[-0.04em] drop-shadow-lg">
                            {item.title}
                          </h4>
                          <span className="inline-flex items-center gap-2 text-white/80 font-medium text-sm tracking-widest uppercase">
                            Read Story <ExternalLink size={14} />
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Capabilities Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <div className="mt-2 text-left w-full">
                <h3 className="text-sm font-black tracking-widest text-white/40 uppercase mb-4">Capabilities</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    "#PD", "#기획", "#출시경험", "#제작총괄", "#아트디렉터", "#시나리오", "#팀관리"
                  ].map((tag) => (
                    <motion.div
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold tracking-tight cursor-default hover:bg-white hover:text-black transition-colors"
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
