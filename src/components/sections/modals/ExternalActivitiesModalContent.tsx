"use client";

import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { useState } from "react";

export const activitiesGalleryImages: GalleryImageDef[] = [
  // Item 1: 상생협력 IR 데모데이 (1 image) 0
  { src: "/image/대중소상생협력.jpg", alt: "대중소 상생협력 IR 데모데이" },
  
  // Item 2: 인크래프트 IR 데모데이 (3 images) 1-3
  { src: "/image/인디크래프트_IR_데모데이_1.jpg", alt: "인디크래프트 IR 피칭" },
  { src: "/image/인디크래프트_IR_데모데이_2.jpg", alt: "인디크래프트 IR 참석" },
  { src: "/image/인디크래프트_IR_데모데이_3.jpg", alt: "인디크래프트 IR 단체사진" },
  
  // Item 3: 대구콘텐츠코리아랩 세미나 (2 images) 4-5
  { src: "/image/대구특강_1.png", alt: "콘텐츠 창업 세미나 특강 1" },
  { src: "/image/대구특강_2.png", alt: "콘텐츠 창업 세미나 특강 2" },
  
  // Item 4: 게임기획 지원사업 강연 (1 image) 6
  { src: "/image/게임기획지원사업네트워킹_1.png", alt: "게임제작기 강연" },
  
  // Item 5: 애니메이션고 멘토 (2 images) 7-8
  { src: "/image/애니메이션고등학교특강_1.png", alt: "애니메이션고 창업 멘토 1" },
  { src: "/image/애니메이션고등학교특강_2.png", alt: "애니메이션고 창업 멘토 2" },
  
  // Item 6: Xsolla IR (1 image) 9
  { src: "/image/f787e1e8-7952-4db0-b4ef-a43f7b94a98e.png", alt: "[엑솔라] 지스타 펀딩 이벤트 IR 프레젠테이션" },
  
  // Item 7: PlayX4 IR (1 image) 10
  { src: "/image/IMG_8230.png", alt: "플레이x4 IR 데모데이 참가" },

  // Item 11: Typography Mentor (2 images) 11-12
  { src: "/image/타이포강의3.jpg", alt: "타이포그래피 교육 현장 1" },
  { src: "/image/타이포강의2.jpg", alt: "타이포그래피 교육 현장 2" },

  // Item 12: Tumblbug Prototype (1 image) 13
  { src: "/image/굿즈모음(1500px).png", alt: "피그로맨스 완구 텀블벅 아이템" },
];

