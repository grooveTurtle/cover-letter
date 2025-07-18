import { useState } from "react";
import { FaLink } from "react-icons/fa";

interface CareerItem {
  images: string[];
  logo: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  title: string;
  links?: {
    title: string;
    url: string;
  }[];
  period: string;
  roles: string;
  description: string[];
  result?: string[];
  skills?: string[];
}

const InvenLogo = {
  src: "inven2.png",
  width: 14,
  height: 14,
  alt: "인벤 로고",
};

const careers: CareerItem[] = [
  {
    images: [
      "/cover-letter/project/inven/sticker/3.png",
      "/cover-letter/project/inven/sticker/1.png",
      "/cover-letter/project/inven/sticker/2.png",
      "/cover-letter/project/inven/sticker/5.png",
      "/cover-letter/project/inven/sticker/4.png",
    ],
    logo: InvenLogo,
    title: "스티커 댓글 프로젝트",
    period: "2023.11 - 2024.11",
    roles: "풀스택 개발 ｜ 선임 연구원",
    description: [
      "스티커 팩 등록, 구입, 판매 프로세스 개발",
      "스티커 YY어플리케이션 API 백앤드 개발 및 프론트엔드 개발",
      "스티커 등록, 판매, 사용 등 각종 액션에 대한 로깅 시스템 개발",
    ],
    result: ["일 이용량 8천~1만건 달성", "스티커 팩 판매량 일 600~700건"],
    skills: ["PHP", "Svelte", "MYSQL", "Redis"],
    links: [
      {
        title: "아이마트 스티커샵 링크",
        url: "https://imart.inven.co.kr/shop/sticker/",
      },
      {
        title: "실제 댓글 스티커 사용 예시 링크",
        url: "https://www.inven.co.kr/board/webzine/2097/2341027#powerbbsCmt2",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/maple/1.png",
      "/cover-letter/project/inven/maple/2.png",
      "/cover-letter/project/inven/maple/3.png",
    ],
    logo: InvenLogo,
    title: "메이플스토리 인장 리뉴얼 프로젝트",
    period: "2024.03 - 2024.09",
    roles: "PL, 풀스택 개발 ｜ 선임 연구원",
    description: [
      "넥슨 OPEN API 협업 및 프로젝트 문서화, 일정 스케쥴링",
      "넥슨 OPEN API를 활용하여 게임 내 데이터를 유저의 인장 `게임 프로필`에 적용 개발",
      "리뉴얼 인장 관리자 시스템 및 지급 프로세스 개발",
    ],
    result: ["총 인증 횟수 2만명 돌파", "리뉴얼 인장 지급 갯수 4.5만개 돌파"],
    skills: ["PHP", "Svelte", "MYSQL", "Redis"],
    links: [
      {
        title: "메이플스토리 인장 지급 이벤트 페이지",
        url: "https://www.inven.co.kr/event/maple/profile/",
      },
      {
        title: "리뉴얼 인장 장착 예시 링크",
        url: "https://www.inven.co.kr/member/inventory/view_inventory.php?nick=Laravel&isMobile=true&skin_idx=85341237",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/diablo4/1.png",
      "/cover-letter/project/inven/diablo4/2.png",
      "/cover-letter/project/inven/diablo4/3.png",
      "/cover-letter/project/inven/diablo4/4.png",
    ],
    logo: InvenLogo,
    title: "디아블로4 인벤 프로젝트",
    period: "2023.04 - 2023.07",
    roles: "풀스택 개발 ｜ 선임 연구원",
    description: [
      "디아블로 정복자 시뮬레이터 개발",
      "아이템, 힘의전서 DB SPA 기반으로 개발",
      "디아블로 인벤 모바일 리뉴얼 페이지 개발 및 레이아웃 커스터마이징 시스템 개발",
    ],
    result: [
      "디아블로 인벤 페이지 방문 최대 UV 32만 달성",
      "시뮬레이터, DB 페이지 최대 UV 10만 달성",
    ],
    skills: ["PHP", "Svelte", "JQuery", "MYSQL"],
    links: [
      {
        title: "정복자 시뮬레이터 링크",
        url: "https://diablo4.inven.co.kr/db/paragon/86555",
      },
      {
        title: "힘의전서 DB 링크",
        url: "https://diablo4.inven.co.kr/db/aspect",
      },
      {
        title: "디아블로 모바일 리뉴얼 인벤 링크",
        url: "https://m.inven.co.kr/diablo4/",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/party/4.png",
      "/cover-letter/project/inven/party/1.png",
      "/cover-letter/project/inven/party/2.png",
      "/cover-letter/project/inven/party/3.png",
    ],
    logo: InvenLogo,
    title: "파티 인벤 프로젝트",
    period: "2022.05 - 2022.07",
    roles: "풀스택 개발 ｜ 연구원",
    description: [
      "유저들이 직접 운영할 수 있는 룰 기반으로 기존 게시판 시스템 전환 작업",
      "파티 인벤 관리 시스템 개발 (카테고리, 매니저 관리, 제재, 상단 꾸미기 등)",
      "파티 인벤 메인, 모바일 파티 인벤 별도 페이지 개발",
      "메인/모바일 파티 인벤 메인 페이지 개발",
    ],
    result: ["오픈 이후 UV 최고 5만 달성"],
    skills: ["PHP", "JQuery", "MYSQL", "jsrender"],
    links: [
      {
        title: "파티 인벤 메인 링크",
        url: "https://party.inven.co.kr/",
      },
      {
        title: "카스 글옵 파티 인벤 게시판 링크",
        url: "https://party.inven.co.kr/csgo",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/webzine/2.png",
      "/cover-letter/project/inven/webzine/1.png",
      "/cover-letter/project/inven/webzine/3.png",
    ],
    logo: InvenLogo,
    title: "인벤 모바일 메인 페이지 리뉴얼",
    period: "2022.02 - 2022.09",
    roles: "풀스택 개발 ｜ 연구원",
    description: [
      "탭 기반 레이아웃 모바일 페이지 리뉴얼 작업 진행",
      "웹진 광고 설정, 레이아웃 커스터마이징 관리단 개발",
      "탭 별 컨텐츠 HTML 캐시 적용으로 페이지 로딩 속도 개선 작업",
    ],
    result: [
      "HTML 캐시 적용으로 페이지 로딩 속도 개폭 개선 (기존 약 1.7초 -> 0.5초)",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
    links: [
      {
        title: "웹진 모바일 리뉴얼 페이지 링크",
        url: "https://m.inven.co.kr/",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/uma/1.png",
      "/cover-letter/project/inven/uma/2.png",
      "/cover-letter/project/inven/uma/3.png",
    ],
    logo: InvenLogo,
    title: "우마무스메 친구찾기 시뮬레이터 개발",
    period: "2021.11 - 2022.06",
    roles: "풀스택 개발 ｜ 연구원",
    description: ["우마무스메 인벤 프로젝트 중 친구찾기 시뮬레이터 개발 담당"],
    result: ["자료정보 페이지 UV 6만, PV 127만 달성"],
    skills: ["PHP", "JQuery", "JsRender", "MYSQL"],
    links: [
      {
        title: "우마무스메 친구찾기 시뮬레이터 링크",
        url: "https://uma.inven.co.kr/dataninfo/friends/",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/console/1.png",
      "/cover-letter/project/inven/console/2.png",
      "/cover-letter/project/inven/console/3.png",
      "/cover-letter/project/inven/console/4.png",
    ],
    logo: InvenLogo,
    title: "콘솔 인벤 시스템 개발",
    period: "2020.05 - 2020.09",
    roles: "풀스택 개발 ｜ 연구원",
    description: [
      "콘솔 인벤 각 페이지 구성 시스템 개발 진행",
      "공략 페이지 기사 연동 개발 진행",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
    links: [
      {
        title: "콘솔 인벤 메인 페이지",
        url: "https://console.inven.co.kr/",
      },
      {
        title: "콘솔 인벤 공략 페이지",
        url: "https://console.inven.co.kr/hajimari/guide",
      },
    ],
  },
  {
    images: ["/cover-letter/project/inven/dbtool/1.png"],
    logo: InvenLogo,
    title: "인벤 DB툴 개발",
    period: "2019.09 - 2020.01",
    roles: "풀스택 개발 ｜ 연구원",
    description: [
      "다양한 형태의 인벤 DB 자료정보 페이지 레이아웃을 모듈 단위로 구성하는 작업 진행",
      "라이브 이후 전반적인 시스템 유지보수 및 신규 기능 개발 담당",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
    links: [
      {
        title: "우마무스메 DB툴 레이아웃 예시 링크 - 1",
        url: "https://uma.inven.co.kr/db/chara/",
      },
      {
        title: "원신 DB툴 레이아웃 예시 링크 - 2",
        url: "https://genshin.inven.co.kr/db/chara/",
      },
    ],
  },
  {
    images: [
      "/cover-letter/project/inven/cafe/1.png",
      "/cover-letter/project/inven/cafe/2.png",
    ],
    logo: InvenLogo,
    title: "인벤 카페 개발",
    period: "2019.03 - 2019.09",
    roles: "백엔드 개발 ｜ 연구원",
    description: [
      "카페 설정 및 회원 관리 페이지 개발",
      "카페 설정, 관리 내역 등 로그 시스템 개발",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
  },
  {
    images: [
      "/cover-letter/project/inven/lostark/1.png",
      "/cover-letter/project/inven/lostark/2.png",
    ],
    logo: InvenLogo,
    title: "로스트아크 인벤 프로젝트",
    period: "2018.08 - 2018.12",
    roles: "백앤드 개발 ｜ 연구원",
    description: [
      "스킬 시뮬레이터, 스킬 DB, 평판 DB 개발 담당",
      "로스트아크 인벤 내 각종 모듈 개발 담당",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
    links: [
      {
        title: "로스트아크 스킬 시뮬레이터 링크",
        url: "https://lostark.inven.co.kr/dataninfo/simulator/",
      },
    ],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    logo: InvenLogo,
    title: "팀 연구 수행 및 사이드 프로젝트",
    period: "2018.04 - 2024.12",
    roles: "연구 진행 ｜ 선임 연구원",
    description: [
      "PHPUnit 테스트 환경 도입",
      "docker-compose 기반 로컬 개발 환경으로 전환 작업 진행",
      "PHP 8.1 전환 및 레거시 시스템 리팩토링 작업 진행",
      "인벤 레거시 모듈 MCV 기반 구조로 리팩토링 작업 진행",
      "음료 당번 스케쥴링 프로그램 개발, Slack API 연동",
    ],
  },
];

export default function CareerList() {
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [modalIdx, setModalIdx] = useState(0);

  const openModal = (images: string[], idx = 0) => {
    setModalImages(images);
    setModalIdx(idx);
  };
  const closeModal = () => setModalImages(null);

  return (
    <div id="main-career" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        경력 기술서
      </h2>
      <ul className="flex flex-col gap-6">
        {careers.map((career, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-neutral-800 shadow-sm"
          >
            {/* FIXME: 변경 필요 */}
            <div className="flex flex-row gap-2 sm:block">
              <img
                src={career.images[0]}
                alt={career.title}
                className="w-28 h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100 dark:bg-neutral-700"
                onClick={
                  career.images.length > 1
                    ? () => openModal(career.images, 0)
                    : undefined
                }
              />
              {career.images[1] && (
                <img
                  src={career.images[1]}
                  alt={career.title}
                  className="w-28 h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100 dark:bg-neutral-700 sm:hidden"
                  onClick={() => openModal(career.images, 1)}
                />
              )}
              {career.images[2] && (
                <img
                  src={career.images[2]}
                  alt={career.title}
                  className="w-28 h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100 dark:bg-neutral-700 sm:hidden"
                  onClick={() => openModal(career.images, 2)}
                />
              )}
            </div>
            <div className="flex-1 w-full ">
              <div className="flex w-full flex-row gap-1  items-center sm:gap-1">
                <img
                  className="mt-[1px] h-[14px]"
                  src={
                    career.logo.src ? `/cover-letter/${career.logo.src}` : ""
                  }
                  width={career.logo.width}
                  height={career.logo.height}
                  alt={career.logo.alt ?? ""}
                />
                <span className="font-semibold text-gray-900 dark:text-neutral-100 text-lg flex items-center">
                  {career.title}
                </span>
                {career.links && (
                  <div className="flex items-center gap-1 mt-[2px]">
                    {career.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
                        title={link.title}
                      >
                        <FaLink className="mr-1" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                {`${career.roles} ｜ ${career.period}`}
              </p>
              <p className="mt-2 text-gray-700 dark:text-neutral-200 text-xs">
                {career.description.map((desc, i) => (
                  <span key={i}>
                    {desc}
                    {i < career.description.length - 1 && <br />}
                  </span>
                ))}
              </p>
              {career.result && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-600 dark:text-neutral-300">
                      🏆 성과
                    </span>
                    <span className="flex-1 border-t border-gray-200 dark:border-neutral-700"></span>
                  </div>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-neutral-200 text-xs space-y-0.5">
                    {career.result.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-2 flex flex-wrap gap-2">
                {career.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}

        {modalImages && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative p-4 bg-white dark:bg-neutral-800 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImages[modalIdx]}
                alt={`career-image-${modalIdx}`}
                className="max-w-[70vw] max-h-[70vh] rounded mb-2"
              />
              <div className="flex justify-between items-center">
                <button
                  disabled={modalIdx === 0}
                  onClick={() => setModalIdx((idx) => Math.max(idx - 1, 0))}
                  className={`px-3 py-1 text-sm rounded transition-colors flex items-center justify-center ${
                    modalIdx === 0
                      ? "bg-gray-200 dark:bg-neutral-700 text-gray-400 cursor-not-allowed"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                  }`}
                  aria-label="이전"
                >
                  <span className="text-lg">&#8592;</span>
                </button>
                <span className="text-xs text-gray-500 dark:text-neutral-400">
                  {modalIdx + 1} / {modalImages.length}
                </span>
                <button
                  disabled={modalIdx === modalImages.length - 1}
                  onClick={() =>
                    setModalIdx((idx) =>
                      Math.min(idx + 1, modalImages.length - 1)
                    )
                  }
                  className={`px-3 py-1 text-sm rounded transition-colors flex items-center justify-center ${
                    modalIdx === modalImages.length - 1
                      ? "bg-gray-200 dark:bg-neutral-700 text-gray-400 cursor-not-allowed"
                      : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                  }`}
                  aria-label="다음"
                >
                  <span className="text-lg">&#8594;</span>
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-lg text-gray-700 dark:text-neutral-200 hover:text-red-500 dark:hover:text-red-400"
                onClick={closeModal}
                aria-label="닫기"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}
