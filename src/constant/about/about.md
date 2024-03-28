# 안녕하십니까, 저는 사용자의 혁신을 주도할 프론트엔드 개발자 이승제입니다.

## 저는 프로덕트로 많은 사람들의 삶에 긍정적인 영향을 미치고 싶다는 야망이 있습니다.

**학교 입학지원 서비스 및 학교 홈페이지의 기존 문제를 개선하여, 현재까지 도합 7,000+명의 사용자가 유입되었습니다. 꾸준히 유저 피드백을 받아 서비스를 확장 및 개선시키고 있습니다.**

## 저는 기술적인 진보와 꾸준하고 폭발적인 성장을 원합니다.

**11+개월 동안 매주 스터디를 통해 팀원들과 프론트엔드 기술에 관련하여 토의했습니다.
매일 꾸준히 코딩 테스트 문제에 도전하여, 현재까지 360+개의 문제를 해결했습니다.**

<br/>

**관련 링크**  
입학지원 시스템 - https://www.hellogsm.kr/  
홈페이지 - https://official.hellogsm.kr/  
사용자 피드백 - https://righteous-cook-28b.notion.site/3fee99128c50478ea933d7d6248ddbfe

<br/>
<br/>

---

# Work Experience.

## Hello, GSM - 프론트엔드 개발

**2022.04 ~ 현재**
<br/>

Hello, GSM은 광주소프트웨어마이스터고등학교 입학 지원 시스템입니다.  
<br/>

Hello, GSM은 빠른 합격 결과 확인과 편리한 입학 프로세스를 제공합니다.  
2024 신입생 모집 기간 동안 **700+**명, 총 **4000+**명의 사용자가 접속하였습니다.  
3년째 학교와 계약하여 신입생을 받으며 유지보수 되고 있는 서비스입니다.

<br/>

-API 관련 모듈 업데이트 및 개선  
 서버가 마이그레이션되며 바뀐 API 스펙에 따라 모듈화된 API 관련 코드들을 업데이트 하였습니다.
<br/>

