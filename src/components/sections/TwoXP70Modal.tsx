import { useState } from "react";
import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";
import { SmartIframe } from "@/components/ui/SmartIframe";

export const twoXP70GalleryImages: GalleryImageDef[] = [
  // Section C: SBS 드라마 세트 작업
  { src: "/image/20.jpg", alt: "루루공주 세트 작업 1" },
  { src: "/image/DSCN2908.jpg", alt: "루루공주 세트 작업 2" },
  // Section D: 그외 그래피티 아카이브
  { src: "/image/DSCN1769.jpg", alt: "그래피티 아카이브 1" },
  { src: "/image/ww.jpg", alt: "그래피티 아카이브 2" },
  { src: "/image/1.jpg", alt: "그래피티 아카이브 3" },
  { src: "/image/_MG_2851.jpg", alt: "그래피티 아카이브 4" },
  { src: "/image/IMG_7845.jpg", alt: "그래피티 아카이브 5" },
  { src: "/image/graffiti_yoons.jpg", alt: "그래피티 아카이브 6" },
  { src: "/image/graffiti_archive/graffiti_0.png", alt: "그래피티 추가 0" },
  { src: "/image/graffiti_archive/graffiti_5.png", alt: "그래피티 추가 5" },
  { src: "/image/graffiti_archive/graffiti_6.png", alt: "그래피티 추가 6" },
  { src: "/image/graffiti_archive/graffiti_7.png", alt: "그래피티 추가 7" },
  { src: "/image/graffiti_archive/graffiti_8.JPG", alt: "그래피티 추가 8" },
  { src: "/image/graffiti_archive/graffiti_9.png", alt: "그래피티 추가 9" },
  { src: "/image/graffiti_archive/graffiti_10.jpg", alt: "그래피티 추가 10" },
  { src: "/image/graffiti_archive/graffiti_11.jpg", alt: "그래피티 추가 11" },
  { src: "/image/graffiti_archive/graffiti_12.jpg", alt: "그래피티 추가 12" },
];

export function TwoXP70ModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto w-full">
        {/* Section A: 2XP70 Crew 소개 */}
        <div 
          className="relative flex flex-col items-center justify-center text-center w-full py-28 mb-16 overflow-hidden"
          style={{ backgroundImage: `url('/image/graffiti_spray_1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 font-sans text-white uppercase tracking-tighter drop-shadow-xl w-full">
              2XP70 Crew
            </h2>
            <p className="text-gray-200 font-medium text-lg lg:text-xl tracking-widest drop-shadow-md">
              2003.12 ~ 2005.12 (2년 1개월)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-3xl font-black font-sans text-white tracking-tighter">
              2XP70
            </h3>
            <ul className="list-none p-0 space-y-4 font-medium text-gray-300 text-base border-l-2 border-white/20 pl-6 mt-4">
              <li className="m-0">
                <strong className="text-white font-semibold flex items-center gap-2">주요 실적 :</strong>
                <span className="block mt-1 leading-relaxed">
                  m.net 슈퍼바이브파티<br />
                  SBS 드라마 루루공주 세트 그래피티<br />
                  m.net 크레이지트럭 세트 그래피티<br />
                  MBC 라디오 인터뷰 등
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-16">

            {/* Section B: 슈퍼바이브파티 */}
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl font-black m-0 font-sans text-white underline decoration-white/20 underline-offset-8">
                슈퍼바이브파티 - m.net 방송
              </h4>
              <p className="font-medium text-gray-300 m-0">
                <span className="font-bold text-white">m.net 슈퍼바이브파티</span> 방송 파티피플 게스트 초대
              </p>
              <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mt-4">
                <SmartIframe
                  src="https://www.youtube.com/embed/zN2_CHdLBIw?rel=0"
                  title="슈퍼바이브파티"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Section C: 루루공주 - SBS 드라마 */}
            <div className="flex flex-col gap-6 border-t border-white/10 pt-16">
              <h4 className="text-3xl font-black m-0 font-sans text-white underline decoration-white/20 underline-offset-8">
                루루공주 - SBS 드라마 세트 작업
              </h4>
              <p className="font-medium text-gray-300 m-0">
                SBS 드라마 <span className="font-bold text-white">루루공주</span> - 제주도 세트장 그래피티
              </p>
              <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mt-4 mb-6">
                <SmartIframe
                  src="https://www.youtube.com/embed/G-CL43OYOOE?rel=0"
                  title="루루공주 현장"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[0, 1].map((idx) => (
                  <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={twoXP70GalleryImages[idx].src}
                      alt={twoXP70GalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-full object-cover m-0 transition-all duration-500"
                      className="block w-full h-full"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section D: 그외 그래피티 아카이브 */}
            <div className="flex flex-col gap-8 border-t border-white/10 pt-16">
              <h4 className="text-3xl font-black m-0 font-sans text-white underline decoration-white/20 underline-offset-8">
                그외 그래피티 아카이브
              </h4>

              {/* 상단 파노라마 이미지 시리즈 (7: 배트맨, 6: 할머니/BRIT) */}
              <div className="flex flex-col gap-6">
                {[7, 6].map((idx) => (
                  <div key={idx} className="w-full rounded-2xl overflow-hidden bg-black/20 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={twoXP70GalleryImages[idx].src}
                      alt={twoXP70GalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-auto object-cover m-0 block"
                      className="block w-full h-auto"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>

              {/* 일반 비율 이미지 핀터레스트 그리드 */}
              <div className="columns-2 lg:columns-3 gap-6 space-y-6">
                {[2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((idx) => (
                  <div key={idx} className="break-inside-avoid w-full rounded-2xl overflow-hidden bg-black/20 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={twoXP70GalleryImages[idx].src}
                      alt={twoXP70GalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-auto object-cover m-0 block"
                      className="block w-full h-auto"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <GalleryLightbox
        images={twoXP70GalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </>
  );
}
