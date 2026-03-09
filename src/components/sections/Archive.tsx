"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/Modal";
import { LookbookGrid } from "@/components/ui/LookbookGrid";
import { ThumbnailSlider } from "@/components/ui/ThumbnailSlider";
import { AwardsModalContent } from "./modals/AwardsModalContent";

interface ArchiveCategory {
  title: string;
  images: string[];
  modalContent: React.ReactNode;
}

const categories: ArchiveCategory[] = [
  {
    title: "▪️ 언론 소개",
    images: [
      "/image/인디플_복사.png",
      "/image/게임스컴_9.png",
      "/image/대중소상생협력.jpg"
    ],
    modalContent: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 pb-4 font-sans border-b border-gray-700 text-white">언론 소개 (Press)</h2>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-sans text-white">2024년</h3>
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li><a href="https://www.khgames.co.kr/news/articleView.html?idxno=234389" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">‘2024 인디크래프트’ IR 데모데이 성료</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임즈 (2024.11.21)</span></li>
              <li><a href="https://www.newsprime.co.kr/news/article/?no=657612" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">대구콘텐츠코리아랩, 슈퍼세미나 시즌2···콘텐츠 창업 세미나 개최</a> <span className="text-sm text-gray-400 opacity-100 ml-2">프라임경제 (2024.10.08)</span></li>
              <li><a href="https://www.thisisgame.com/webzine/special/nboard/5/?n=196491" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[인디한잔] 성공은 담을 키워줬고 아픔은 우릴 단단하게 해줬다.</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2024.09.16)</span></li>
              <li><a href="https://www.thisisgame.com/webzine/game/nboard/225/?n=194789" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">화제의 ‘2024 인디크래프트’최종 우수 개발사들 소개</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2024.08.27)</span></li>
              <li><a href="https://www.thisisgame.com/webzine/series/nboard/212/?n=192715" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[방구석게임] 소시지가 될 순 없어! 돼지의 공장 대탈출</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2024.08.09)</span></li>
              <li><a href="https://www.maniareport.com/view.php?ud=202408021250229835cecffa9387_19&wcms=1" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[마니아 토막 리뷰] 소세지가 될 운명의 돼지가 주역인 '잔혹동화</a> <span className="text-sm text-gray-400 opacity-100 ml-2">마니아타임즈 (2024.08.02)</span></li>
              <li><a href="https://www.thisisgame.com/webzine/game/nboard/225/?n=192072" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">‘피그로맨스’ 스팀 및 스토브 정식 출시</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2024.07.25)</span></li>
              <li><a href="https://www.khgames.co.kr/news/articleView.html?idxno=230359" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">어른들을 위한 동화 같은 게임 ‘피그로맨스’ 7월 25일 정식 출시</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임즈 (2024.07.24)</span></li>
              <li><a href="https://t.co/zGjshmy983" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">逃亡ブタアクション『PIGROMANCE』7月25日正式リリースへ。逃げた「食肉用のブタ」となり、ブタの女の子を探してソーセージ工場に潜入</a> <span className="text-sm text-gray-400 opacity-100 ml-2">AUTOMATON (2024.07.16)</span></li>
              <li><a href="https://www.thisisgame.com/webzine/game/nboard/225/?n=191212" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">2024 인디크래프트, 우수 개발사 시상식 및 네트워킹데이 성료</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2024.07.05)</span></li>
              <li><a href="https://m.munhwa.com/mnews/view.html?no=2024062501032212053001" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">세계 4강 K-게임… ‘콘솔’ 기반으로 다시 한번 레벨업</a> <span className="text-sm text-gray-400 opacity-100 ml-2">문화일보 (2024.06.25)</span></li>
              <li><a href="https://www.khgames.co.kr/news/articleView.html?idxno=228198&fbclid=IwZXh0bgNhZW0CMTEAAR0T1vM0wQsExB" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">외계인납치작전, ‘피그로맨스’ 정식 출시 버전 플레이엑스포서 ‘선공개’</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임즈 (2024.05.24)</span></li>
              <li><a href="https://unitysquare.co.kr/madewith/game/view?bidx=1&idx=688&utm_source=facebook-page&utm_medium=soci" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">MWU KR 2023에서 ‘Best Indie’ 부문을 수상한 작품 ‘피그로맨스’ 인터뷰</a> <span className="text-sm text-gray-400 opacity-100 ml-2">Unity (2024.01.15)</span></li>
              <li><a href="https://www.gamechosun.co.kr/webzine/article/view.php?no=201990" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">유니티 기반 게임, 2024년 빛낼 기대작으로 주목</a> <span className="text-sm text-gray-400 opacity-100 ml-2">게임조선 (2024.01.02)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 font-sans text-white">2023년</h3>
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li><a href="https://www.4gamer.net/games/741/G074149/20230923032/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">［TGS2023］「ソーセージになる運命を持って生まれた雄ブタの冒険劇」を描く，パズル・プラットフォーマー「PIGROMANCE」を遊んでみた</a> <span className="text-sm text-gray-400 opacity-100 ml-2">4gamer (2023.09.23)</span></li>
              <li><a href="https://minimap.net/magazine/interview-oaa-pigromance-ceo?l=kr" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[외계인납치작전] 피그로맨스 인터뷰</a> <span className="text-sm text-gray-400 opacity-100 ml-2">미니맵 (2023.09.11)</span></li>
              <li><a href="https://www.koreagamedesk.com/oaa-aims-for-global-success-with-intriguing-adventure-series-pigromance" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">OAA Aims for Global Success with Intriguing Adventure Series Pigromance</a> <span className="text-sm text-gray-400 opacity-100 ml-2">KoreaGameDesk (2023.08.25)</span></li>
              <li><a href="https://m.inven.co.kr/webzine/wznews.php?iskin=r&hashtag=%EA%B2%8C%EC%9E%84%EC%8A%A4%EC%BB%B4&idx=286841" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">게임스컴 2023, 한국 출전부스는 총 21곳</a> <span className="text-sm text-gray-400 opacity-100 ml-2">인벤 (2023.07.19)</span></li>
              <li><a href="https://www.donga.com/news/It/article/all/20230512/119260609/1" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[플레이엑스포 in 인디] 스토리의 힘을 믿는다! 외계인납치작전, '피그로맨스'</a> <span className="text-sm text-gray-400 opacity-100 ml-2">동아닷컴 (2023.05.12)</span></li>
              <li><a href="https://zdnet.co.kr/view/?no=20230508113111" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[강한결의 인디픽] 외계인납치작전 "피그로맨스, 잔혹동화 매력 담았다"</a> <span className="text-sm text-gray-400 opacity-100 ml-2">지디넷코리아 (2023.05.05)</span></li>
              <li><a href="https://game.naver.com/original_series/39/detail/1880410" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[리뷰가 묻고 게임이 답하다] 피그로맨스</a> <span className="text-sm text-gray-400 opacity-100 ml-2">네이버 게임칼럼 (2023.04.28)</span></li>
              <li><a href="http://www.dt.co.kr/contents.html?article_no=2023032302109931820004&ref=naver&fbclid=IwAR1TfyE41zG3W" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">K-콘텐츠 70%가 게임 산업인데… 신규시장 진출 위한 맞춤 정보 필요</a> <span className="text-sm text-gray-400 opacity-100 ml-2">문화체육관광부 (2023.03.23)</span></li>
              <li><a href="https://post.naver.com/viewer/postView.naver?volumeNo=35637150&memberNo=24985926&vType=VERTICAL&fbcl" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">그라비티, 주목받는 인디게임 6종 퍼블리싱 발표. ALTF42, 피그로맨스 등</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2023.03.17)</span></li>
              <li><a href="https://youtu.be/T4ONqKbLZqM" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">피그로맨스 - 지스타 인디어워즈 2위 수상</a> <span className="text-sm text-gray-400 opacity-100 ml-2">G-STAR (2022.11.20)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 font-sans text-white">2022년</h3>
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li><a href="https://thisisgame.com/webzine/news/nboard/4/?n=162370" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">돼지가 사랑 찾아 모험하는 '피그로맨스', 최용찬 대표의 이야기</a> <span className="text-sm text-gray-400 opacity-100 ml-2">디스이즈게임 (2022.11.21)</span></li>
              <li><a href="https://tv.naver.com/v/26975346" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">PlayX4 2022 피그로맨스! 외계인납치작전 소개!</a> <span className="text-sm text-gray-400 opacity-100 ml-2">게임동아 (2022.05.27)</span></li>
              <li><a href="https://indiegame.com/archives/4800" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">인디개발사 ‘피그로맨스’, 2022 플레이엑스포 부스 참가 후기</a> <span className="text-sm text-gray-400 opacity-100 ml-2">인디게임닷컴 (2022.05.24)</span></li>
              <li><a href="https://www.inven.co.kr/webzine/news/?news=271801" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">'피그로맨스'를 흔한 사랑 게임으로 보지마세요</a> <span className="text-sm text-gray-400 opacity-100 ml-2">인벤 (2022.05.14)</span></li>
              <li><a href="https://game.donga.com/103122/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[플레이엑스포 in 인디] 최용찬 대표 "피그로맨스는 한 편의 잔혹동화 같은 게임"</a> <span className="text-sm text-gray-400 opacity-100 ml-2">게임동아 (2022.05.13)</span></li>
              <li><a href="https://www.khgames.co.kr/news/articleView.html?idxno=200484" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[플레이엑스포] 외계인납치작전, ‘피그로맨스’ 랭킹전 이벤트 ‘눈길’</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임즈 (2022.05.13)</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-sans text-white">2019 ~ 2021년</h3>
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li><a href="https://youtu.be/s9HKyqq2D_M" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[미니맵 커넥트 앤 플레이 2021] 피그로맨스 - 최용찬님 인터뷰</a> <span className="text-sm text-gray-400 opacity-100 ml-2">미니맵 (2021.11.01)</span></li>
              <li><a href="https://cda.or.kr/CDAPost/2/read/1094" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">수퇘지의 서스펜스 로맨스게임 &lt;피그로맨스&gt; (최용찬 대표)</a> <span className="text-sm text-gray-400 opacity-100 ml-2">문화체육관광부 (2021.07.21)</span></li>
              <li><a href="http://www.tgdaily.co.kr/news/articleView.html?idxno=311575" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[인디게임 탐방] '피그로맨스' 한 편의 동화 같은 게임 만든다</a> <span className="text-sm text-gray-400 opacity-100 ml-2">더게임스데일리 (2021.09.16)</span></li>
              <li><a href="https://youtu.be/xP3cCtzhqQg" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">GIGDC 2020 수상자 HI스토리 #11 피그로맨스</a> <span className="text-sm text-gray-400 opacity-100 ml-2">GIGDC (2020.09.23)</span></li>
              <li><a href="http://www.gameshot.net/common/con_view.php?code=GA5f572617bc4a9" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[GIGDC2020] 한 편의 잔혹 동화, 피그로맨스</a> <span className="text-sm text-gray-400 opacity-100 ml-2">게임샷 (2020.09.08)</span></li>
              <li><a href="https://gameabout.com/interview2/6261639" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">“소시지 공장의 돼지, 삶과 죽음과 로맨스 담았다” GIGDC2020 은상 ‘피그로맨스’ 개발팀 인터뷰</a> <span className="text-sm text-gray-400 opacity-100 ml-2">게임어바웃 (2020.09.03)</span></li>
              <li><a href="http://www.khgames.co.kr/news/articleView.html?idxno=124366" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">외계인납치작전, 역대급 참신함 무장한 4인조 '등장'</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임스 (2020.08.21)</span></li>
              <li><a href="http://www.khgames.co.kr/news/articleView.html?idxno=124252" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">'피그로맨스' 뒤통수 때리는 엽기적 상상력의 인디게임</a> <span className="text-sm text-gray-400 opacity-100 ml-2">경향게임스 (2020.08.13)</span></li>
              <li><a href="http://www.inven.co.kr/webzine/news/?news=240246" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">일곱 등분의 여자 친구를 찾아서, '피그로맨스'</a> <span className="text-sm text-gray-400 opacity-100 ml-2">인벤 (2020.06.24)</span></li>
              <li><a href="http://www.inven.co.kr/webzine/news/?news=229762" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-white/20">[인터뷰] 내 여친이 소시지라니! 그런 미래는 싫어!!</a> <span className="text-sm text-gray-400 opacity-100 ml-2">인벤 (2019.11.15)</span></li>
            </ul>
          </div>

        </div>
      </div>
    )
  },
  {
    title: "▪️ 수상 실적",
    images: [
      "/image/GIGDC_복사.png",
      "/image/인디크래프트.png",
      "/image/지스타_복사.png"
    ],
    modalContent: <AwardsModalContent />
  },
  {
    title: "▪️ 지원 사업",
    images: [
      "/image/초기게임개발사.png",
      "/image/유니티_복사.png",
      "/image/인디플_복사.png"
    ],
    modalContent: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 pb-4 border-b border-gray-700 font-sans text-white">지원 사업</h2>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">도쿄게임쇼 한국공동관 참가 선정 (한국콘텐츠진흥원, 2023.09)</h3>
            <p className="text-gray-100 leading-relaxed font-light mb-4 text-base">가족관 시연 및 B2C 4Gamer 인터뷰</p>
             <LookbookGrid images={[
              { src: "/image/도쿄게임쇼_1.png", alt: "도쿄게임쇼 1", span: "2" },
              { src: "/image/도쿄게임쇼_3.png", alt: "도쿄게임쇼 2", span: "2" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">게임스컴 한국공동관 참가 선정 (한국콘텐츠진흥원, 2023.08)</h3>
            <p className="text-gray-100 leading-relaxed font-light mb-4 text-base">독일 쾰른 B2B 및 B2C 그라비티 부스 전시</p>
            <LookbookGrid images={[
              { src: "/image/게임스컴_10_가로_긴사진.png", alt: "게임스컴 파노라마", span: "full" },
              { src: "/image/게임스컴_5.png", alt: "게임스컴 부스", span: "2" },
              { src: "/image/게임스컴_9.png", alt: "게임스컴 인터뷰", span: "2" },
              { src: "/image/게임스컴_3.png", alt: "게임스컴 미팅", span: "2" },
              { src: "/image/게임스컴_4_세로.png", alt: "게임스컴 포스터", span: "1" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">K-콘텐츠 엑스포 in London 참가 선정 (한국콘텐츠진흥원, 2023.07)</h3>
            <p className="text-gray-100 leading-relaxed font-light mb-4 text-base">영국 유럽 각지 퍼블리셔 미팅</p>
            <LookbookGrid images={[
              { src: "/image/k콘텐츠엑스포_1.png", alt: "런던 엑스포 1", span: "2" },
              { src: "/image/k콘텐츠엑스포_2.png", alt: "런던 엑스포 2", span: "2" },
              { src: "/image/k콘텐츠엑스포_3.png", alt: "런던 엑스포 3", span: "2" },
              { src: "/image/k콘텐츠엑스포_5.png", alt: "런던 엑스포 4", span: "2" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-semibold mb-4 font-sans text-white">기타 지원 사업 한눈에 보기</h3>
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li>플랫폼 변환 지원사업 선정 (경기콘텐츠진흥원, 2023.05)</li>
              <li>K-콘텐츠 해외 지식재산 권리화 지원사업 선정 (한국저작권위원회, 2023.05)</li>
              <li>초기게임개발사 성장지원 선정 (한국콘텐츠진흥원, 2022.04)</li>
              <li>창업발전소 콘텐츠스타트업리그 선정 (한국콘텐츠진흥원, 2018.05)</li>
            </ul>
             <LookbookGrid images={[
              { src: "/image/2018-창업발전소-콘텐츠-스타트업리그-공모전-우수상.png", alt: "창업발전소 우수상", span: "2" },
              { src: "/image/우수상장-창업발전소_콘텐츠_스타트업_리그_공모전.jpg", alt: "창업발전소 우수장", span: "2" }
            ]} />
          </div>

        </div>
      </div>
    )
  },
  {
    title: "▪️ 대외 활동",
    images: [
      "/image/대중소상생협력.jpg",
      "/image/인디크래프트_IR_데모데이_1.jpg",
      "/image/대구특강_1.png",
      "/image/애니메이션고등학교특강_1.png",
      "/image/게임기획지원사업네트워킹_1.png"
    ],
    modalContent: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 pb-4 border-b border-gray-700 font-sans text-white">대외 활동</h2>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">대중소 상생협력 IR 데모데이 - 3위 수상 (경기콘텐츠진흥원, 2024.11)</h3>
            <LookbookGrid images={[
              { src: "/image/대중소상생협력.jpg", alt: "대중소 상생협력", span: "full" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">인크래프트 IR 데모데이 - 우수상 수상 (한국모바일게임협회, 2024.11)</h3>
            <LookbookGrid images={[
              { src: "/image/인디크래프트_IR_데모데이_1.jpg", alt: "인크래프트 IR 1", span: "2" },
              { src: "/image/인디크래프트_IR_데모데이_2.jpg", alt: "인크래프트 IR 2", span: "2" },
              { src: "/image/인디크래프트_IR_데모데이_3.jpg", alt: "인크래프트 IR 3", span: "2" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
            <h3 className="text-2xl font-semibold mb-2 font-sans text-white">슈퍼세미나 시즌2 - 콘텐츠 창업 세미나 특강 (대구콘텐츠코리아랩, 2024.10)</h3>
            <LookbookGrid images={[
              { src: "/image/대구특강_1.png", alt: "대구특강 1", span: "2" },
              { src: "/image/대구특강_2.png", alt: "대구특강 2", span: "2" }
            ]} />
          </div>

          <div className="pt-8 border-t border-white/5">
             <h3 className="text-2xl font-semibold mb-2 font-sans text-white">애니메이션고등학교 게임 회사 창업 멘토 (2024.05)</h3>
             <LookbookGrid images={[
              { src: "/image/애니메이션고등학교특강_1.png", alt: "고등학교 특강 1", span: "2" },
              { src: "/image/애니메이션고등학교특강_2.png", alt: "고등학교 특강 2", span: "2" }
            ]} />
            <div className="my-8 aspect-video bg-white/5 relative flex items-center justify-center rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <video src="/video/한국애니메이션_고등학교_특강.mov" controls className="w-full h-full object-cover"></video>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <ul className="list-disc pl-6 space-y-4 font-medium text-gray-100 leading-relaxed text-base">
              <li>[엑솔라] 지스타 펀딩 이벤트 IR 프레젠테이션 (2023.11)</li>
              <li>게임레벨업쇼케이스 네트워킹 - 창업 성공 사례 강연 (2023.07)</li>
              <li>문체부 1차관 주재 ‘제3차 콘텐츠 수출대책회의’ 인디게임사 대표 참가 (2023.03)</li>
            </ul>

            <div className="my-8 aspect-video w-full bg-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
               <video src="/video/_talkv_wttxXBwObf_L6xiEFfKCt9B7MsDl5NMVk_talkv_high.mov" controls className="w-full h-full object-cover" />
            </div>

             <LookbookGrid images={[
              { src: "/image/게임기획지원사업네트워킹_1.png", alt: "네트워킹", span: "full" }
            ]} />
          </div>

        </div>
      </div>
    )
  },
  {
    title: "▪️ 그외 성과",
    images: [
      "/image/1 1.png",
      "/image/타이페이게임쇼_2.png",
      "/image/비트서밋_부스.jpg",
      "/image/2 1.png",
      "/image/3 1.png"
    ],
    modalContent: (
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
    )
  }
];

export function ArchiveSection() {
  const [activeCategory, setActiveCategory] = useState<ArchiveCategory | null>(null);

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
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col"
            onClick={() => setActiveCategory(category)}
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
      <Modal isOpen={!!activeCategory} onClose={() => setActiveCategory(null)} theme="dark" className="max-w-6xl">
        {activeCategory?.modalContent}
      </Modal>
      </div>
    </section>
  );
}
