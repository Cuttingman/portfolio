"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Instagram, Youtube, ExternalLink, Facebook } from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "bio", label: "Prose" },
  { id: "history", label: "Timeline" },
  { id: "interview", label: "Interview" },
];

const historyData = [
  // *글로벌 시장 확장 및 제2의 도약기
  { date: "2025", title: "MMORPG ‘판타테일' 웹이벤트 제작 [티니스튜디오(주)]", category: "" },
  { date: "2024.12", title: "인디플 어워즈 - 우수상 수상 - 피그로맨스 [한국인디게임협회]", category: "" },
  { date: "2024.12", title: "대한민국게임대상 인디게임 부문 노미네이트 - 피그로맨스 [한국게임산업협회]", category: "" },
  { date: "2024.11", title: "대중소 상생협력 IR 데모데이 - 3위 수상 [경기콘텐츠진흥원]", category: "" },
  { date: "2024.11", title: "인크래프트 IR 데모데이 - 우수상 수상 [한국모바일게임협회]", category: "" },
  { date: "2024.10", title: "닌텐도스위치 퍼블리싱 계약 체결 - 피그로맨스 [neos]", category: "" },
  { date: "2024.10", title: "슈퍼세미나 시즌2 - 콘텐츠 창업 세미나 특강 [대구콘텐츠코리아랩]", category: "" },
  { date: "2024.07", title: "인디크래프트 2024 - 우수상 수상 - 피그로맨스 [한국모바일게임협회]", category: "" },
  { date: "2024.06", title: "게임기획 지원 사업 상반기 네트워킹 - 게임제작기 강연 [한국콘텐츠진흥원]", category: "" },
  { date: "2024.05", title: "창업 멘토링 강의 [한국애니메이션 고등학교]", category: "" },
  { date: "2024.04", title: "주요 6개국 상표권 / 저작권 출원 - 피그로맨스 [외계인납치작전]", category: "" },
  { date: "2024.01", title: "Microsoft Xbox와 파트너쉽 계약 체결 [Microsoft Xbox]", category: "" },

  // *콘텐츠 사업화 성과 및 시장 가치 증명기
  { date: "2023.12", title: "MWU 유니티 코리아 BEST INDIE 수상 -피그로맨스 [유니티 코리아]", category: "" },
  { date: "2023.12", title: "게임기획 지원 사업 자문 회의 참여 [한국콘텐츠진흥원]", category: "" },
  { date: "2023.09", title: "K-콘텐츠 해외 지식재산 우수사례 선정 - 피그로맨스 [한국저작권위원회]", category: "" },
  { date: "2023.09", title: "도쿄게임쇼 한국공동관 참가 선정 <일본> [한국콘텐츠진흥원]", category: "" },
  { date: "2023.08", title: "BIC 2023 커넥트픽 수상 -피그로맨스 [BIC]", category: "" },
  { date: "2023.08", title: "게임스컴 한국공동관 참가 선정 <독일> [한국콘텐츠진흥원]", category: "" },
  { date: "2023.07", title: "K-콘텐츠 엑스포 in London 참가 선정 <영국> [한국콘텐츠진흥원]", category: "" },
  { date: "2023.07", title: "게임레벨업쇼케이스 네트워킹 - 창업 성공 사례 강연 [한국콘텐츠진흥원]", category: "" },
  { date: "2023.06", title: "창업 강의 [한국애니메이션 고등학교]", category: "" },
  { date: "2023.05", title: "플랫폼 변환 지원사업 선정 [경기콘텐츠진흥원]", category: "" },
  { date: "2023.05", title: "K-콘텐츠 해외 지식재산 권리화 지원사업 선정 [한국저작권위원회]", category: "" },
  { date: "2023.03", title: "피그로맨스 글로벌 퍼블리싱 계약 체결 [그라비티]", category: "" },
  { date: "2023.03", title: "제3차 콘텐츠 수출대책회의 참가 [문화체육관광부]", category: "" },
  { date: "2022.12", title: "게임레벨업쇼케이스(GLS) - 1위 수상 및 99인 이용자 평가 1위 - 피그로맨스 [한국콘텐츠진흥원]", category: "" },
  { date: "2022.11", title: "지스타 인디어워즈 2022 - 2위 수상 - 피그로맨스 [한국게임산업협회]", category: "" },
  { date: "2022.05", title: "플레이x4 대표게임사 선정 - 도지사, 국회의원 부스 방문 [한국인디게임협회]", category: "" },
  { date: "2022.04", title: "초기게임개발사 성장지원(법인) 선정 [한국콘텐츠진흥원]", category: "" },
  { date: "2022.02", title: "리소스뱅크 선정 [한국인디게임협회]", category: "" },
  { date: "2022.01", title: "피그로맨스 관련 굿즈 제작 - 조립식 피규어, 달력, 에코백, USB, 열쇠고리 [외계인납치작전]", category: "" },
  { date: "2022", title: "벤처기업인증 - 혁신성장", category: "" },

  // *독자적 브랜드 창업 및 기반 구축기
  { date: "2020.08", title: "GIGDC 2020 일반부 - 은상 수상 - 피그로맨스 [한국게임개발자협회]", category: "" },
  { date: "2020.08", title: "창의인재동반사업 ‘그림책을 JOB 하다’ - 타이포그래피 멘토 [한국콘텐츠진흥원]", category: "" },
  { date: "2019.01", title: "(주)외계인납치작전 법인 설립", category: "" },
  { date: "2018.08", title: "콘텐츠스타트업리그 - 우수상 수상  - 피그플랜트 AR 그림책 [한국콘텐츠진흥원]", category: "" },
  { date: "2018.05", title: "창업발전소 선정 [한국콘텐츠진흥원]", category: "" },
  { date: "2018", title: "어린이창작센터 창업 [어린이창작센터]", category: "" },
  { date: "2017.11", title: "스마트2030 창업 교육 수료 [경기콘텐츠진흥원]", category: "" },
  { date: "2017.08", title: "외계인납치작전 창업 [외계인납치작전]", category: "" },
  { date: "2017.04", title: "청년창업 스마트2030 선정 [경기콘텐츠진흥원]", category: "" },
  { date: "2017.03", title: "유니티 고급 개발자 과정 교육 수료 [유니티러닝센터]", category: "" },

  // *디자인 전문 역량 및 실무 확장기
  { date: "2015", title: "(주)애니웨이 근무(중국 디자인 플랫폼 사이트 개설) [(주)애니웨이]", category: "" },
  { date: "2014", title: "동대문 개관전시 '울름조형대학' 전시장 전시그래픽 [(주)얼트씨]", category: "" },
  { date: "2013.07", title: "프랜차이즈 브랜드 디자인 총괄 [김밥왕]", category: "" },
  { date: "2013.06", title: "디자인 스튜디오 토이랩 창업", category: "" },
  { date: "2012.11", title: "큐레이터 - 전시 그래픽 및 기획 [갤러리사각형]", category: "" },
  { date: "2010.12", title: "유아미술교육 커리큘럼 및 체험학습 상품 개발 판매 [발해공예]", category: "" },

  // *예술적 발현 및 초기 창의 탐색기
  { date: "2008", title: "계원예술대학교 입학 - 그래픽디자인 교육 수료 [계원예술대학교]", category: "" },
  { date: "2005", title: "mnet 크레이지 트럭 무대 그래피티 [2XP70 Crew]", category: "" },
  { date: "2005", title: "mnet 슈퍼바이브파티 파티 피플 초대 [2XP70 Crew]", category: "" },
  { date: "2005", title: "홍대 프린지 페스티벌 그래피티 [2XP70 Crew]", category: "" },
  { date: "2005", title: "MBC 라디오 인터뷰 [2XP70 Crew]", category: "" },
  { date: "2005", title: "삼성 신입사원 OT 그래피티 퍼포먼스 [2XP70 Crew]", category: "" },
  { date: "2005", title: "기아 뉴프라이드 신차 홍보 그래피티 퍼포먼스 [2XP70 Crew]", category: "" },
  { date: "2005", title: "르노삼성 SM3 신차 홍보 그래피티 퍼포먼스 [2XP70 Crew]", category: "" },
  { date: "2005", title: "리바이스 페스티벌 그래피티 [2XP70 Crew]", category: "" },
  { date: "2004", title: "고려대학교 축제 무대 그래피티 [2XP70 Crew]", category: "" },
  { date: "2003", title: "애니메이션 제작-셀 애니메이션 동화 담당 [공주영상정보대]", category: "" },
];

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"profile" | "bio" | "history" | "interview">("profile");
  return (
    <section id="about" className="bg-black text-white transition-colors duration-1000 w-full overflow-hidden">
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
                  onClick={() => setActiveTab(tab.id as "profile" | "bio" | "history" | "interview")}
                  className={`text-sm md:text-base font-normal tracking-wide transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-white/40"
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
                      그래피티 작가로 시작해 상업 디자인과 게임 개발까지, 시각 콘텐츠 제작의 전 과정을 직접 설계하고 이끌어 왔습니다.
                    </p>
                    <p className="mb-4 text-white">
                      계원예술대학교에서 인지학 기반 디자인을 공부한 뒤, 디자인 스튜디오 토이랩을 창업해 전시 그래픽, 영상, 애니메이션, 브랜드 디자인 등 실무 전반을 수행했습니다. 이후 독자 IP를 만들겠다는 목표로 게임 스튜디오 외계인납치작전을 설립하고, 내러티브 퍼즐 플랫포머 게임 피그로맨스를 제작했습니다.
                    </p>
                    <p className="mb-4 text-white">
                      시나리오부터 아트 디렉션, 애니메이션, 사운드 디렉팅까지 제작 전 과정을 이끌었으며, 스팀 98% 긍정 평가, 국내 주요 게임 어워즈 다수 수상, 메이저 게임사와의 글로벌 퍼블리싱 계약 체결 및 닌텐도 스위치 포팅을 완수했습니다. 게임스컴, TGS 등 해외 전시와 IR, 정부 지원사업까지 사업 운영 전반을 직접 수행했습니다.
                    </p>
                    <p className="mb-4 text-white">
                      현재는 생성형 AI를 활용한 이미지 및 영상 제작을 실무에 적용하고 있으며, 이를 팀 단위 프로세스로 내재화하는 방식을 고안하고 있습니다.
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

                {activeTab === "history" && (
                  <motion.div
                    key="history"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: 1,
                        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                      }
                    }}
                    className="flex flex-col w-full max-w-4xl relative pt-8 font-sans"
                  >
                    {/* 수직 중앙 선 */}
                    <div className="absolute left-[5.5rem] top-10 bottom-8 w-px bg-white/10" />

                    {historyData.map((item, index) => {
                      // 연도 추출 및 이전 연도와 비교
                      const currentYear = item.date.split('.')[0];
                      const currentMonth = item.date.includes('.') ? item.date.split('.')[1] : null;
                      const prevYear = index > 0 ? historyData[index - 1].date.split('.')[0] : null;
                      const isNewYear = currentYear !== prevYear;

                      // 정규식을 활용한 텍스트 분리 (제목과 소속기관/내용 분리)
                      // 예: "게임레벨업쇼케이스 - 1위 수상 [한국콘텐츠진흥원]"
                      // 대괄호 [내용] 등과 같은 부분 파싱하도록 정규식을 `\((.+?)\)` 및 `\[(.+?)\]`로 수정했습니다.
                      const match = item.title.match(/(.+?)\s*(\[.+?\]|\(.+?\))$/);
                      const displayTitle = match ? match[1] : item.title;
                      const displayContext = match ? match[2] : '';

                      return (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                          }}
                          className="flex group relative z-10"
                        >
                          {/* Left: Year (새해일 때만 렌더링) */}
                          <div className="w-[5.5rem] shrink-0 font-medium text-left absolute left-0 pr-4">
                            {isNewYear && (
                              <span className="text-sm md:text-base text-white/50 tracking-wide font-sans mt-0.5 inline-block">
                                {currentYear}
                              </span>
                            )}
                          </div>

                          {/* Center: Hollow Dot Indicator */}
                          <div className="ml-[5.5rem] relative w-0 flex flex-col items-center justify-start h-full">
                            <motion.div
                              variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                              }}
                              className="absolute top-2.5 -ml-[4.5px] w-[9px] h-[9px] rounded-full border-[1.5px] border-white/20 bg-black group-hover:border-white/60 transition-colors duration-300 z-20"
                            />
                          </div>

                          {/* Right: Content */}
                          <div className="flex-1 pb-10 pl-8 flex items-baseline gap-2">
                            <p className="text-base text-white hover:text-white transition-colors leading-[1.6]">
                              <span className="font-regular tracking-tight break-keep text-[#e0e0e0]">
                                {displayTitle}
                              </span>
                              {displayContext && (
                                <span className="text-white/60 font-medium tracking-wide ml-2 break-keep text-[0.9em]">
                                  {displayContext}
                                </span>
                              )}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
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
