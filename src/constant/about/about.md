# 안녕하십니까, 저는 사용자의 혁신을 주도할 프론트엔드 개발자 이승제입니다.

# 냉철한 시각을 바탕으로 문제를 분석하고 해결합니다.

### 문제 하나를 해결하더라도 어떤 방법이 최선일지 고민합니다.

[코드 리뷰](https://www.notion.so/c97262e73d0f4e3da9c9c084dc4ad2f8?pvs=21)를 통해 팀원들과 논의하고, 토론하며 더 나은 해결책을 찾습니다. 문제에 대한 다양한 시각을 갖기 위해 서로의 관점을 존중하며 의견을 나누는 것이 즐겁습니다. 
내가 작성하기 편한 코드보다 다른 사람이 사용하기에 편한 코드가 무엇일지 고민합니다.

11+개월 동안 매주 스터디를 통해 팀원들과 프론트엔드 기술에 관련하여 토의했습니다. 
매일 꾸준히 코딩 테스트 문제에 도전하여, 현재까지 360+개의 문제를 해결했습니다.

# 프로덕트로 많은 사람들의 삶에 긍정적인 영향을 미치고 싶다는 야망이 있습니다.

### [학교 입학지원 서비스](https://www.hellogsm.kr/) 및 [학교 홈페이지](https://official.hellogsm.kr/)의 기존 문제를 개선하여, 현재까지 도합 7,000+명의 사용자가 유입되었습니다. [꾸준히 유저 피드백을 받아](https://www.notion.so/3fee99128c50478ea933d7d6248ddbfe?pvs=21) 서비스를 확장 및 개선시키고 있습니다.

![Untitled](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled.png)

# Work Experience.

## EveryGSM - 프론트엔드 개발

2023.03 ~ 현재

> 광주소프트웨어마이스터고등학교 프로젝트 링킹 서비스.
> 

[EveryGSM](https://every.hellogsm.kr/)

[https://github.com/themoment-team/EveryGSM-client](https://github.com/themoment-team/EveryGSM-client)

### Description.

**EveryGSM은 흩어진 교내 프로젝트를 하나로 연결해 주는 서비스입니다.**

광주소프트웨어마이스터고등학교 학생들이 운영하는 서비스들을 링킹하는 **Hub**의 역할을 합니다. 교내 서비스를 한눈에 파악할 수 있어 학교 홍보 목적으로도 활용됩니다.

### What did I do.

- **프로젝트 구조 세팅**
    
    초기 NextJS AppRouter + YarnPnP로 세팅하였으나 AppRouter를 활성화하고 YarnPnP를 사용할 경우 빌드가 실패되는 문제가 있었습니다. 때문에 AppRouter와 사용이 가능하면서 속도 측면이나 디스크 용량 측면에서 유리한 pnpm으로 마이그레이션 하였습니다.
    
- 메인 페이지 개발
    
    전체 UI의 레이아웃을 제작하고 emotion의 theme를 사용하여 유연하게 전환이 가능한 다크 모드를 구현했습니다.
    
- **추후 유지 보수에서 전체적인 코드와 반응형 동작 품질 개선**
기존에는 window width에 따라 동적으로 변하는 카드 슬라이더의 복잡한 코드를 간소화하여, 각 width에 맞는 모양의 컴포넌트를 분리하고 렌더링함으로써 코드의 가독성과 추상화 정도를 향상시켰습니다.
    
    https://github.com/themoment-team/EveryGSM-client/pull/42
    
    https://github.com/themoment-team/EveryGSM-client/pull/52 [개선 경험을 담은 블로그 →](https://frorong.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%9E%98-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83) 
    
- storybook 도입
****기존 코드는 컴포넌트의 독립성이 떨어져서 storybook을 도입하고 컴포넌트가 단일 책임을 갖도록 리팩토링하였습니다.

### Page Preview.

![**카드 제외 개발 light mode**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%201.png)

**카드 제외 개발 light mode**

![**Tablet size**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%202.png)

**Tablet size**

![**dark mode**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%203.png)

**dark mode**

![**Mobile size**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%204.png)

**Mobile size**

### TroubleShooting.

**문제 배경** 

저희 팀은 새로운 기술을 습득하고 프로젝트에 적용하며 성장하고 싶어 App Router를 채택하였습니다. 
그러나 App Router의 서버컴포넌트는 emotion이나 styled-component와 같은 css-in-js 라이브러리를 사용할 수 없다는 것이었습니다. 이는 스타일 처리에 대한 런타임이 필요하기 때문입니다. [→ 관련 문서](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)
****

**문제 개선 과정**

1. **‘use client’선언**
    
    문제를 해결하기 위해 'use client'를 어플리케이션 최상위에 선언했습니다. 하지만 해당 방법은 큰 문제를 야기했습니다. Next의 metadata API는 서버컴포넌트에서만 사용 가능했기 때문에 해당 API를 사용할 수 없었습니다.
    
    이후 각 컴포넌트에 'use client'를 선언하여 최상위 페이지에서는 metadata API를 사용할 수 있도록 했습니다. 이 변경으로 SEO는 개선되었지만, App Router의 서버컴포넌트를 활용하지 못했습니다.
    
2. **sass나 tailwind css로 style code 마이그레이션**
    
    런타임 이전에 스타일이 결정되는 tailwind, css modules, sass 등을 사용하면 서버컴포넌트 사용이 가능합니다. 때문에 위 기술들을 사용하여 스타일 코드를 마이그레이션할 계획을 가지고 있었습니다.
    
3. **css-in-js 방식 유지**
    
    현업자 분들께 자문도 구해보고, 저희 팀 내에서도 많은 고민을 했습니다. 최종적으로 js와 연계된 동적, 조건부 스타일링, 컴포넌트 단위 스타일 분리가 가능한 css-in-js의 이점을 놓치고 싶지 않았습니다. 
    
    또한 Every GSM은 **정적 어플리케이션**으로, 서버에 자유롭게 접근 가능한 서버 컴포넌트의 장점을 느끼지 못했으며, 서비스 특성상 사용자와 상호작용하는 기능이 대부분이라 클라이언트 컴포넌트가 주로 구성됩니다. 
    
    물론 클라이언트에서 취급하는 번들의 용량을 줄일 수 있는 장점이 있지만 어플리케이션의 규모가 크지 않기 때문에 속도적 측면에서 이점이 크게 와닿지 않았습니다. 따라서 EveryGSM은 현재까지 emotion을 사용하는 클라이언트 컴포넌트와 서버 컴포넌트를 적절히 사용하고 있습니다.
    

**배운점**

1. 서버 컴포넌트와 같은 좋은 기술이 있어도 적절한 상황에서 사용해야 한다는 것을 께달았습니다.
2. 추가로 vanilla extract나 panda css로 css-in-js의 장점을 가지며, 서버 컴포넌트의 장점까지 가져오는 방법을 배웠습니다. DX와 UX 모두 챙길 수 있다는 측면에서 굉장히 좋은 것 같습니다. [관련 학습 블로그 →](https://frorong.tistory.com/entry/Vanilla-Extract%EB%A1%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EA%B2%BD%ED%97%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B2%BD%ED%97%98-%EB%AA%A8%EB%91%90-%EC%B1%99%EA%B8%B0%EC%9E%90-%EC%84%9C%EB%B2%84%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-css-in-js)

### **Tech Stack.**

TypeScript, React, NextJS, Storybook, pnpm, Zustand, Emotion

---

## Official GSM - 프론트엔드 개발

2023.05 ~ 현재

> 광주소프트웨어마이스터고등학교 공식 홈페이지.
> 

[광주소프트웨어마이스터고등학교](https://official.hellogsm.kr/)

[https://github.com/themoment-team/official-gsm-front](https://github.com/themoment-team/official-gsm-front)

### Description.

기존 학교 공식 홈페이지는 낮은 검색 엔진 노출률과 혼잡한 페이지, 느린 응답 속도 등 여러 가지 문제가 있었습니다. Official GSM은 사용자 맞춤화된 UI와 향상된 성능, 접근성을 제공합니다.

베타 기간 동안 3000+명의 사용자가 접속하였습니다. 현재 교육청과 협의하여 교육청 서버, 도메인으로 이전 중에 있습니다.

기존 공식 학교 홈페이지의 가장 큰 문제는 느린 페이지 로딩 속도였습니다. Official GSM은 이를 SSR과 Minifying, Code Splitting을 이용하여 효과적으로 개선했습니다.

**[LightHouse를 통한 서비스 성능 비교]**

**First Contentful Paint** - 초기 DOM 렌더링 시간

**Largest Contentful Paint** - 가장 큰 콘텐츠 렌더링 시간

**Speed Index** - 콘텐츠가 시각적으로 표시되는 진행 속도

**기존 학교 홈페이지**

5.4 s

36.0 s

8.0 s

**Official GSM**

0.5 s

0.5 s

0.5 s

메인 페이지의 경우 이러한 성능 측정 결과를 보여주며, 다른 페이지들 또한 비슷한 결과를 보여 줍니다.

![**기존 학교 홈페이지**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%205.png)

**기존 학교 홈페이지**

![**Official GSM**](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%206.png)

**Official GSM**

### What did I do.

- **학교 소식 페이지, 팝업존&팝업 카드 개발**
- **게시글 상세 보기, 행사 갤러리 카드, 저작권 규정 페이지를 비롯한 여러 UI 및 기능 개발**
storybook을 사용하여 컴포넌트의 재사용성을 신경 써서 동일 컴포넌트로 다른 스타일의 상세 보기 페이지를 구현했습니다.
- **렌더링 성능 최적화**
    
    nextjs의 Image 컴포넌트를 활용하여 이미지 포맷 변환 및 lazy loading을 통해 서비스의 성능을 향상시켰습니다.
    
    번들 사이즈 최적화를 위해 enum 대신 as const를 사용하여 타입 안정성을 유지하면서 번들 사이즈를 줄였습니다.
    
    translate를 활용한 애니메이션 구현으로 reflow를 최소화하고 사용자 경험을 향상시켰습니다.
    
    react query의 캐싱으로 불필요한 렌더링을 줄였습니다.
    
- **게시물 삭제 기능 개발**
    
    삭제 로직을 react-custom-hook으로 래핑 하여 코드를 분리, 모듈화하여 재사용성을 높였습니다.
    
- 검색엔진 최적화를 위한 metadata 설정
    
    Next의 MetadataAPI를 사용하여 openGraph나 title, description등의 metadata를 작성했습니다.
    
- GoogleAnalytics 세팅
    
    유입되는 유저의 흐름을 파악할 수 있도록 GoogleAnalytics 환경을 세팅했습니다.
    

### Page Preview.

![학교 소식 페이지 ](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%207.png)

학교 소식 페이지 

![admin 서비스 게시물 상세보기 페이지 (1)](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%208.png)

admin 서비스 게시물 상세보기 페이지 (1)

![admin 서비스 게시물 상세보기 페이지 (2)](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%209.png)

admin 서비스 게시물 상세보기 페이지 (2)

![admin 서비스 행사갤러리 카드, 카테고리 헤더](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2010.png)

admin 서비스 행사갤러리 카드, 카테고리 헤더

### **Tech Stack.**

TypeScript, React, Monorepo, NextJS, Storybook, pnpm, ReactQuery, Emotion

---

## Hello, GSM - 프론트엔드 개발

2023.07 ~ 현재

> 광주소프트웨어마이스터고등학교 입학 지원 서비스.
> 

[Hello, GSM](https://www.hellogsm.kr/)

[https://github.com/themoment-team/hello-gsm-front](https://github.com/themoment-team/hello-gsm-front)

### Description.

**Hello, GSM**은 빠른 합격 결과 확인과 편리한 입학 프로세스를 제공합니다.

2024 신입생 모집 기간 동안 700+명, 총 4000+명의 사용자가 접속하였습니다. 

3년째 유지보수 되고 있는 서비스입니다.

**실제로 Hello, GSM을 통해 입학한 학생들의 평가입니다.**

> 합격 문자보다 더욱더 빠르게 합격 결과를 알아볼 수 있어서 편하고 좋았습니다.
> 

> hello gsm으로 학교를 처음 접하게 되었는데 다른 웹사이트들에 비해 디자인이 좋고 입학지원부터 결과 확인까지 편리하게 할 수 있어 좋았습니다.
> 

> 직관적인 인터페이스가 입학 지원에 있어서 편리하고 좋았던 거 같습니다!!
> 

사용자 피드백을 받아 지속적으로 서비스를 유지 보수합니다.

### What did I do.

- **API 관련 모듈 업데이트 및 개선**
    
    서버가 마이그레이션되며 바뀐 API 스펙에 따라 모듈화된 API 관련 코드들을 업데이트 하였습니다.
    
- 스크롤 위치 개선, 모달 backdrop 위치 수정 등 **기존 문제 해결**
    
    사용자 피드백과 QA를 통해 기존에 있었던 문제를 찾아내고, 이를 개선, 해결하였습니다.
    
- 학교 소개 페이지 취업률 그래프 제작
    
    매년 추가되는 그래프의 특성상, 확장성을 고려하여 개발하였습니다.
    
    https://github.com/themoment-team/hello-gsm-front/pull/238
    
- 팀 소개 페이지 로직 개선
프로젝트 소개 애니메이션에서 throttle을 활용하여 일정 주기마다 스크롤 이벤트를 감지하도록 구현했습니다.
기존 팀원 소개는 각 팀원 하나하나 하드코딩 되어있었습니다. 이를 쉽게 팀원을 가감할 수 있도록 유연하고, 확장 가능한 설계로 리팩토링 하였습니다.
    
    https://github.com/themoment-team/hello-gsm-front/pull/352
    
    https://github.com/themoment-team/hello-gsm-front/pull/350
    
- **지원자 목록 검색 기능 구현**
    
    초기에는 클라이언트 측에서 각 지원자 객체에 flatMap을 사용하여 검색어와 관련된 단어가 존재하는지 검사하였습니다. 
    하지만, 지원자 수가 많아짐에 따라 검색 기능은 클라이언트 측에서 담당하기에는 부담이 컸기에, 서버측 API를 이용하여 마이그레이션 하였습니다.
    https://github.com/themoment-team/hello-gsm-front/pull/243 ← 클라이언트 측에서 구현한 검색 기능.
    
    https://github.com/themoment-team/hello-gsm-front/pull/272  ← 서버 측에서 구현한 검색 API 연동.
    
- 지원자 목록 헤더 개발
    
    컴포넌트 구성에 신경쓰며 UI를 개발했습니다.
    

### Page Preview

![취업률 그래프](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2011.png)

취업률 그래프

![프로젝트 소개 애니메이션](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/%25E1%2584%2591%25E1%2585%25A9%25E1%2584%2591%25E1%2585%25A9%25E1%2586%25AF1.gif)

프로젝트 소개 애니메이션

![팀원 소개 페이지](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2012.png)

팀원 소개 페이지

![검색 기능 구현](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2013.png)

검색 기능 구현

### TroubleShooting.

**문제 배경**

기존 지원자 검색 기능 flow는 아래와 같습니다.

1. 사용자의 동작으로 search tag 혹은 search keyword 가 변경됩니다.
2. 변경을 감지하여 search tag 와 search keyword로 필터링된 지원자 리스트 요청을 합니다.
3. 서버에서 반환된 리스트에 따라 리렌더링 합니다.

기존 지원자 검색 기능은 useEffect의 의존성 배열에 search tag와 search keyword를 넣어 onChange 이벤트가 발생할 때마다 서버에 요청을 보내 얻은 지원자 리스트를 렌더링 하는 방식이었습니다. 이 경우 input값이 변경됨에 따라 잦은 렌더링은 물론이고 서버에 가는 부하도 컸습니다.

**문제 개선**

이러한 문제를 인지하고 debounce라는 개념을 알게 되었습니다. debounce를 적용하여 사용자 입력이 완료된 후에 다음 순서가 진행되도록 검색 기능을 개선한 결과 기존 지원자 검색 기능 대비 약 84 ~ 89%의 요청과 렌더링이 줄었습니다.

**배운점**

1. debounce가 어떤 개념이고 어떻게 사용할 수 있는지 알게 되었습니다.
2. 기능을 성능적으로 더 개선할 수 있도록 고민하게 되었습니다.

### **Tech Stack.**

TypeScript, React, NextJS PageRouter, Monorepo, yarn berry, Zustand, Emotion

---

## GSM Networking - 프론트엔드 개발

2023.11 ~ 현재

> 광주소프트웨어마이스터고등학교 동문간 네트워킹 서비스.
> 

[](https://www.gsm-networking.com/)

졸업생과 학교 내의 학생들만 접근 가능합니다.

[https://github.com/themoment-team/GSM-Networking-front](https://github.com/themoment-team/GSM-Networking-front)

### Description.

광주소프트웨어마이스터고등학교는 8기까지 진행중인 학교입니다. 
하지만 아직 동문회가 존재하지 않아 교장선생님과의 사업으로 사이버 동문 커뮤니티를 개발했습니다.

1200+명의 사용자가 접속하였으며, 서비스 내에 등록된 120+명의 멘토가 존재합니다.

서비스 내의 익명 커뮤니티 기능을 통해 꾸준히 사용자 피드백을 받아 개선하고 있습니다.

[릴리즈 내역 바로가기 링크 →](https://github.com/themoment-team/GSM-Networking-front/releases)

### What did I do.

- 익명 서비스 게시글 업로드 기능 개발
입력된 텍스트 길이에 따라 동적으로 크기가 변경되는 TextArea를 만들었습니다.
https://github.com/themoment-team/GSM-Networking-front/pull/60
- 내 정보 수정 기능 개발
    
    멘토들의 커리어 수정 기능을 요청하는 피드백을 받고, 내 정보 수정 기능을 개발했습니다.
    https://github.com/themoment-team/GSM-Networking-front/pull/81
    https://github.com/themoment-team/GSM-Networking-front/pull/85
    
- 마이 페이지를 비롯한 여러 UI 제작
유저 role에 따라 다른 UI를 보여줄 수 있도록 제작했습니다.

### Page Preview.

![Untitled](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2014.png)

![Untitled](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/Untitled%2015.png)

![화면 기록 2024-03-07 오후 3.44.35.gif](%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%84%89%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%81%E1%85%A1,%20%E1%84%8C%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B4%20%E1%84%92%E1%85%A7%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9%E1%84%92%E1%85%A1%E1%86%AF%201e46c4a5c6f141ceb65d78a64ed4ade2/%25E1%2584%2592%25E1%2585%25AA%25E1%2584%2586%25E1%2585%25A7%25E1%2586%25AB_%25E1%2584%2580%25E1%2585%25B5%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8_2024-03-07_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_3.44.35.gif)

### TroubleShooting.

**문제1 배경**

익명 커뮤니티 기능을 구현하기 위해서는 jwt를 사용하지 않으면서, 학교 외부인의 접근을 차단해야 했습니다. 왜냐하면, 서버에서 로깅을 하기 때문에 jwt를 사용한다면 유저의 정보가 기록되기 때문입니다.

**문제1 해결**

jwt 없이 학교 내의 사람인지 확인하기 위해 여러 가지 의견이 나왔습니다. 하지만, 의견 마다 문제가 있었고 저희가 선택한 방법은 새로운 종류의 토큰을 개발하는 것입니다.

새로운 토큰의 이름은 익명 서비스의 이름을 딴 광야 토큰이고, flow는 아래와 같습니다.

1. 서비스 접속 시 access token으로 광야 토큰을 발급 받습니다.
2. 광야 도메인에서 요청 시 jwt 쿠키를 싣지 않고 광야 토큰을 사용하여 인증합니다.
3. 광야 토큰은 서비스 내에 유일하고, 모든 유저가 공통 토큰을 사용합니다. 토큰 유출을 막기 위해 수시로 토큰이 변경되고, access token으로 재발급 받을 수 있습니다.

**문제2 배경**

익명 커뮤니티 게시글을 등록하면, 게시글 리스트에 새로운 게시글이 추가되면서 사용자 피드백이 이루어져야 합니다. 서버 측 API 스펙상 react query의 refetch로 게시글 리스트를 가져오는 것은 불가능했습니다. 게시글 리스트를 fresh한 상태로 만드려면 페이지를 새로고침 해야했죠.

**문제2 해결**

이 문제를 해결하기 위해 쿠키를 사용했습니다.

동작 flow는 아래와 같습니다.

1. 게시물 등록 이후 쿠키에 toast 여부에 대한 flag를 지정합니다. 쿠키의 만료시간을 짧게 지정하여 사용자 피드백이 예상치 않은 때에 발생하지 않도록 합니다.
2. 새로고침 이후 쿠키에 flag가 존재한다면, 사용자 피드백을 합니다.

[문제 해결 경험을 담은 블로그 →](https://frorong.tistory.com/entry/react-%EB%8F%99%EC%A0%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95-%EC%8B%9C-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8-%ED%9B%84-toast-%EB%9D%84%EC%9A%B0%EA%B8%B0-%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5%EA%B3%BC-%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%BC%EB%93%9C%EB%B0%B1)

**배운점**

1. 새로운 토큰을 개발하며 서비스를 보는 시각이 확장되었습니다.
2. 문제 해결을 위해 공부하며 쿠키와, react query에 대한 이해도가 높아졌습니다.

### **Tech Stack.**

TypeScript, React, react-hook-form, zod, NextJS, Storybook, pnpm, ReactQuery, Emotion

---

# Skills.

## **Communication**

- **코드 리뷰**를 통해 전반적인 코드를 개선시키고 피드백 받으며 논의하는 것을 좋아합니다. 함께 성장하는 데에 코드 리뷰가 굉장한 도움이 된다고 생각합니다. [코드 리뷰 회고 블로그 링크 →](https://frorong.tistory.com/entry/Frorong%EC%9D%98-%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%9A%8C%EA%B3%A0)
- 협업 방법론에 대해 스터디하고 실제 프로젝트에 적용시켰습니다. (일일 스크럼, 스프린트, 백로그 등) [스터디 노션 링크 →](https://www.notion.so/a06581627f7a4e70884146326f863488?pvs=21)
- 평소 git-flow로 협업했습니다.

## CS

- 프론트엔드는 브라우저상에서 동작하기 때문에 백엔드보다는 CS가 덜 중요하다고 하지만, CS 공부도 꾸준히 하고있습니다.
- Process&Thread, Mutex&Semaphore, Scheduling등의 개념을 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/OS-Process%EC%99%80-Thread%EA%B0%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- 하드웨어적인 TCP의 동작 원리를 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/CS-TCP-%EC%9B%90%EB%A6%AC-%EC%99%9C-TCP%EB%8A%94-UDP%EB%B3%B4%EB%8B%A4-%EB%8A%90%EB%A6%B4%EA%B9%8C)

## React

- 컴포넌트의 단일 책임 원칙을 고려하여 코드를 작성하려 합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%9E%98-%EC%84%A4%EA%B3%84%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%9C-%EC%83%9D%EA%B0%81%ED%95%B4%EC%95%BC-%ED%95%A0-%EA%B2%83)
- React Custom Hook으로 재사용 로직을 분리하여 사용합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/Custom-Hook-Pattern)
- storybook으로 컴포넌트의 독립성을 고려하며 컴포넌트 주도적인 개발이 가능합니다.
- React Query를 이용한 효율적인 server state 관리가 가능합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/React-React-Query%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%BA%90%EC%8B%B1%EC%9D%84-%EC%A7%80%EC%9B%90%ED%95%A0%EA%B9%8C)

## JavaScript / TypeScript

- JavaScript로 꾸준히 코딩 테스트 문제를 풀며 메서드들과 문제 해결 방법을 학습하였습니다. [코딩 테스트 레포지토리 링크 →](https://github.com/Lee-Seungje/CodingTest)
- 코드의 안정성과 가독성, 개발자의 생산성을 위해 TypeScript 사용을 지향합니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/%EC%99%9C-TypeScript%EC%9D%B8%EA%B0%80)
- JavaScript의 동작 원리에 대해 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/JS-JS%EB%8A%94-%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C-%EC%96%B8%EC%96%B4%EC%9D%B8%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%EA%B0%80-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C-JS%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC)
- JavaScript의 타입과 메모리 관리에 대해 이해하고 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/JS-string-%ED%83%80%EC%9E%85%EC%9D%80-%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EC%9D%B8%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A9%94%EC%84%9C%EB%93%9C-%ED%98%B8%EC%B6%9C%EC%9D%84-%EC%A7%80%EC%9B%90%ED%95%A0%EA%B9%8C-%EC%9B%90%EC%8B%9C%ED%83%80%EC%9E%85%EA%B3%BC-%EC%B0%B8%EC%A1%B0%ED%83%80%EC%9E%85)

## NextJS

- axios instance의 baseURL과 Next의 rewrite를 연계하여 서버 URL을 숨겨 보안성을 높였던 경험이 있습니다.
- next custom server(express)로 풀스택 어플리케이션을 만들어본 경험이 있습니다. [레포지토리 링크 →](https://github.com/frorong/Birthday)
- SSR과 서버컴포넌트에 관심이 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/RSC-%EA%B0%9C%EB%85%90-%EB%B0%94%EB%A1%9C%EC%9E%A1%EA%B8%B0-RSC%EC%99%80-css-in-js-React-Server-Component)
- App Router에 익숙합니다.
- 프로젝트에서의 SEO 최적화 작업 경험이 있습니다.

## FrontEnd

- micro frontends와 이를 구현할 수 있는 module federation에 관심이 있습니다. [관련 학습 블로그 링크 →](https://frorong.tistory.com/entry/FE-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EA%B3%84%EC%9D%98-MSA-Micro-Frontends)
- axios의 instance와 interceptor를 이용하여 중복된 코드를 효과적으로 개선한 경험이 있습니다. [관련 학습 블로그 →](https://frorong.tistory.com/entry/JS-API%EC%97%B0%EB%8F%99-%EC%96%B4%EB%A0%B5%EC%A7%80-%EC%95%8A%EC%95%84)
- 빠른 속도와 디스크 용량 측면의 장점 때문에 pnpm 사용을 선호합니다. [관련 학습 블로그 →](https://frorong.tistory.com/entry/JavaScript-Package-Manager)

---

# Open Source.

### toss/slash 기여

- 오픈 소스에 처음으로 기여한 경험이었습니다. 짧은 코드라고 해서 클린 코드인 것은 아니라는 깨달음을 다시 받게 되었고, 이후 더 나은 기여를 할 수 있게 되었습니다.
- 첫 번째 PR : https://github.com/toss/slash/pull/344
- 이후 PR : https://github.com/toss/slash/pull/347

### lucky-pocket 기여

- 적절하지 않게 동작하는 token refresh 로직을 수정 하였습니다.
- rewrites로 cookie same site lax 옵션을 우회하여 로컬 테스트 환경을 구축했습니다.
- PR : https://github.com/lucky-pocket/luckyPocket-front/pull/69

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

---

# Certification.

### **정보처리기능사**

- 2023.09 취득

### **ITQ - 인터넷**

- 2022.12 취득

---

## Contact & Channel.

📞  **010-5542-1987**

📩  **frorong0727@gmail.com**

🐱 **[GitHub](https://github.com/frorong)**

🏠 [**Blog**](https://frorong.tistory.com/)

산업기능요원으로 복무 가능합니다.

학교와 산학협약 체결시 7점, 선도기업 선정 5점, 총 12점의 산학협약 가산점 획득이 가능합니다.