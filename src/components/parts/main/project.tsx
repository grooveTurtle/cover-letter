import Image from "next/image";
import { useState } from "react";

interface CareerItem {
  images: string[];
  logo: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  title: string;
  period: string;
  roles: string;
  description: string[];
  result?: string[];
  skills?: string[];
}

const InvenLogo = {
  src: "/inven2.png",
  width: 14,
  height: 14,
  alt: "인벤 로고",
};

const careers: CareerItem[] = [
  {
    images: [
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    logo: InvenLogo,
    title: "스티커 댓글 프로젝트",
    period: "2023.11 - 2024.11",
    roles: "풀스택 개발 ｜ 선임 연구원",
    description: [
      "스티커 팩 등록, 구입, 판매 프로세스 개발",
      "스티커 어플리케이션 API 백앤드 개발 및 프론트엔드 개발",
      "스티커 등록, 판매, 사용 등 각종 액션에 대한 로깅 시스템 개발",
    ],
    result: ["일 이용량 8천~1만건 달성", "스티커 팩 판매량 일 600~700건"],
    skills: ["PHP", "Svelte", "MYSQL", "Redis"],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
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
  },
  {
    images: [
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
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
  },
  {
    images: [
      "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
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
    result: ["오픈 이후 UV 3~5만 유지"],
    skills: ["PHP", "JQuery", "MYSQL", "jsrender"],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
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
  },
  {
    images: [
      "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    logo: InvenLogo,
    title: "인벤 DB툴 개발",
    period: "2019.09 - 2020.01",
    roles: "풀스택 개발 ｜ 연구원",
    description: [
      "다양한 형태의 인벤 DB 자료정보 페이지 레이아웃을 모듈 단위로 구성하는 작업 진행",
      "라이브 이후 전반적인 시스템 유지보수 및 신규 기능 개발 담당",
    ],
    skills: ["PHP", "JQuery", "MYSQL"],
  },
  {
    images: [
      "https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
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
      "https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    logo: InvenLogo,
    title: "로스트아크 인벤 프로젝트",
    period: "2018.08 - 2018.12",
    roles: "백앤드 개발 ｜ 연구원",
    description: [
      "스킬 DB, 평판 DB, 스킬 시뮬레이터 개발",
      "로스트아크 인벤 내 각종 모듈 담당 개발",
    ],
    skills: ["PHP", "Jquery", "MYSQL"],
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
            <img
              src={career.images[0]}
              alt={career.title}
              className="w-28 h-28 object-cover rounded-lg flex-shrink-0 bg-gray-100 dark:bg-neutral-700"
              onClick={() => openModal(career.images)}
            />
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
                <Image
                  className="mt-[1px]"
                  src={career.logo.src ?? ""}
                  width={career.logo.width}
                  height={career.logo.height}
                  alt={career.logo.alt ?? ""}
                />
                <span className="font-semibold text-gray-900 dark:text-neutral-100 text-lg flex items-center">
                  {career.title}
                </span>
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
                  className="px-3 py-1 text-sm"
                >
                  이전
                </button>
                <span className="text-xs text-gray-500">
                  {modalIdx + 1} / {modalImages.length}
                </span>
                <button
                  disabled={modalIdx === modalImages.length - 1}
                  onClick={() =>
                    setModalIdx((idx) =>
                      Math.min(idx + 1, modalImages.length - 1)
                    )
                  }
                  className="px-3 py-1 text-sm"
                >
                  다음
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-lg"
                onClick={closeModal}
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
