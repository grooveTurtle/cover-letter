export default function Self() {
  return (
    <div className="max-w-4xl mx-auto p-8 print:p-6 print:max-w-none">
      {/* Title */}
      <header className="mb-8 print:mb-6">
        <div className="border-b-2 border-gray-300 dark:border-neutral-600 print:border-gray-400 pb-6 print:pb-4">
          {/* Main Title and Company Info */}
          <div className="flex items-start justify-between mb-4 print:mb-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-neutral-200 print:text-2xl mb-2 print:mb-1">
                자기소개서
              </h1>
              <p className="text-lg text-gray-600 dark:text-neutral-400 print:text-base">
                컴투스플랫폼 • 플랫폼 서버 개발자 지원
              </p>
            </div>
            <div className="text-right text-sm text-gray-500 dark:text-neutral-500 print:text-xs">
              <p>
                {new Date().toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Applicant Info */}
          <div className="bg-gray-50 dark:bg-neutral-800/50 print:bg-gray-50 rounded-lg p-4 print:p-3 mb-4 print:mb-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3 print:gap-3 text-sm print:text-xs">
              <div>
                <span className="font-medium text-gray-700 dark:text-neutral-300">
                  지원자:
                </span>
                <span className="ml-2 text-gray-600 dark:text-neutral-400">
                  전종훈
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-neutral-300">
                  연락처:
                </span>
                <span className="ml-2 text-gray-600 dark:text-neutral-400">
                  010-9895-2434
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-neutral-300">
                  이메일:
                </span>
                <span className="ml-2 text-gray-600 dark:text-neutral-400">
                  grooveturtle29@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Motto/Catchphrase */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700 dark:text-neutral-300 print:text-base italic">
              "기술로 연결하고, 소통으로 성장하는 개발자"
            </p>
          </div>
        </div>
      </header>

      {/* Section 1: User-Centered Web Platform Development with 7 Years of Experience */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 print:text-lg mb-4 print:mb-3">
          유저 중심 웹 플랫폼, 7년간의 실전 개발 경험
        </h2>
        <div className="space-y-4 print:space-y-3 text-sm print:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed print:leading-tight">
          <p>
            약 7년간 웹 커뮤니티 및 플랫폼 구축 프로젝트를 다수 진행해 왔습니다.
            커뮤니티 게시판 기능 개발, 대규모 DB 페이지, 웹 시뮬레이터, 유저
            인증 시스템 등 다양한 핵심 기능을 직접 개발하며, 실사용자 기반의 웹
            서비스 구축 경험을 다방면으로 축적해 왔습니다.
          </p>
          <p>
            특히, 게임 자료 정보를 체계적으로 정리해 제공하는 DB 페이지 및
            시뮬레이터 개발을 다수 수행해 왔으며, 이 과정에서 정보의 특성과
            용도에 맞는 다양한 형태의 노출 방식을 유연하게 구현한 경험이
            풍부합니다.
          </p>
          <p>
            이러한 기반 위에서 외부 게임사와의 협업 프로젝트도 다수
            수행했습니다. 이벤트 페이지, 브랜드 페이지 등 목적 기반의 콘텐츠
            개발 경험을 통해, B2C 사용자 경험 최적화는 물론, B2B 요구사항에 따른
            커스터마이징 구현에도 능숙하게 대응할 수 있습니다.
          </p>
          <p>
            대표적인 실적으로는 "메이플 인벤 인장 리뉴얼" 프로젝트가 있습니다.
            유저가 넥슨 회원임을 인증하면 특정 넥슨 게임에 대한 정보를 커뮤니티
            게시판 등에서 노출할 수 있도록 연동한 기능으로, PL과 풀스택 개발을
            전담했습니다. OPEN API 활용 사례로 넥슨 측으로부터 긍정적인 피드백을
            받았으며, 현재까지도 커뮤니티 연동 기반 수익 모델로 운영되고 있을
            만큼 기술적 완성도와 실용성을 모두 인정받은 사례입니다.
          </p>
        </div>
      </section>

      {/* Section 2: Developer Who Understands Legacy and Improves with Modern Technologies */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 print:text-lg mb-4 print:mb-3">
          레거시를 이해하고, 모던 기술로 개선하는 개발자
        </h2>
        <div className="space-y-4 print:space-y-3 text-sm print:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed print:leading-tight">
          <p>
            약 7년간 PHP를 주력 언어로 실무를 수행해 왔습니다. 그 과정에서 PHP
            5.6부터 7.4, 8.1까지 다양한 버전을 경험하며 언어 패러다임의 변화를
            몸소 체감하며 실무를 진행해 왔고, 프로젝트 내부 소스 마이그레이션도
            적극적으로 진행해 오면서 다양한 버전 환경에 대응해 본 경험이
            있습니다.
          </p>
          <p>
            개발 환경 측면에서도 팀원들과 함께 꾸준히 개선 작업을 이어왔습니다.
            초기에는 FTP 기반의 라이브 배포 환경에서 출발했으며, 이후 Vagrant VM
            기반의 개발 환경을 구성해 보았고, 이어서 Docker Compose를 활용한
            컨테이너 단위의 독립적 환경 관리로까지 확장하며 보다 유연하고
            표준화된 개발 환경을 구축해 본 경험이 있습니다.
          </p>
          <p>
            또한, 단순히 PHP + jQuery 기반의 풀 스택 개발을 넘어서, Svelte 같은
            현대적인 전단부 프레임워크를 실무에 직접 도입하여 SPA 구조의
            컴포넌트 기반 개발도 다수의 프로젝트에서 진행해 본 경험이 있습니다.
            이를 통해 모던 프론트엔드 아키텍처에 대한 이해도와 적용 능력을 함께
            키울 수 있었습니다.
          </p>
          <p>
            현재는 퇴사 이후, 기술 스택을 확장하고자 Next.js와 NestJS 기반의
            JavaScript 풀스택 개발 환경을 직접 구축하고 있으며, 서비스 기획부터
            개발, 배포까지 전 과정을 수행하며 서비스 아키텍처 전반에 대한
            실질적인 실행 역량을 강화하고 있습니다.
          </p>
          <p>
            이렇듯, 특정 기술과 환경에만 안주하지 않고 전체 서비스 구조를
            이해하고 개선할 수 있는 역량을 키우며, 더 넓은 범위에서 기여할 수
            있는 개발자로의 성장을 지향하고 있습니다.
          </p>
        </div>
      </section>

      {/* Section 3: Building Development Culture Together - My Role as a Bridge */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 print:text-lg mb-4 print:mb-3">
          함께 만들어가는 개발 문화, 나의 역할은 징검다리
        </h2>
        <div className="space-y-4 print:space-y-3 text-sm print:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed print:leading-tight">
          <p>
            개발자의 핵심 업무는 주어진 문제에 대한 해답을 찾아가는 과정이라고
            생각합니다. 하지만 협업 과정에서는 각자가 도출한 해답의 방향이 달라
            갈등이 발생하기도 하며, 이러한 갈등이 중재되지 않은 채 진행되면
            유지보수가 어려운 소프트웨어가 만들어지고, 때로는 사적인 불화로
            이어지기도 합니다. 그렇기에 협업에 있어서는 무엇보다 중요한게 소통과
            조율이라고 생각합니다.
          </p>
          <p>
            저는 이러한 상황에서 팀원 간 원활한 소통을 돕는 ‘징검다리’ 역할을
            자주 수행해 왔습니다. 다양한 성향의 동료들과도 유연하게
            커뮤니케이션하며 서로 편안한 관계를 형성하는 데 익숙하고, 이러한
            분위기 속에서 소통의 문이 열리면서 협업의 시너지가 높아지는 과정을
            직접 경험해 왔습니다. 그 과정에서 팀이 하나로 연결되는 느낌에 큰
            보람을 느껴왔습니다.
          </p>
          <p>
            이러한 성향 덕분에 개인 단위 업무가 많았던 이전 회사에서도 협업
            프로젝트가 생길 때마다 저를 우선 배정하는 경우가 많았고, 실제로
            프로젝트 결과물의 완성도와 팀 분위기 모두 긍정적인 평가를
            받았습니다. 타 부서에서도 내부 분위기가 좋아 보인다는 피드백을 자주
            들을 만큼 팀 분위기에 향상에 여러 가지 기여를 하였습니다.
          </p>
          <p>
            이렇듯 저는 기술자로서의 전문성을 끊임없이 높여가는 동시에, 사람
            간의 신뢰와 협업을 바탕으로 함께 성장하는 인간적인 개발자를 지향하고
            있습니다. 앞으로도 팀과 조직 내에서 기술과 소통 모두에 기여할 수
            있는 개발자로 꾸준히 성장해 나가려고 합니다.
          </p>
        </div>
      </section>

      {/* Section 4: Value Creation Through Continuous Learning and Growth */}
      <section className="mb-8 print:mb-6 print:break-inside-avoid">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 print:text-lg mb-4 print:mb-3">
          컴투스플랫폼 `HIVE SDK`의 커뮤니티 기능에 날개를 달아보고 싶습니다.
        </h2>
        <div className="space-y-4 print:space-y-3 text-sm print:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed print:leading-tight">
          <p>
            HIVE platform은 이미 다양하고 혁신적인 강력한 기능을 제공하고
            있습니다. 저는 그중에서도 HIVE SDK 커뮤니티 지원 기능에 깊은 관심이
            생겼습니다. 실제로 유저와 게임사 간의 소통 공간을 쉽고 빠르게 구축할
            수 있을 뿐만 아니라, 게임 데이터를 활용하여 커뮤니티에 상호작용 할
            수 있는 콘텐츠가 무궁무진하겠구나 라고 느꼈기 때문입니다.
          </p>
          <p>
            저는 오랜 기간 게임 중심의 웹 커뮤니티에서 실무 경험을 쌓아왔으며,
            이러한 경험을 바탕으로 HIVE SDK의 커뮤니티 기능 발전에 실질적으로
            기여하고 싶다는 열정으로 컴투스플랫폼에 지원하게 되었습니다.
          </p>
          <p>
            저는 HIVE 플랫폼의 게임 커뮤니티 기능을 다음과 같이 확장해 보고
            싶습니다.
          </p>
          <p>
            1. 커뮤니티 내에 연동될 다양한 형태의 모듈을 추가로 개발해 보고
            싶습니다. <br />- 저는 전 회사 웹 커뮤니티 플랫폼에서 각 게임
            커뮤니티의 개성을 살릴 수 있는 다양한 형태의 레이아웃 리뉴얼 작업과
            모듈 단위로 게임에 대한 정보를 각종 디자인 형태로 노출하는 콘텐츠
            개발을 진행해 본 경험이 많습니다. HIVE SDK를 이용하는 게임
            개발사들이 커뮤니티를 커스터마이징함에 있어서 선택의 폭이 더욱
            넓어질 수 있도록 다양한 형태의 레이아웃 및 모듈 개발에 힘써보고
            싶습니다.
          </p>
          <p>
            2. 커뮤니티 내에 게임 정보를 제공할 수 있는 시스템을 추가로 개발해
            보고 싶습니다. <br />- 최근에는 게임 운영사가 공식적으로 게임 정보를
            직접 제공하지 않는 경우가 많아지면서, 유저들이 정보를 얻기 위해 개인
            팬 사이트나 별도의 전문 플랫폼에 의존하는 현상이 두드러지고
            있습니다. 이에 따라 커뮤니티 트래픽이 파편화되고, 커뮤니티
            입장에서도 잠재적 유저 접점을 잃게 되는 아쉬움이 발생합니다. 저는
            게임 개발사가 신뢰도 높은 게임 정보 페이지를 직접 제공할 수 있다면
            이러한 트래픽을 HIVE 커뮤니티로 집중시킬 수 있다고 생각합니다.
          </p>
          <p>
            저는 전 회사에서 개발자가 아닌 사이트 담당자가 손쉽게 다양한 게임
            정보 제공 페이지를 생성하고 유지보수 할 수 있는 시스템인 DB 툴
            프로젝트에 참여한 경험이 있습니다. 이러한 경험을 바탕으로, HIVE
            커뮤니티를 사용하는 게임 개발사와 운영팀이 별도의 추가 개발 부담
            없이 손쉽게 게임 정보를 제공하고, 유저와의 접점을 강화할 수 있는
            시스템을 구현해 보고 싶습니다.
          </p>
          <p>
            3. 게임 데이터 API를 이용하여 유저들 프로필과 연동하는 시스템을
            개발해 보고 싶습니다. <br />- 저는 넥슨과의 협업을 통해,
            메이플스토리 인벤의 인장 리뉴얼 프로젝트를 담당하며, OPEN API를
            활용해 유저의 캐릭터 데이터를 인장에 연동, 노출하는 시스템을
            개발하였습니다. 이 프로젝트는 유저들이 자신의 게임 데이터를 커뮤니티
            내에서 자랑할 수 있도록 함으로써 커뮤니티 활동의 질과 결속력을 크게
            높였고, 실제로 사업 모델 측면에서도 매우 좋은 성과를 얻었습니다.
          </p>

          <p>
            이 경험을 바탕으로, HIVE 커뮤니티에서도 게임 개발사가 제공하는 게임
            데이터 API를 활용해 유저가 자신의 게임 활동을 프로필이나 다양한
            커스텀 모듈로 노출할 수 있는 기능을 개발하고 싶습니다. 이를 통해
            커뮤니티의 활성화와 유저 간의 소속감 강화를 동시에 끌어낼 수 있다고
            확신합니다.
          </p>

          <p>
            저는 다양한 커뮤니티 플랫폼에서 쌓아온 실무 경험과 실질적인 프로젝트
            성과를 바탕으로, HIVE 플랫폼이 지향하는 커뮤니티 생태계의 혁신과
            확장에 적극적으로 기여하고자 합니다. 더불어 커뮤니티 기능뿐만
            아니라, HIVE 플랫폼이 제공하는 다양한 서비스와 기능의 발전에도
            관심을 가지고 새로운 아이디어와 기술적 역량을 바탕으로 기여하고
            싶습니다. 앞으로도 유저와 게임사 모두에게 실질적인 가치를 제공할 수
            있는 환경을 만들어가며, HIVE SDK가 글로벌 게임 플랫폼의 표준으로
            자리 잡는 데 핵심적인 역할을 하고 싶습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
