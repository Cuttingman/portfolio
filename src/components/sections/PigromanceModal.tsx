import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  GalleryLightbox,
  GalleryImageTrigger,
  GalleryImageDef,
} from "@/components/ui/GalleryLightbox";
import { SmartIframe } from "@/components/ui/SmartIframe";

export const pigromanceGalleryImages: GalleryImageDef[] = [
  {
    src: "/image/Screenshot_1.png",
    alt: "게임 내러티브",
  },
  { src: "/image/pigromance_ingame.gif", alt: "게임 내러티브" },
  { src: "/image/char_meatlet.gif", alt: "미틀렛" },
  { src: "/image/char_porklet.gif", alt: "포클렛" },
  { src: "/image/char_blackbird.gif", alt: "검은새" },
  { src: "/image/char_cuttingman.gif", alt: "커팅맨" },
  { src: "/image/char_pipeman.gif", alt: "파이프맨" },
  { src: "/image/char_seedpig.gif", alt: "시드피그" },
  { src: "/image/goods_all.png", alt: "완구 시제품 모음" },
  { src: "/image/goods_package.png", alt: "조립식 피규어 (패키지)" },
  {
    src: "/image/figure_studio.png",
    alt: "조립식 피규어 (조립완료)",
  },
  { src: "/image/goods_usb.png", alt: "USB 사운드트랙 피규어" },
  { src: "/image/goods_mask.png", alt: "페이퍼크래프트 가면" },
  { src: "/image/goods_keyring.png", alt: "키링" },
  { src: "/image/goods_sticker.png", alt: "스티커" },
  { src: "/image/goods_bag.png", alt: "에코백" },
  // Logos (16-17)
  { src: "/image/logo_kor.png", alt: "로고 (국문)" },
  { src: "/image/logo_eng.png", alt: "로고 (영문)" },
  // Screenshots (18-25)
  { src: "/image/Screenshot_1.png", alt: "스크린샷 1" },
  { src: "/image/Screenshot_2.png", alt: "스크린샷 2" },
  { src: "/image/Screenshot_3.png", alt: "스크린샷 3" },
  { src: "/image/Screenshot_4.png", alt: "스크린샷 4" },
  { src: "/image/Screenshot_5.png", alt: "스크린샷 5" },
  { src: "/image/Screenshot_6.png", alt: "스크린샷 6" },
  // Storyboards (26-27)
  { src: "/image/storyboard_1.png", alt: "콘티 1" },
  { src: "/image/storyboard_2.png", alt: "콘티 2" },
  // Illustrations (28)
  { src: "/image/PIGROMANCE_Keyvisual.png", alt: "피그로맨스 키비주얼" },
  // Characters (29-32)
  { src: "/image/PIGROMANCE_Character_1.png", alt: "캐릭터 1" },
  { src: "/image/PIGROMANCE_Character_2.png", alt: "캐릭터 2" },
  { src: "/image/PIGROMANCE_Character_3.png", alt: "캐릭터 3" },
  { src: "/image/PIGROMANCE_Character_4.png", alt: "캐릭터 4" },
  // Concept (31)
  { src: "/image/Stomuch.png", alt: "스토머치 콘셉트" }
];

