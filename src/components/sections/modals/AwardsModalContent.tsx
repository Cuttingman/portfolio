"use client";

import { LookbookGrid } from "@/components/ui/LookbookGrid";
import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { useState } from "react";

export const awardsGalleryImages: GalleryImageDef[] = [
  { src: "/image/asset_708466f0.png", alt: "게임레벨업쇼케이스 1위" },
  { src: "/image/asset_9b402bc9.png", alt: "유니티 베스트 인디 1" },
  { src: "/image/asset_3678b564.png", alt: "유니티 베스트 인디 2" },
  { src: "/image/award_gstar_demo.png", alt: "지스타 2위 시연" },
  { src: "/image/asset_a9ca9995.jpg", alt: "GIGDC 은상 시상식" },
  { src: "/image/IMG_0612.png", alt: "GIGDC 트로피" },
  { src: "/image/asset_12b2c3de.png", alt: "인디플어워즈 트로피" },
  { src: "/image/asset_31246ef5.png", alt: "대한민국게임대상 와이드샷" },
  { src: "/image/asset_d42561dd.png", alt: "대한민국게임대상 로고샷" },
  { src: "/image/asset_67c7f09e.png", alt: "피그로맨스 게임플레이" },
  { src: "/image/asset_4fb64fbf.png", alt: "인디크래프트 우수상" },
  { src: "/image/award_99_eval.png", alt: "99인 이용자 평가 1위" },
  { src: "/image/asset_38bfc413.png", alt: "창업발전소 우수상" }
];

export function AwardsModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 pb-4 font-sans border-b border-gray-700 text-white">
        수상 실적
      </h2>

      {/* Hero Header: Laurel Wreath "Hall of Fame" Grid */}
      <div className="mb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-90 p-8 bg-[#111] rounded-3xl border border-white/5">
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/award_early.png" alt="초기게임개발사 1위" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/award_unity.png" alt="유니티코리아 베스트" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/award_gstar.png" alt="지스타 2nd" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/award_indiecraft.png" alt="인디크래프트" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/asset_545b0c6b.png" alt="GIGDC" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative"><img src="/image/award_indieple.png" alt="인디플어워즈" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-transform" /></div>
      </div>

      <div className="space-y-24">

        {/* Award 1 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">게임레벨업쇼케이스 - 1위 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국콘텐츠진흥원 (2022.12)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-black/50 rounded-3xl overflow-hidden border border-white/5 relative">
              <iframe src="https://www.youtube.com/embed/8m9HhiQIeaU" title="게임레벨업쇼케이스 1위" className="w-full h-full border-0 absolute inset-0" allowFullScreen />
            </div>
            <GalleryImageTrigger src={awardsGalleryImages[0].src} alt={awardsGalleryImages[0].alt} index={0} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover object-center rounded-3xl" />
          </div>
        </div>

        {/* Award 2 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">MWU 유니티 코리아 ‘BEST INDIE’ 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">유니티 코리아 (2023.12)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-black/50 rounded-3xl overflow-hidden border border-white/5 relative">
              <iframe src="https://www.youtube.com/embed/VJPukrX2Exg" title="MWU 유니티 수상" className="w-full h-full border-0 absolute inset-0" allowFullScreen />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <GalleryImageTrigger src={awardsGalleryImages[1].src} alt={awardsGalleryImages[1].alt} index={1} onClick={setGalleryIndex} className="h-full block" imgClassName="w-full h-full object-cover rounded-3xl" />
              <GalleryImageTrigger src={awardsGalleryImages[2].src} alt={awardsGalleryImages[2].alt} index={2} onClick={setGalleryIndex} className="h-full block" imgClassName="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Award 3 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">지스타 인디어워즈 2022 - 2위 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국게임산업협회 (2022.11)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-black/50 rounded-3xl overflow-hidden border border-white/5 relative">
              <iframe src="https://www.youtube.com/embed/T4ONqKbLZqM" title="지스타 인디어워즈 2위" className="w-full h-full border-0 absolute inset-0" allowFullScreen />
            </div>
            <GalleryImageTrigger src={awardsGalleryImages[3].src} alt={awardsGalleryImages[3].alt} index={3} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Award 4 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">인디크래프트 2024 - 우수상 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국모바일게임협회 (2024.07)</p>
          </div>
          <div>
            <GalleryImageTrigger src={awardsGalleryImages[10].src} alt={awardsGalleryImages[10].alt} index={10} onClick={setGalleryIndex} className="aspect-[21/9] md:aspect-[3/1] block w-full" imgClassName="w-full h-full object-cover object-center rounded-3xl" />
          </div>
        </div>

        {/* Award 5 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">GIGDC 2020 일반부 - 은상 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국게임개발자협회 (2020.08)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GalleryImageTrigger src={awardsGalleryImages[4].src} alt={awardsGalleryImages[4].alt} index={4} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover object-center rounded-3xl" />
            <GalleryImageTrigger src={awardsGalleryImages[5].src} alt={awardsGalleryImages[5].alt} index={5} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover object-top rounded-3xl" />
          </div>
        </div>

        {/* Award 6 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">인디플 어워즈 – 우수상 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국인디게임협회 (2024.12)</p>
          </div>
          <div className="w-full max-w-xl mx-auto">
            <GalleryImageTrigger src={awardsGalleryImages[6].src} alt={awardsGalleryImages[6].alt} index={6} onClick={setGalleryIndex} className="aspect-[21/9] md:aspect-[3/1] block w-full max-h-60" imgClassName="w-full h-full object-cover object-center rounded-3xl" />
          </div>
        </div>

        {/* Award 7 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">대한민국게임대상 인디게임 부문 노미네이트</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국게임산업협회 (2024.12)</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <GalleryImageTrigger src={awardsGalleryImages[7].src} alt={awardsGalleryImages[7].alt} index={7} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover rounded-3xl" />
            <GalleryImageTrigger src={awardsGalleryImages[8].src} alt={awardsGalleryImages[8].alt} index={8} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover rounded-3xl" />
            <GalleryImageTrigger src={awardsGalleryImages[9].src} alt={awardsGalleryImages[9].alt} index={9} onClick={setGalleryIndex} className="aspect-video block w-full" imgClassName="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Award 8 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">게임레벨업쇼케이스 - 99인 이용자 평가 1위</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국콘텐츠진흥원 (2022.12)</p>
          </div>
          <div className="w-full max-w-xl mx-auto">
            <GalleryImageTrigger src={awardsGalleryImages[11].src} alt={awardsGalleryImages[11].alt} index={11} onClick={setGalleryIndex} className="aspect-[21/9] md:aspect-[3/1] block w-full max-h-60" imgClassName="w-full h-full object-cover object-center rounded-3xl" />
          </div>
        </div>

        {/* Award 9 */}
        <div className="pt-16 border-t border-gray-800 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-sans text-white">콘텐츠스타트업리그 - 우수상 수상</h3>
            <p className="text-gray-400 font-medium text-base mb-6">한국콘텐츠진흥원 (2018.08)</p>
          </div>
          <div className="w-full max-w-sm">
            <GalleryImageTrigger src={awardsGalleryImages[12].src} alt={awardsGalleryImages[12].alt} index={12} onClick={setGalleryIndex} className="block w-full" imgClassName="w-full h-auto object-contain rounded-3xl border border-white/10" />
          </div>
        </div>

      </div>

      <GalleryLightbox
        images={awardsGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </div>
  );
}
