"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { LookbookGrid } from "@/components/ui/LookbookGrid";
import { BannerCrossfade } from "@/components/ui/BannerCrossfade";
import { AwardsModalContent } from "./modals/AwardsModalContent";
import { PressModalContent } from "./modals/PressModalContent";
import { SupportProjectsModalContent } from "./modals/SupportProjectsModalContent";
import { ExternalActivitiesModalContent } from "./modals/ExternalActivitiesModalContent";
import { OtherAchievementsModalContent } from "./modals/OtherAchievementsModalContent";
import { GameReviewModalContent } from "./modals/GameReviewModalContent";

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
      "/image/f787e1e8-7952-4db0-b4ef-a43f7b94a98e.png",
      "/image/c4a46317-5887-438b-9162-14fd09c1e1c5.png",
      "/image/23ec9de1-b6cc-4525-8800-aa52b68f6a23.png"
    ],
  },
  {
    id: "awards",
    title: "▪️ 수상 실적",
    images: [
      "/image/GIGDC_수상_1920x1080.jpg",
      "/image/대한민국_게임대상_1.png",
      "/image/초기게임개발사_수상_1920x1080.png"
    ],
  },
  {
    id: "reviews",
    title: "▪️ 게임 리뷰",
    images: [
      "/image/01-04.png",
      "/image/05-08.png",
      "/image/09-12.png"
    ],
  },
  {
    id: "support",
    title: "▪️ 지원 사업",
    images: [
      "/image/도쿄게임쇼_1.png",
      "/image/게임스컴_5.png",
      "/image/k콘텐츠엑스포_1.png"
    ],
  },
  {
    id: "activities",
    title: "▪️ 대외 활동",
    images: [
      "/image/대구특강_1.png",
      "/image/인디크래프트_IR_데모데이_1.jpg",
      "/image/타이포강의2.jpg",
      "/image/타이포강의3.jpg"
    ],
  },
  {
    id: "other",
    title: "▪️ 그외 성과",
    images: [
      "/image/타이페이게임쇼_2.png",
      "/image/비트서밋_부스.jpg",
      "/image/1 1.png"
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
      case 'reviews':
        return <GameReviewModalContent />;
      case 'support':
        return <SupportProjectsModalContent />;
      case 'activities':
        return <ExternalActivitiesModalContent />;
      case 'other':
        return <OtherAchievementsModalContent />;
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
              <div className="relative w-full aspect-video overflow-hidden mb-6 border border-black/20 shadow-sm transition-all duration-500 rounded-3xl group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] bg-[#111]">
                {/* Images Container */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]">
                  <BannerCrossfade
                    images={category.images}
                    interval={6000}
                    className="w-full h-full absolute inset-0"
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
        <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} theme="dark" className="max-w-7xl">
          {getModalContent(activeModal)}
        </Modal>
      </div>
    </section>
  );
}
