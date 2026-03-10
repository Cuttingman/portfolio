import { useState } from "react";
import { GalleryLightbox, GalleryImageTrigger, GalleryImageDef } from "@/components/ui/GalleryLightbox";

export const toyLabGalleryImages: GalleryImageDef[] = [
  // Storyboards
  { src: "/image/01-04.png", alt: "칸타타 스토리보드 01-04" },
  { src: "/image/05-08.png", alt: "칸타타 스토리보드 05-08" },
  { src: "/image/09-12.png", alt: "칸타타 스토리보드 09-12" },
  { src: "/image/13-16.png", alt: "칸타타 스토리보드 13-16" },
  { src: "/image/17-20.png", alt: "칸타타 스토리보드 17-20" },
  { src: "/image/21-24.png", alt: "칸타타 스토리보드 21-24" },
  // Original Art
  { src: "/image/1.png", alt: "원화 (수채화 일러스트) 1" },
  { src: "/image/2.png", alt: "원화 (수채화 일러스트) 2" },
  { src: "/image/3.png", alt: "원화 (수채화 일러스트) 3" },
  { src: "/image/4.png", alt: "원화 (수채화 일러스트) 4" },
  { src: "/image/5.png", alt: "원화 (수채화 일러스트) 5" },
  { src: "/image/6.png", alt: "원화 (수채화 일러스트) 6" },
  // Posters
  { src: "/image/gimbapking_poster_1.jpg", alt: "김밥왕 포스터 1" },
  { src: "/image/gimbapking_poster_2.jpg", alt: "김밥왕 포스터 2" },
  { src: "/image/gimbapking_poster_3.jpg", alt: "김밥왕 포스터 3" },
  // Brochures
  { src: "/image/asset_9e85a427.png", alt: "김밥왕 브로슈어 1" },
  { src: "/image/asset_e02aa1e4.png", alt: "김밥왕 브로슈어 2" },
  { src: "/image/asset_0ede21c9.png", alt: "김밥왕 브로슈어 3" },
  { src: "/image/asset_7344d1f8.png", alt: "김밥왕 브로슈어 4" },
  { src: "/image/asset_81ec92eb.png", alt: "김밥왕 브로슈어 5" },
  { src: "/image/asset_f68c6c52.png", alt: "김밥왕 브로슈어 6" },
];

export function ToyLabModalContent() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  return (
    <>
      <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full">
        {/* Section A: 토이랩 회사 소개 */}
        <div className="flex flex-col items-center justify-center text-center w-full mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans text-white uppercase tracking-tighter">
            토이랩
          </h2>
          <p className="text-gray-400 font-medium text-lg tracking-widest">
            재직 기간 : 2013.06 ~ 2017.08 (4년 2개월)
          </p>
        </div>

        <div className="flex flex-col gap-24 mb-24">
          <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-3xl border border-white/10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold font-sans text-white mb-6">담당 업무 & 주요 프로젝트</h3>
            <p className="font-medium text-gray-300 text-base leading-relaxed break-keep max-w-3xl">
              외주 그래픽디자인 실무 및 스튜디오 경영을 일임했습니다.<br />
              주요 실적 파일로는 동대문 DDP 개관전시 작업, 칸타타 티저 영상 제작, 그리고 김밥왕 프랜차이즈 브랜드 디자인 등이 있습니다.
            </p>
          </div>

          {/* Section B: 칸타타(Cantata) & 시각화 작업 */}
          <div className="flex flex-col gap-12">
            <h4 className="text-3xl font-black mt-0 mb-4 font-sans text-white underline decoration-white/20 underline-offset-8">
              칸타타 (KANTATA)
            </h4>

            {/* Cantata Teaser Video */}
            <div className="aspect-video w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
              <iframe
                src="https://www.youtube.com/embed/qhIjIPw4r1I"
                title="칸타타 티저 영상"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>

            {/* Cantata Storyboards */}
            <div className="flex flex-col gap-6 mt-8">
              <h5 className="text-xl font-bold text-white border-l-4 border-white pl-4">스토리보드</h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={toyLabGalleryImages[idx].src}
                      alt={toyLabGalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-full object-cover m-0"
                      className="block w-full h-full"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Original Art */}
            <div className="flex flex-col gap-6 mt-8">
              <h5 className="text-xl font-bold text-white border-l-4 border-white pl-4">원화 (수채화 일러스트)</h5>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[6, 7, 8, 9, 10, 11].map((idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={toyLabGalleryImages[idx].src}
                      alt={toyLabGalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-full object-cover m-0"
                      className="block w-full h-full"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section C: 프랜차이즈 브랜드 디자인 (김밥왕) */}
          <div className="flex flex-col gap-12 mt-12">
            <h4 className="text-3xl font-black mt-0 mb-4 font-sans text-white underline decoration-white/20 underline-offset-8">
              프랜차이즈 브랜드 디자인 (김밥왕)
            </h4>

            {/* Posters */}
            <div className="flex flex-col gap-6">
              <h5 className="text-xl font-bold text-white border-l-4 border-white pl-4">포스터 디자인</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[12, 13, 14].map((idx) => (
                  <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={toyLabGalleryImages[idx].src}
                      alt={toyLabGalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-full object-cover m-0"
                      className="block w-full h-full"
                      onClick={setGalleryIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Brochures */}
            <div className="flex flex-col gap-6 mt-8">
              <h5 className="text-xl font-bold text-white border-l-4 border-white pl-4">브로슈어 내지 편집</h5>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {[15, 16, 17, 18, 19, 20].map((idx) => (
                  <div key={idx} className="aspect-square rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <GalleryImageTrigger
                      src={toyLabGalleryImages[idx].src}
                      alt={toyLabGalleryImages[idx].alt}
                      index={idx}
                      imgClassName="w-full h-full object-cover m-0"
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
        images={toyLabGalleryImages}
        isOpen={galleryIndex !== null}
        currentIndex={galleryIndex ?? 0}
        onClose={() => setGalleryIndex(null)}
        onChangeIndex={setGalleryIndex}
      />
    </>
  );
}
