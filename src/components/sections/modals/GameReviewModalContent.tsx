"use client";

import { LookbookGrid } from "@/components/ui/LookbookGrid";

export function GameReviewModalContent() {
    return (
        <div className="prose prose-lg dark:prose-invert max-w-7xl mx-auto w-full pb-24">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 pb-4 font-sans border-b border-gray-700 text-white">
                게임 리뷰 (Game Review)
            </h2>

            <div className="space-y-16">
                <div>
                    <h3 className="text-2xl font-bold mb-6 font-sans text-white">피그로맨스 퍼즐 플레이어 경험</h3>
                    <p className="text-gray-400 leading-relaxed mb-12">
                        게임 리뷰 및 유저 플레이 피드백 화면 아카이브. 피그로맨스의 잔혹동화 분위기와 창의적인 퍼즐 요소에 대한 기록을 모았습니다.
                    </p>

                    <LookbookGrid images={[
                        { src: "/image/01-04.png", alt: "게임 리뷰 1", span: "full" },
                        { src: "/image/05-08.png", alt: "게임 리뷰 2", span: "full" },
                        { src: "/image/09-12.png", alt: "게임 리뷰 3", span: "full" }
                    ]} />
                </div>
            </div>
        </div>
    );
}
