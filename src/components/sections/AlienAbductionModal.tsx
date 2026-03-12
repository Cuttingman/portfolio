import { useState } from "react";
import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { SmartIframe } from "@/components/ui/SmartIframe";

export const alienAbductionGalleryImages: GalleryImageDef[] = [
  { src: "/image/pigplant_demo_1.jpg", alt: "피그플랜트 게임 시연 1" },
  { src: "/image/pigplant_demo_2.jpg", alt: "피그플랜트 게임 시연 2" },
  { src: "/image/2018_startup_award.png", alt: "2018 창업발전소 우수상" },
];

export function AlienAbductionModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto w-full">
        {/* Section A: 외계인납치작전 */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans text-white uppercase tracking-tighter">
            외계인납치작전
          </h2>
          <p className="text-gray-400 font-medium text-lg tracking-widest">
            2017.08 ~ 2019.11 (2년 4개월)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-3xl font-black font-sans text-white tracking-tighter">
              외계인납치작전
            </h3>
            <ul className="list-none p-0 space-y-4 font-medium text-gray-300 text-base mt-4 border-l-2 border-white/20 pl-6">
              <li className="m-0">
                <strong className="text-white font-semibold">담당 업무 :</strong>{" "}
                자체 IP 제작, 모바일 게임 제작, AR 그림책 제작
              </li>
              <li className="m-0">
                <strong className="text-white font-semibold">주요 프로젝트 :</strong>{" "}
                피그로맨스 AR 그림책, 피그로맨스 모바일 게임
              </li>
            </ul>
            <div className="mt-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <strong className="block text-white font-bold mb-2 text-lg">
                1인 개발 기록
              </strong>
              <p className="m-0 text-sm text-gray-300 leading-relaxed break-keep border-l-2 border-white/20 pl-4 mt-4">
                <strong className="text-white">역할:</strong> 시나리오, 캐릭터 디자인, 리소스 제작, 프로그래밍(Unity, C#)
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">

            {/* Section B: 피그플랜트 AR 그림책 */}
            <h4 className="text-3xl font-black mt-0 mb-8 font-sans text-white underline decoration-white/20 underline-offset-8">
              피그플랜트 AR 그림책
            </h4>
            <div className="flex flex-col gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mb-12">
              <ul className="list-none p-0 space-y-3 m-0 font-medium text-gray-300 text-sm">
                <li><strong className="text-white">게임 장르 :</strong> AR 그림책</li>
                <li><strong className="text-white">플랫폼 :</strong> Play Store, App Store</li>
                <li><strong className="text-white">출시일 :</strong> 미출시 (2019년 제작, 프로젝트 종료)</li>
                <li><strong className="text-white">기획의도 :</strong> AR을 통해 즐길 수 있는 게임형 그림책 제작</li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-6">
                <p className="font-medium leading-relaxed text-gray-300 m-0 text-sm">
                  피그플랜트는 AR 게임으로 식물들을 키워서 식량을 얻고 돼지들에게 식량을 제공하는 게임입니다.<br />
                  식물을 성장시키기 위해서는 햇빛과 물이 필요하며, 햇빛과 물은 유저가 위치한 장소의 실제 날씨를 받아와서 게임속에서 구현됩니다.<br />
                  실제 날씨를 게임에 반영하므로 날씨가 변함에 따라 게임속 식물들을 관리해야 합니다.
                </p>
              </div>
              <div className="mt-4 p-4 bg-[#FFD700]/10 rounded-2xl border border-[#FFD700]/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="text-4xl drop-shadow-lg">🏆</div>
                <div className="flex flex-col">
                  <strong className="text-[#FFD700] text-sm tracking-widest">2018 창업발전소 콘텐츠 스타트업 리그 공모전</strong>
                  <span className="text-white font-bold text-lg">우수상 수상 (한국콘텐츠진흥원)</span>
                </div>
              </div>

              {/* Grid Layout for Section B Visuals */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl transition-shadow">
                  <GalleryImageTrigger
                    src="/image/pigplant_demo_1.jpg"
                    alt="피그플랜트 게임 시연 1"
                    index={0}
                    imgClassName="w-full h-full object-cover m-0"
                    className="block w-full h-full"
                    onClick={setGalleryIndex}
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl transition-shadow">
                  <GalleryImageTrigger
                    src="/image/pigplant_demo_2.jpg"
                    alt="피그플랜트 게임 시연 2"
                    index={1}
                    imgClassName="w-full h-full object-cover m-0"
                    className="block w-full h-full"
                    onClick={setGalleryIndex}
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/90 border border-white/10 hover:shadow-xl transition-shadow">
                  <GalleryImageTrigger
                    src="/image/2018_startup_award.png"
                    alt="2018 창업발전소 우수상"
                    index={2}
                    imgClassName="w-full h-full object-cover p-2 m-0"
                    className="block w-full h-full"
                    onClick={setGalleryIndex}
                  />
                </div>
              </div>
            </div>

            {/* Section C: 피그로맨스 프로토타입 */}
            <h4 className="text-3xl font-black mt-12 mb-8 font-sans text-white underline decoration-white/20 underline-offset-8">
              피그로맨스 <span className="font-light">프로토타입</span>
            </h4>
            <div className="flex flex-col gap-8 mb-16">
              <div className="aspect-[16/9] w-full bg-white/5 rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                <SmartIframe
                  src="https://www.youtube.com/embed/SphFhJLhOuE?rel=0"
                  title="피그로맨스 초기버전-모바일"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <GalleryLightbox
        images={alienAbductionGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </>
  );
}
