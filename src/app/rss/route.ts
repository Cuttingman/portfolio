import { NextResponse } from 'next/server';

const historyData = [
  { date: "2025", title: "MMORPG ‘판타테일' 웹이벤트 제작 [티니스튜디오(주)]" },
  { date: "2024.12", title: "인디플 어워즈 - 우수상 수상 - 피그로맨스 [한국인디게임협회]" },
  { date: "2024.12", title: "대한민국게임대상 인디게임 부문 노미네이트 - 피그로맨스 [한국게임산업협회]" },
  { date: "2024.11", title: "대중소 상생협력 IR 데모데이 - 3위 수상 [경기콘텐츠진흥원]" },
  { date: "2024.11", title: "인크래프트 IR 데모데이 - 우수상 수상 [한국모바일게임협회]" },
  { date: "2024.10", title: "닌텐도스위치 퍼블리싱 계약 체결 - 피그로맨스 [neos]" },
  { date: "2024.10", title: "슈퍼세미나 시즌2 - 콘텐츠 창업 세미나 특강 [대구콘텐츠코리아랩]" },
  { date: "2024.07", title: "인디크래프트 2024 - 우수상 수상 - 피그로맨스 [한국모바일게임협회]" },
  { date: "2024.06", title: "게임기획 지원 사업 상반기 네트워킹 - 게임제작기 강연 [한국콘텐츠진흥원]" },
  { date: "2024.05", title: "창업 멘토링 강의 [한국애니메이션 고등학교]" },
  { date: "2024.04", title: "주요 6개국 상표권 / 저작권 출원 - 피그로맨스 [외계인납치작전]" },
  { date: "2024.01", title: "Microsoft Xbox와 파트너쉽 계약 체결 [Microsoft Xbox]" },
  { date: "2023.12", title: "MWU 유니티 코리아 BEST INDIE 수상 -피그로맨스 [유니티 코리아]" },
  { date: "2023.12", title: "게임기획 지원 사업 자문 회의 참여 [한국콘텐츠진흥원]" },
  { date: "2023.09", title: "K-콘텐츠 해외 지식재산 우수사례 선정 - 피그로맨스 [한국저작권위원회]" },
  { date: "2023.09", title: "도쿄게임쇼 한국공동관 참가 선정 <일본> [한국콘텐츠진흥원]" },
  { date: "2023.08", title: "BIC 2023 커넥트픽 수상 -피그로맨스 [BIC]" },
  { date: "2023.08", title: "게임스컴 한국공동관 참가 선정 <독일> [한국콘텐츠진흥원]" },
  { date: "2023.07", title: "K-콘텐츠 엑스포 in London 참가 선정 <영국> [한국콘텐츠진흥원]" },
  { date: "2023.07", title: "게임레벨업쇼케이스 네트워킹 - 창업 성공 사례 강연 [한국콘텐츠진흥원]" },
  { date: "2023.06", title: "창업 강의 [한국애니메이션 고등학교]" },
  { date: "2023.05", title: "플랫폼 변환 지원사업 선정 [경기콘텐츠진흥원]" },
  { date: "2023.05", title: "K-콘텐츠 해외 지식재산 권리화 지원사업 선정 [한국저작권위원회]" },
  { date: "2023.03", title: "피그로맨스 글로벌 퍼블리싱 계약 체결 [그라비티]" },
  { date: "2023.03", title: "제3차 콘텐츠 수출대책회의 참가 [문화체육관광부]" },
  { date: "2022.12", title: "게임레벨업쇼케이스(GLS) - 1위 수상 및 99인 이용자 평가 1위 - 피그로맨스 [한국콘텐츠진흥원]" },
  { date: "2022.11", title: "지스타 인디어워즈 2022 - 2위 수상 - 피그로맨스 [한국게임산업협회]" },
  { date: "2022.05", title: "플레이x4 대표게임사 선정 - 도지사, 국회의원 부스 방문 [한국인디게임협회]" },
  { date: "2022.04", title: "초기게임개발사 성장지원(법인) 선정 [한국콘텐츠진흥원]" },
  { date: "2022.02", title: "리소스뱅크 선정 [한국인디게임협회]" },
  { date: "2022.01", title: "피그로맨스 관련 굿즈 제작 - 조립식 피규어, 달력, 에코백, USB, 열쇠고리 [외계인납치작전]" },
  { date: "2022", title: "벤처기업인증 - 혁신성장" },
  { date: "2020.08", title: "GIGDC 2020 일반부 - 은상 수상 - 피그로맨스 [한국게임개발자협회]" },
  { date: "2020.08", title: "창의인재동반사업 ‘그림책을 JOB 하다’ - 타이포그래피 멘토 [한국콘텐츠진흥원]" },
  { date: "2019.01", title: "(주)외계인납치작전 법인 설립" },
  { date: "2018.08", title: "콘텐츠스타트업리그 - 우수상 수상  - 피그플랜트 AR 그림책 [한국콘텐츠진흥원]" },
  { date: "2018.05", title: "창업발전소 선정 [한국콘텐츠진흥원]" },
  { date: "2018", title: "어린이창작센터 창업 [어린이창작센터]" },
  { date: "2017.11", title: "스마트2030 창업 교육 수료 [경기콘텐츠진흥원]" },
  { date: "2017.08", title: "외계인납치작전 창업 [외계인납치작전]" },
  { date: "2017.04", title: "청년창업 스마트2030 선정 [경기콘텐츠진흥원]" },
  { date: "2017.03", title: "유니티 고급 개발자 과정 교육 수료 [유니티러닝센터]" },
  { date: "2015", title: "(주)애니웨이 근무(중국 디자인 플랫폼 사이트 개설) [(주)애니웨이]" },
  { date: "2014", title: "동대문 개관전시 '울름조형대학' 전시장 전시그래픽 [(주)얼트씨]" },
  { date: "2013.07", title: "프랜차이즈 브랜드 디자인 총괄 [김밥왕]" },
  { date: "2013.06", title: "디자인 스튜디오 토이랩 창업" },
  { date: "2012.11", title: "큐레이터 - 전시 그래픽 및 기획 [갤러리사각형]" },
  { date: "2010.12", title: "유아미술교육 커리큘럼 및 체험학습 상품 개발 판매 [발해공예]" },
  { date: "2008", title: "계원예술대학교 입학 - 그래픽디자인 교육 수료 [계원예술대학교]" },
  { date: "2005", title: "mnet 크레이지 트럭 무대 그래피티 [2XP70 Crew]" },
  { date: "2005", title: "mnet 슈퍼바이브파티 파티 피플 초대 [2XP70 Crew]" },
  { date: "2005", title: "홍대 프린지 페스티벌 그래피티 [2XP70 Crew]" },
  { date: "2005", title: "MBC 라디오 인터뷰 [2XP70 Crew]" },
  { date: "2005", title: "삼성 신입사원 OT 그래피티 퍼포먼스 [2XP70 Crew]" },
  { date: "2005", title: "기아 뉴프라이드 신차 홍보 그래피티 퍼포먼스 [2XP70 Crew]" },
  { date: "2005", title: "르노삼성 SM3 신차 홍보 그래피티 퍼포먼스 [2XP70 Crew]" },
  { date: "2005", title: "리바이스 페스티벌 그래피티 [2XP70 Crew]" },
  { date: "2004", title: "고려대학교 축제 무대 그래피티 [2XP70 Crew]" },
  { date: "2001", title: "애니메이션 제작 [공주영상정보대]" },
];

export async function GET() {
  const siteUrl = "https://choiyongchan.com";
  
  const rssItems = historyData.map((item) => {
    // Parse date for pubDate
    const dateParts = item.date.split('.');
    let pubDate;
    if (dateParts.length === 2) {
      pubDate = new Date(`${dateParts[0]}-${dateParts[1]}-01`).toUTCString();
    } else {
      pubDate = new Date(`${dateParts[0]}-01-01`).toUTCString();
    }

    return `
      <item>
        <title><![CDATA[${item.title}]]></title>
        <link>${siteUrl}/#about</link>
        <description><![CDATA[${item.date} - ${item.title}]]></description>
        <pubDate>${pubDate}</pubDate>
        <guid isPermaLink="false">${siteUrl}/#about-${Buffer.from(item.title).toString('base64').substring(0, 15)}</guid>
      </item>
    `;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>최용찬의 포트폴리오</title>
    <link>${siteUrl}</link>
    <description>최용찬의 최신 실적과 프로젝트 정보</description>
    <language>ko</language>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