-학교 소개 페이지 취업률 그래프 제작  
 매년 추가되는 그래프의 특성상, 확장성을 고려하여 개발하였습니다. [해당 코드 PR 바로가기](https://github.com/themoment-team/hello-gsm-front/pull/350)
<br/>

-팀 소개 페이지 로직 개선  
 프로젝트 소개 애니메이션에서 throttle을 활용하여 일정 주기마다 스크롤 이벤트를 감지하도록 구현했습니다. 기존 팀원 소개는 각 팀원 하나하나 하드코딩 되어있었습니다. 이를 쉽게 팀원을 가감할 수 있도록 유연하고, 확장 가능한 설계로 리팩토링 하였습니다. [해당 코드 PR 바로가기](https://github.com/themoment-team/hello-gsm-front/pull/350)
<br/>

-지원자 목록 검색 기능 구현  
 프로토타입에서 클라이언트 측에서 검색 기능 구현 이후 서버 측 API로 마이그레이션 하였습니다. [해당 코드 PR 바로가기](https://github.com/themoment-team/hello-gsm-front/pull/243)
<br/>

-사용자 피드백과 QA를 통해 기존에 있었던 문제를 찾아내고 이를 개선, 해결

<br/>

---

## Official GSM - 프론트엔드 개발

**2023.05 ~ 2024.03**
<br/>

Official GSM은 광주소프트웨어마이스터고등학교의 공식 홈페이지입니다.  
<br/>

기존 학교 공식 홈페이지는 낮은 검색 엔진 노출률과 혼잡한 페이지, 느린 응답 속도 등 여러 가지 문제가 있었습니다. Official GSM은 사용자 맞춤화된 UI와 향상된 성능, 접근성을 제공합니다.  
베타 기간 동안 3000+명의 사용자가 접속하였습니다.  
Official GSM은 기존 학교 홈페이지보다 First Contentful Paint가 약 10배 빠릅니다.
<br/>

-학교 소식 페이지, 팝업존&팝업 카드 개발

-게시글 상세 보기, 행사 갤러리 카드, 저작권 규정 페이지를 비롯한 여러 UI 및 기능 개발  
 storybook을 사용하여 컴포넌트의 재사용성을 상세 보기 페이지를 구현했습니다.
<br/>

-렌더링 성능 최적화  
 nextjs의 Image 컴포넌트를 활용하여 이미지 포맷 변환 및 lazy loading을 통해 서비스의 성능을 향상시켰습니다.
번들 사이즈 최적화를 위해 enum 대신 as const를 사용하여 타입 안정성을 유지하면서 번들 사이즈를 줄였습니다.
translate를 활용한 애니메이션 구현으로 reflow를 최소화 했습니다.
react query의 캐싱으로 불필요한 요청을 줄여 렌더링 또한 줄였습니다.
<br/>

-게시물 삭제 기능 개발  
삭제 로직을 react-custom-hook으로 래핑 하여 코드를 분리, 모듈화하여 재사용성을 높였습니다.

<br/>

---

## EveryGSM - 프론트엔드 개발

**2023.03 ~ 현재**
<br/>

EveryGSM은 광주소프트웨어마이스터고등학교 프로젝트 링킹 서비스입니다.
<br/>

운영하는 서비스들을 링킹하는 Hub의 역할을 합니다. 교내 서비스를 한눈에 파악할 수 있어 학교 홍보 목적으로도 활용됩니다.

<br/>

-프로젝트 구조 세팅  
초기 NextJS AppRouter + YarnPnP로 세팅하였으나 AppRouter를 활성화하고 YarnPnP를 사용할 경우 빌드가 실패되는 문제가 있었습니다. 때문에 AppRouter와 사용이 가능하면서 속도 측면이나 디스크 용량 측면에서 유리한 pnpm으로 마이그레이션 하였습니다.
<br/>

-메인 페이지 개발  
 전체 UI의 레이아웃을 제작하고 emotion의 theme를 사용하여 유연하게 전환이 가능한 다크 모드를 구현했습니다.
추후 유지 보수에서 전체적인 코드와 반응형 동작 품질 개선 기존에는 window width에 따라 동적으로 변하는 카드 슬라이더의 복잡한 코드를 간소화하여, 각 width에 맞는 모양의 컴포넌트를 분리하고 렌더링함으로써 코드의 가독성과 추상화 정도를 향상시켰습니다. [슬라이더 코드 개선 PR 바로가기](https://github.com/themoment-team/EveryGSM-client/pull/42) | [슬라이드 컨트롤러 개선 PR 바로가기](https://github.com/themoment-team/EveryGSM-client/pull/52) | [개선 경험을 담은 블로그 바로가기](https://frorong.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%9E%98-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83)

<br/>

-storybook 도입  
 기존 코드는 컴포넌트의 독립성이 떨어져서 storybook을 도입하고 컴포넌트가 단일 책임을 갖도록 리팩토링하였습니다.

<br/>

---

## GSM Networking - 프론트엔드 개발

**2023.10 ~ 현재**

GSM Networking은 광주소프트웨어마이스터고등학교의 사이버 동문입니다.

<br/>

광주소프트웨어마이스터고등학교는 8기까지 진행중인 학교입니다. 하지만 아직 동문회가 존재하지 않아 교장선생님과, 취업진로부의 사업으로 사이버 동문 커뮤니티를 개발했습니다.
<br/>
1200+명의 사용자가 접속하였으며, 서비스 내에 등록된 120+명의 멘토가 존재합니다.  
서비스 내의 익명 커뮤니티 기능을 통해 꾸준히 사용자 피드백을 받아 개선하고 있습니다.

[릴리즈 내역 바로가기](https://github.com/themoment-team/GSM-Networking-front/releases)

<br/>

-익명 서비스 게시글 업로드 기능 개발  
입력된 텍스트 길이에 따라 동적으로 크기가 변경되는 TextArea를 만들었습니다. [해당 코드 PR 바로가기](https://github.com/themoment-team/GSM-Networking-front/pull/60)
<br/>

-내 정보 수정 기능 개발
멘토들의 커리어 수정 기능을 요청하는 피드백을 받고, 내 정보 수정 기능을 개발했습니다. [내 정보 수정 기능 PR 바로가기](https://github.com/themoment-team/GSM-Networking-front/pull/81) | [멘토 정보 수정 API 연동 PR 바로가기](https://github.com/themoment-team/GSM-Networking-front/pull/85)

<br/>
-마이 페이지를 비롯한 여러 UI 제작 유저 role에 따라 다른 UI를 보여줄 수 있도록 제작했습니다.
<br/>

<br/>

---

# Skills.

## Communication

-**코드 리뷰**를 통해 전반적인 코드를 개선시키고 피드백 받으며 논의하는 것을 좋아합니다. 함께 성장하는 데에 코드 리뷰가 굉장한 도움이 된다고 생각합니다. [코드 리뷰 회고 블로그 링크 →](https://frorong.tistory.com/entry/Frorong%EC%9D%98-%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%9A%8C%EA%B3%A0)

-협업 방법론에 대해 스터디하고 실제 프로젝트에 적용시켰습니다. (일일 스크럼, 스프린트, 백로그 등) [스터디 노션 링크 →](https://www.notion.so/a06581627f7a4e70884146326f863488?pvs=21)

-평소 git-flow로 협업했습니다.

## CS

-프론트엔드는 브라우저상에서 동작하기 때문에 백엔드보다는 CS가 덜 중요하다고 하지만, CS 공부도 꾸준히 하고있습니다.

-Process&Thread, Mutex&Semaphore, Scheduling등의 개념을 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/OS-Process%EC%99%80-Thread%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

-하드웨어적인 TCP의 동작 원리를 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/CS-TCP-%EC%9B%90%EB%A6%AC-%EC%99%9C-TCP%EB%8A%94-UDP%EB%B3%B4%EB%8B%A4-%EB%8A%90%EB%A6%B4%EA%B9%8C)

## React

-컴포넌트의 단일 책임 원칙을 고려하여 코드를 작성하려 합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%9E%98-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83)

-React Custom Hook으로 재사용 로직을 분리하여 사용합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/Custom-Hook-Pattern)

-storybook으로 컴포넌트의 독립성을 고려하며 컴포넌트 주도적인 개발이 가능합니다.

-React Query를 이용한 효율적인 server state 관리가 가능합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/React-React-Query%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%BA%90%EC%8B%B1%EC%9D%84-%EC%A7%80%EC%9B%90%ED%95%A0%EA%B9%8C)

## JavaScript / TypeScript

-JavaScript로 꾸준히 코딩 테스트 문제를 풀며 메서드들과 문제 해결 방법을 학습하였습니다. [코딩 테스트 레포지토리 링크 →](https://github.com/Lee-Seungje/CodingTest)

-코드의 안정성과 가독성, 개발자의 생산성을 위해 TypeScript 사용을 지향합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/%EC%99%9C-TypeScript%EC%9D%B8%EA%B0%80)

-JavaScript의 동작 원리에 대해 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/JS-JS%EB%8A%94-%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C-%EC%96%B8%EC%96%B4%EC%9D%B8%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EA%B0%80-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C-JS%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC)

-JavaScript의 타입과 메모리 관리에 대해 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/JS-string-%ED%83%80%EC%9E%85%EC%9D%80-%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EC%9D%B8%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A9%94%EC%84%9C%EB%93%9C-%ED%98%B8%EC%B6%9C%EC%9D%84-%EC%A7%80%EC%9B%90%ED%95%A0%EA%B9%8C-%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85)

## NextJS

-axios instance의 baseURL과 Next의 rewrite를 연계하여 서버 URL을 숨겨 보안성을 높였던 경험이 있습니다.

-next custom server(express)로 풀스택 어플리케이션을 만들어본 경험이 있습니다. [레포지토리 링크 →](https://github.com/frorong/Birthday)

-SSR과 서버컴포넌트에 관심이 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/RSC-%EA%B0%9C%EB%85%90-%EB%B0%94%EB%A1%9C%EC%9E%A1%EA%B8%B0-RSC%EC%99%80-css-in-js-React-Server-Component)

-App Router에 익숙합니다.

-프로젝트에서의 SEO 최적화 작업 경험이 있습니다.

## FrontEnd

-micro frontends와 이를 구현할 수 있는 module federation에 관심이 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/FE-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B3%84%EC%9D%98-MSA-Micro-Frontends)

-axios의 instance와 interceptor를 이용하여 중복된 코드를 효과적으로 개선한 경험이 있습니다. [관련 학습 블로그 →](https://frorong.tistory.com/entry/JS-API%EC%97%B0%EB%8F%99-%EC%96%B4%EB%A0%B5%EC%A7%80-%EC%95%8A%EC%95%84)

-빠른 속도와 디스크 용량 측면의 장점 때문에 pnpm 사용을 선호합니다. [관련 학습 블로그 →](https://frorong.tistory.com/entry/JavaScript-Package-Manager)

<br/>

---

# Open Source.

### toss/slash 기여

오픈 소스에 처음으로 기여한 경험이었습니다. 짧은 코드라고 해서 클린 코드인 것은 아니라는 깨달음을 다시 받게 되었고, 이후 더 나은 기여를 할 수 있게 되었습니다.

-첫 번째 PR : https://github.com/toss/slash/pull/344

-이후 PR : https://github.com/toss/slash/pull/347

### lucky-pocket 기여

적절하지 않게 동작하는 token refresh 로직을 수정 하였습니다.

rewrites로 cookie same site lax 옵션을 우회하여 로컬 테스트 환경을 구축했습니다.

-PR : https://github.com/lucky-pocket/luckyPocket-front/pull/69

<br/>

---

# Other Experiences**.**

### 프론트엔드 스터디 운영

- 2023.05 ~ 현재
- 교내 프론트엔드 스터디를 기점으로 [블로그](https://frorong.tistory.com/)를 작성하게 되었습니다. 개념적인 부분을 정리하면서 공부하고, 인상 깊었던 점이나 느낀 점을 발표를 통해 공유합니다. 서로의 경험을 공유하며 함께 성장합니다.

### 한전 KDN **빛가람 에너지 밸리 소프트웨어 경진대회 - 우수상 (공동 3위)**

- 2023.11
- **[Stack-Knowledge](https://github.com/orgs/Stack-Knowledge/repositories)**라는 학습 장려 게임화 플랫폼을 제작하여 **우수상, 100만 원의 상금**을 수상했습니다. 3개월의 개발 기간 동안 밤을 새워가며 개발에 집중하였으며, 다양한 기술을 적극적으로 도입했습니다.

### **구름 알고리즘 팀 챌린지 - 대상 (1위)**

- 2023.02
- 구름에서 주최하고 카카오, 교육부에서 후원한 알고리즘 대회였습니다. 처음 보는 팀원과 함께 문제를 해결해야 했지만, 서로 고민하며 풀이한 결과 대상을 수상했습니다.

### 임팩톤 - 최우수상 (2위)

- 2024.01
- 임팩트라는 비영리단체에서 기획한 해커톤입니다. mz 세대를 겨냥한 다이어트 식단 관리 밀키트 플랫폼을 제작하여 최우수상을 수상했습니다.

### 하이톤 - 마루상 (4위)

- 2024.02
- 고교생들의 해커톤입니다. 내가 꾼 꿈을 시각화해주는 서비스를 개발하여 수상했습니다.
  프론트엔드 개발의 90%를 담당했습니다.

### **SW 마이스터고 연합 해커톤 - 기업상 알제이 (공동 3위)**

- 2023.10
- 전국의 소프트웨어 마이스터고등학교 학생들이 모여 해커톤을 하였습니다. AI 포토부스라는 주제로 서비스를 개발하여 기업상을 수상했습니다.

### **삼성 창업 놀이터 - 70만 원 투자 유치**

- 2022.05 ~ 2022.11
- 개발자를 꿈꾸는 사람들이 꿈을 이루는데 한 발짝 더 다가갈 수 있도록 로드맵과 학습 서비스를 제공하는 제품이었습니다. 실제 사용자의 입장으로 문제를 해결하기 위해 깊게 고민하고 프로덕트를 제작했던 좋은 경험이었다고 생각합니다.

<br/>

---

# Certification.

### **정보처리기능사**

- 2023.09 취득

### **ITQ - 인터넷**

- 2022.12 취득

<br/>

---

## Contact & Channel.

📞 **010-5542-1987**

<br/>

📩 **frorong0727@gmail.com**

<br/>

🐱 **[GitHub](https://github.com/frorong)**

<br/>

🏠 [**Blog**](https://frorong.tistory.com/)

<br/>

산업기능요원으로 복무 가능합니다.

학교와 산학협약 체결시 7점, 선도기업 선정 5점, 총 12점의 산학협약 가산점 획득이 가능합니다.
