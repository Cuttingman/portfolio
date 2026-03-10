"use client";

import { PigromanceModalContent } from "@/components/sections/PigromanceModal";
import { AlienAbductionModalContent } from "@/components/sections/AlienAbductionModal";
import { ToyLabModalContent } from "@/components/sections/ToyLabModal";
import { TwoXP70ModalContent } from "@/components/sections/TwoXP70Modal";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/Modal";
import { LookbookGrid } from "@/components/ui/LookbookGrid";
import { LightboxImage } from "@/components/ui/Lightbox";
import { ThumbnailSlider } from "@/components/ui/ThumbnailSlider";

interface ProjectData {
  id: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  description: string;
  images: string[];
  modalContent: React.ReactNode;
}

const projects: ProjectData[] = [
  {
    id: "alien-abduction-inc",
    title: "(주)외계인납치작전",
    period: "2019.11 ~ 2025.05",
    role: "PC 및 콘솔 게임 제작 총괄 / 회사 경영",
    summary: "자체 IP 제작, PC 및 콘솔 게임 제작",
    images: [
      "/image/pigromance_ingame.gif",
      "/image/char_cuttingman.gif",
      "/image/char_meatlet.gif",
      "/image/pigromance_run.gif",
    ],
    description: "잔혹동화 '피그로맨스' 3부작 시리즈",
    modalContent: <PigromanceModalContent />,
  },
  {
    id: "alien-abduction",
    title: "외계인납치작전",
    period: "2017.08 ~ 2019.11",
    role: "자체 IP 제작, 모바일 게임 제작, AR 그림책 제작 및 경영",
    summary: "피그플랜트 AR 그림책, 피그로맨스 모바일 게임 제작",
    images: [
      "/image/pigplant_photo_3.jpg",
      "/image/pigplant_photo_4.jpg",
    ],
    description:
      "개인 사업자 시절 피그로맨스의 초기 형태 및 피그플랜트 AR 그림책 유통",
    modalContent: <AlienAbductionModalContent />,
  },
  {
    id: "toy-lab",
    title: "토이랩",
    period: "2013.06 ~ 2017.08",
    role: "그래픽디자인 외주 실무 및 경영",
    summary:
      "동대문 DDP 개관전시, 칸타타 티저 영상 제작, 김밥왕 프렌차이즈 디자인",
    images: [
      "/image/01-04.png",
      "/image/05-08.png",
      "/image/poster-3-2.jpg",
    ],
    description: "다양한 시각 콘텐츠 디자인, 영상 제작 및 솔루션 제공",
    modalContent: <ToyLabModalContent />,
  },
  {
    id: "2xp70",
    title: "2XP70 Crew",
    period: "2003.12 ~ 2005.12",
    role: "그래피티 아티스트",
    summary:
      "m.net 슈퍼바이브파티, SBS 드라마 루루공주 세트 작업, MBC 라디오 인터뷰",
    images: [
      "/image/20.jpg",
      "/image/DSCN1769.jpg",
      "/image/ww.jpg",
      "/image/DSCN2908.jpg",
    ],
    description: "미디어 아트를 통한 스트리트 문화 확산",
    modalContent: <TwoXP70ModalContent />,
  },
];

export function WorkSection() {
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  return (
    <section
      id="work"
      className="bg-black text-white transition-colors duration-1000 w-full"
    >
      <div className="container mx-auto px-12 md:px-24 pt-32 pb-48 min-h-screen scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-32"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter md:tracking-[-0.08em] leading-[0.9] mb-12 font-sans overflow-hidden py-2">
            WORK
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl font-medium leading-[1.8] break-keep">
            시각 콘텐츠, 게임, 사업 운영 실무 기록
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer flex flex-col`}
              onClick={() => setActiveProject(project)}
            >
              <div
                className={`relative w-full overflow-hidden bg-white/5 mb-8 rounded-3xl aspect-video shadow-sm border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)] group-hover:border-white/40`}
              >
                {/* Slider Component */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]">
                  <ThumbnailSlider images={project.images} />
                </div>

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500 z-10" />

                {/* Centered Text Container */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-3xl font-bold tracking-tight mb-2 text-white drop-shadow-md font-sans transition-transform duration-500 group-hover:scale-105">
                    {project.title}
                  </h2>
                  <h3 className="text-sm font-medium text-white/80 tracking-widest uppercase mb-4 block drop-shadow-sm truncate w-full transition-transform duration-500 group-hover:scale-105">
                    {project.summary}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Modal
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          theme="dark"
        >
          {activeProject?.modalContent}
        </Modal>
      </div>
    </section>
  );
}