export function PigromanceModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('pigromance-top');
  const [pitchdeckIndex, setPitchdeckIndex] = useState(0);
  const pitchDeckRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const pitchdeckSlides = useMemo(() => [
    "pitchdeck_1.png", "pitchdeck_2.png", "pitchdeck_4.png",  "pitchdeck_5.png",
    "pitchdeck_6.png", "pitchdeck_7.png", "pitchdeck_8.png",  "pitchdeck_8-1.png",
    "pitchdeck_9.png", "pitchdeck_10.png", "pitchdeck_11.png", "pitchdeck_13.png",
    "pitchdeck_14.png", "pitchdeck_15.png"
  ], []);

  // Removing old iframe focus handlers

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Clear any previous active scroll tracking
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let attempts = 0;
    // Auto-correcting scroll that chases the target for 3.5 seconds (17 * 200ms)
    // Because images load asynchronously during the massive scroll and push the target down!
    scrollIntervalRef.current = setInterval(() => {
      const el = document.getElementById(id);
      if (!el || attempts > 17) {
        if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
        return;
      }

      const scrollContainer = el.closest('.overflow-y-auto');
      if (scrollContainer) {
        const rect = el.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        
        // Target distance from the top of the container
        const distance = rect.top - containerRect.top;
        
        // Check if we hit the physical bottom limit of the container
        const isAtBottom = Math.abs(scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop) <= 10;

        // If the target "ran away" (shifted > 100px) AND we haven't hit the physical bottom wall yet
        if (Math.abs(distance) > 100 && !isAtBottom) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      
      attempts++;
    }, 200);
  };

  useEffect(() => {
    const sectionIds = [
      'pigromance-top',
      'pigromance-main',
      'pigromance-trailer',
      'pigromance-intro',
      'pigromance-art',
      'pigromance-goods',
      'pigromance-pitchdeck'
    ];

    const scrollContainer = document.getElementById('pigromance-top')?.closest('.overflow-y-auto');
    if (!scrollContainer) return;

    const handleScroll = () => {
      let currentSection = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // When the header passes the upper 40% of the viewport, it becomes active.
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = id;
          }
        }
      }
      setActiveSection((prev) => prev !== currentSection ? currentSection : prev);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full relative pb-24">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-16">
          <h2 id="pigromance-top" className="mb-6 mt-4 scroll-mt-24 flex justify-center w-full">
            <img 
              src="/image/OAA_CI.png" 
              alt="(주)외계인납치작전 로고" 
              className="h-14 md:h-20 lg:h-24 w-auto object-contain" 
            />
          </h2>
          <p className="text-gray-400 font-medium text-lg tracking-widest">
            2019.11 ~ 2025.05 (5년 7개월)
          </p>
        </div>

        {/* BRANDING VIDEO */}
        <div className="flex flex-col mb-24 w-full">
          <div className="mb-6 w-full">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">
              외계인납치작전 소개
            </h5>
          </div>
          <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <SmartIframe
              src="https://www.youtube.com/embed/1eAZUMlqRJA?rel=0"
              title="회사 브랜딩 영상"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-px bg-white/20 mb-28"></div>

        {/* PROJECT OVERVIEW ALIGNMENT */}
        <div className="flex flex-col mb-32 w-full">
          <div className="flex flex-col mb-20 w-full gap-4">
            
            {/* Title & Subcopy */}
            <div className="text-center mb-10">
              <h3 id="pigromance-main" className="text-4xl md:text-6xl font-black font-sans text-white tracking-tighter mb-6 scroll-mt-24">
                피그로맨스
              </h3>
              <p className="text-xl md:text-2xl font-bold text-gray-300 tracking-wide">
                소시지가 될 운명을 가지고 태어난 수퇘지의 모험극!
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto justify-center mt-4">
              <a
                href="https://store.steampowered.com/app/1362120/PIGROMANCE/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-center font-bold text-sm tracking-widest text-black bg-white px-6 py-4 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
                </svg>
                STEAM 스토어 방문
              </a>
              <a
                href="https://drive.google.com/drive/folders/17OaEjVESlN7DfhuleC7V2HHfZPtUL55V?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-center font-bold text-sm tracking-widest text-black bg-[#ffdc9d] px-6 py-4 rounded-full hover:bg-[#ffdc9d]/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
                </svg>
                피그로맨스 게임 다운로드
              </a>
            </div>

          </div>

          {/* TRAILERS GRID (Below Header) */}
          <div className="mt-12 mb-6 w-full shrink-0">
            <h5 id="pigromance-trailer" className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider scroll-mt-24">예고편</h5>
          </div>
          <div className="grid grid-cols-1 gap-6 w-full">
            <div className="relative pt-[56.25%] w-full bg-white/5 rounded-3xl overflow-hidden shadow-xl border border-white/10 min-w-0 min-h-0">
              <SmartIframe
                src="https://www.youtube.com/embed/3i1fkY9Q6Ho?rel=0"
                title="피그로맨스 정식 출시 론칭 트레일러"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="relative pt-[56.25%] w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 min-w-0 min-h-0">
                <SmartIframe
                  src="https://www.youtube.com/embed/xvjyCQMuIho?rel=0"
                  title="피그로맨스 얼리엑세스 트레일러"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <div className="relative pt-[56.25%] w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10 min-w-0 min-h-0">
                <SmartIframe
                  src="https://www.youtube.com/embed/_SSh_yJSRcE?rel=0"
                  title="피그로맨스 첫 데모 트레일러"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS & SOUNDTRACK (Moved up to match markdown order and ensure ILLUSTRATION is right after CHARACTER GALLERY) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Achievements */}
          <div className="flex flex-col gap-6 p-10 bg-white/5 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-black font-sans text-white m-0 uppercase tracking-tighter border-b border-white/10 pb-4">
              주요 성과
            </h4>
            <ul className="list-disc pl-6 space-y-3 m-0 font-medium text-gray-300">
              <li>장르: 퍼즐 플랫포머 (싱글)</li>
              <li>컨트롤러 지원</li>
              <li>플랫폼: STEAM, STOVE</li>
              <li>출시일: 2024년 7월 25일</li>
              <li className="list-none border-b border-white/10 my-4 -ml-6 w-[calc(100%+1.5rem)]"></li>
              <li>퍼블리셔 : 그라비티</li>
              <li>6회 수상 이력 보유</li>
              <li className="list-none border-b border-white/10 my-4 -ml-6 w-[calc(100%+1.5rem)]"></li>
              <li>자체 제작 IP</li>
              <li>기타: Nintendo Switch 포팅 완료(출시 미정)</li>
            </ul>
          </div>

          {/* Soundtrack */}
          <div className="flex flex-col gap-6 p-10 bg-[#FF5500]/10 rounded-3xl border border-[#FF5500]/20">
            <div className="flex items-center justify-between border-b border-[#FF5500]/20 pb-4">
              <h4 className="text-2xl font-black font-sans text-white m-0 uppercase tracking-tighter">
                오리지널 사운드트랙
              </h4>
              <a
                href="https://soundcloud.com/user-673859753-51053972/sets/pigromance"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold bg-[#FF5500] text-white px-3 py-1.5 rounded-full hover:bg-[#FF5500]/80 transition-colors"
              >
                SoundCloud ↗
              </a>
            </div>
            <ul className="list-none p-0 space-y-3 m-0 font-medium text-gray-300 text-sm">
              <li>
                <strong className="text-white">제작방향 :</strong> 돼지들의 삶과
                죽음 그리고 사랑이야기를 담아 오케스트라 음악으로 작곡
              </li>
              <li>
                <strong className="text-white">음악배치 :</strong> 할로윈 느낌,
                그로테스크한 느낌으로 상황에 맞는 음악 배치
              </li>
              <li>
                <strong className="text-white">오케스트라 특징 :</strong> 다양한
                소재의 아날로그 악기가 만들어 내는 하모니가 특징
              </li>
              <li>
                <strong className="text-white">다섯 가지 키워드 :</strong> 긴장,
                위협, 도망, 해결, 평화
              </li>
            </ul>
            {/* Soundcloud Embed */}
            {/* Soundcloud Embed */}
            <div className="w-full mt-auto rounded-xl overflow-hidden bg-white/5">
              <iframe
                loading="lazy"
                width="100%"
                height="350"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-673859753-51053972/sets/pigromance&color=%23ea580c&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
              ></iframe>
            </div>
          </div>
        </div>

        {/* NARRATIVE SECTIONS */}
        <div className="mb-24 flex flex-col gap-6">
          
          {/* Main Category Header: 게임 소개 */}
          <h4 id="pigromance-intro" className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative scroll-mt-24">
            <span className="relative z-10 bg-black px-6">게임 소개</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 h-full justify-center">
              <h4 className="text-xl font-bold font-sans text-white m-0">
                "소시지가 될 운명을 가지고 태어난 수퇘지"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0 text-sm">
                어느 평화로운 농장... 게으른 돼지들은 낮은 울타리에 갇혀 살고
                있었죠. 그러던 어느 날 울타리가 부서지는 소동이 일어나고, 놀란 돼지들이
                탈출하며 이야기는 시작됩니다.
              </p>
            </div>
            <GalleryImageTrigger
              src="/image/pigromance_run.gif"
              alt="피그로맨스 달리기"
              index={0}
              imgClassName="w-full h-full object-cover rounded-3xl shadow-xl m-0 border border-white/10 bg-black block"
              className="block w-full h-full min-w-0 min-h-[200px]"
              onClick={setGalleryIndex}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <GalleryImageTrigger
              src="/image/pigromance_ingame.gif"
              alt="피그로맨스 인게임"
              index={1}
              imgClassName="w-full h-full object-cover rounded-3xl shadow-xl m-0 border border-white/10 bg-black block"
              className="block w-full h-full order-2 md:order-1 min-w-0 min-h-[200px]"
              onClick={setGalleryIndex}
            />
            <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 order-1 md:order-2 justify-center h-full">
              <h4 className="text-xl font-bold font-sans text-white m-0">
                "돼지들은 최고의 소시지 재료!"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0 text-sm">
                불을 내뿜는 파이프와 냉동고, 돼지들을 절단하는 톱날과 절단된 부위를 운반하는 컨베이어벨트! 수퇘지가 소시지 재료가 되지 않도록 도와주세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 h-full justify-center">
              <h4 className="text-xl font-bold font-sans text-white m-0">
                "도전적인 퍼즐과 까다로운 플랫폼"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0 text-sm">
                절단선을 인식하는 기계들, 리프트를 타고 펼쳐지는 추격전, 수퇘지를 집요하게 찾아다니는 도축업자! 이 외에도 소시지 공장 안에는 여러가지 위험이 도사리고 있습니다!
              </p>
            </div>
            <GalleryImageTrigger
              src="/image/pigromance_puzzle.gif"
              alt="피그로맨스 퍼즐"
              index={18}
              imgClassName="w-full h-full object-cover rounded-3xl shadow-xl m-0 border border-white/10 bg-black block"
              className="block w-full h-full min-w-0 min-h-[200px]"
              onClick={setGalleryIndex}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <GalleryImageTrigger
              src="/image/pigromance_music.gif"
              alt="피그로맨스 음악"
              index={19}
              imgClassName="w-full h-full object-cover rounded-3xl shadow-xl m-0 border border-white/10 bg-black block"
              className="block w-full h-full order-2 md:order-1 min-w-0 min-h-[200px]"
              onClick={setGalleryIndex}
            />
            <div className="flex flex-col gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 order-1 md:order-2 h-full justify-center">
              <h4 className="text-xl font-bold font-sans text-white m-0">
                "아름다운 음악에 맞춰진 스토리텔링"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0 text-sm">
                진행 과정에 맞춰 흐르는 웅장하고 감미로운 선율과 함께
                무시무시하고 잔혹한 소시지 공장을 탈출하세요!
              </p>
            </div>
          </div>
        </div>

        {/* CHARACTER GALLERY */}
        <div className="mb-24 flex flex-col gap-6">
          <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">등장 인물</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_meatlet.gif"
                  alt="미틀렛"
                  index={2}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                주인공 ‘미틀렛’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                울타리가 부서지던 날 ‘포클렛’의 도움을 받아 농장을 탈출한다.
                하지만 ‘커팅맨’에게 붙잡힌 ‘포클렛’은 도축되고, 그 모습을
                목격한다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_porklet.gif"
                  alt="포클렛"
                  index={3}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                도축되는 ‘포클렛’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                울타리가 부서지는 소동을 일으킨 주범. 탈출하는 돼지 무리들
                속에서 걷는 것도 서툰 ‘미틀렛’을 발견하고 탈출을 도와준다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_blackbird.gif"
                  alt="검은새"
                  index={4}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                정체를 알 수 없는 ‘검은새’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                파이프맨 새장에 갇혀버린 ‘검은새’. 공장 안에서 ‘미틀렛’과
                만나며, 함께 공장을 탈출한다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_cuttingman.gif"
                  alt="커팅맨"
                  index={5}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                도축업자 ‘커팅맨’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                농장을 관리하는 도축업자. 탈출한 돼지들을 추격해서 도축한다.
                딸을 매우 사랑하는 한 가정의 평범한 아버지이다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_pipeman.gif"
                  alt="파이프맨"
                  index={6}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                파이프 수리공 ‘파이프맨’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                공장에 갇혀서 착취를 당하고 있는 노예. 자신보다 약한 존재를
                새장에 가두고 키우기를 좋아한다. ‘검은새’를 복종시키려 한다.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10">
              <div className="aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100">
                <GalleryImageTrigger
                  src="/image/char_seedpig.gif"
                  alt="시드피그"
                  index={7}
                  imgClassName="w-full h-full object-contain m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-xl font-bold text-white mb-3">
                출산 공장의 ‘시드피그’
              </strong>
              <p className="text-sm text-gray-400 leading-relaxed font-medium m-0">
                소시지 공장은 수정 교배로 돼지들을 생산한다. ‘시드피그’는 너무
                많은 출산으로 삶을 다해가고 있다. 미틀렛과 포클렛의 어미일지도
                모른다.
              </p>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE NEW SECTION: ART */}
        <div className="mb-24 space-y-24">
          <h4 id="pigromance-art" className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative scroll-mt-24">
            <span className="relative z-10 bg-black px-6">아트</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          </h4>

          {/* Sub-Header 1: 로고 */}
          <div className="flex flex-col gap-6">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">로고</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <GalleryImageTrigger src="/image/logo_kor.png" alt="로고 한국어" index={16} imgClassName="w-full h-full object-contain p-4" className="block w-full h-full" onClick={setGalleryIndex} />
              </div>
              <div className="aspect-video w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <GalleryImageTrigger src="/image/logo_eng.png" alt="로고 영어" index={17} imgClassName="w-full h-full object-contain p-4" className="block w-full h-full" onClick={setGalleryIndex} />
              </div>
            </div>
          </div>

          {/* Sub-Header 2: 스크린샷 */}
          <div className="flex flex-col gap-6">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">스크린샷</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[18, 19, 20, 21, 22, 23].map((idx, i) => (
                <div key={idx} className="aspect-video w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <GalleryImageTrigger src={`/image/Screenshot_${i + 1}.png`} alt={`스크린샷 ${i + 1}`} index={idx} imgClassName="w-full h-full object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Header 3: 콘티 */}
          <div className="flex flex-col gap-6">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">콘티</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <GalleryImageTrigger src="/image/storyboard_1.png" alt="콘티 1" index={24} imgClassName="w-full h-full object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
              </div>
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <GalleryImageTrigger src="/image/storyboard_2.png" alt="콘티 2" index={25} imgClassName="w-full h-full object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
              </div>
            </div>
          </div>

          {/* Sub-Header 4: 일러스트 */}
          <div className="flex flex-col gap-6">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">일러스트</h5>

            <div className="w-full rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mb-8">
              <GalleryImageTrigger src="/image/PIGROMANCE_Keyvisual.png" alt="키비주얼" index={26} imgClassName="w-full h-full object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[27, 28, 29, 30].map((idx, i) => (
                <div key={idx} className="w-full rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <GalleryImageTrigger src={`/image/PIGROMANCE_Character_${i + 1}.png`} alt={`캐릭터 ${i + 1}`} index={idx} imgClassName="w-full h-auto object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
                </div>
              ))}
            </div>

            <div className="w-full md:w-3/4 mx-auto md:max-w-4xl rounded-3xl overflow-hidden bg-black border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
              <GalleryImageTrigger src="/image/Stomuch.png" alt="스토머치" index={31} imgClassName="w-full h-full object-cover" className="block w-full h-full" onClick={setGalleryIndex} />
            </div>
          </div>

          {/* Sub-Header 5: 캐릭터 턴어라운드 */}
          <div className="flex flex-col gap-6">
            <h5 className="text-2xl font-bold text-white border-l-4 border-white/40 pl-4 uppercase tracking-wider">캐릭터 턴어라운드</h5>
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl">
              <SmartIframe
                src="https://www.youtube.com/embed/8WJwtm6Sc8o?rel=0&autoplay=1&mute=1&loop=1&playlist=8WJwtm6Sc8o"
                title="캐릭터 턴어라운드"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* MERCHANDISE & PROTOTYPES */}
        <div className="mt-24 mb-12">
          <h4 id="pigromance-goods" className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative scroll-mt-24">
            <span className="relative z-10 bg-black px-6">굿즈</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          </h4>

          {/* Part A: Prototyping Showcase */}
          <div className="flex flex-col gap-8 mb-16">
            <div className="w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <GalleryImageTrigger
                src="/image/goods_all.png"
                alt="완구 시제품 모음"
                index={8}
                imgClassName="w-full h-auto object-cover m-0"
                className="block w-full h-full"
                onClick={setGalleryIndex}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-lg font-bold text-white mb-0">
                  시제품 촬영 영상
                </h5>
                <div className="aspect-video w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  <SmartIframe
                    src="https://www.youtube.com/embed/7XuCjqpz6E4?rel=0"
                    title="시제품 촬영 영상"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-lg font-bold text-white mb-0">
                  조립식 피규어 제작 영상
                </h5>
                <div className="aspect-video w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  <SmartIframe
                    src="https://www.youtube.com/embed/5T3cmSpnyso?rel=0"
                    title="조립식 피규어 제작 영상"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Merchandise Catalog Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/goods_package.png"
                  alt="조립식 피규어(패키지와 구성품)"
                  index={9}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">
                조립식 피규어 (패키지)
              </strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/figure_studio.png"
                  alt="조립식 피규어(조립한 모습)"
                  index={10}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">
                조립식 피규어 (조립완료)
              </strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/goods_usb.png"
                  alt="USB 사운드트랙 피규어"
                  index={11}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">
                USB 사운드트랙 피규어
              </strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/goods_mask.png"
                  alt="페이퍼크래프트 가면"
                  index={12}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">
                페이퍼크래프트 가면
              </strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-white">
                <GalleryImageTrigger
                  src="/image/goods_keyring.png"
                  alt="키링"
                  index={13}
                  imgClassName="w-full h-full object-cover scale-105 m-0 mix-blend-multiply"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">키링</strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5">
              <div className="aspect-square w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/goods_sticker.png"
                  alt="스티커"
                  index={14}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">스티커</strong>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/10 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 md:col-span-3 lg:col-span-2">
              <div className="aspect-[2/1] sm:aspect-square md:aspect-[2/1] w-full rounded-3xl overflow-hidden mb-4 bg-black">
                <GalleryImageTrigger
                  src="/image/goods_bag.png"
                  alt="에코백"
                  index={15}
                  imgClassName="w-full h-full object-cover m-0"
                  className="block w-full h-full"
                  onClick={setGalleryIndex}
                />
              </div>
              <strong className="text-base font-bold text-white">에코백</strong>
            </div>
          </div>
        </div>

        {/* PITCH DECK */}
        <div className="mt-24 mb-12">
          <h4 id="pigromance-pitchdeck" className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative scroll-mt-24">
            <span className="relative z-10 bg-black px-6">피치덱</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
          </h4>
          <div 
            ref={pitchDeckRef}
            tabIndex={0}
            className="w-full aspect-[16/9] overflow-hidden bg-black shadow-[0_10px_40px_rgba(0,0,0,1)] relative mx-auto group outline-none"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                setPitchdeckIndex(prev => Math.min(prev + 1, pitchdeckSlides.length - 1));
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                setPitchdeckIndex(prev => Math.max(prev - 1, 0));
              }
            }}
          >
            {/* Prerender all images for instant transition without lag */}
            {pitchdeckSlides.map((slide: string, idx: number) => (
              <img 
                key={slide}
                src={`/image/${slide}`}
                alt={`피치덱 슬라이드 ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${idx === pitchdeckIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
            
            {/* Left/Right Click Zones */}
            <div 
              className="absolute inset-y-0 left-0 w-1/4 md:w-1/3 cursor-pointer z-20 hover:bg-white/5 transition-colors"
              onClick={() => setPitchdeckIndex(p => Math.max(p - 1, 0))}
            />
            <div 
              className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 cursor-pointer z-20 hover:bg-white/5 transition-colors"
              onClick={() => setPitchdeckIndex(p => Math.min(p + 1, pitchdeckSlides.length - 1))}
            />

            {/* Custom Overlay UI */}
            <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* SLIDE NAVIGATION INSTRUCTION (Overlay) */}
              <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none">
                <div className="px-4 py-2 bg-black/70 text-white/90 text-[12px] md:text-[13px] font-medium rounded-full backdrop-blur-md shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  키보드 방향키(◀ ▶)나 화면 좌우측을 클릭해 슬라이드를 넘겨주세요
                </div>
              </div>

              {/* SLIDE INDICATOR */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                <div className="px-4 py-1.5 bg-black/70 text-white/90 text-[13px] font-bold rounded-full backdrop-blur-md shadow-lg">
                  {pitchdeckIndex + 1} / {pitchdeckSlides.length}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="absolute bottom-4 md:bottom-5 right-4 md:right-6 flex justify-end gap-2 pointer-events-auto">
                {/* RESTART BUTTON */}
                <button 
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault();
                    setPitchdeckIndex(0);
                  }}
                  className="px-3 md:px-4 py-1.5 flex items-center gap-1.5 md:gap-2 bg-black/60 hover:bg-black/80 transition-colors text-white/90 text-[13px] font-bold rounded-full backdrop-blur-md focus:outline-none"
                  title="슬라이드 처음부터 다시 보기"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                  <span className="hidden sm:inline">처음부터 보기</span>
                </button>

                {/* FULLSCREEN BUTTON */}
                <button 
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={(e) => {
                    e.preventDefault();
                    if (pitchDeckRef.current) {
                      if (!document.fullscreenElement) {
                        pitchDeckRef.current.requestFullscreen().catch(() => {});
                      } else {
                        document.exitFullscreen().catch(() => {});
                      }
                    }
                  }}
                  className="px-3 md:px-4 py-1.5 flex items-center gap-1.5 md:gap-2 bg-black/60 hover:bg-black/80 transition-colors text-white/90 text-[13px] font-bold rounded-full backdrop-blur-md focus:outline-none"
                  title="전체화면보기"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                  </svg>
                  <span className="hidden sm:inline">전체화면보기</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING NAVIGATION */}
        <div className="sticky -bottom-2 md:-bottom-12 left-0 right-0 z-[100] flex justify-center pointer-events-none w-full mt-12 pb-6 md:pb-12">
          <motion.nav 
            className="pointer-events-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-6 px-3 sm:px-4 md:px-8 py-2 md:py-2.5 bg-[#2B2B2B] rounded-2xl md:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md bg-opacity-95 w-[92%] sm:w-[85%] md:w-auto md:max-w-[95%]"
          >
            {[
              { id: 'pigromance-top', label: '외계인납치작전' },
              { id: 'pigromance-main', label: '피그로맨스' },
              { id: 'pigromance-trailer', label: '예고편' },
              { id: 'pigromance-intro', label: '게임 소개' },
              { id: 'pigromance-art', label: '아트' },
              { id: 'pigromance-goods', label: '굿즈' },
              { id: 'pigromance-pitchdeck', label: '피치덱' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`group px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 text-[11px] sm:text-[13px] md:text-[15px] transition-all tracking-widest ${
                  activeSection === item.id
                    ? 'scale-105 pointer-events-none'
                    : ''
                }`}
              >
                <span className={`pb-1 border-b-2 ${
                  activeSection === item.id
                    ? 'text-white font-black border-white'
                    : 'text-white/40 font-bold border-transparent group-hover:text-white/80'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </motion.nav>
        </div>
      </div>
      <GalleryLightbox
        images={pigromanceGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </>
  );
}
