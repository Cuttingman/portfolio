"use client";

import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { useState } from "react";

export const supportGalleryImages: GalleryImageDef[] = [
  // Item 1: Tokyo Game Show (3 images) 0-2
  { src: "/image/asset_737f95e0.png", alt: "도쿄게임쇼 가족관 시연" },
  { src: "/image/c4a46317-5887-438b-9162-14fd09c1e1c5.png", alt: "도쿄게임쇼 4Gamer 매체 인터뷰" },
  { src: "/image/asset_a7441f50.png", alt: "도쿄게임쇼 한일게임사업자교류회 발표" },
  // Item 2: Gamescom (5 images) 3-7
  { src: "/image/asset_22185b5d.png", alt: "게임스컴 파노라마" },
  { src: "/image/asset_5ab2ed79.png", alt: "게임스컴 부스" },
  { src: "/image/asset_6bc679eb.png", alt: "게임스컴 인터뷰" },
  { src: "/image/asset_3bc9ba6e.png", alt: "게임스컴 미팅" },
  { src: "/image/asset_c6e041ef.png", alt: "게임스컴 포스터" },
  // Item 3: K-Content Expo London (4 images) 8-11
  { src: "/image/asset_04d14be2.png", alt: "런던 엑스포 1" },
  { src: "/image/asset_fa592e44.png", alt: "런던 엑스포 2" },
  { src: "/image/asset_0e0e5bbc.png", alt: "런던 엑스포 3" },
  { src: "/image/asset_59412863.png", alt: "런던 엑스포 4" },
];

export function SupportProjectsModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 pb-4 font-sans border-b border-gray-700 text-white">
        지원 사업
      </h2>

      <div className="space-y-24">

        {/* Item 1: Tokyo Game Show */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">도쿄게임쇼 한국공동관 참가 선정 &lt;일본&gt;</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">B2C</span>
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">패밀리게임파크 부스 운영</span>
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.09</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GalleryImageTrigger
              src={supportGalleryImages[0].src}
              alt={supportGalleryImages[0].alt}
              index={0}
              onClick={setGalleryIndex}
              className="aspect-square md:aspect-auto md:h-64 block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <GalleryImageTrigger
              src={supportGalleryImages[1].src}
              alt={supportGalleryImages[1].alt}
              index={1}
              onClick={setGalleryIndex}
              className="aspect-square md:aspect-auto md:h-64 block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <GalleryImageTrigger
              src={supportGalleryImages[2].src}
              alt={supportGalleryImages[2].alt}
              index={2}
              onClick={setGalleryIndex}
              className="aspect-square md:aspect-auto md:h-64 block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Item 2: Gamescom */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">게임스컴 한국공동관 참가 선정 &lt;독일&gt;</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">B2B</span>
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">B2C 부스 운영</span>
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.08</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <GalleryImageTrigger
              src={supportGalleryImages[3].src}
              alt={supportGalleryImages[3].alt}
              index={3}
              onClick={setGalleryIndex}
              className="aspect-video md:aspect-[21/9] block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GalleryImageTrigger
                src={supportGalleryImages[4].src}
                alt={supportGalleryImages[4].alt}
                index={4}
                onClick={setGalleryIndex}
                className="aspect-square block w-full"
                imgClassName="w-full h-full object-cover rounded-3xl"
              />
              <GalleryImageTrigger
                src={supportGalleryImages[5].src}
                alt={supportGalleryImages[5].alt}
                index={5}
                onClick={setGalleryIndex}
                className="aspect-square block w-full"
                imgClassName="w-full h-full object-cover rounded-3xl"
              />
              <GalleryImageTrigger
                src={supportGalleryImages[6].src}
                alt={supportGalleryImages[6].alt}
                index={6}
                onClick={setGalleryIndex}
                className="aspect-square block w-full"
                imgClassName="w-full h-full object-cover rounded-3xl"
              />
              <GalleryImageTrigger
                src={supportGalleryImages[7].src}
                alt={supportGalleryImages[7].alt}
                index={7}
                onClick={setGalleryIndex}
                className="aspect-square block w-full"
                imgClassName="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Item 3: K-Content Expo London */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">K-콘텐츠 엑스포 in London 참가 선정 &lt;영국&gt;</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.07</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <GalleryImageTrigger
              src={supportGalleryImages[8].src}
              alt={supportGalleryImages[8].alt}
              index={8}
              onClick={setGalleryIndex}
              className="aspect-video block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <GalleryImageTrigger
              src={supportGalleryImages[9].src}
              alt={supportGalleryImages[9].alt}
              index={9}
              onClick={setGalleryIndex}
              className="aspect-video block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <GalleryImageTrigger
              src={supportGalleryImages[10].src}
              alt={supportGalleryImages[10].alt}
              index={10}
              onClick={setGalleryIndex}
              className="aspect-video block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
            <GalleryImageTrigger
              src={supportGalleryImages[11].src}
              alt={supportGalleryImages[11].alt}
              index={11}
              onClick={setGalleryIndex}
              className="aspect-video block w-full"
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Items 4-9: Text Blocks */}
        <div className="pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 font-sans text-white">주요 지원사업 리스트</h3>
          <div className="grid grid-cols-1 gap-6">

            {/* Item 4 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">플랫폼 변환 지원사업 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">경기콘텐츠진흥원</span>
                <span className="text-gray-500 text-sm">2023.05</span>
              </div>
            </div>

            {/* Item 5 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">K-콘텐츠 해외 지식재산 권리화 지원사업 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">한국저작권위원회</span>
                <span className="text-gray-500 text-sm">2023.05</span>
              </div>
            </div>

            {/* Item 6 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">초기게임개발사 성장지원(법인) 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">한국콘텐츠진흥원</span>
                <span className="text-gray-500 text-sm">2022.04</span>
              </div>
            </div>

            {/* Item 7 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">리소스뱅크 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">한국인디게임협회</span>
                <span className="text-gray-500 text-sm">2022.02</span>
              </div>
            </div>

            {/* Item 8 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">창업발전소 콘텐츠스타트업리그 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">한국콘텐츠진흥원</span>
                <span className="text-gray-500 text-sm">2018.05</span>
              </div>
            </div>

            {/* Item 9 */}
            <div className="p-6 bg-[#111] rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-lg font-semibold text-gray-100">청년창업 스마트 2030 선정</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 font-medium">경기콘텐츠진흥원</span>
                <span className="text-gray-500 text-sm">2017.04</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <GalleryLightbox
        images={supportGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </div>
  );
}