export function ExternalActivitiesModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 pb-4 font-sans border-b border-gray-700 text-white">
        대외 활동 (External Activities)
      </h2>

      <div className="space-y-24">
        
        {/* Item 1: 대중소 상생협력 IR डे모데이 */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">대중소 상생협력 IR 데모데이 - 3위 수상</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">경기콘텐츠진흥원</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.11</span>
            </div>
          </div>
          <div className="w-full">
            <GalleryImageTrigger 
              src={activitiesGalleryImages[0].src} 
              alt={activitiesGalleryImages[0].alt} 
              index={0} 
              onClick={setGalleryIndex} 
              className="aspect-video md:aspect-[21/9] block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
          </div>
        </div>

        {/* Item 2: 인크래프트 IR 데모데이 */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">인크래프트 IR 데모데이 - 우수상 수상</h3>
             <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국모바일게임협회</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.11</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GalleryImageTrigger 
              src={activitiesGalleryImages[1].src} 
              alt={activitiesGalleryImages[1].alt} 
              index={1} 
              onClick={setGalleryIndex} 
              className="aspect-square md:aspect-auto md:h-80 block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
            <GalleryImageTrigger 
              src={activitiesGalleryImages[2].src} 
              alt={activitiesGalleryImages[2].alt} 
              index={2} 
              onClick={setGalleryIndex} 
              className="aspect-square md:aspect-auto md:h-80 block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
             <GalleryImageTrigger 
              src={activitiesGalleryImages[3].src} 
              alt={activitiesGalleryImages[3].alt} 
              index={3} 
              onClick={setGalleryIndex} 
              className="aspect-square md:aspect-auto md:h-80 block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
          </div>
        </div>

        {/* Item 3: 슈퍼세미나 시즌2 */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">슈퍼세미나 시즌2 - 콘텐츠 창업 세미나 특강</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">대구콘텐츠코리아랩</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.10</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <GalleryImageTrigger 
              src={activitiesGalleryImages[4].src} 
              alt={activitiesGalleryImages[4].alt} 
              index={4} 
              onClick={setGalleryIndex} 
              className="aspect-[4/5] block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
            <GalleryImageTrigger 
              src={activitiesGalleryImages[5].src} 
              alt={activitiesGalleryImages[5].alt} 
              index={5} 
              onClick={setGalleryIndex} 
              className="aspect-[4/5] block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
          </div>
        </div>

        {/* Item 4: 게임기획 지원 사업 강연 */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">'게임기획 지원 사업' 상반기 네트워킹 - 게임제작기 강연</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.06</span>
            </div>
          </div>
          <div className="w-full">
            <GalleryImageTrigger 
              src={activitiesGalleryImages[6].src} 
              alt={activitiesGalleryImages[6].alt} 
              index={6} 
              onClick={setGalleryIndex} 
              className="aspect-video md:aspect-[21/9] block w-full" 
              imgClassName="w-full h-full object-cover object-top rounded-3xl" 
            />
          </div>
        </div>

        {/* Item 5: 애니메이션고 창업 멘토 */}
        <div className="pt-16 border-t border-gray-800 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-3 font-sans text-white">애니메이션고등학교 게임 회사 창업 멘토</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국애니메이션 고등학교</span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2024.05</span>
            </div>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300 font-medium text-lg max-w-3xl">
              <li>게임 회사 창업 과정 및 실무 환경 멘토링</li>
              <li>학생 포트폴리오 리뷰 및 피드백 제공</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
            <GalleryImageTrigger 
              src={activitiesGalleryImages[7].src} 
              alt={activitiesGalleryImages[7].alt} 
              index={7} 
              onClick={setGalleryIndex} 
              className="aspect-video block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
            <GalleryImageTrigger 
              src={activitiesGalleryImages[8].src} 
              alt={activitiesGalleryImages[8].alt} 
              index={8} 
              onClick={setGalleryIndex} 
              className="aspect-video block w-full" 
              imgClassName="w-full h-full object-cover rounded-3xl" 
            />
          </div>
        </div>

        {/* Item 6 & 7: 엑솔라 지스타 IR & 게임레벨업쇼케이스 강연 */}
        <div className="pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-8 font-sans text-white">주요 글로벌 초청 강연 & 피칭</h3>
          
          <div className="space-y-12">
            
            {/* 6. Xsolla */}
            <div className="flex flex-col gap-8 items-start bg-[#111] p-8 rounded-3xl border border-white/5">
              <div className="w-full">
                <h4 className="text-xl font-bold text-gray-100 mb-2">[엑솔라] 지스타 펀딩 이벤트 IR 프레젠테이션</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="text-gray-400 font-medium">엑솔라</span>
                   <span className="text-gray-500 text-sm">2023.11</span>
                </div>
                <p className="text-gray-400 text-base mb-6">글로벌 결제 솔루션 엑솔라(Xsolla) 주최 지스타 펀딩 이벤트 데모 피칭</p>
                <GalleryImageTrigger 
                  src={activitiesGalleryImages[9].src} 
                  alt={activitiesGalleryImages[9].alt} 
                  index={9} 
                  onClick={setGalleryIndex} 
                  className="aspect-video w-full block" 
                  imgClassName="w-full h-full object-cover rounded-2xl" 
                />
              </div>
            </div>

            {/* 7. GLS Networking */}
            <div className="flex flex-col gap-8 items-start bg-[#111] p-8 rounded-3xl border border-white/5">
              <div className="w-full">
                <h4 className="text-xl font-bold text-gray-100 mb-2">게임레벨업쇼케이스 네트워킹 - 창업 성공 사례 강연</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="text-gray-400 font-medium">한국콘텐츠진흥원</span>
                   <span className="text-gray-500 text-sm">2023.07</span>
                </div>
                <p className="text-gray-400 text-base mb-6">게임레벨업쇼케이스 데모데이 참석자 대상 창업 전략 강연</p>
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm">
                  <iframe src="https://www.youtube.com/embed/DKkAeGSI-To" title="창업 성공 사례 강연" className="w-full h-full border-0" allowFullScreen />
                </div>
              </div>
            </div>
            
             {/* 8. PlayX4 */}
            <div className="flex flex-col gap-8 items-start bg-[#111] p-8 rounded-3xl border border-white/5">
              <div className="w-full">
                <h4 className="text-xl font-bold text-gray-100 mb-2">플레이x4 IR 데모데이 참가</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="text-gray-400 font-medium">플레이x4</span>
                   <span className="text-gray-500 text-sm">2023.05</span>
                </div>
                <p className="text-gray-400 text-base mb-6">플레이엑스포 공식 무대 피그로맨스 IR 피칭 진행</p>
                <GalleryImageTrigger 
                  src={activitiesGalleryImages[10].src} 
                  alt={activitiesGalleryImages[10].alt} 
                  index={10} 
                  onClick={setGalleryIndex} 
                  className="aspect-video w-full block" 
                  imgClassName="w-full h-full object-cover rounded-2xl" 
                />
              </div>
            </div>
            
          </div>
        </div>

        {/* Items 9-10: 문체부 회의 & 애니메이션고 2022 */}
        <div className="pt-16 border-t border-gray-800">
           <div className="space-y-12">
            
            {/* 9. 제3차 콘텐츠 수출대책회의 */}
             <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-sans text-white">문체부 1차관 주재 ‘제3차 콘텐츠 수출대책회의’ 인디게임사 대표 참가</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">문화체육관광부</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.03</span>
                  </div>
                </div>
                
                <a 
                  href="https://www.dt.co.kr/article/11501553" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">문체부, 제3차 콘텐츠 수출대책회의 개최...K-게임 중동 진출 마중물</h4>
                      <p className="text-gray-400 text-sm">디지털타임스 보도 기사 확인하기 ↗</p>
                    </div>
                  </div>
                </a>
             </div>

             {/* 10. 애니메이션 제작 강의 (2022) */}
             <div className="flex flex-col gap-6 pt-12 border-t border-gray-800">
                 <div>
                  <h3 className="text-2xl font-bold mb-3 font-sans text-white">애니메이션고등학교 애니메이션 제작 강의</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국애니메이션 고등학교</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2022.06</span>
                  </div>
                </div>
                <div className="aspect-video w-full max-w-4xl rounded-3xl overflow-hidden shadow-sm">
                   <iframe src="https://www.youtube.com/embed/LFMcNVRDK8g" title="애니메이션 제작 강의" className="w-full h-full border-0" allowFullScreen />
                </div>
             </div>

             {/* 11. 창의인재동반사업 타이포그래피 멘토 */}
             <div className="flex flex-col gap-6 pt-12 border-t border-gray-800">
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-sans text-white">창의인재동반사업 ‘그림책을 JOB 하다’ 타이포그래피 멘토</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2020.08</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                  <GalleryImageTrigger 
                    src={activitiesGalleryImages[11].src} 
                    alt={activitiesGalleryImages[11].alt} 
                    index={11} 
                    onClick={setGalleryIndex} 
                    className="aspect-video w-full block" 
                    imgClassName="w-full h-full object-cover rounded-3xl" 
                  />
                  <GalleryImageTrigger 
                    src={activitiesGalleryImages[12].src} 
                    alt={activitiesGalleryImages[12].alt} 
                    index={12} 
                    onClick={setGalleryIndex} 
                    className="aspect-video w-full block" 
                    imgClassName="w-full h-full object-cover rounded-3xl" 
                  />
                </div>

                <a 
                  href="http://job.dreamingkite.com/news/news_view.php?cate=newsview&no=46" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group max-w-4xl mt-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">타이포그래피 교육</h4>
                      <p className="text-gray-400 text-sm">관련 보도 자료 확인하기 ↗</p>
                    </div>
                  </div>
                </a>
             </div>

             {/* 12. 텀블벅 시제품 제작 */}
             <div className="flex flex-col gap-6 pt-12 border-t border-gray-800">
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-sans text-white">피그로맨스 완구 시제품 제작</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">크라우드펀딩(텀블벅)</span>
                    <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2022.01</span>
                  </div>
                </div>

                <GalleryImageTrigger 
                  src={activitiesGalleryImages[13].src} 
                  alt={activitiesGalleryImages[13].alt} 
                  index={13} 
                  onClick={setGalleryIndex} 
                  className="aspect-video w-full block max-w-4xl" 
                  imgClassName="w-full h-full object-cover rounded-3xl" 
                />
                
                <a 
                  href="https://tumblbug.com/pigromance/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl border border-white/10 bg-[#111] hover:bg-white/5 transition-colors group max-w-4xl mt-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">수퇘지의 사랑이야기 - 피그로맨스</h4>
                      <p className="text-gray-400 text-sm">텀블벅 프로젝트 페이지 방문하기 ↗</p>
                    </div>
                  </div>
                </a>
             </div>

             {/* 13. 게임기획 지원 사업 자문 */}
             <div className="pt-12 border-t border-gray-800">
                <h3 className="text-2xl font-bold mb-3 font-sans text-white">‘게임기획 지원 사업' 자문, 회의 참여</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">한국콘텐츠진흥원</span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2023.12</span>
                </div>
             </div>

             {/* 14. 갤러리사각형 전시장 큐레이터 */}
             <div className="pt-12 border-t border-gray-800 pb-16">
                <h3 className="text-2xl font-bold mb-3 font-sans text-white">갤러리사각형 전시장 - 큐레이터 및 전시 기획</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/10 text-gray-100 rounded-full text-sm font-semibold">갤러리사각형</span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">2013.06</span>
                </div>
             </div>

           </div>
        </div>

      </div>

      <GalleryLightbox 
        images={activitiesGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </div>
  );
}
