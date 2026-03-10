import { useState } from "react";
import {
  GalleryLightbox,
  GalleryImageTrigger,
  GalleryImageDef,
} from "@/components/ui/GalleryLightbox";

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
  // Concept (33)
  { src: "/image/Stomuch.png", alt: "스토머치 콘셉트" },
];

export function PigromanceModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans text-white uppercase tracking-tighter">
            (주)외계인납치작전
          </h2>
          <p className="text-gray-400 font-medium text-lg tracking-widest">
            재직 기간 : 2019.11 ~ 2025.05 (5년 7개월)
          </p>
        </div>

        {/* BRANDING VIDEO */}
        <div className="mb-24 aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/1eAZUMlqRJA"
            title="회사 브랜딩 영상"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>

        {/* PROJECT OVERVIEW ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-4xl font-black font-sans text-white tracking-tighter">
              피그로맨스
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="https://store.steampowered.com/app/1362120/PIGROMANCE/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex flex-col items-center justify-center text-center font-bold text-sm tracking-widest text-black bg-white px-6 py-3 rounded-3xl hover:bg-gray-200 transition-colors leading-snug"
              >
                <span>STEAM</span>
                <span>스토어 방문</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/17OaEjVESlN7DfhuleC7V2HHfZPtUL55V?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex flex-col items-center justify-center text-center font-bold text-sm tracking-widest text-black bg-[#ffdc9d] px-6 py-3 rounded-3xl hover:bg-[#ffdc9d]/80 transition-colors leading-snug"
              >
                다운로드 ⤓
              </a>
            </div>
            <ul className="list-none p-0 space-y-4 font-medium text-gray-300 text-base mt-4 border-l-2 border-white/20 pl-6">
              <li className="m-0">
                <strong className="text-white font-semibold">장르 :</strong>{" "}
                퍼즐 플랫포머
              </li>
              <li className="m-0">
                <strong className="text-white font-semibold">플랫폼 :</strong>{" "}
                Steam
              </li>
              <li className="m-0">
                <strong className="text-white font-semibold">출시일 :</strong>{" "}
                2024년 7월 25일
              </li>
              <li className="m-0">
                <strong className="text-white font-semibold">
                  개발 기간 :
                </strong>{" "}
                2019년 11월 ~ 2024년 7월 (약 5년)
              </li>
            </ul>
            <div className="mt-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <strong className="block text-white font-semibold mb-2">
                담당 역할
              </strong>
              <p className="m-0 text-sm text-gray-300 leading-relaxed break-keep">
                총괄 기획, 시나리오, 그래픽디자인, 아트 디렉션, 사업 운영.{" "}
                <br />
                피그로맨스는 소시지 공장을 배경으로 한 퍼즐 플랫포머 게임입니다.
                텍스트가 없는 무언극의 연출방식과 충격적인 스토리, 그리고
                직관적인 퍼즐 설계가 특징입니다.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* TRAILERS GRID */}
            <div className="grid grid-cols-1 gap-6">
              <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-xl border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/3i1fkY9Q6Ho"
                  title="피그로맨스 정식 출시 론칭 트레일러"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.youtube.com/embed/xvjyCQMuIho"
                    title="피그로맨스 얼리엑세스 트레일러"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.youtube.com/embed/_SSh_yJSRcE"
                    title="피그로맨스 첫 데모 트레일러"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
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
              <li>
                <strong>Steam 출시 완료 :</strong> 2024년 7월 25일
              </li>
              <li>
                <strong>Nintendo Switch 출시 예정 :</strong> 2025년 4분기
              </li>
              <li>
                <strong>퍼블리싱 계약 :</strong> PC 글로벌 유통 (주)그라비티 /
                Switch 동아시아 유통 neos
              </li>
              <li>다수 수상 이력 보유</li>
              <li className="pt-2">
                <strong>자체 기술 개발 :</strong>
                <br />- 유니티 기반 2D/3D 하이브리드 그래픽 기술 개발
                <br />- Cinema4D 자동 웨이트 플러그인 개발
              </li>
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
            <div className="w-full h-32 mt-auto rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="150"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1550478796&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
              ></iframe>
            </div>
          </div>
        </div>

        {/* NARRATIVE SECTIONS */}
        <div className="mb-24 space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4 justify-center h-full">
              <h4 className="text-2xl font-bold font-sans text-white">
                "소시지가 될 운명을 가지고 태어난 수퇘지의 이야기"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0">
                어느 평화로운 농장... 게으른 돼지들은 낮은 울타리에 갇혀 살고
                있었죠.
                <br />
                그러던 어느 날 울타리가 부서지는 소동이 일어나고, 놀란 돼지들이
                탈출하며 이야기는 시작됩니다.
              </p>
            </div>
            <GalleryImageTrigger
              src="/image/pigromance_run.gif"
              alt="피그로맨스 달리기"
              index={0}
              imgClassName="w-full h-auto rounded-3xl shadow-xl m-0 border border-white/10 bg-black block"
              className="block w-full h-auto"
              onClick={setGalleryIndex}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <GalleryImageTrigger
              src="/image/pigromance_ingame.gif"
              alt="피그로맨스 인게임"
              index={1}
              imgClassName="w-full h-auto rounded-3xl shadow-xl m-0 border border-white/10 order-2 md:order-1 bg-black block"
              className="block w-full h-auto"
              onClick={setGalleryIndex}
            />
            <div className="flex flex-col gap-4 order-1 md:order-2 justify-center h-full">
              <h4 className="text-2xl font-bold font-sans text-white">
                "돼지들은 최고의 소시지 재료!"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0">
                소시지 공장에는 돼지를 더욱 맛있게 만들기 위한 다양한 장치가
                기다리고 있습니다.
                <br />
                불을 내뿜는 파이프와 냉동고, 돼지들을 절단하는 톱날과 절단된
                부위를 운반하는 컨베이어벨트!
                <br />
                우리의 수퇘지가 소시지 재료가 되지 않도록 도와주세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 h-full">
              <h4 className="text-xl font-bold font-sans text-white m-0">
                "도전적인 퍼즐과 까다로운 플랫폼"
              </h4>
              <p className="font-medium leading-relaxed text-gray-400 m-0 text-sm">
                절단선을 인식하는 기계들, 리프트를 타고 펼쳐지는 추격전,
                수퇘지를 집요하게 찾아다니는 도축업자!
                <br />이 외에도 소시지 공장 안에는 위협적인 퍼즐들이 여러분을
                기다리고 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-8 bg-white/5 rounded-3xl border border-white/10 h-full justify-center">
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
        <div className="mb-24">
          <h4 className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase">
            등장 인물
          </h4>
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

        {/* COMPREHENSIVE NEW SECTION: ILLUSTRATION */}
        <div className="mb-24 space-y-24">
          <h4 className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative">
            <span className="relative z-10 bg-black px-6">일러스트</span>
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
              <iframe
                src="https://www.youtube.com/embed/8WJwtm6Sc8o?autoplay=1&mute=1&loop=1&playlist=8WJwtm6Sc8o"
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
          <h4 className="text-3xl font-black mb-12 font-sans text-white text-center tracking-tighter uppercase relative">
            <span className="relative z-10 bg-black px-6">굿즈(MD) 시제품</span>
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
                  <iframe
                    src="https://www.youtube.com/embed/7XuCjqpz6E4"
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
                  <iframe
                    src="https://www.youtube.com/embed/5T3cmSpnyso"
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
