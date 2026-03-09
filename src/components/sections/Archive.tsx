"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { LookbookGrid } from "@/components/ui/LookbookGrid";
import { ThumbnailSlider } from "@/components/ui/ThumbnailSlider";
import { AwardsModalContent } from "./modals/AwardsModalContent";
import { PressModalContent } from "./modals/PressModalContent";
import { SupportProjectsModalContent } from "./modals/SupportProjectsModalContent";
import { ExternalActivitiesModalContent } from "./modals/ExternalActivitiesModalContent";

interface ArchiveCategory {
  id: string; // Added id for modal identification
  title: string;
  images: string[];
}

const categories: ArchiveCategory[] = [
  {
    id: "press",
    title: "▪️ 언론 소개",
    images: [
      "/image/인디플_복사.png",
      "/image/게임스컴_9.png",
      "/image/대중소상생협력.jpg"
    ],
  },
  {
    id: "awards",
    title: "▪️ 수상 실적",
    images: [
      "/image/GIGDC_복사.png",
      "/image/인디크래프트.png",
      "/image/지스타_복사.png"
    ],
  },
  {
    id: "support",
    title: "▪️ 지원 사업",
    images: [
      "/image/초기게임개발사.png",
      "/image/유니티_복사.png",
      "/image/인디플_복사.png"
    ],
  },
  {
    id: "activities",
    title: "▪️ 대외 활동",
    images: [
      "/image/대중소상생협력.jpg",
      "/image/인디크래프트_IR_데모데이_1.jpg",
      "/image/대구특강_1.png",
      "/image/애니메이션고등학교특강_1.png",
      "/image/게임기획지원사업네트워킹_1.png"
    ],
  },
  {
    id: "other",
    title: "▪️ 그외 성과",
    images: [
      "/image/1 1.png",
      "/image/타이페이게임쇼_2.png",
      "/image/비트서밋_부스.jpg",
      "/image/2 1.png",
      "/image/3 1.png"
    ],
  }
];

export function ArchiveSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const getModalContent = (modalId: string | null) => {
    switch (modalId) {
      case 'press':
        return <PressModalContent />;
      case 'awards':
        return <AwardsModalContent />;
      case 'support':
        return <SupportProjectsModalContent />;
      case 'activities':
        return <ExternalActivitiesModalContent />;
      case 'other':
        // Placeholder for other achievements modal content
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 pb-4 border-b border-gray-700 font-sans text-white">그외 성과</h2>
            <div className="space-y-12">
              
              <div>
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">neos, ‘피그로맨스’ 닌텐도스위치 퍼블리싱 계약 체결 (2024.10)</h3>
                <p className="text-gray-100 leading-relaxed font-light mb-4 text-base">글로벌 인디게임 퍼블리싱 사업 참여 (일본)</p>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">타이페이 게임쇼 B2C 참가 (그라비티, 2024.01)</h3>
                <LookbookGrid images={[
                  { src: "/image/타이페이게임쇼_2.png", alt: "타이페이 부스", span: "full" }
                ]} />
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">K-콘텐츠 해외 지식재산 우수사례 선정 (한국저작권위원회, 2023.09)</h3>
                <LookbookGrid images={[
                  { src: "/image/1 1.png", alt: "우수사례 1", span: "2" },
                  { src: "/image/2 1.png", alt: "우수사례 2", span: "2" },
                  { src: "/image/3 1.png", alt: "우수사례 3", span: "2" },
                  { src: "/image/4 1.png", alt: "우수사례 4", span: "2" }
                ]} />
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">비트서밋 참가 - 일본 (그라비티, 2023.07)</h3>

                <div className="my-8 aspect-video w-full bg-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <iframe src="https://www.youtube.com/embed/ND8ijWsFz28" title="비트서밋 일본 스트리머 실황" className="w-full h-full border-0" allowFullScreen />
                </div>

                <LookbookGrid images={[
                  { src: "/image/비트서밋_부스.jpg", alt: "비트서밋 부스", span: "full" }
                ]} />
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">그라비티, ‘피그로맨스’ 퍼블리싱 계약 체결 (2023.03)</h3>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-2xl font-semibold mb-2 font-sans text-white">벤처인증 - 혁신성장 (기술보증기금)</h3>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="archive" className="bg-[#F5F5F7] text-black transition-colors duration-1000 w-full">
      <div className="container mx-auto px-12 md:px-24 pt-32 pb-48 min-h-screen scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mb-24"
      >
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter md:tracking-[-0.08em] leading-[0.9] mb-12 font-sans overflow-hidden py-2">
            ARCHIVE
          </h1>
          <p className="text-xl md:text-2xl text-black/90 font-medium leading-[1.8] break-keep max-w-4xl">
            주요 성과 및 활동 기록 수집
          </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col"
            onClick={() => setActiveModal(category.id)}
            >
            <div className="relative w-full aspect-square overflow-hidden mb-6 border border-black/20 shadow-sm transition-all duration-500 rounded-3xl group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] bg-[#111]">
                {/* Images Container */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]">
                 <ThumbnailSlider 
                   images={category.images} 
                   imgClassName={`w-full h-full ${
                     category.title === "▪️ 수상 실적" || category.title === "▪️ 지원 사업"
                       ? "object-contain p-12 drop-shadow-lg"
                       : "object-cover opacity-80"
                   }`} 
                 />
              </div>

               {/* Dark Gradient Overlay for text readability */}
               <div className="absolute inset-0 transition-colors duration-500 z-10 bg-black/40 group-hover:bg-black/60 pointer-events-none" />

               {/* Centered Text Container */}
               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-2xl font-bold tracking-tight mb-2 text-white drop-shadow-md transition-transform duration-500 group-hover:scale-105 font-sans">
                    {category.title.replace("▪️ ", "")}
                  </h2>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} theme="dark" className="max-w-6xl">
        {getModalContent(activeModal)}
      </Modal>
      </div>
    </section>
  );
}
