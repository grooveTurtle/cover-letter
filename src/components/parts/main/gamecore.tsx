import { FaGithub, FaLink, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiNotion, SiNestjs, SiMysql, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { LiaDocker } from "react-icons/lia";

interface ProjectLink {
  type: "github" | "notion" | "link";
  title: string;
  url: string;
}

interface ProjectFeature {
  title: string;
  description: string[];
  status: "completed" | "planned";
}

interface TechStackItem {
  category: string;
  technologies: {
    icon: React.ReactNode;
    label: string;
  }[];
}

interface SideProject {
  title: string;
  period: string;
  url: string;
  summary: string;
  techStack: TechStackItem[];
  githubRepo?: string;
  motivation: string[];
  features: ProjectFeature[];
  structure?: {
    codeStructure?: string;
    description: string[];
  };
  links?: ProjectLink[];
  deploy: string[];
  infrastructure: string[];
}

// Example project data - replace with actual project information
const detailedSideProjects: SideProject[] = [
  {
    title: "게임 웹 포털 사이트 게임코어 프로젝트",
    period: "2025.05.25 ~ (현재 진행중)",
    url: "https://gamecore.co.kr",
    summary:
      "종합 게임 정보를 다루는 메인 페이지와 각 게임의 주요 정보 및 게시판 기능을 제공하는 서브 페이지(채널)로 구성된 게임 웹 포털 페이지를 개발하고자 하는 사이드 프로젝트 입니다.",
    techStack: [
      {
        category: "Backend",
        technologies: [
          { icon: <SiNestjs size={18} />, label: "NestJS(^11)" },
          { icon: <SiMysql size={18} />, label: "MySQL" },
        ],
      },
      {
        category: "Frontend",
        technologies: [
          { icon: <RiNextjsFill size={18} />, label: "Next.js(^15)" },
          { icon: <FaReact size={18} />, label: "React(^19)" },
          { icon: <SiTypescript size={18} />, label: "TypeScript" },
          { icon: <RiTailwindCssFill size={18} />, label: "Tailwind CSS(^3)" },
        ],
      },
      {
        category: "Infrastructure",
        technologies: [
          { icon: <FaDocker size={18} />, label: "Docker" },
          { icon: <LiaDocker size={18} />, label: "Docker-Compose" },
          { icon: <FaAws size={18} />, label: "AWS (EC2, S3, RDS)" },
        ],
      },
      {
        category: "CI/CD",
        technologies: [
          { icon: <FaGithub size={18} />, label: "GitHub Actions" },
        ],
      },
    ],
    motivation: [
      "온라인 게임 커뮤니티 플랫폼을 다년간 개발해온 경험을 바탕으로, 보다 사용자 중심적인 게임 정보 통합 포털을 개인 프로젝트로 직접 구현해보고 싶었습니다. 기존 서비스에서 느꼈던 한계나 아쉬운 점들을 고민해보며 보완하고, 스스로 구상했던 아이디어를 실현해보고자 합니다.",
      "기술 역량 확장을 목표로 최신 JS 풀스택(Next.js, NestJS)을 중심으로 프로젝트를 기획하고, 이를 통해 실제 서비스 개발과 배포까지 직접 수행하고자 했습니다.",
    ],
    features: [
      {
        title:
          "메인 포털 페이지(gamecore.co.kr)와 각 게임별 서브 채널 페이지(*.gamecore.co.kr)를 도메인 구조로 구성하였습니다.",
        description: [
          "• Cloudflare의 Wildcard 서브도메인 기능을 활용하여, 새로운 게임 채널을 유연하게 확장할 수 있는 구조로 설계하였습니다.",
          "• 서브 도메인 구조를 채택한 이유는 각 게임별 채널을 독립된 공간으로 분리함으로써, 콘텐츠 관리 및 접근성, SEO 측면에서 유리한 구조를 갖추기 위함입니다.",
        ],
        status: "completed",
      },
      {
        title:
          "비회원/회원 모두 글작성과 댓글, 좋아요/싫어요 활동이 가능한 오픈형 게시판 시스템을 구현하였습니다.",
        description: [
          "비회원 식별 기준:",
          "• 게시글/댓글 - 별도의 ID/PASSWORD를 입력하여 DB에 저장하여 관리함. (수정, 삭제시 PASSWORD 입력으로 식별)",
          "• 좋아요/싫어요 - FingerprintJS v2 오픈소스를 이용하여 fingerprint 값을 추출해낸 후 저장하여 식별",
        ],
        status: "completed",
      },
      {
        title:
          "관리자 및 회원이 직접 뉴스 기사를 작성하고 관리할 수 있는 시스템을 구현",
        description: [],
        status: "planned",
      },
      {
        title:
          "각 서브 채널 내에 제공되는 정보들에 대한 채널별 통합 검색 기능.",
        description: [],
        status: "planned",
      },
    ],
    structure: {
      codeStructure: `# GameCore 프로젝트 구성도

├── .github/
│   └── workflows/
│       └── ci-cd.yml              # CI/CD 자동화 스크립트
├── apps/
│   ├── auth-api/                  # 인증 관련 처리 서버 (NestJS)
│   ├── admin-api/                 # 관리자 기능 처리 서버 (NestJS)
│   ├── data-api/                  # 게시판 및 뉴스, 각종 공략 정보 등 처리 서버 (NestJS)
│   └── frontend/                  # 프론트 서버 (React, NextJS, Tailwind 기반)
├── packages                       # 프로젝트의 핵심 공통 모듈 폴더
│   └── core/                      # 각 NestJS 서버에서 공통적으로 사용하는 비즈니스 로직 패키지
│          └── src/
│              └── base-auth          # 인증 처리 관련 비즈니스 로직 (회원, 비회원, fingerprint..)
│              └── base-domain        # 각 서브 페이지 도메인 설정 관련 비즈니스 로직
│              └── base-board         # 게시판 비즈니스 로직 
│              └── base-common        # 공통 비즈니스 로직(페이지네이션, 트랜잭션 등)
│              └── base-post          # 글쓰기 리소스 비즈니스 로직 (게시판, 뉴스 등)
│              └── base-comment       # 댓글 리소스 비즈니스 로직 (게시판, 뉴스 등)
│              └── base-like          # 좋아요 리소스 비즈니스 로직 (게시판, 뉴스 등)
│           └── ....
├── traefik                        # 트래픽 관리 및 리버스 프록시(traefik) 관련 설정 폴더
│   ├── traefik.dev.yml            # traefik 개발용 설정파일
│   └── traefik.yml                # (참고용) traefik 배포용 설정파일
│      
├── docker-compose.dev.yml         # 개발 환경용 Docker Compose 설정 파일
├── docker-compose.yml             # (참고용) Docker Compose 배포 설정 파일
├── .dockerignore                  
├── .gitignore                     
├── README.md`,
      description: [
        "• 개발 환경 구축의 편의를 위해 monorepo 형태의 구조를 채택하였으나 실제로는 모두 독립적으로 운영된다는 가정하에 진행하고 있습니다.",
        "• packages/core: 각 NestJS 서버에서 공통적으로 사용하는 비즈니스 로직을 package(@gamecorelabs/nestjs-core) publish 하여 관리하고 있습니다.",
      ],
    },
    links: [
      {
        type: "link",
        title: "게임코어 포털 메인 사이트",
        url: "https://gamecore.co.kr",
      },
      {
        type: "github",
        title: "GitHub Repository",
        url: "https://github.com/gamecorelabs/gamecore-monorepo",
      },
    ],
    deploy: [],
    infrastructure: [],
  },
];

export default function GameCore() {
  return (
    <div id="main-side-project-detailed" className="section mt-8">
      <h2 className="mb-6 text-xl font-bold text-gray-800 dark:text-neutral-200">
        Side Projects
      </h2>

      <div className="space-y-8">
        {detailedSideProjects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg dark:border-neutral-700 p-6"
          >
            {/* Project Overview */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                {project.title}
              </h3>
              <div className="text-sm text-gray-600 dark:text-neutral-400 mb-3">
                기간: {project.period}
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400 mb-3">
                URL:&nbsp;
                <a
                  href={project.url}
                  className="text-blue-600 dark:text-blue-400"
                  target="_blank"
                >
                  {project.url}
                </a>
              </div>
              <p className="text-sm text-gray-700 dark:text-neutral-300">
                {project.summary}
              </p>
            </div>

            {/* Project Motivation */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                📋 프로젝트 진행 동기
              </h4>
              <ul className="space-y-2">
                {project.motivation.map((motivation, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 dark:text-neutral-300"
                  >
                    • {motivation}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                🔧 사용 기술 스택
              </h4>
              <div className="space-y-4">
                {project.techStack.map((category, i) => (
                  <div key={i}>
                    <h5 className="text-sm font-medium text-gray-700 dark:text-neutral-300 mb-2">
                      {category.category}
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {category.technologies.map((tech, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-md"
                        >
                          <span>{tech.icon}</span>
                          <span className="text-xs text-gray-700 dark:text-neutral-300">
                            {tech.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {project.githubRepo && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400">
                    <FaGithub size={16} />
                    <span>GitHub Repository: </span>
                  </div>
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                ⚙️ 주요 지원 기능
              </h4>

              {/* Completed Features */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                  <span>✅ 개발 완료</span>
                </h5>
                <div className="space-y-2">
                  {project.features
                    .filter((feature) => feature.status === "completed")
                    .map((feature, i) => (
                      <div key={i}>
                        <h6 className="text-sm font-medium text-gray-800 dark:text-neutral-200 mb-1">
                          • {feature.title}
                        </h6>
                        {feature.description.length > 0 && (
                          <div className="ml-4">
                            {feature.description.map((desc, j) => (
                              <p
                                key={j}
                                className="text-sm text-gray-600 dark:text-neutral-400 mb-0"
                              >
                                {desc}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                {/* Planned Features */}
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <span>🔄 개발 예정</span>
                  </h5>
                  <div className="space-y-2">
                    {project.features
                      .filter((feature) => feature.status === "planned")
                      .map((feature, i) => (
                        <div key={i}>
                          <h6 className="text-sm font-medium text-gray-800 dark:text-neutral-200 mb-1">
                            • {feature.title}
                          </h6>
                          {feature.description.length > 0 && (
                            <div className="ml-4">
                              {feature.description.map((desc, j) => (
                                <p
                                  key={j}
                                  className="text-sm text-gray-600 dark:text-neutral-400 mb-0"
                                >
                                  {desc}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Structure */}
            {project.structure && (
              <div className="mb-6">
                <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                  🏗️ 프로젝트 구조
                </h4>
                {project.structure.codeStructure && (
                  <div className="">
                    <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4">
                      <pre className="text-xs text-gray-700 dark:text-neutral-300 overflow-x-auto whitespace-pre font-mono leading-relaxed">
                        {project.structure.codeStructure}
                      </pre>
                    </div>
                  </div>
                )}
                {project.structure.description.map((desc, j) => (
                  <p
                    key={j}
                    className="text-sm text-gray-600 dark:text-neutral-400 mb-1"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            )}

            {/* 배포 방식*/}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                프로젝트 배포 방식 (CI/CD)
              </h4>
              <div className="space-y-2">
                {/* 긴 이미지 영역 */}
                <div className="mt-4">
                  <img
                    src="/cover-letter/side-project/gamecore/cicd.png"
                    alt="프로젝트 배포 구조 다이어그램"
                    className="w-full max-h-[1000px] object-contain rounded-lg border border-gray-200 dark:border-neutral-700"
                    style={{ background: "#fff" }}
                  />
                </div>
                {project.deploy.map((desc, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-700 dark:text-neutral-300"
                  >
                    • {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* 인프라 구조 */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                인프라 구조
              </h4>
              <div className="space-y-2">
                {/* 긴 이미지 영역 */}
                <div className="mt-4">
                  <img
                    src="/cover-letter/side-project/gamecore/infra.png"
                    alt="인프라 구조 다이어그램"
                    className="w-full object-contain rounded-lg border border-gray-200 dark:border-neutral-700"
                    style={{ background: "#fff" }}
                  />
                </div>
                {project.infrastructure.map((desc, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-700 dark:text-neutral-300"
                  >
                    • {desc}
                  </p>
                ))}
              </div>
            </div>
            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div>
                <h4 className="text-base font-medium text-gray-800 dark:text-neutral-200 mb-3">
                  🔗 참고 링크
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      {link.type === "github" && <FaGithub size={16} />}
                      {link.type === "notion" && <SiNotion size={16} />}
                      {link.type === "link" && <FaLink size={16} />}
                      <span>{link.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
