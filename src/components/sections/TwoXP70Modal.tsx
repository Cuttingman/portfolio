import { useState } from "react";
import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";

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
  { src: "/image/윤스.jpg", alt: "그래피티 아카이브 6" },
];

export function TwoXP70ModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
        {/* Section A: 2XP70 Crew 소개 */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans text-white uppercase tracking-tighter">
            2XP70 Crew
          </h2>
          <p className="text-gray-400 font-medium text-lg tracking-widest">
            활동 기간 : 2003.12 ~ 2005.12 (2년 1개월)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
            <h3 className="text-3xl font-black font-sans text-white tracking-tighter">
              2XP70
            </h3>
            <ul className="list-none p-0 space-y-4 font-medium text-gray-300 text-base border-l-2 border-white/20 pl-6 mt-4">
              <li className="m-0">
                <strong className="text-white font-semibold flex items-center gap-2">주요 실적 :</strong>
                <span className="block mt-1 leading-relaxed">
                  m.net 슈퍼바이브파티<br/>
                  SBS 드라마 루루공주 세트 그래피티<br/>
                  m.net 크레이지트럭 세트 그래피티<br/>
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
                m.net 슈퍼바이브파티 방송 로고 타이틀 영상 제작 및 그래피티 아트 디렉팅
              </p>
              <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mt-4">
                <iframe
                  src="https://www.youtube.com/embed/zN2_CHdLBIw"
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
                SBS 드라마 루루공주의 현장 세트장 그래피티
              </p>
              <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 mt-4 mb-6">
                <iframe
                  src="https://www.youtube.com/embed/G-CL43OYOOE"
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
                       imgClassName="w-full h-full object-cover m-0 grayscale hover:grayscale-0 transition-all duration-500"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[2, 3, 4, 5, 6, 7].map((idx) => (
                  <div key={idx} className={`rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all ${idx === 2 || idx === 3 ? 'aspect-[4/3] md:col-span-2 lg:col-span-1' : 'aspect-square'}`}>
                     <GalleryImageTrigger
                       src={twoXP70GalleryImages[idx].src}
                       alt={twoXP70GalleryImages[idx].alt}
                       index={idx}
                       imgClassName="w-full h-full object-cover m-0 grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                       className="block w-full h-full"
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
