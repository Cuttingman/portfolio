"use client";

import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { useState } from "react";

// Using real images from the public/image directory according to the .md source of truth
export const otherAchievementsGalleryImages: GalleryImageDef[] = [
    // Item 2: 타이페이 게임쇼 B2C 참가
    { src: "/image/25b32b42-d09c-47ac-aff1-3a30673fceb0.png", alt: "타이페이 게임쇼 B2C 시연 1" },
    { src: "/image/asset_98e2f47e.png", alt: "타이페이 게임쇼 B2C 시연 2" },

    // Item 3: K-콘텐츠 해외 지식재산 우수사례
    { src: "/image/1 1.png", alt: "K-콘텐츠 우수사례 1" },
    { src: "/image/2 1.png", alt: "K-콘텐츠 우수사례 2" },
    { src: "/image/3 1.png", alt: "K-콘텐츠 우수사례 3" },
    { src: "/image/4 1.png", alt: "K-콘텐츠 우수사례 4" },

    // Item 4: 비트서밋 참가
    { src: "/image/asset_e6ff9b7f.jpg", alt: "비트서밋 참가 부스" }
];

export function OtherAchievementsModalContent() {
    const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

    // Helper function to figure out the right index in the global array above
    const getIndex = (srcMatch: string) => {
        return otherAchievementsGalleryImages.findIndex(img => img.src.includes(srcMatch));
    };

    return (
        <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full pb-24">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 pb-4 font-sans border-b border-gray-700 text-white">
                그외 성과 (Other Achievements)
            </h2>

            <div className="space-y-24">

                {/* Item 1: neos 퍼블리싱 계약 */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">neos, ‘피그로맨스’ 닌텐도스위치 퍼블리싱 계약 체결</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">neos</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.10</span>
                        </div>
                    </div>

                    <a
                        href="https://www.cna.com.tw/postwrite/chi/397551"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 rounded-3xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">CNA News</span>
                            <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors m-0">日本Neos株式會社推出全球獨立遊戲發行業務</h4>
                            <p className="text-gray-400 text-base m-0 mt-2">글로벌 닌텐도 스위치 퍼블리싱 계약 관련 기사 확인하기 ↗</p>
                        </div>
                    </a>
                </div>

                {/* Item 2: 타이페이 게임쇼 (2-column layout) */}
                <div className="pt-16 border-t border-gray-800 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">타이페이 게임쇼 B2C 참가</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">그라비티</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.01</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <GalleryImageTrigger
                            src={otherAchievementsGalleryImages[0].src}
                            alt={otherAchievementsGalleryImages[0].alt}
                            index={0}
                            onClick={setGalleryIndex}
                            className="aspect-[4/3] block w-full"
                            imgClassName="w-full h-full object-cover object-center rounded-3xl"
                        />
                        <GalleryImageTrigger
                            src={otherAchievementsGalleryImages[1].src}
                            alt={otherAchievementsGalleryImages[1].alt}
                            index={1}
                            onClick={setGalleryIndex}
                            className="aspect-[4/3] block w-full"
                            imgClassName="w-full h-full object-cover object-center rounded-3xl"
                        />
                    </div>
                </div>

                {/* Item 3: K-콘텐츠 우수사례 (4-column grid + Link Card) */}
                <div className="pt-16 border-t border-gray-800 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">K-콘텐츠 해외 지식재산 우수사례 선정 – 피그로맨스</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국저작권위원회</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.09</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <GalleryImageTrigger src={otherAchievementsGalleryImages[2].src} alt={otherAchievementsGalleryImages[2].alt} index={2} onClick={setGalleryIndex} className="aspect-[3/4] block w-full" imgClassName="w-full h-full object-cover object-top rounded-3xl" />
                        <GalleryImageTrigger src={otherAchievementsGalleryImages[3].src} alt={otherAchievementsGalleryImages[3].alt} index={3} onClick={setGalleryIndex} className="aspect-[3/4] block w-full" imgClassName="w-full h-full object-cover object-top rounded-3xl" />
                        <GalleryImageTrigger src={otherAchievementsGalleryImages[4].src} alt={otherAchievementsGalleryImages[4].alt} index={4} onClick={setGalleryIndex} className="aspect-[3/4] block w-full" imgClassName="w-full h-full object-cover object-top rounded-3xl" />
                        <GalleryImageTrigger src={otherAchievementsGalleryImages[5].src} alt={otherAchievementsGalleryImages[5].alt} index={5} onClick={setGalleryIndex} className="aspect-[3/4] block w-full" imgClassName="w-full h-full object-cover object-top rounded-3xl" />
                    </div>

                    <a
                        href="https://www.copyright.or.kr/kccip/osc/bbs/B0000013/view.do?menuNo=200016&nttId=171"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 rounded-3xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group mt-8"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">한국저작권위원회</span>
                            <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors m-0">해외저작권 등록출원 지원시스템 우수사례</h4>
                            <p className="text-gray-400 text-base m-0 mt-2">홍보자료 상세 열람하기 ↗</p>
                        </div>
                    </a>
                </div>

                {/* Item 4: 비트서밋 참가 (YouTube Left, Photo Right) */}
                <div className="pt-16 border-t border-gray-800 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">비트서밋 참가 &lt;일본&gt;</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">그라비티</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.07</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-sm bg-[#111] border border-white/10">
                            <iframe src="https://www.youtube.com/embed/ND8ijWsFz28" title="비트서밋 일본 스트리머 실황" className="w-full h-full border-0" allowFullScreen />
                        </div>
                        <div className="h-full">
                            <GalleryImageTrigger
                                src={otherAchievementsGalleryImages[6].src}
                                alt={otherAchievementsGalleryImages[6].alt}
                                index={6}
                                onClick={setGalleryIndex}
                                className="h-full w-full block"
                                imgClassName="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Item 5: 그라비티 퍼블리싱 계약 (Link Card only) */}
                <div className="pt-16 border-t border-gray-800 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">그라비티, ‘피그로맨스’ 퍼블리싱 계약 체결</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">그라비티</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.03</span>
                        </div>
                    </div>

                    <a
                        href="https://www.thisisgame.com/webzine/news/nboard/4/?n=168664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 rounded-3xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5829] mb-1">This is Game</span>
                            <h4 className="text-2xl font-bold text-white group-hover:text-[#EE5829] transition-colors m-0">그라비티, 주목받는 인디게임 6종 퍼블리싱 발표</h4>
                            <p className="text-gray-400 text-base m-0 mt-2">디스이즈게임 관련 기사 원문 보기 ↗</p>
                        </div>
                    </a>
                </div>

                {/* Item 6: 플레이x4 대표게임사 선정 (YouTube Embed + Text) */}
                <div className="pt-16 border-t border-gray-800 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 font-sans text-white">플레이x4 대표게임사 선정 – 도지사, 국회의원 부스 방문</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">플레이x4</span>
                            <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2022.05</span>
                        </div>

                    </div>

                    <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-sm bg-[#111] border border-white/10 max-w-4xl">
                        <iframe src="https://www.youtube.com/embed/YmOnfyZkSb0" title="플레이x4 부스 방문 영상" className="w-full h-full border-0" allowFullScreen />
                    </div>
                </div>

                {/* Item 7: 벤처인증 (Clean, high-contrast text block) */}
                <div className="pt-16 border-t border-gray-800 mt-16">
                    <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 md:p-14 w-full shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white text-black rounded-full font-bold text-sm mb-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                <span>인증 획득</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                벤처기업확인서 <span className="text-gray-500 font-light hidden md:inline">|</span> <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">혁신성장유형</span>
                            </h3>


                        </div>
                    </div>
                </div>

            </div>

            <GalleryLightbox
                images={otherAchievementsGalleryImages}
                isOpen={galleryIndex !== null}
                currentIndex={galleryIndex ?? 0}
                onClose={() => setGalleryIndex(null)}
                onChangeIndex={setGalleryIndex}
            />
        </div>
    );
}
