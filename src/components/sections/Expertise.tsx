"use client";

import { motion } from "framer-motion";

function SkillItem({ name, level, percent }: { name: string, level: string, percent: number }) {
  return (
    <li className="flex flex-col gap-2 border-b mx-2 border-black/5 pb-3">
      <div className="flex items-center justify-between w-full">
        <span className="text-lg text-black/80">{name}</span>
        <span className="font-medium text-[10px] tracking-widest text-white bg-black px-2 py-1 rounded-sm w-12 text-center">
          {level}
        </span>
      </div>
      {/* Progress Bar Container */}
      <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mt-1">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-blue-400 rounded-full"
        />
      </div>
    </li>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-white text-black transition-colors duration-1000 w-full">
      <div className="container mx-auto px-12 md:px-24 pt-32 pb-48 min-h-screen scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter md:tracking-[-0.08em] leading-[0.9] mb-12 font-sans overflow-hidden py-2">
            EXPERTISE
          </h1>
          <p className="text-xl md:text-2xl text-black/90 font-medium leading-[1.8] break-keep max-w-4xl">
            핵심 기술 역량
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16 w-full items-start justify-center">
        
        {/* COLUMN 1: 2D / 3D 그래픽 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight font-sans">2D / 3D 그래픽</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">그래픽</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">드로잉</span>
            </div>
          </div>
          <ul className="space-y-4">
            <SkillItem name="Photoshop" level="상급" percent={100} />
            <SkillItem name="Illustrator" level="상급" percent={100} />
            <SkillItem name="Fresco" level="중급" percent={70} />
            <SkillItem name="Cinema4D" level="중급" percent={70} />
          </ul>
        </motion.div>

        {/* COLUMN 2: 영상 / 애니 제작 */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 lg:border-l lg:border-foreground/5 lg:pl-6"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight font-sans">영상 / 애니 제작</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">촬영</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">2D</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">3D</span>
            </div>
          </div>
          <ul className="space-y-4">
            <SkillItem name="Premiere" level="중급" percent={80} />
            <SkillItem name="After Effects" level="중급" percent={80} />
            <SkillItem name="Spine2D" level="상급" percent={100} />
          </ul>
        </motion.div>

        {/* COLUMN 3: 문서 작성 */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-6 lg:border-l lg:border-foreground/5 lg:pl-6"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight font-sans">문서 작성</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">정부지원사업</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">피칭</span>
            </div>
          </div>
          <ul className="space-y-4">
            <SkillItem name="PowerPoint" level="상급" percent={100} />
            <SkillItem name="Excel" level="중급" percent={80} />
            <SkillItem name="Word, 한글" level="상급" percent={100} />
          </ul>
        </motion.div>

        {/* COLUMN 4: 사운드 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-6 lg:border-l lg:border-foreground/5 lg:pl-6"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight font-sans">사운드</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">간단한 음악</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">작곡 가능</span>
            </div>
          </div>
          <ul className="space-y-4">
            <SkillItem name="Logic Pro" level="초급" percent={30} />
            <SkillItem name="GarageBand" level="초급" percent={30} />
          </ul>
        </motion.div>

         {/* COLUMN 5: 게임 엔진 */}
         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-6 lg:border-l lg:border-foreground/5 lg:pl-6"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 pb-4">
            <h2 className="text-xl font-bold tracking-tight font-sans">게임 엔진</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">맵배치</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">타임라인</span>
              <span className="text-xs font-medium text-black/60 bg-black/5 px-2 py-1 rounded-full">UI</span>
            </div>
          </div>
          <ul className="space-y-4">
            <SkillItem name="Unity" level="중급" percent={70} />
          </ul>
        </motion.div>
      </div>

      </div>
      </div>
    </section>
  );
}
