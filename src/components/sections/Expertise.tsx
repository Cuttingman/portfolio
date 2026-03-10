"use client";

import { motion } from "framer-motion";

function SkillItem({ name, level, percent }: { name: string, level: string, percent: number }) {
  return (
    <li className="flex flex-col gap-2 border-b mx-2 border-white/10 pb-3">
      <div className="flex items-center justify-between w-full">
        <span className="text-lg text-white">{name}</span>
        <span className="font-medium text-[10px] tracking-widest text-black bg-white px-2 py-1 rounded-sm w-12 text-center">
          {level}
        </span>
      </div>
      {/* Progress Bar Container */}
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-white rounded-full"
        />
      </div>
    </li>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-[#0284FE] text-white transition-colors duration-1000 w-full">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 pt-24 md:pt-32 pb-32 md:pb-48 min-h-screen scroll-mt-24">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16 md:mb-24"
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] md:leading-[0.9] mb-8 md:mb-12 font-sans overflow-hidden py-2 text-white break-words">
              EXPERTISE
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-medium leading-[1.6] md:leading-[1.8] break-keep max-w-4xl">
              핵심 기술 역량
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-12 md:gap-y-16 w-full items-start justify-center">

            {/* COLUMN 1: 2D / 3D 그래픽 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4">
                <h2 className="text-xl font-bold tracking-tight font-sans text-white">2D / 3D 그래픽</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">그래픽</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">드로잉</span>
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
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4">
                <h2 className="text-xl font-bold tracking-tight font-sans text-white">영상 / 애니 제작</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">촬영</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">2D</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">3D</span>
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
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4">
                <h2 className="text-xl font-bold tracking-tight font-sans text-white">문서 작성</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">정부지원사업</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">피칭</span>
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
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4">
                <h2 className="text-xl font-bold tracking-tight font-sans text-white">사운드</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">간단한 음악</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">작곡 가능</span>
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
              <div className="flex flex-col gap-3 border-b border-white/20 pb-4">
                <h2 className="text-xl font-bold tracking-tight font-sans text-white">게임 엔진</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">맵배치</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">타임라인</span>
                  <span className="text-xs font-medium text-white/80 bg-white/10 px-2 py-1 rounded-full">UI</span>
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
